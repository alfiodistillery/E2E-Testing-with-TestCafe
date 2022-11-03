import { Selector,t } from "testcafe";

class ProductDetailsPage {
    constructor(){
        this.productPrice = Selector("#price-value-4");
        this.productQuantity = Selector("input#product_enteredQuantity_4");
        this.addToCard = Selector("button#add-to-cart-button-4");
        this.successMessage = Selector("div.bar-notification.success");
    }
}

export default new ProductDetailsPage();