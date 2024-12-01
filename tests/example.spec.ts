import test from './support/fixtures/pages'

test('task', async ({ page, indexPage, shop, browserName}) => {
  await page.goto('/');
  await indexPage.agreeToCookies_button_click()
  await indexPage.over18Banner_button_click()
  await indexPage.shop_button_click()
  if (browserName === 'firefox') {
    await page.mouse.click(0,0) // defocus shop dropdown
  }
  await shop.chooseProduct_button_click('ploom-x-advanced')
  await page.waitForURL(new RegExp('shop/products/devices/ploom-x-advanced'));
  await shop.product.addToCart_button_click()
  await shop.basket.cart_button_click()
  await shop.cart.productCartQuantity_check('Ploom X Advanced Black', 1)
  //test 2
});