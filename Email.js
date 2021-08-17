function EmailCheck(email)
{
    //check mandatory first part
let regpattern=RegExp('^[a-zA-Z]{3}@[a-zA-Z]+\\.[a-z]{2,3}');
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
console.log('UC2-Checking the mandatory second part:');
EmailCheck('abc@gmail');
console.log('UC3-Checking the mandatory 3 part:');
EmailCheck('abc@gmai.com');