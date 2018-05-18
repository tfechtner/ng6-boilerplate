import { AppPage } from './app.po';

describe('ng6-boilerplate App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display header title', () => {
        page.navigateTo();
        expect(page.getHeaderTitleText()).toEqual('ng6 Boilerplate');
    });
});
