import { ClientFunction, t } from "testcafe";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import SearchResultPage from "../pages/SearchResultPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import MyOrderPage from "../pages/MyOrderPage";
import LoginPage from "../pages/LoginPage";

const URl = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
const randomNumber = Math.floor(Math.random() * 1000);
const userRandomEmail = 'Alfio' + randomNumber + '@gmail.com';

fixture("E2E Fixture")
    .page(URl);

test("Go to Home Page", async (t) => {
    await t
        .expect(getURL()).eql(URl)
        .expect(HomePage.subtitleHeder.exists).ok();
});

test("Create a new user and do an order", async t => {
    await t
        //Register a new user
        .maximizeWindow()
        .click(HomePage.RegisterLink)
        .expect(getURL()).contains('register')
        .click(RegisterPage.GenterOption)
        .typeText(RegisterPage.FirstName, 'Alfio')
        .typeText(RegisterPage.LastName, 'Valesini')
        .typeText(RegisterPage.Email, userRandomEmail)
        .typeText(RegisterPage.Password, '123456')
        .typeText(RegisterPage.ConfirmPassword, '123456')
        .click(RegisterPage.RegisterBtn)
        .expect(RegisterPage.SuccessfulMessage.exists).ok();
    console.log('el email es: ' + userRandomEmail);

    // Search a pruduct
    await HomePage.search('Apple MacBook Pro 13-inch');
    await t
        .click(SearchResultPage.pruductTitle)
        .expect(getURL()).contains('apple-macbook-pro-13-inch');

    // Setup Product details and add the product to the cart
    await t
        .expect(ProductDetailsPage.productPrice.exists).ok()
        .selectText(ProductDetailsPage.productQuantity).pressKey("delete")
        .typeText(ProductDetailsPage.productQuantity, '3')
        .click(ProductDetailsPage.addToCard)
        .expect(ProductDetailsPage.successMessage.exists).ok()
        .wait(3000)


    // Confirm shopping Cart
    await t
        .click(HomePage.Cartlink)
        .click(CartPage.termsLabel)

        .click(CartPage.checkoutBtn)
        .expect(getURL()).contains('checkout');

    //Enter a payment method and personal info
    await CheckoutPage.selectCountry('Germany');
    await t
        .typeText(CheckoutPage.cityTxt, 'Berlin')
        .typeText(CheckoutPage.addressTxt, '108 ddd stret')
        .typeText(CheckoutPage.zipTxt, '123456')
        .typeText(CheckoutPage.phoneTxt, '34234545')
        .click(CheckoutPage.continueBtn)
        .click(CheckoutPage.nextDayOption)
        .click(CheckoutPage.nextShippingBtn)
        .click(CheckoutPage.nextPaymentBtn)
        .click(CheckoutPage.nextConfirmBtn)
        .click(CheckoutPage.confirmOrderBtn)
        .expect(CheckoutPage.orderConfirmationMessage.exists).ok()
        .click(CheckoutPage.viewOrderDetailsLink);

    //Verify my order on my account
    await t
        .click(HomePage.MyAccountLink)
        .click(MyOrderPage.orders);

    //  Change Currency to Euro
    await HomePage.changeCurrency('Euro');
});
