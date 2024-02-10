import { test, expect } from "@playwright/test";

test.describe("Desktop coach cards tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://bjj-website.vercel.app/#team");
  });

  test("All coach cards can be viewed using arrows", async ({ page }) => {
    await page.getByTestId("test-cards__btn--right").click({
      clickCount: 4,
    });
    await expect(page.getByTestId("test-cards__coach-2")).toBeVisible();

    await page.getByTestId("test-cards__btn--left").click({
      clickCount: 4,
    });
    await expect(page.getByTestId("test-cards__coach-2")).toBeVisible();
  });

  test("Coach cards can be expanded and collapsed", async ({ page }) => {
    await page.getByTestId("test-toggle-classes-btn").click();
    await expect(page.getByTestId("test-toggle-classes-btn")).toHaveText(
      "Collapse"
    );

    await page.getByTestId("test-toggle-classes-btn").click();
    await expect(page.getByTestId("test-toggle-classes-btn")).toHaveText(
      "Expand"
    );
  });

  test("Toggle expand/collapse keeps current coach position", async ({
    page,
  }) => {
    await page.getByTestId("test-cards__btn--left").click();
    await page.getByTestId("test-toggle-classes-btn").click();
    await page.getByTestId("test-toggle-classes-btn").click();
    await expect(page.getByTestId("test-cards__coach-1")).toBeVisible();

    await page.getByTestId("test-cards__btn--left").click();
    await page.getByTestId("test-toggle-classes-btn").click();
    await page.getByTestId("test-toggle-classes-btn").click();
    await expect(page.getByTestId("test-cards__coach-4")).toBeVisible();

    await page.getByTestId("test-cards__btn--right").dblclick();
    await page.getByTestId("test-toggle-classes-btn").click();
    await page.getByTestId("test-toggle-classes-btn").click();
    await expect(page.getByTestId("test-cards__coach-2")).toBeVisible();

    await page.getByTestId("test-cards__btn--right").click();
    await page.getByTestId("test-toggle-classes-btn").click();
    await page.getByTestId("test-toggle-classes-btn").click();
    await expect(page.getByTestId("test-cards__coach-3")).toBeVisible();
  });
});
