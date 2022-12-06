const firsttaskPage = require('../pageobjects/firsttask.page');
const FirstTaskPage = require('../pageobjects/firsttask.page');

describe('firsttask', () => {
    it('should click the link to google', async () => {
        //открвает страницу cloud.google.com
        await FirstTaskPage.open();
        //ждет 
        await FirstTaskPage.waitFor();
        //открывает окно в полный экран
        await FirstTaskPage.openWindowSize();
        //ждет 
        await FirstTaskPage.waitFor(1);
        //кликает на иконку поиска
        await FirstTaskPage.clickSearchIcon();
        //ждет 
        await FirstTaskPage.waitFor(1);
        // списывает "Google Cloud Platform Pricing Calculator"
        await FirstTaskPage.pasteNameField();
        // переход по ссылке
        await FirstTaskPage.pushEnter();
        // переход по ссылке "Google Cloud Platform Pricing Calculator"
        await FirstTaskPage.clickPricingCalculator();
        //ждет 
        await FirstTaskPage.waitFor();
        // переключается на нужный Frame
        await FirstTaskPage.frameSwitch();
        await FirstTaskPage.frameSwitch();
        // Активирует и кликает раздел COMPUTE ENGINE в верхней части страницы.
        await FirstTaskPage.clickLinkForActivateSection();
        // кликает по Number Of Instances
        await FirstTaskPage.clickPushNumberOfInstances();
        //ждет 
        await FirstTaskPage.waitFor(1);
        // кликает и набирает цифру 4
        await FirstTaskPage.pastePushNumberOfInstancesField();
        // листает ниже страницу
        await FirstTaskPage.scrollWindowDown();
        //ждет 
        await FirstTaskPage.waitFor(1);
        // выбирает ОС "Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS"
        await FirstTaskPage.clickChooseOsField();
        await FirstTaskPage.clickOsFieldTap();
        // листает страницу ниже до Datacenter Location
        await FirstTaskPage.scrollWindowDown();
        //ждет 
        await FirstTaskPage.waitFor(1);
        // Тип серии n1
        await FirstTaskPage.clickChooseSeries();
        // //ждет 2 сек
        await FirstTaskPage.waitFor(1);
        // создать
        await FirstTaskPage.clickTapSeries();
        // ждет 1 сек
        await FirstTaskPage.waitFor(1);
        // кликает на Machine Type
        await FirstTaskPage.clicktapMachineType();
        // выбирает нужный параметр
        await FirstTaskPage.clickChooseMachineType();
        // ждет 1 сек
        await FirstTaskPage.waitFor(1);
        // кликает кнопку raw
        await FirstTaskPage.clickaddGPUcheckBox();
        // ждет 1 сек
        await FirstTaskPage.waitFor(1);
        // кликает на тип GPU type
        await FirstTaskPage.clickaddGPUcheckType();
        // листает ниже
        await FirstTaskPage.scrollToLocalSSD();
        // выбирает GPU type: NVIDIA Tesla V100
        await FirstTaskPage.clickGPUcheckType();
        // ждет 1 сек
        await FirstTaskPage.waitFor(1);
        // в Number Of GPUs пишет 1
        await FirstTaskPage.clickNumberOfGPU();
        // выбирает цифру 1
        await FirstTaskPage.clicktapNumberOfGPU();
        // ждет 1 сек
        await FirstTaskPage.waitFor(1);
        // кликает на Local SSD
        await FirstTaskPage.clicklocalSSD();
        // выбирает 2*375
        await FirstTaskPage.clicktaplocalSSD();
        // ждет 1 сек
        await FirstTaskPage.waitFor(1);
        // кликает на Datacenter Location
        await FirstTaskPage.clickdataCenterLocation();
        // выбирает Frankfurt (europe-west3)
        await FirstTaskPage.clickTapDataCenterLocation();
        // ждет 1 сек
        await FirstTaskPage.waitFor(1);
        // кликает на Сommitted Usage
        await FirstTaskPage.clickcommittedUsage();
        // выбирает 1 year
        await FirstTaskPage.clickTapCommittedUsage();
        // ждет 1 сек
        await FirstTaskPage.waitFor(3);
        // кликает на Add To Estimate
        await FirstTaskPage.clickaddToEstimate();

    });
});