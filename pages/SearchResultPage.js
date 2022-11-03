import { Selector,t } from "testcafe";

class SearchResultPage{
    constructor(){
        this.pruductItem = Selector('div.product-item');
        this.pruductTitle = Selector('a').withText('Apple MacBook Pro 13-inch');
    }
}

export default new SearchResultPage();