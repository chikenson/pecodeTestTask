class CatalogPage {
    get notebookButton() {

        return $('rz-widget-list [href*="/notebooks/"]');
    }

    async notebookButtonClick() {
        await this.notebookButton.click()
    }
}

module.exports = new CatalogPage();