class CatalogPage {
    get notebookButton() {

        return $('rz-widget-list [href*="/notebooks/"]');
    }

    notebookButtonClick() {
        this.notebookButton.click()
    }
}

module.exports = new CatalogPage();