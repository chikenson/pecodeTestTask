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

}