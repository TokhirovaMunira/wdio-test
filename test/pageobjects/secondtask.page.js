class SecondTaskPage {

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
        await browser.pause(1000);
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
        let text = `git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

git push origin master --force`;
        await this.pastebinCodeField.setValue(text);
    }

    async waitFor() {
        await browser.pause(1000);
    }


    get SyntaxHighlightingButton() {
        return $('//label[@for="paste-raw-on"]');
    }

    async clickSyntaxHighlighting() {
        await this.SyntaxHighlightingButton.click();
    }

    async waitFor() {
        await browser.pause(1000);
    }

    get hideSlideBannerButton() {
        return $('//vli[@id="hideSlideBanner"]')
    }

    async clickHideSlideBannerButton() {
        await this.hideSlideBannerButton.click();
    }

    get expirationField() {
        return $('//span[@id="select2-postform-expiration-container"]');
    }

    async scrollWindowDown() {
        await this.expirationField.scrollIntoView({ block: 'center' });
    }

    get SyntaxHighlightingField() {
        return $('//span[@id="select2-postform-format-container"]');
    }

    async clickSyntaxHighlightingField() {
        await this.SyntaxHighlightingField.click();
    }

    get syntaxHighlightingFieldOption() {
        return $('//li[text()="Bash"]');
    }

    async clicksyntaxHighlightingFieldOption() {
        await this.syntaxHighlightingFieldOption.click();
    }

    async waitFor() {
        await browser.pause(1000);
    }

    get expirationField() {
        return $('//span[@id="select2-postform-expiration-container"]');
    }

    async clickExpirationField() {
        await this.expirationField.click();
    }

    get tenMinutesOption() {
        return $('//li[text()="10 Minutes"]');
    }

    async clickTenMinutesOption() {
        await this.tenMinutesOption.click();
    }

    async waitFor() {
        await browser.pause(1000);
    }

    get pasteName() {
        return $('//input[@id="postform-name"]');
    }

    async scrollDownToPasteName() {
        await this.pasteName.scrollIntoView();
    }


    async pasteNameField() {
        await this.pasteName.setValue('how to gain dominance among developers');
    }

    async waitFor() {
        await browser.pause(1000);
    }

    get saveButton() {
        return $('//button[text()="Create New Paste"]');
    }

    async clickSaveButton() {
        await this.saveButton.click();
    }

    async verifyPageTitle() {
        let title = await browser.getTitle();
        let result = title.includes('how to gain dominance among developers');
        expect(result).toBe(true);
    }

    get syntaxName() {
        return $('(//a[@class="btn -small h_800"])[1]');
    }

    async verifySyntaxBash() {
        let syntax = await this.syntaxName.getText();
        let result = syntax == 'Bash';
        expect(result).toBe(true);
    }

    get rawButton() {
        return $('//a[text()="raw"]');
    }

    async clickRawButton() {
        await this.rawButton.click();
    }

    get preElement() {
        return $('//pre');
    }

    async verifyPreElement() {
        let code = await this.preElement.getText();
        let result = code == `git config --global user.name "New Sheriff in Town"

git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")

git push origin master --force`;
        expect(result).toBe(true);
    }

}

module.exports = new SecondTaskPage();