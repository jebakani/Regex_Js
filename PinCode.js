
//pattern for pin code
function PinCheck(pincode)
{
let regpattern=RegExp('^^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$');
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
console.log('UC4-Checking for value if it has space :');
PinCheck('400 088');