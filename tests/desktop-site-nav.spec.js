import { test, expect } from "@playwright/test";

test.describe("Desktop navigation tests", () => {
  test("Navigate page sections using links", async ({ page }) => {
    await page.goto("https://bjj-website.vercel.app/");
    await page.getByTestId("test-team").click();
    await expect(page.locator("#team")).toBeVisible();

    await page.getByTestId("test-program").click();
    await expect(page.locator("#program")).toBeVisible();

    await page.getByTestId("test-schedule").click();
    await expect(page.locator("#schedule")).toBeVisible();

    await page.getByTestId("test-contact").click();
    await expect(page.locator("#contact")).toBeVisible();

    await page.getByTestId("test-home").click();
    await page.waitForFunction(() => window.scrollY === 0);

    await page.getByTestId("test-cta--hero").click();
    await expect(page.locator("#contact")).toBeVisible();
  });
});
