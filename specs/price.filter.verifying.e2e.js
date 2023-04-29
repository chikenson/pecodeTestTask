const MainPage = require('../pageobjects/main.page')
const CatalogPage = require('../pageobjects/catalogPage')
const ProductsPage = require('../pageobjects/productsPage')

describe('Verifying price filter', () => {
    
    it('With valid data', async () => {

        const minPriceFilter = 10000;

        const maxPriceFilter = 20000;

        const producerName = "ASUS"

        await browser.maximizeWindow();

        await MainPage.visit()

        await expect(browser).toHaveUrl("https://rozetka.com.ua/ua/")

        await MainPage.sidebar.notebooksButtonClick()

        await CatalogPage.notebookButtonClick()

        await ProductsPage.asusFilterCheckboxClick()

        await ProductsPage.filterPrice(minPriceFilter,maxPriceFilter)

        namesArray = await ProductsPage.getProductsNames()

        pricesArray = await ProductsPage.getPrices()

        expect(pricesArray.every(element => element>minPriceFilter && element<maxPriceFilter)).toBe(true)
        expect(namesArray.every(element => element.toUpperCase().includes(producerName))).toBe(true)

})

})
