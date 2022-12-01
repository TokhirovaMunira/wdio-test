const PastebinPage = require('../pageobjects/pastebin.page');

describe('pastebin', () => {
    it('should click the link to pastebin', async () => {
        //открвает страницу pastebin
        await PastebinPage.open();
        //ждет 2 сек
        await PastebinPage.waitFor();
        //открывает окно в полный экран
        await PastebinPage.openWindowSize();
        //вписывает в пустое окно "Hello from WebDriver"
        await PastebinPage.writeInToPastebinCodeField();
        //ждет 2 сек
        await PastebinPage.waitFor();
        // скрывает рекламу
        await PastebinPage.clickHideSlideBannerButton();
        //листает вниз до Paste Expiration
        await PastebinPage.scrollWindowDown();
        // нажимает стрелку с выбором даты
        await PastebinPage.clickExpirationField();
        // выбирает 10 минут
        await PastebinPage.clickTenMinutesOption();
        //ждет 2 сек
        await PastebinPage.waitFor();
        // листает ниже страницу до Paste Name / Title
        await PastebinPage.scrollDownToPasteName();
        // в пустое окошко вписывает предложение "helloweb"
        await PastebinPage.pasteNameField();
        //ждет 2 сек
        await PastebinPage.waitFor();
        //создать
        await PastebinPage.clickSaveButton();
        //ждет 2 сек
        await PastebinPage.waitFor();

    });
});