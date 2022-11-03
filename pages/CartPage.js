import { Selector,t } from "testcafe";

class CartPage{
    constructor(){
        this.termsLabel = Selector('input#termsofservice');
        this.cartTotal = Selector('td.cart-total-right');
        this.checkoutBtn = Selector('#checkout');
        //td.cart-total-right > span > strong
    }
}export default new CartPage();