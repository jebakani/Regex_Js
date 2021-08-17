
//pattern for pin code
function PinCheck(pincode)
{
let regpattern=RegExp('^[1-9]{1}[0-9]{5}$');
if(regpattern.test(pincode))
{
    console.log('Pincode is valid');
}
else
{
    console.log('pincode is invalid');
}
}
console.log('UC1:checking for value 400088: ')
PinCheck(400088);
console.log('UC2 :Checking when the pincode begin with alphabet:');
PinCheck('A400088');
console.log('UC3-Checking when the pincode end with alphabet:');
PinCheck('400088B');