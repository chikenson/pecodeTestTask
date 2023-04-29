const MainPage = require('../pageobjects/main.page')
const CatalogPage = require('../pageobjects/catalogPage')
const ProductsPage = require('../pageobjects/productsPage')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        await browser.maximizeWindow();

        await MainPage.visit()

        await MainPage.sidebar.notebooksButtonClick()

        await CatalogPage.notebookButtonClick()

        await ProductsPage.asusFilterCheckboxClick()

        await browser.pause(10000)

        await ProductsPage.filterPrice('30000')

        await browser.pause(10000)

    })
})


