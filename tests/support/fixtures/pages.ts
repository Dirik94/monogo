import { Shop } from '../../pages/shop';
import { IndexPage } from './../../pages/index';
import { test as base } from '@playwright/test';

type MyFixtures = {
    indexPage: IndexPage;
    shop: Shop;
};

const test = base.extend<MyFixtures>({
    indexPage: async ({ page }, use) => {
        // Set up the fixture.
        const login = new IndexPage(page);

        // Use the fixture value in the test.
        await use(login);
    },

    shop: async ({ page }, use) => {
        await use(new Shop(page));
    },
});

export default test;
export const expect = test.expect;