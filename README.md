# E2E-Testing-with-TestCafe

### _End to End Automation Testing using TestCafe with JavaScript_

[![N](https://codecept.io/img/testcafe.png)](https://testcafe.io/)

## Features
For execute thoese test we will work with the page [nopcommerce](https://demo.nopcommerce.com/login?returnurl=%2F)
- Users
-     Create a new user using Data.json
-     Login the new user
-     Logout user   

- Create an Order 
-     Create a new user
-     Searh a product 
-     Add the product to the cart
-     Confirm Shopping cart
-     Enter a payment method and personal info
-     Verify my order on my account
-     Change Currency to Euro
- Export the test result in a HTML file

## Installation

E2E-Testing-with-TestCafe requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
npm install 
```

## Run Tests
The Features can be run with the following commands 

| Feature | Command |
| ------ | ------ |
| User | npx testcafe chrome tests/RegistrationTest.js |
| Create an Order | npx testcafe chrome test/E2ETest.js |
| HTML report |add this extenxion to the command - -reporter html:report.html |


## Thanks
- [nopcommerce](https://demo.nopcommerce.com/login?returnurl=%2F)
- [Test Automation University](https://testautomationu.applitools.com)
