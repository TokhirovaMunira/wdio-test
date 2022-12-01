const SecondTaskPage = require('../pageobjects/secondtask.page');

describe('secondtask', () => {
    it('should click the link to pastebin', async () => {
        //открвает страницу pastebin
        await SecondTaskPage.open();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        //открывает окно в полный экран
        await SecondTaskPage.openWindowSize();
        //вписывает в пустое окно вписывает предложения
        await SecondTaskPage.writeInToPastebinCodeField();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        // нажмает кнопку переключателя с выбором Syntax Highlighting
        await SecondTaskPage.clickSyntaxHighlighting();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        //скрывает окно с рекламой
        await SecondTaskPage.clickHideSlideBannerButton();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        //листает вниз до Paste Expiration
        await SecondTaskPage.scrollWindowDown();
        // нажимает стрелку Syntax Highlighting
        await SecondTaskPage.clickSyntaxHighlightingField();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        // выбирает Bash
        await SecondTaskPage.clicksyntaxHighlightingFieldOption();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        // нажимает стрелку с выбором даты
        await SecondTaskPage.clickExpirationField();
        // выбирает 10 минут
        await SecondTaskPage.clickTenMinutesOption();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        // листает ниже страницу до Paste Name / Title
        await SecondTaskPage.scrollDownToPasteName();
        // в пустое окошко вписывает предложение "helloweb"
        await SecondTaskPage.pasteNameField();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        //создать
        await SecondTaskPage.clickSaveButton();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        //проверяет название в окошке заголовка
        await SecondTaskPage.verifyPageTitle();
        // проверка синтаксиса названия
        await SecondTaskPage.verifySyntaxBash();
        // кликает кнопку raw
        await SecondTaskPage.clickRawButton();
        //ждет 2 сек
        await SecondTaskPage.waitFor();
        // проверяет правильно ли написан текст
        await SecondTaskPage.verifyPreElement();

    });
});