import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { pageLoad } from '@tests/utils/events';
import { renderToString } from '@tests/utils/render';

import Cursor from '@atoms/Cursor/Cursor.astro';
import Text from '@atoms/Text/Text.astro';
import Button from '@molecules/Button/Button.astro';

const media = { finePointer: true, forcedColors: false };
const root = document.documentElement;

const cursor = () => document.querySelector<HTMLElement>('[data-cursor]')!;
const text = () => document.querySelector('p')!;
const button = () => document.querySelector('button')!;

const move = (target: Element, pointerType = 'mouse') =>
  target.dispatchEvent(new PointerEvent('pointermove', { pointerType, clientX: 50, clientY: 60, bubbles: true }));

describe('cursor script', () => {
  beforeAll(async () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => ({
        get matches() {
          return query.includes('forced-colors') ? media.forcedColors : media.finePointer;
        },
        addEventListener: vi.fn(),
      })),
    );

    await import('@atoms/Cursor/cursor');
  });

  beforeEach(async () => {
    root.dataset.motion = 'on';
    document.body.innerHTML = [
      await renderToString(Cursor),
      await renderToString(Text, { slots: { default: 'Text' } }),
      await renderToString(Button, { slots: { default: 'Send' } }),
    ].join('');
    pageLoad();
  });

  it('enables the custom cursor for a fine pointer', () => {
    expect(root.classList.contains('has-custom-cursor')).toBe(true);
  });

  it('shows and follows the pointer', async () => {
    move(text());
    await new Promise((resolve) => requestAnimationFrame(resolve));

    expect(cursor().classList.contains('cursor--visible')).toBe(true);
    expect(cursor().classList.contains('cursor--active')).toBe(false);
    expect(cursor().style.translate).toContain('50px');
  });

  it('grows over interactive elements and when pressed', () => {
    move(button());
    document.dispatchEvent(new PointerEvent('pointerdown'));

    expect(cursor().classList.contains('cursor--active')).toBe(true);
    expect(cursor().classList.contains('cursor--pressed')).toBe(true);

    document.dispatchEvent(new PointerEvent('pointerup'));

    expect(cursor().classList.contains('cursor--pressed')).toBe(false);
  });

  it('hides when the pointer leaves the page', () => {
    move(text());
    root.dispatchEvent(new PointerEvent('pointerleave'));

    expect(cursor().classList.contains('cursor--visible')).toBe(false);
  });

  it('ignores touch pointers', () => {
    move(text(), 'touch');

    expect(cursor().classList.contains('cursor--visible')).toBe(false);
  });

  it('turns off with reduced motion', async () => {
    move(text());
    root.dataset.motion = 'off';
    await new Promise((resolve) => setTimeout(resolve));

    expect(root.classList.contains('has-custom-cursor')).toBe(false);
    expect(cursor().classList.contains('cursor--visible')).toBe(false);
  });

  it('turns off in forced colors mode', () => {
    media.forcedColors = true;
    pageLoad();
    media.forcedColors = false;

    expect(root.classList.contains('has-custom-cursor')).toBe(false);
  });

  it('works without the cursor element', () => {
    cursor().remove();

    expect(() => move(text())).not.toThrow();
  });
});
