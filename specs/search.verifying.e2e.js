const MainPage = require('../pageobjects/main.page')
const CatalogPage = require('../pageobjects/catalogPage')
const ProductsPage = require('../pageobjects/productsPage')

describe('Verifying price filter', () => {
    
    it('With valid data', async () => {

        const productName = "ASUS"

        await browser.maximizeWindow();

        await MainPage.visit()

        await expect(browser).toHaveUrl("https://rozetka.com.ua/ua/")

        await MainPage.header.search(productName)

        namesArray = await ProductsPage.getProductsNames()

        expect(namesArray.every(element => element.toUpperCase().includes(productName))).toBe(true)

})

})