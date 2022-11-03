import { Selector,t } from "testcafe";

class LoginPage{
    constructor(){
        this.email = Selector("#Email");
        this.password = Selector("#Password");
        this.loginBtn = Selector("button.button-1.login-button");
        this.accountHeader = Selector("strong").withText("Returning Customer");
    }

async loginUser(newUser, newPassword){
    await t
        .typeText(this.email,newUser)
        .typeText(this.password, newPassword)
        .click(this.loginBtn);
}

}


export default new LoginPage();