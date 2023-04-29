module.exports = class Sidebar {

    get root() {
        return $('rz-main-page-sidebar')
    }

    get notebooksButton() {
        return this.root.$('[href*="computers-notebooks"]')
    }

    async notebooksButtonClick() {
        await this.notebooksButton.click()
    }

}