const helpers = require('../helpers/helpers')
const Header = require('./fragments/header')

class ProductsPage {

    header = new Header()

    get content() {
        return $('.content_type_catalog');
    }

    get items() {
        return this.content.$$('.catalog-grid__cell');
    }

    get productsPageSidebar() {
        return $('rz-filter-stack')
    }

    get asusFilterCheckbox() {

        return this.productsPageSidebar.$('[data-id="ASUS"]')
    }

    get maximisePriceInput() {

        return this.productsPageSidebar.$('[formcontrolname="max"]')
    }

    get minimisePriceInput() {

        return this.productsPageSidebar.$('[formcontrolname="min"]')
    }

    get priceInputSubmitButton() {
        return this.productsPageSidebar.$('.button[type="submit"]')
    }

    get contentEmptyValue() {
        return this.content.$('.catalog-empty');
    }

    async asusFilterCheckboxClick () {
        await this.asusFilterCheckbox.click();
    }

    async filterPrice(minPrice, maxPrice) {

        await this.minimisePriceInput.clearValue()

        await this.minimisePriceInput.addValue(minPrice)

        await this.maximisePriceInput.clearValue()

        await this.maximisePriceInput.addValue(maxPrice)

        await this.priceInputSubmitButton.click()

    }

    get productsNames() {
        return $$('rz-grid .goods-tile__title')
    }

    get productsPrices() {
        return $$('rz-grid .goods-tile__price-value')
    }

    async getProductsNames() {

        let productsNamesArray = [];

        for(let i=0;i<9;i++) {
            productsNamesArray.push(await this.productsNames[i].getText())
        }

        return productsNamesArray;
        
    }

    async getPrices() {

        let productsPricesArray = [];

        for(let i=0;i<9;i++) {
            productsPricesArray.push(helpers.normalizePrice(await this.productsPrices[i].getText()))
        }

        return productsPricesArray;
        
    }

    async buyProducts(amountOfProducts) {
        for(let i = 0; i <= (amountOfProducts - 1); i++) {
             await this.items[i].$('[class*="buy-button"]').click();
        }

    }

    getEmpyContentText() {
        return this.contentEmptyValue.getText();
    }

    

}

module.exports = new ProductsPage()