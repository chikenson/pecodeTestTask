class ProductsPage {
    get productsPageSidebar() {
        return $('rz-filter-stack')
    }

    get asusFilterCheckbox() {

        return this.productsPageSidebar.$('[data-id="ASUS"]')
    }

    get maximasePriceInput() {

        return this.productsPageSidebar.$('[formcontrolname="max"]')
    }

    get priceInputSubmitButton() {
        return this.productsPageSidebar.$('.button[type="submit"]')
    }

    asusFilterCheckboxClick () {
        this.asusFilterCheckbox.click();
    }

    filterPrice(price) {

        this.maximasePriceInput.clearValue()

        this.maximasePriceInput.addValue(price)

        this.priceInputSubmitButton.click()

    }
}

module.exports = new ProductsPage()