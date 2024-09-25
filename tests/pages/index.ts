import {Page} from '@playwright/test';
import { dataTestId } from '../support/components';

export class IndexPage {
    constructor(public page: Page) {
        this.page = page;
    }

    async agreeToCookies_button_click(){
        await this.page.locator('#onetrust-button-group-parent').locator('#onetrust-accept-btn-handler').click();
    }

    async over18Banner_button_click(){
        await this.page.locator('span' + dataTestId('customButton')).getByText('Yes, discover more').click();
    }

    async shop_button_click(){
        await this.page.locator('a' + dataTestId('headerItem-0')).click();
    }

}