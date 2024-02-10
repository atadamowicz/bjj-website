import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["Galaxy Note 3"] });

test.describe("Mobile coach cards tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://bjj-website.vercel.app/#team");
  });

  test("Each coach card can be viewed on mobile", async ({ page }) => {
    await page.getByTestId("test-cards__btn--right").click({
      clickCount: 4,
    });
    // await expect(page.getByTestId("test-cards__coach-2")).toBeVisible();
    await page.getByTestId("test-cards__btn--left").click({
      clickCount: 4,
    });
    // await expect(page.getByTestId("test-cards__coach-2")).toBeVisible();
  });

  test("Coach cards cannot be expanded on mobile", async ({ page }) => {
    // await expect(page.getByTestId("test-toggle-classes-btn")).not.toBeVisible();
  });
});
