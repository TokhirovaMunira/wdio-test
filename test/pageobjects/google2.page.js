class Google2Page {

    get cloudGoogleComLink() {
        return $('(//a[@href="/"])[1]');
    }

    async clickcloudGoogleComLink() {
        await this.cloudGoogleComLink.click();
    }

    async open() {
        return browser.url('https://cloud.google.com/');
    }

    async waitFor(time) {
        await browser.pause(time * 1000);
    }

    async openWindowSize() {
        await browser.maximizeWindow();
    }



    get searchIcon() {
        return $('//button[@search-open]/parent::*');

    }

    async clickSearchIcon() {
        await this.searchIcon.click();
    }


    get pasteName() {
        return $('//input[@aria-label="Search"]');


    }

    async pasteNameField() {
        await this.pasteName.setValue('Google Cloud Platform Pricing Calculator');
    }


    async pushEnter() {
        return browser.keys("\uE007");
    }



    get pricingCalculatorLink() {
        return $('//b[text()="Google Cloud Pricing Calculator"]');
    }

    async clickPricingCalculator() {
        await this.pricingCalculatorLink.click();
    }

    async frameSwitch() {
        let elements = await $$('//iframe');
        let frame;
        let text = '';
        for (let el of elements) {
            text = await el.getAttribute('src');
            if (text.includes('calculator')) {
                frame = el;
                break;
            }
        }
        await browser.pause(1000);
        await browser.switchToFrame(frame);
        await browser.pause(1000);
    }


    get pushLinkForActivateSection() {
        return $('(//div[@title="Compute Engine"])[1]');

    }

    async clickLinkForActivateSection() {

        await this.pushLinkForActivateSection.waitForDisplayed({ timeout: 10000, timeoutMsg: 'image not found' });
        await this.pushLinkForActivateSection.click();
    }


    get pushNumberOfInstances() {
        return $('//label[@for="input_90"]');
    }

    async clickPushNumberOfInstances() {
        await this.pushNumberOfInstances.waitForDisplayed({ timeout: 10000, timeoutMsg: 'element not found' });
    }

    get pasteNumberOfInstances() {
        return $('//input[@id="input_90"]')
    }

    async pastePushNumberOfInstancesField() {
        await this.pasteNumberOfInstances.setValue('4');
        await this.pasteNumberOfInstances.click();
    }

    get chooseOsField() {
        return $('//md-select-value[@id="select_value_label_82"]');
    }

    async clickChooseOsField() {
        await this.chooseOsField.click();
    }

    get oSfieldTap() {
        return $('//md-option[@value="free"]');
    }

    async clickOsFieldTap() {
        await this.oSfieldTap.click();
    }

    get chooseVmClassField() {
        return $('(//div[text()="Regular"])');
    }

    async clickChooseVmClassField() {
        await this.chooseVmClassField.click();
    }

    get dataCenterLocation() {
        return $('(//div[@class="layout-column flex-gt-sm-90 flex-80"])[15]');
    }

    async scrollWindowDown() {
        await this.chooseSeries.scrollIntoView({ block: 'center' });
    }


    get chooseSeries() {
        return $('//md-select-value[@id="select_value_label_85"]');
    }

    async clickChooseSeries() {
        await this.chooseSeries.click();
    }


    get tapSeries() {
        return $('//md-option[@value="n1"]');
    }

    async clickTapSeries() {
        await this.tapSeries.click();
    }

    get tapMachineType() {
        return $('//md-select-value[@id="select_value_label_86"]');
    }

    async clicktapMachineType() {
        await this.tapMachineType.click();
    }

    get chooseMachineType() {
        return $('//md-option[@id="select_option_428"]');
    }

    async clickChooseMachineType() {
        await this.chooseMachineType.click();
    }

    get addGPUcheckBox() {
        return $('//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]');
    }

    async clickaddGPUcheckBox() {
        await this.addGPUcheckBox.click();
    }

    get addGPUcheckType() {
        return $('//md-select[@id="select_466"]');
    }

    async clickaddGPUcheckType() {
        await this.addGPUcheckType.click();
    }

    get ToLocalSSD() {
        return $('//md-input-container[@class="md-input-has-placeholder md-input-has-value flex"]');
    }

    async scrollToLocalSSD() {
        await this.chooseSeries.scrollIntoView();
    }


    get GPUcheckType() {
        return $('//md-option[@id="select_option_473"]');
    }

    async clickGPUcheckType() {
        await this.GPUcheckType.click();
    }

    get numberOfGPU() {
        return $('//md-select-value[@id="select_value_label_465"]');
    }

    async clickNumberOfGPU() {
        await this.numberOfGPU.click();
    }

    get tapNumberOfGPU() {
        return $('//md-option[@id="select_option_477"]');
    }

    async clicktapNumberOfGPU() {
        await this.tapNumberOfGPU.click();
    }

    get localSSD() {
        return $('//md-select-value[@id="select_value_label_422"]');
    }

    async clicklocalSSD() {
        await this.localSSD.click();
    }

    get taplocalSSD() {
        return $('//md-option[@id="select_option_449"]');
    }

    async clicktaplocalSSD() {
        await this.taplocalSSD.click();
    }

    get dataCenterLocation() {
        return $('//md-select-value[@id="select_value_label_88"]');
    }

    async clickdataCenterLocation() {
        await this.dataCenterLocation.click();
    }

    get tapDataCenterLocation() {
        return $('//md-option[@id="select_option_221"]');
    }

    async clickTapDataCenterLocation() {
        await this.tapDataCenterLocation.click();
    }

    get committedUsage() {
        return $('//md-select-value[@id="select_value_label_89"]');
    }

    async clickcommittedUsage() {
        await this.committedUsage.click();
    }

    get tapCommittedUsage() {
        return $('//md-option[@id="select_option_128"]');
    }

    async clickTapCommittedUsage() {
        await this.tapCommittedUsage.click();
    }

    get addToEstimate() {
        return $('//button[@ng-click="listingCtrl.addComputeServer(ComputeEngineForm);"]');
    }

    async clickaddToEstimate() {
        await this.addToEstimate.click();
    }

    get tapSelectEmailEstimate() {
        return $('//button[@id="Email Estimate"]');
    }

    async clicktapSelectEmailEstimate() {
        await this.tapSelectEmailEstimate.click();
    }

    async openLinkInNewTab() {
        return browser.newWindow('https://10minutemail.com/');
    }

    get hideSlideBannerButton() {
        return $('//vli[@id="hideSlideBanner"]')
    }

    async clickHideSlideBannerButton() {
        await this.hideSlideBannerButton.click();
    }

    get tapTheMailingaAddress() {
        return $('//span[@class="copy_icon"]');
    }

    async clicktapTheMailingaAddress() {
        await this.tapTheMailingaAdress.click();
    }

    async switchBack() {
        await browser.switchWindow('https://cloud.google.com/products/calculator')
    }

    get tapTheMailingaAddress() {
        return $('//span[@class="copy_icon"]');
    }

    async clickTapDataCenterLocation() {
        await this.tapTheMailingaAddress.click();
    }

    get pasteCopyEmailAddress() {
        return $('//input[@ng-model="emailQuote.user.email"]');
    }

    async clickpasteCopyEmailAddress() {
        await this.pasteCopyEmailAddress.click();
        await browser.keys(["\ue008", "\ue016"]);
    }

    get saveButtonSendEmail() {
        return $('//button[@aria-label="Send Email"]');
    }

    async clickSaveButtonSendEmail() {
        await this.saveButtonSendEmail.click();
    }

    get letterButton() {
        return $('(//div[@class="mail_message"])[1]')
    }

    async clickLetterButton() {
        await this.letterButton.click();
    }

    get totalEstimatedMonthlyCost() {
        return $("(//*[contains(text(),'Estimated Monthly Cost:')])[1]");
    }

    emailedCost = '';

    async verifytotalEstimatedMonthlyCost() {
        let text = await this.totalEstimatedCost.getText();
        let result = text.includes(this.emailedCost);
        expect(result).toBe(true);
    }

    async switchToMail() {
        await browser.switchWindow('https://10minutemail.com/')
    }

    get totalEstimatedCost() {
        return $("//*[contains(text(),'Total Estimated Cost')]");
    }

    async saveTotalEstimatedCost() {
        this.emailedCost = await this.totalEstimatedCost.getText();
        this.emailedCost = this.emailedCost.replace('Total Estimated Cost: ', '');
        this.emailedCost = this.emailedCost.replace(' per 1 month', '');
    }

}

module.exports = new Google2Page();