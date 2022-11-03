import { Selector, t } from "testcafe";

class CheckoutPage{
    constructor(){
        this.countryList = Selector('#BillingNewAddress_CountryId');
        this.cityTxt = Selector('#BillingNewAddress_City');
        this.addressTxt = Selector('#BillingNewAddress_Address1');
        this.zipTxt = Selector('#BillingNewAddress_ZipPostalCode');
        this.phoneTxt = Selector('#BillingNewAddress_PhoneNumber');
        this.continueBtn = Selector('button.button-1.new-address-next-step-button');
        this.nextDayOption = Selector("input[id='shippingoption_1']")
        this.nextShippingBtn = Selector('#shipping-method-buttons-container > button')
        this.nextPaymentBtn = Selector('#payment-method-buttons-container > button')
        this.nextConfirmBtn = Selector('button.button-1.payment-info-next-step-button')
        this.confirmOrderBtn = Selector('button.button-1.confirm-order-next-step-button')
        this.orderConfirmationMessage = Selector('strong').withText('Your order has been successfully processed!')
        this.viewOrderDetailsLink = Selector('a').withText('Click here for order details.')
    }

    async selectCountry(country) {
        const countryOption = this.countryList.find('option');
        await t
            .click(this.countryList)
            .click(countryOption.withText(country));
    }
} export default new CheckoutPage();