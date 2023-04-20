let myAge=10; //myAge variable depicts age of saam sheron
let earlyYears=2; //earlyYears is set to 2 
earlyYears*=10.5; // the age of dogs in first two years is 10.5
//As early years are taken into account which is two years so we subtract 2 years from my age and save it to laterYears variable
let laterYears=myAge-2;
laterYears*=4;// after two years of born dog's age is equal to 4 times/ year
console.log(`Early years of a dog is ${earlyYears} and later years is ${laterYears}`)
myAgeInDogYears=earlyYears + laterYears;// as early years of a dog and after 2 years dogs ageing count changes so we split this up and made calculation now to find my age in dog years we have to add the earlyYears and laterYears
console.log(`My age in dog years is ${myAgeInDogYears}`);
myName='Saam Sheron'.toLowerCase();//toLowerCase method is used to display my in in lower case.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);//Final output
