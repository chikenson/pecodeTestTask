const helpers = require('../../helpers/helpers')

module.exports = class BasketList {

    get items() {
        return $$('.cart-list__item');
    }

    get counterInput() {
        return $('[data-testid="cart-counter-input"]');
    }

    get productPrices() {
        return $$('[data-testid="cost"]');
    }

    get productTitle() {
        return $('[data-testid="title"]');
    }

    get kebabMenu() {
        return $$('[id*="cartProductActions"]');
    }

    get deleteButton() {
        return $('rz-trash-icon button');
    }

    get notification() {
        return $('[data-testid="notification"]');
    }

    async cleanCart() {
        const arr = await this.kebabMenu;

        for (const menu of arr) {
            await menu.click();
            await this.deleteButton.click();
        }
    }

    async getNotificationText() {
        return this.notification.getText();
    }

    async setCounterInput(value) {
        await this.counterInput.setValue(value);

        return this;
    }

    async getCounterInputValue() {
        const value = await this.counterInput.getValue();

        return Number(value);
    }

    async getProductPrice() {
        const price = await this.productPrices[0].getText();

        return helpers.normalizePrice(price);
    }

    getProductTitleValue() {
        return this.productTitle.getText();
    }

    getNumberOfProducts() {
        return this.items.length;
    }

    async getProductPricesSum() {
        const initialValue = 0;

        const strPrices = await this.productPrices.map((item) => item.getText());

        return strPrices.reduce((previousValue, currentValue) => previousValue + helpers.normalizePrice(currentValue), initialValue);
    }
}