import { ClientFunction } from "testcafe";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CostumerPage from "../pages/CostumerPage";

const dataSet = require('../data/data.json');

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(()=> window.location.href);


fixture("Registration Fixture")
    .page(URL);

test("Assert Home Page Test", async (t) => {
    await t
        .expect(getURL()).eql(URL)
        .expect(HomePage.subtitleHeder.exists).ok();
});

dataSet.forEach(data => {

    let RandomNumber = Math.floor(Math.random()*1000);
    test("User -"+data.firstname+"- Registration and Login Test", async (t) => {
        await t
            .click(HomePage.RegisterLink)
            .expect(getURL()).contains('register')
            .click(RegisterPage.GenterOption)
            .typeText(RegisterPage.FirstName,data.firstname)
            .typeText(RegisterPage.LastName,data.lastname)
        await RegisterPage.selectDay(data.birthday);
        await RegisterPage.selectMonth(data.birthmonth);
        await RegisterPage.selectYear(data.birthyear);
        await t
             .typeText(RegisterPage.Email,RandomNumber+data.email)
             .typeText(RegisterPage.Password,data.password)
             .typeText(RegisterPage.ConfirmPassword,data.password)
             .click(RegisterPage.RegisterBtn)
             .expect(RegisterPage.SuccessfulMessage.exists).ok()

             //Logout
             .click(HomePage.LogoutLink)
            //Login with register account
            .click(HomePage.LoginLink)
            .expect(LoginPage.accountHeader.exists).ok()
            .typeText(LoginPage.email,RandomNumber+data.email)
            .typeText(LoginPage.password,data.password)
            .click(LoginPage.loginBtn)
            //Go to my Account
            .expect(CostumerPage.ordersLink.exists).ok()
            .click(CostumerPage.ordersLink)
            .expect(CostumerPage.noOrdersLabel.exists).ok();

    });
});