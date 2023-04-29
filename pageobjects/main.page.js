
const Header = require('./fragments/header')
const Page = require('./page');
const Sidebar = require('./fragments/mainPageSidebar')

class MainPage extends Page {

    header = new Header()
    sidebar = new Sidebar()

    async visit () {
        await super.open('');

        return new MainPage();
    }
}

module.exports = new MainPage();
