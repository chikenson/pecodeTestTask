const MainPage = require('../pageobjects/main.page')
const CatalogPage = require('../pageobjects/catalogPage')
const ProductsPage = require('../pageobjects/productsPage')
const BasketPage = require('../pageobjects/basketPage/basketPage')

describe('Verifying price filter', () => {
    
    it('With valid data', async () => {

        await browser.maximizeWindow();

        await MainPage.visit()

        await expect(browser).toHaveUrl("https://rozetka.com.ua/ua/")

        await MainPage.sidebar.notebooksButtonClick()

        await CatalogPage.notebookButtonClick()

        await ProductsPage.buyProducts(1)

        await ProductsPage.header.search("Samsung");

        await ProductsPage.buyProducts(1)

        await BasketPage.visit()

        expect(await BasketPage.list.getNumberOfProducts()).toBe(2);
        expect(await BasketPage.list.getProductPricesSum()).toBe(await BasketPage.getTotalAmount())

})

})