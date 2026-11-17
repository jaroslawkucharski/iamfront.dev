import type {} from 'vitest/config';

import { getViteConfig } from 'astro/config';

const domTests = ['src/components/**/[a-z]*.test.ts', 'src/helpers/dom/**/*.test.ts'];

export default getViteConfig({
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
      reporter: ['text', 'lcov'],
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'node',
          environment: 'node',
          include: ['src/**/*.test.ts'],
          exclude: domTests,
        },
      },
      {
        extends: true,
        test: { name: 'dom', environment: 'node', setupFiles: ['tests/utils/registerDom.ts'], include: domTests },
      },
    ],
  },
});
