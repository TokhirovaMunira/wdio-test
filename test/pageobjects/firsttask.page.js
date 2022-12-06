class FirstTaskPage {

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
        return $('//md-option[@id="select_option_229"]');
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

    get ProvisioningModelText() {
        return $("//div[contains(text(),'Provisioning model')]");
    }

    async verifyProvisioningModelText() {
        let text = await this.ProvisioningModelText.getText();
        let result = text.includes('Regular');
        expect(result).toBe(true);
    }

    get InstanceTypeText() {
        return $("//div[contains(text(),'Instance type')]");
    }

    async verifyInstanceTypeText() {
        let text = await this.InstanceTypeText.getText();
        let result = text.includes('n1-standard-8');
        expect(result).toBe(true);
    }

    get RegionText() {
        return $("//div[contains(text(),'Region')]");
    }

    async verifyRegionText() {
        let text = await this.RegionText.getText();
        let result = text.includes('Frankfurt');
        expect(result).toBe(true);
    }

    get localSSDText() {
        return $("//div[contains(text(),'Local SSD')]");
    }

    async verifylocalSSDText() {
        let text = await this.localSSDText.getText();
        let result = text.includes(' 2x375 GiB');
        expect(result).toBe(true);
    }

    get CommitmentTermText() {
        return $("//div[contains(text(),'Commitment term')]");
    }

    async verifyCommitmentTermText() {
        let text = await this.CommitmentTermText.getText();
        let result = text.includes('1 Year');
        expect(result).toBe(true);
    }

    get totalEstimatedCost() {
        return $("//*[contains(text(),'Total Estimated Cost')]");
    }

    async verifyEstimatedCost() {
        let text = await this.totalEstimatedCost.getText();
        let result = text.includes('USD 6,207.89 per 1 month');
        expect(result).toBe(true);
    }

}

module.exports = new FirstTaskPage();
