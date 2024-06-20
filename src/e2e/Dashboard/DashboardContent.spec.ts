import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
  });

  // Test that the total number of runs is two. This assumes that the
  // test database has been seeded with two runs by running `k6 run k6_load.js`
  test('has two runs', async ({ page }) => {
    const textContent = await page.textContent(
      'p.ProjectStatistics__totalRuns',
    );
    expect(textContent).toBe('Total runs: 2');
  });

  test('has two experiments', async ({ page }) => {
    const textContent = await page.textContent('h3.ExperimentsCard__title');
    expect(textContent).toBe('Experiments (2)');
  });

  test('Default experiment exists and has no runs', async ({ page }) => {
    const table = await page.$('.BaseTable__body');
    const rows = await table?.$$('.BaseTable__row');
    expect(rows).not.toBeNull();

    const firstRow = rows?.[0];
    const experimentName = await firstRow?.$eval(
      '.ExperimentNameBox__experimentName a',
      (el) => el.textContent,
    );
    expect(experimentName).toBe('Default');

    const runCount = await firstRow?.$eval('p', (el) => el.textContent);
    expect(runCount).toBe('0');
  });

  test('generated experiment exists and has two runs', async ({ page }) => {
    const table = await page.$('.BaseTable__body');
    const rows = await table?.$$('.BaseTable__row');
    expect(rows).not.toBeNull();

    const secondRow = rows?.[1];
    const experimentName = await secondRow?.$eval(
      '.ExperimentNameBox__experimentName a',
      (el) => el.textContent,
    );
    expect(experimentName).toContain('experiment-');

    const runCount = await secondRow?.$eval('p', (el) => el.textContent);
    expect(runCount).toBe('2');
  });
});
