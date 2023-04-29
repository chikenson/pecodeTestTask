const helpers = require('../../helpers/helpers')
const Page = require('../page');
const BasketList = require('./basket.list')

class BasketPage extends Page {

  list = new BasketList()

  async visit () {
     await super.open('cart');
  }

  get totalAmount() {
    return $('.cart-receipt__sum-price');
  }

  get emptyCartValue() {
    return $('h4.cart-dummy__heading');
  }

  getEmptyCartValue() {
    return this.emptyCartValue.getText();
  }

  async getTotalAmount() {
    const totalAmount = await this.totalAmount.getText();

    return helpers.normalizePrice(totalAmount);
  }

   async waitUntilTotalAmountChanges() {
    const currentTotalAmount = await this.getTotalAmount();

    await browser.waitUntil(async () => (await this.getTotalAmount()) !== currentTotalAmount,
            {
            timeout: 10000,
            timeoutMsg: 'expected sum to be different after 10s'
            }
        );

        return this;
  }
}

module.exports = new BasketPage();