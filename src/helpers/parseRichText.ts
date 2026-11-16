type RichSegment = {
  text: string;
  weight: 'regular' | 'medium' | 'semibold';
  href?: string;
  external?: boolean;
};

export const parseRichText = (input: string): RichSegment[] =>
  input
    .split(/(\*\*[^*]+\*\*|__[^_]+__|\[[^\]]+\]\((?:https?:\/\/|\/)[^)\s]+\))/g)
    .filter(Boolean)
    .map((part): RichSegment => {
      const link = part.match(/^\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)\s]+)\)$/);

      if (link) return { text: link[1], weight: 'regular', href: link[2], external: /^https?:/.test(link[2]) };
      if (part.startsWith('**') && part.endsWith('**')) return { text: part.slice(2, -2), weight: 'medium' };
      if (part.startsWith('__') && part.endsWith('__')) return { text: part.slice(2, -2), weight: 'semibold' };

      return { text: part, weight: 'regular' };
    });
