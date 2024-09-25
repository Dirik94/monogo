import {Page, expect} from '@playwright/test';
import { dataTestId, isElementVisible } from '../support/components';

export class Shop {
    constructor(public page: Page) {
        this.page = page;
    }

    setProduct(name: string) {
        return `div[data-sku="${name}"]`;
    }

    async chooseProduct_button_click(name: string){
        await this.page.locator(this.setProduct(name)).waitFor();
        await this.page.locator(this.setProduct(name)).click();
    }

    product = {
        page: this.page,

        async addToCart_button_click(){
            const button  = 'button' + dataTestId('pdpAddToProduct')
            await this.page.locator(button).waitFor();
            await this.page.locator(button).click();
        }
    }

    cart = {
        page: this.page,

        async productCartQuantity_check(productName: string, cartQuantity: number){
            const productListing = this.page.locator('div' + dataTestId('mini-cart-list')).locator('div[class="CompactItem-module-rows-NLcWA"]')

            await expect(productListing.getByText(productName)).toBeVisible();
            await expect(productListing.locator('input' + dataTestId('cartQuantity'))).toHaveValue(cartQuantity.toString());
        }
    }

    basket = {
        page: this.page,

        async cart_button_click(){
            const cartButton = this.page.locator('div' + dataTestId('cart'))
            const cart = 'div' + dataTestId('mini-cart-list')
            const cartIsVisible = await isElementVisible(this.page, cart)

            if( !cartIsVisible ) {
                cartButton.click()
            }
        }
    }

}