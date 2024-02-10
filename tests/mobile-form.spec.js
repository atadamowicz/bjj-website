import { test, expect, devices } from "@playwright/test";

test.use({ ...devices["iPhone X"] });

test.describe("Desktop contact form tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://bjj-website.vercel.app/#contact");
  });
  test("Submit form with correct data", async ({ page }) => {
    await page.getByTestId("test-name").fill("John Doe");
    await page.getByTestId("test-email").fill("johndoe@gmail.com");
    await page.getByTestId("test-dropdown").selectOption("Prefer not to say");
    await page.getByTestId("test-textarea").fill("prefer not to say");
    await page.getByTestId("test-submit").click();
    const submitMessage = await page.getByTestId("test-submit-message");
    await expect(submitMessage).toHaveAttribute(
      "style",
      expect.stringContaining("visibility: visible")
    );
  });

  test("Submit form with empty name field", async ({ page }) => {
    await page.getByTestId("test-email").fill("johndoe@gmail.com");
    await page.getByTestId("test-dropdown").selectOption("BJJ Passionate");
    await page.getByTestId("test-textarea").fill("123");
    await page.getByTestId("test-submit").click();
    const submitMessage = await page.getByTestId("test-submit-message");
    await expect(submitMessage).not.toBeVisible();
  });

  test("Submit form with no email address", async ({ page }) => {
    await page.getByTestId("test-name").fill("John doe");
    await page.getByTestId("test-dropdown").selectOption("BJJ Passionate");
    await page.getByTestId("test-textarea").fill("123");
    await page.getByTestId("test-submit").click();
    const submitMessage = await page.getByTestId("test-submit-message");
    await expect(submitMessage).not.toBeVisible();
  });

  test("Submit form with no reason selected", async ({ page }) => {
    await page.getByTestId("test-name").fill("John Doe");
    await page.getByTestId("test-email").fill("johndoe@gmail.com");
    await page.getByTestId("test-textarea").fill("123");
    await page.getByTestId("test-submit").click();
    const submitMessage = await page.getByTestId("test-submit-message");
    await expect(submitMessage).not.toBeVisible();
  });

  test("Submit form with wrong email format", async ({ page }) => {
    await page.getByTestId("test-name").fill("John Doe");
    await page.getByTestId("test-email").fill("johndoe.com");
    await page.getByTestId("test-dropdown").selectOption("Prefer not to say");
    await page.getByTestId("test-submit").click();
    const submitMessage = await page.getByTestId("test-submit-message");
    await expect(submitMessage).not.toBeVisible();
  });
});
