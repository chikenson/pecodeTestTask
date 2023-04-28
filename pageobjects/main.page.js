

const Page = require('./page');

class MainPage extends Page {

    async open () {
        await super.open('');

        return new MainPage();
    }
}

module.exports = new MainPage();
