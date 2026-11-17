interface DisclosureOptions {
  root: HTMLElement;
  button: HTMLButtonElement;
  render: (open: boolean) => void;
  closeOnOutsideClick?: boolean;
  open?: boolean;
}

export const initDisclosure = ({
  root,
  button,
  render,
  closeOnOutsideClick = true,
  open = false,
}: DisclosureOptions) => {
  let isOpen = false;

  const setOpen = (next: boolean) => {
    isOpen = next;
    button.setAttribute('aria-expanded', String(next));

    const title = next ? button.dataset.titleClose : button.dataset.titleOpen;

    if (title !== undefined) button.title = title;

    render(next);
  };

  button.addEventListener('click', () => setOpen(!isOpen));

  root.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !isOpen) return;

    setOpen(false);
    button.focus();
  });

  root.addEventListener('focusout', (event) => {
    const target = event.relatedTarget as Node | null;

    if (target && !root.contains(target)) setOpen(false);
  });

  if (closeOnOutsideClick) {
    const onDocumentClick = (event: MouseEvent) => {
      if (!root.isConnected) return document.removeEventListener('click', onDocumentClick);

      if (isOpen && !root.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('click', onDocumentClick);
  }

  setOpen(open);

  return { setOpen, isOpen: () => isOpen };
};
