import { documentToHtmlString, type Options } from '@contentful/rich-text-html-renderer';
import { BLOCKS, INLINES, MARKS, type Block, type Document } from '@contentful/rich-text-types';

import { getDictionary } from '@lib/i18n/getDictionary';
import type { Locale } from '@lib/i18n/languages';

export const createRichTextRenderer = (locale: Locale) => {
  const { newTab } = getDictionary(locale).externalLink;

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => `<strong>${text}</strong>`,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, next) =>
        `<a href="${node.data.uri}" target="_blank" rel="noopener noreferrer">${next(node.content)}<span class="visually-hidden"> ${newTab}</span></a>`,
    },
  };

  const inline = (blocks: Block[]) =>
    documentToHtmlString(
      { nodeType: BLOCKS.DOCUMENT, data: {}, content: blocks as Document['content'] },
      { ...options, renderNode: { ...options.renderNode, [BLOCKS.PARAGRAPH]: (node, next) => next(node.content) } },
    );

  const paragraphs = (document: Document) =>
    document.content.filter(({ nodeType }) => nodeType === BLOCKS.PARAGRAPH).map((paragraph) => inline([paragraph]));

  return {
    html: (document: Document) => documentToHtmlString(document, options),
    text: (document: Document) => paragraphs(document).join(' '),
    paragraphs,
    items: (document: Document) =>
      document.content
        .filter(({ nodeType }) => nodeType === BLOCKS.UL_LIST)
        .flatMap(({ content }) => content as Block[])
        .map(({ content }) => inline(content as Block[])),
  };
};
