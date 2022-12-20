

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OverviewPage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeText() {
        return $('.smallText');
    }

    get title() {
        return $('.title');
    }
}

module.exports = new OverviewPage();
