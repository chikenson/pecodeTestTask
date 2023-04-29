const MainPage = require('../pageobjects/main.page')
const ProductsPage = require('../pageobjects/productsPage')

describe('Verifying price filter', () => {
    
    it('With valid data', async () => {

        const invalidSearchValue = '='

        const productNotFoundText = "За заданими параметрами не знайдено жодної моделі"

        await browser.maximizeWindow();

        await MainPage.visit()

        await expect(browser).toHaveUrl("https://rozetka.com.ua/ua/")

        await MainPage.header.search(invalidSearchValue)

        expect(await ProductsPage.getEmpyContentText()).toBe(productNotFoundText);
})

})