import { interpolate } from '@lib/i18n/interpolate';
import { plural, type PluralForms } from '@lib/i18n/plural';

document.addEventListener('astro:page-load', () => {
  document.querySelectorAll<HTMLElement>('[data-filter-group]:not([data-ready])').forEach((group) => {
    group.dataset.ready = '';
    group.hidden = false;

    const list = document.getElementById(group.dataset.controls ?? '');

    if (!list) return;

    const chips = [...group.querySelectorAll<HTMLButtonElement>('[data-chip]')];
    const chipsRow = group.querySelector<HTMLElement>('.filter-group__chips');
    const searchField = group.querySelector<HTMLElement>('.filter-group__search');
    const toggle = group.querySelector<HTMLButtonElement>('[data-chips-toggle]');
    const more = toggle ? document.getElementById(toggle.getAttribute('aria-controls') ?? '') : null;
    const clear = group.querySelector<HTMLButtonElement>('[data-filter-clear]');
    const search = group.querySelector<HTMLInputElement>('[data-chips-search]');
    const noMatch = group.querySelector<HTMLElement>('[data-chips-empty]');
    const status = group.querySelector<HTMLElement>('[data-filter-status]');
    const empty = group.querySelector<HTMLElement>('[data-filter-empty]');
    const chipsParam = group.dataset.chipsParam ?? 'skills';
    const forms: PluralForms = JSON.parse(group.dataset.countForms ?? '{"other":"{count}"}');
    const locale = document.documentElement.lang;

    const home = new Map(chips.map((chip) => [chip, chip.parentElement as HTMLElement]));

    let picked: HTMLButtonElement[] = [];

    const arrange = () => {
      if (!chipsRow) return;

      const focused = document.activeElement;
      let anchor: Element | null = searchField;

      picked.forEach((chip) => {
        if (anchor) anchor.after(chip);
        else chipsRow.prepend(chip);
        anchor = chip;
      });

      chips
        .filter((chip) => !picked.includes(chip))
        .forEach((chip) => {
          const parent = home.get(chip);
          const toggleInRow = parent === chipsRow ? (more ?? toggle) : null;

          parent?.insertBefore(chip, toggleInRow && toggleInRow.parentElement === parent ? toggleInRow : null);
        });

      if (focused instanceof HTMLElement && focused !== document.activeElement) focused.focus();
    };

    const selected = () => picked.map((chip) => chip.dataset.chip ?? '');

    const setExpanded = (open: boolean) => {
      if (!toggle || !more) return;

      more.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = (open ? toggle.dataset.less : toggle.dataset.more) ?? '';
    };

    const normalize = (text: string) =>
      text
        .toLocaleLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    let expandedBeforeSearch = false;

    const filterChips = () => {
      const query = normalize(search?.value.trim() ?? '');

      if (query) {
        if (more && more.hidden) {
          expandedBeforeSearch = false;
          more.hidden = false;
        }

        if (toggle) toggle.hidden = true;

        let found = 0;

        chips.forEach((chip) => {
          const label = normalize(chip.firstChild?.textContent ?? chip.textContent ?? '');
          const show = label.includes(query) || chip.getAttribute('aria-pressed') === 'true';

          chip.hidden = !show;

          if (show && label.includes(query)) found += 1;
        });

        if (noMatch) noMatch.hidden = found > 0;
      } else {
        chips.forEach((chip) => (chip.hidden = false));

        if (toggle) toggle.hidden = false;
        if (more && toggle) more.hidden = toggle.getAttribute('aria-expanded') !== 'true' && !expandedBeforeSearch;
        if (noMatch) noMatch.hidden = true;
      }
    };

    const apply = (announce = true) => {
      const skills = selected();
      let shown = 0;

      list.querySelectorAll<HTMLElement>('[data-skills]').forEach((item) => {
        const itemSkills = (item.dataset.skills ?? '').split(',');
        const match = !skills.length || skills.some((skill) => itemSkills.includes(skill));

        item.hidden = !match;

        if (match) shown += 1;
      });

      if (empty) empty.hidden = shown > 0;
      if (clear) clear.hidden = !skills.length;

      const url = new URL(location.href);

      url.searchParams.delete(chipsParam);

      const skillsQuery = skills.length ? `${chipsParam}=${skills.join(',')}` : '';

      url.search = [url.searchParams.toString(), skillsQuery].filter(Boolean).join('&');

      history.replaceState(history.state, '', url);

      if (!announce || !status) return;

      const count = interpolate(plural(forms, shown, locale), { count: String(shown) });

      status.textContent = interpolate(group.dataset.shown ?? '{count}', { count });
    };

    const params = new URLSearchParams(location.search);
    const initialSkills = (params.get(chipsParam) ?? '').split(',').filter(Boolean);

    chips.forEach((chip) => chip.setAttribute('aria-pressed', String(initialSkills.includes(chip.dataset.chip ?? ''))));
    picked = initialSkills
      .map((value) => chips.find((chip) => chip.dataset.chip === value))
      .filter((chip): chip is HTMLButtonElement => Boolean(chip));

    arrange();

    if (initialSkills.length) apply(false);

    chips.forEach((chip) =>
      chip.addEventListener('click', () => {
        const pressed = chip.getAttribute('aria-pressed') !== 'true';

        chip.setAttribute('aria-pressed', String(pressed));
        picked = pressed ? [...picked, chip] : picked.filter((item) => item !== chip);
        arrange();

        if (search?.value) {
          search.value = '';
          filterChips();
        }

        apply();
      }),
    );

    toggle?.addEventListener('click', () => setExpanded(toggle.getAttribute('aria-expanded') !== 'true'));
    search?.addEventListener('input', filterChips);
    search?.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;

      event.preventDefault();

      const query = normalize(search.value.trim());
      const visible = chips.filter((chip) => !chip.hidden && chip.getAttribute('aria-pressed') !== 'true');
      const label = (chip: HTMLElement) => normalize(chip.firstChild?.textContent ?? '');
      const byLength = (first: HTMLElement, second: HTMLElement) => label(first).length - label(second).length;
      const first =
        visible.filter((chip) => label(chip).startsWith(query)).sort(byLength)[0] ??
        visible.find((chip) => label(chip).includes(query));
      first?.click();
      search.focus();
    });

    clear?.addEventListener('click', () => {
      if (search) search.value = '';

      filterChips();
      chips.forEach((chip) => chip.setAttribute('aria-pressed', 'false'));
      picked = [];
      arrange();
      apply();
      search?.focus();
    });
  });
});
