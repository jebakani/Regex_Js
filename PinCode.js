var prompt = require('prompt-sync')();
let pincode=prompt('enter the pin code:');
//pattern for pin code
let regpattern=RegExp('^[1-9]{1}[0-9]{5}$');
if(regpattern.test(pincode))
{
    console.log('Pincode is valid');
}
else
{
    console.log('pincode is invalid');
}