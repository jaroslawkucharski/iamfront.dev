type Weights = 'regular' | 'medium' | 'semibold';

type RichSegment = {
  text: string;
  weight: Weights;
  href?: string;
  external?: boolean;
  slot?: string;
};

const tokens = /(\*\*[^*]+\*\*|__[^_]+__|\[[^\]]+\]\((?:https?:\/\/|\/)[^)\s]+\)|\{\w+\})/g;
const linkToken = /^\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)\s]+)\)$/;
const slotToken = /^\{(\w+)\}$/;

export const parseRichText = (input: string): RichSegment[] =>
  input
    .split(tokens)
    .filter(Boolean)
    .map((part): RichSegment => {
      const link = part.match(linkToken);

      if (link) return { text: link[1], weight: 'regular', href: link[2], external: /^https?:/.test(link[2]) };

      const slot = part.match(slotToken);

      if (slot) return { text: part, weight: 'regular', slot: slot[1] };

      if (part.startsWith('**') && part.endsWith('**')) return { text: part.slice(2, -2), weight: 'medium' };

      if (part.startsWith('__') && part.endsWith('__')) return { text: part.slice(2, -2), weight: 'semibold' };

      return { text: part, weight: 'regular' };
    });
