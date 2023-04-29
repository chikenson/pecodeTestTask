module.exports = class Header {

    get root() {
        return $('header.header');
      }

    get fatMenuButton() {
        return this.root.$('#fat-menu');
    }

    get notebooksButton() {
        return this.root.$('[href*="computers-notebooks"')
    }

    fatMenuButtonClick() {

        this.fatMenuButton.click()

    }

    notebooksButtonClick() {
        this.notebooksButton.click()
    }

    get searchInput() {
        return $('[name="search"]');
      }

    get searchButton() {
        return $('form button.search-form__submit');
      }

    async search(value = " ") {
        await this.searchInput.setValue(value);
        await this.searchButton.click();
      }

}