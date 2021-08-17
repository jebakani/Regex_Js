function EmailCheck(email)
{
let regpattern=RegExp('^[a-zA-Z]{3}[1-bA-Z0-9]');
if(regpattern.test(email))
{
    console.log('Email is valid');
}
else
{
    console.log('Email is invalid');
}
}
console.log('UC1-Checking mandatory condition:');
EmailCheck('abc@gmail.com');