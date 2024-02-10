import { test, expect } from "@playwright/test";

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
    await expect(page.getByTestId("test-submit-message")).toHaveAttribute(
      "style",
      "visiblity: visible"
    );
  });

  test("Submit form with empty name field", async ({ page }) => {
    await page.getByTestId("test-email").fill("johndoe@gmail.com");
    await page.getByTestId("test-dropdown").selectOption("BJJ Passionate");
    await page.getByTestId("test-textarea").fill("123");
    await page.getByTestId("test-submit").click();
    await expect(page.getByTestId("test-submit-message")).toHaveAttribute(
      "style",
      "visiblity: hidden"
    );
  });

  test("Submit form with no email address", async ({ page }) => {
    await page.getByTestId("test-name").fill("John doe");
    await page.getByTestId("test-dropdown").selectOption("BJJ Passionate");
    await page.getByTestId("test-textarea").fill("123");
    await page.getByTestId("test-submit").click();
    await expect(page.getByTestId("test-submit-message")).toHaveAttribute(
      "style",
      "visiblity: hidden"
    );
  });

  test("Submit form with no reason selected", async ({ page }) => {
    await page.getByTestId("test-name").fill("John Doe");
    await page.getByTestId("test-email").fill("johndoe@gmail.com");
    await page.getByTestId("test-textarea").fill("123");
    await page.getByTestId("test-submit").click();
    await expect(page.getByTestId("test-submit-message")).toHaveAttribute(
      "style",
      "visiblity: hidden"
    );
  });

  test("Submit form with wrong email format", async ({ page }) => {
    await page.getByTestId("test-name").fill("John Doe");
    await page.getByTestId("test-email").fill("johndoe.com");
    await page.getByTestId("test-dropdown").selectOption("Prefer not to say");
    await page.getByTestId("test-submit").click();
    await expect(page.getByTestId("test-submit-message")).toHaveAttribute(
      "style",
      "visiblity: hidden"
    );
  });
});
