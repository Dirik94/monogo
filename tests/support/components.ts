import { Page } from "playwright";

export function dataTestId(name: string): string{
    return `[data-testid="${name}"]`;
}

export async function isElementVisible(page: Page, selector: string): Promise<boolean> {
    return await page.locator(selector).isVisible();
}