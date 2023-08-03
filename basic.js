// console.log("Hello World");
// console.log(5);


// variable
// var x = 5;
// x =9;
// console.log(x)


// float or integer type
// var x = 25.4565;
// console.log(parseInt(x))


// var x = 25.4565;
// var y = parseInt(x);
// console.log(y);


// var num = "15.361567";
// console.log(typeof num)
// var num = "15.361567";
// var num1 = parseFloat(num);
// console.log(typeof num1)
// console.log(num1)
// console.log(num1.toFixed(3))


// var number = 21.2516;
// var fixed = number.toFixed(2)
// console.log(fixed);
// console.log(typeof fixed);
// console.log(parseFloat(fixed)) 


// var x = "25.4565";
// var y = parseInt(x);
// console.log(typeof y);
// console.log(x);
// console.log(y);


// var x = 5;
// var y = 14;
// console.log(x + y)
// // var x = x + 5;
// var x = 5;
// x += 5
// var z =x + y;
// console.log(z)


// var x = 5;
// console.log(x++) //post increment e print hocche 5 then 1 bariye 6 hobe
// console.log(x++) //post increment e print hocche 6 then 1 bariye 7 hobe
// var y = 10;
// console.log(++y) //pre increment e 1 bariye 11 print hocche
// console.log(++y) //pre increment e 1 bariye 12 print hocche


// array type
// var numbers=[54, 25, 85, 75, 63, 46, 29];
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[3]);
// // console.log(numbers[0]);
// var positionFirst = numbers[0];
// console.log(positionFirst)
// console.log(numbers.indexOf(25));
// var indexOf63=numbers.indexOf(63);
// console.log(indexOf63);
// // numbers[4]=99;
// numbers[indexOf63]=99;
// console.log(numbers);
// // numbers.pop();
// // console.log(numbers);
// // numbers.push(30);
// console.log(numbers);


// var jisan =["kamila", "jamila","gamila"];
// console.log(jisan);
// jisan.push("damila");
// console.log(jisan);
// // jisan.pop()
// // console.log(jisan);
// var ex = jisan.pop();
// console.log(jisan);
// console.log(ex);


// var i = 1;
// while(i<=10){
//     console.log("This is Wasif",i);
//     // i++
//     i=i+1;
// }


// for(var i = 1; i <= 10; i++){
//     console.log("this is BD");
//     console.log("this is BD",i);
// }


// var arr = [10,20,30,40,50];
// console.log(arr.indexOf(60));
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// var i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++
// }


// var arr = [10,20,30,40,50];
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
//     if(arr[i]==30){
//         break
//     }
//     // console.log(arr[i]);
// }


// var arr = [10,20,30,40,50];
// for(var i = 0; i<arr.length; i++){
//     if(arr[i]==30){
//         continue;
//     }
//     console.log(arr[i]);
// }


// var temperature = 25;
// var isRaining = true;
// if(temperature >= 30){
//     console.log("It is a ver hot day");
//     if(isRaining == true){
//         console.log("but it is raining")
//     }
//     else{
//     console.log("and it is not raining")
//     }
// }
// else{
//     console.log("It is a cold day");
//     if(isRaining == false){
//         console.log("but it is raining")
//     }
//     else{
//         console.log("and it is not raining")
//     }
// }


// var x = 10;
// if(x == 5){
//     console.log("equal to 5")
// } else{
//     console.log("not equal to 5")
// }


// var x = "5";
// if(x === "5"){
//     console.log("equal to 5")
// } else{
//     console.log("not equal to 5")
// }


// var rain = true;
// var chata = true;
// if(rain == true && chata == true){
//     console.log("ami baire jabo")
// } else{
//     console.log("jabona baire")
// }


// var rain = true;
// var chata = true;
// if(rain == false || chata == true){
//     console.log("ami baire jabo")
// } else{
//     console.log("jabona baire")
// }


// var x = 10;
// var y = 4;
// var multiple = x*y;
// // console.log(x*y);
// // console.log(multiple);
// // console.log(x/y);
// console.log(x%y);


// var x = 7;
// var y = 11;
// var remainder = x%y;
// // console.log(x*y);
// // console.log(multiple);
// // console.log(x/y);
// console.log(remainder);


// abul biye korbe...per bus e seat ache 50jon...per car e 11jon...bakira rickshaw te jabe,per person 70tk kore...rickshaw vara koto asbe??
// var people = 176;
// var peopleForCar = people % 50;
// var peopleForRickshaw = peopleForCar % 11;
// var rickshawVara = peopleForRickshaw * 70;
// console.log(rickshawVara)


// ternary operator
// var raining = true;
// if(raining == true)
//     console.log("ami baire jabona");
// else
//     console.log("jabo baire");


// var raining = true;
// raining == true ? console.log("ami baire jabona") : console.log("jabo baire")


// var age = 25;
// var hasLicense = true;
// if(age>=18){
//     if(hasLicense == true){
//         console.log("ÿou are adult with license")
//     } else{
//         console.log("adult but no license")
//     }
// }
// else{
//     console.log("you are Baccha")
// }


var age = 25;
var hasLicense = false;
age >= 18 ? hasLicense == true ? console.log("ÿou are adult with license") : console.log("adult but no license") : console.log("you are Baccha")
