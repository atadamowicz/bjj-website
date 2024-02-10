import { test, expect } from "@playwright/test";

test.describe("Desktop accordion tests", () => {
  test("Navigate accordion tabs", async ({ page }) => {
    await page.goto("https://bjj-website.vercel.app/#program");
    await page.getByTestId("test-list__link-1").click();
    await expect(page.getByTestId("test-accordion__content-1-1")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-1-2")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-1-3")).toBeVisible();

    await page.getByTestId("test-list__link-2").click();
    await expect(page.getByTestId("test-accordion__content-2-1")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-2-2")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-2-3")).toBeVisible();

    await page.getByTestId("test-list__link-3").click();
    await expect(page.getByTestId("test-accordion__content-3-1")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-3-2")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-3-3")).toBeVisible();

    await page.getByTestId("test-list__link-4").click();
    await expect(page.getByTestId("test-accordion__content-4-1")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-4-2")).toBeVisible();
    await expect(page.getByTestId("test-accordion__content-4-3")).toBeVisible();
  });
});
