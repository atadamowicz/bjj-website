import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["Nexus 5"] });
test.describe("Mobile navigation tests", () => {
  test("Navigate page sections using hamburger menu", async ({ page }) => {
    await page.goto("https://bjj-website.vercel.app/");
    //class nav__togle-button
    await page.getByTestId("test-nav__toggle-button").click();
    await page.getByTestId("test-team").click();
    await expect(page.locator("#team")).toBeVisible();

    await page.getByTestId("test-nav__toggle-button").click();
    await page.getByTestId("test-program").click();
    await expect(page.locator("#program")).toBeVisible();

    await page.getByTestId("test-nav__toggle-button").click();
    await page.getByTestId("test-schedule").click();
    await expect(page.locator("#schedule")).toBeVisible();

    await page.getByTestId("test-nav__toggle-button").click();
    await page.getByTestId("test-contact").click();
    await expect(page.locator("#contact")).toBeVisible();

    await page.getByTestId("test-nav__toggle-button").click();
    await page.getByTestId("test-home").click();
    await expect(page.locator("#")).toBeVisible();

    await page.getByTestId("test-cta--hero").click();
    await expect(page.locator("#contact")).toBeVisible();
  });
});
