import { browser, by, element } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getHeaderTitleText() {
        return element(by.className('header-title')).getText();
    }
}
