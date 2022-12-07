const Google2Page = require('../pageobjects/google2.page');

describe('google2', () => {
    it('should click the link to google', async () => {
        //открвает страницу cloud.google.com
        await Google2Page.open();
        //ждет 
        await Google2Page.waitFor();
        //открывает окно в полный экран
        await Google2Page.openWindowSize();
        //ждет 
        await Google2Page.waitFor(1);
        //кликает на иконку поиска
        await Google2Page.clickSearchIcon();
        //ждет 
        await Google2Page.waitFor(1);
        // списывает "Google Cloud Platform Pricing Calculator"
        await Google2Page.pasteNameField();
        // переход по ссылке
        await Google2Page.pushEnter();
        // переход по ссылке "Google Cloud Platform Pricing Calculator"
        await Google2Page.clickPricingCalculator();
        //ждет 
        await Google2Page.waitFor();
        // переключается на нужный Frame
        await Google2Page.frameSwitch();
        await Google2Page.frameSwitch();
        // Активирует и кликает раздел COMPUTE ENGINE в верхней части страницы.
        await Google2Page.clickLinkForActivateSection();
        // кликает по Number Of Instances
        await Google2Page.clickPushNumberOfInstances();
        //ждет 
        await Google2Page.waitFor(1);
        // кликает и набирает цифру 4
        await Google2Page.pastePushNumberOfInstancesField();
        // листает ниже страницу
        await Google2Page.scrollWindowDown();
        //ждет 
        await Google2Page.waitFor(1);
        // выбирает ОС "Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS"
        await Google2Page.clickChooseOsField();
        await Google2Page.clickOsFieldTap();
        // листает страницу ниже до Datacenter Location
        await Google2Page.scrollWindowDown();
        //ждет 
        await Google2Page.waitFor(1);
        // Тип серии n1
        await Google2Page.clickChooseSeries();
        // //ждет 
        await Google2Page.waitFor(1);
        // создать
        await Google2Page.clickTapSeries();
        // ждет 
        await Google2Page.waitFor(1);
        // кликает на Machine Type
        await Google2Page.clicktapMachineType();
        // выбирает нужный параметр
        await Google2Page.clickChooseMachineType();
        // ждет 1 сек
        await Google2Page.waitFor(1);
        // ставит галочку
        await Google2Page.clickaddGPUcheckBox();
        // ждет 
        await Google2Page.waitFor(1);
        // кликает на тип GPU type
        await Google2Page.clickaddGPUcheckType();
        // листает ниже
        await Google2Page.scrollToLocalSSD();
        // выбирает GPU type: NVIDIA Tesla V100
        await Google2Page.clickGPUcheckType();
        // ждет 1 сек
        await Google2Page.waitFor(1);
        // в Number Of GPUs выбирает 1
        await Google2Page.clickNumberOfGPU();
        // выбирает цифру 1
        await Google2Page.clicktapNumberOfGPU();
        // ждет 1 сек
        await Google2Page.waitFor(1);
        // кликает на Local SSD
        await Google2Page.clicklocalSSD();
        // выбирает 2*375
        await Google2Page.clicktaplocalSSD();
        // ждет 1 сек
        await Google2Page.waitFor(1);
        // кликает на Datacenter Location
        await Google2Page.clickdataCenterLocation();
        // выбирает Frankfurt (europe-west3)
        await Google2Page.clickTapDataCenterLocation();
        // ждет 1 сек
        await Google2Page.waitFor(1);
        // кликает на Сommitted Usage
        await Google2Page.clickcommittedUsage();
        // выбирает 1 year
        await Google2Page.clickTapCommittedUsage();
        // ждет 1 сек
        await Google2Page.waitFor(3);
        // кликает на Add To Estimate
        await Google2Page.clickaddToEstimate();
        // ждет 1 сек
        await Google2Page.waitFor(3);
        // запоминает цену
        await Google2Page.saveTotalEstimatedCost();
        // нажимает иконку почты
        await Google2Page.clicktapSelectEmailEstimate();
        // ждет 3 сек
        await Google2Page.waitFor(3);
        // открывает ссылку https://10minutemail.com/
        await Google2Page.openLinkInNewTab();
        //убирает рекламу
        await Google2Page.clickHideSlideBannerButton();
        // ждет 1 сек
        await Google2Page.waitFor(3);
        // кликает на copy и копирует адрес ссылки
        await Google2Page.clicktapTheMailingaAddress();
        await Google2Page.tapTheMailingaAddress();
        // ждет 1 сек
        await Google2Page.waitFor(1);
        // переходит в предыдущую вкладку
        await Google2Page.switchBack();
        // ждет 1 сек
        await Google2Page.waitFor(1);
        // переключается на нужный Frame
        await Google2Page.frameSwitch();
        await Google2Page.frameSwitch();
        // ждет 5 сек
        await Google2Page.waitFor(5);
        //вписывает скопированную почту в нужное окошко
        await Google2Page.clickpasteCopyEmailAddress();
        // ждет 10 сек
        await Google2Page.waitFor(10);
        //нажимает на отправить mail
        await Google2Page.clickSaveButtonSendEmail();
        //переключние на почту
        await Google2Page.switchToMail();
        // нажимает на письмов окне
        await Google2Page.clickLetterButton();
        // после проверяет письмо на правильность
        await Google2Page.verifytotalEstimatedMonthlyCost();


    });
});