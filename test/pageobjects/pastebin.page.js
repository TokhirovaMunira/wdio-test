class secondtask {

    get pastebinLink() {
        return $('(//a[@href="/"]');
    }
    async clickPastebinLink() {
        await this.pastebinLink.click();
    }

    async open() {
        return browser.url('https://pastebin.com/');
    }

    async waitFor() {
        await browser.pause(2000);
    }

    async openWindowSize() {
        await browser.maximizeWindow();
    }

    get hideSlideBannerButton() {
        return $('//vli[@id="hideSlideBanner"]')
    }

    async clickHideSlideBannerButton() {
        await this.hideSlideBannerButton.click();
    }

    get pastebinCodeField() {
        return $('//textarea[@id="postform-text"]');
    }

    async writeInToPastebinCodeField() {
        await this.pastebinCodeField.setValue('Hello from WebDriver');
    }

    async waitFor() {
        await browser.pause(2000);
    }

    get expirationField() {
        return $('//span[@id="select2-postform-expiration-container"]');
    }

    async clickExpirationField() {
        await this.expirationField.click();
    }

    async scrollWindowDown() {
        await this.expirationField.scrollIntoView({block:'center'});
    }

    get tenMinutesOption() {
        return $('//li[text()="10 Minutes"]');
    }

    async clickTenMinutesOption() {
        await this.tenMinutesOption.click();
    }

    async waitFor() {
        await browser.pause(2000);
    }

    get pasteName() {
        return $('//input[@id="postform-name"]');
    }

    async scrollDownToPasteName(){
        await this.pasteName.scrollIntoView();
    }

    
    async pasteNameField() {
        await this.pasteName.setValue('helloweb');
    }

    async waitFor() {
        await browser.pause(2000);
    }

    get saveButton(){
        return $('//button[text()="Create New Paste"]');
    }

    async clickSaveButton(){
        await this.saveButton.click();
    }



}

module.exports = new PastebinPage();