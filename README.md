# acmarket.js
ACMarket.js is an official JavaScript SDK for interfacing with the AC-Market API. It is made to be stupidly simple to use by design!

## Usage
#### Getting a user
```
const ACMarket = require('acmarket.js');
const acm = new ACMarket('your api key');

acm.getUser('1').then(async user => {
    console.log(user);
}).catch(async err => {
    console.error(err);
});
```

#### Getting a resource
```
const ACMarket = require('acmarket.js');
const acm = new ACMarket('your api key');

acm.getResource('69b0462ec79b67d582dcacf2').then(async resource => {
    console.log(resource);
}).catch(async err => {
    console.error(err);
});
```