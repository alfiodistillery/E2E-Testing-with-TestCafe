import { Selector,t } from "testcafe";

class CostumerPage{
    constructor(){
        this.ordersLink = Selector('a').withText('Orders');
        this.noOrdersLabel = Selector('div.no-data').withText('No orders');
    }
}

export default new CostumerPage();