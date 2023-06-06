"use strict";
// let date = {year: 2022, month: 12, day: 7};
// console.log(date['year']+'-' +date['month']+'-'+date['day']);

// let obj = {
// 	'1a': 1,
// 	b2: 2,
// 	'с-с': 3,
// 	'd 4': 4,
// 	e5: 5
// };

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

// let obj = {a: 1, b: 2, c: 3};
// obj['a'] = '!';
// obj.b = '!';
// console.log (obj)

// let obj = {x: 1, y: 2, z: 3, w: 4};
// let keys = Object.keys(obj);
// console.log(Object.keys(obj).length);    //выводим длину объекта через ключи


// if ('13' == 13) {
// 	console.log('+++'); // сработает это
// } else {
// 	console.log('---');
// }

// let test;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// let lang = 'ui';
// switch (lang) {
// 	case 'ru': 
// 		console.log('русс')
// 		break;
// 	case 'en':
// 		console.log('анг');
// 		break;
// 	case 'de':
// 		console.log('нем');
// 		break;
// 		default:
// 			console.log('язык не поддерживается');
// 			break;
// }

// let age = 17;
// let adult = age >= 18 ? true: false;
// console.log(adult);

// let num = -1;
// let res = num >= 0 ? '1': '2';
// console.log(res); 

// let a = 2 ** 4;
// let b = 4 ** 2;
// let result = a == b;
// console.log(result);

// let res; // переменная объявлена снаружи

// if (true) {
// 	res = '!';
// }

// console.log(res); // выведет '!'

// let age = 17;
// let adult;

// if (age >= 18) {
// 	adult = true;
// } else {
// 	adult = false;
// }

// console.log(adult);

// let age = 18;
// let res;

// if (age >= 18) {
// 	if (age <= 23) {
// 		res = 'от 18 до 23';
// 	} else {
// 		res = 'больше 23';
// 	}
// } else {
// 	res = 'меньше 18';
// }

// console.log(res);

// let age = 17;
// let res;

// if (age >= 18) {
	
// 	if (age <= 23) {
// 		res = 'от 18 до 23';
// 	} else {
// 		res = 'больше 23';
// 	}
// } else {
// 	res = 'меньше 18';
// }

// console.log(res);

// 

// let str = [1, 2, 3];

// if (str.length == 3) {
// 	console.log(str [0] + str [1] + str [2]);
// }

// 

// let str = 'abcx';

// if (str[3] == 'x' && str[0] == 'a') {
// 	console.log('!');
// }
// let num = 54546543621;
// let last = String(num)[10];

// if (last == 0 || last == 2 || last == 4 || last == 6 || last == 8)  {
// 	console.log('четное');
// } else {
// 	console.log('нечетное');
// }

// let a = 10;
// let b = 3;

// if (a % b === 0) {
// 	console.log('делится нацело');
// } else {
// 	console.log('делится с остатком ' + a % b);
// }

// let a = 11;
// let b = 5;
// let rest = a % b;


// if (rest === 0) {
// 	console.log ('четное число');
// } else {
// 	console.log ('число нечетное с остатком'  + rest)
// }


// let a = 15;

// if (a % 3 === 0) {
// 	console.log ('делится на три')
// } else {
// 	console.log ('не делится на три')
// }

// let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

// let sum1 = num[0] + num[1] + num[2];
// let sum2 = num[3] + num[4] + num[5];

// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

// for (let i = 1; i <= 99; i+=2) {
//     console.log (i)
// }

// for (let i=100; i > 0; i--) {
//     console.log (i)
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let elem of arr) {
//     console.log (elem)
// }

// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
//     console.log (obj[key])
// }

// let i=11;
// while (i <= 33) {
//     console.log (i);
//     i++;
// }






// 108 3
// let num1 = '1';
// let num2 = '2';

// if (Number(num1) + Number(num2) === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


// 109 2
// let str = 'abcde';

// if (str[0] == 'a') {
//     console.log ('да');
// } else {
//     console.log ('нет');
// }

// 109 5
// let num = 123456;
// let rar = String(num);
// if ((rar[0] + rar [1] + rar [2]) == (rar[3] + rar[4] + rar[5])) {
//     console.log ('да');
// } else {
//     console.log ('нет');
// }

// 136 2
// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// 136 3
// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// 137 1
// for (let i =1; i <= 100; i++) {
//     console.log (i);
// }

//  137 13 
// let arr = [1, -2, 4, 7, -3, -8];
// let res = 0

// for (let elem of arr) {
//    if (elem > 0) {
//     res += elem;
//    }
// }
// console.log(res);

// 155 4
// let num = 12345;
// let arr = String(num).split('');

// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }

// console.log(sum);

// 170 5
// let sum1 = sum([1, 2, 3, 4, 5]);
// console.log(sum1);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

// 171 6
// function funk (str) {
//     let arr = str.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//     }
//  let res = arr.join(' ')
//  return res
// }
// console.log(funk('tddh tdhth tdt'))

// let p = document.querySelector('#block');
// console.log(p);
// let elem = document.querySelector('#parent input');
// console.log(elem);


//кликаешь на кнопку и в консоль выводится число
// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {
// 	console.log('1');
// });
// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', function() {
// 	console.log('2');
// });
// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	console.log('3');
// });



// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// function func() {
// 	console.log('message');
// }

// let elem = document.querySelector('#elem');
// function func1() {
// 	console.log('а');
// }

// function func2() {
// 	console.log('у');
// }

// function func3() {
// 	console.log('е');
// }
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);


// let button = document.querySelector('#button');
// button.addEventListener('mouseover', function() {
// 	console.log('привет');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('пока');
// });


// урок 247 1
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// button.addEventListener('click', function(){
//     console.log(elem.textContent);
// });

// урок 247 2
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function(){
//     elem.textContent = 'аккггргркркпегрепугрпкркор';   
// });

// урок 247 3
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// function func() {
// console.log (Number((elem.textContent)) + Number(elem1.textContent));
// }
// button.addEventListener('click', func);

// 247 4
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let non = document.querySelector('#non');
// function func() {
//     let a = (Number((elem.textContent)) + Number(elem1.textContent) + Number((elem2.textContent)));
//     non.textContent = a; 
//     }
//      button.addEventListener('click', func);

//247 5
// let elem = document.querySelector('#elem');
// function func() {
//   let a = (Number((elem.textContent)) + 1);
//   elem.textContent = a; 
//          }
//          button.addEventListener('click', func);

//247 6
// let elem = document.querySelector('#elem');
// function func() {
// let a = (elem.textContent + '!');
// elem.textContent = a; 
//    }
// button.addEventListener('click', func);

//248 1
// let elem = document.querySelector('#elem');
// function func() {
//     console.log(elem.innerHTML);
// }
// button.addEventListener('click', func);

//248 2 поменять содержимое внутри
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
//     elem.innerHTML = '<b>ktgooetkotrkyotkjt</b>';
// })

//249 пример
// let elem = document.querySelector('#elem');
// elem.type = 'submit';
// console.log(elem.id);  
// console.log(elem.type);

//249 1
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', function() {
//     console.log(elem.type);
//      })

//249 2
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', function() {
//     elem.type = 'submit';
//     console.log(elem.type);
//     })

//249 3
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('click', function() {
//     elem2.textContent = elem.href
//     console.log(elem2.textContent);
// })

//249 4
//  let elem = document.querySelector('#elem');
//  let elem1 = document.querySelector('#elem1');
//  elem1.addEventListener('click', function() {
//      elem.textContent += '(' + elem.href + ')';
//  })

//249 5
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('click', function() {
//     elem2.textContent = elem.src
// })

//249 6
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', function() {
//  elem.width = '300';
//  elem.height ='400';
// })

//249 7
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', function() {
//     elem.width = elem.width * 2;
//     elem.height =elem.height * 2;
// })

//249 8 
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function() {
//     elem.src = 'https://i.pinimg.com/originals/4a/5a/8d/4a5a8dba1f996f40e11e196807cf703d.jpg'
//     elem3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_5oC9GSveZg_iBP5gbORBgM1NZx39emoqQ_1X3zN&s'
// })

//250 1
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem1.addEventListener('click', function() {
//     elem.value = 'new text';
// })

//250 2
//250 3
//250 4
//250 5

//251 1
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = '1'
// });
// elem.addEventListener('blur', function() {
// 	elem.value = '2'
// });

//251 2
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = '19919'
// });
// elem.addEventListener('blur', function() {
// 	elem.value = Math.pow(elem.value, 2)
// });

//251 3
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = ''
// });

//ПРАКТИКА
//1
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// elem.addEventListener('blur', function() {
// elem1.textContent += ' ' + elem.value
// })

//2 (1 вариант)
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// elem5.addEventListener('click', function() {
// elem4.textContent = Number(elem1.value) + Number(elem2.value) + Number(elem3.value)
// })

//2 (2 вариант)
// let elems = document.querySelectorAll('#elem');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// elem5.addEventListener('click', function() {
// let sum = 0;
// for(let elem of elems) {
//     sum += +elem.value
// }
// elem4.textContent = sum;
// })

//3
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
//     let arr = elem.value.split('');
//     let sum = 0;
//     for (let num of arr){
//         sum += +num
//     } 
//     elem.value = sum;
// })

//4
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
//  let arr = elem.value.split(',')
//  let sum = 0;
//  for(let elem of arr) {
//     sum += +elem
//  }
//  let a = sum/arr.length;
//  elem.value = a;
// })

//5
// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem.addEventListener('blur', function() {
//     let arr = elem.value.split(' ');
//    elem1.value = arr[0];
//    elem2.value = arr[1];
//    elem3.value = arr[2];
// })

//6
// let input = document.querySelector('input');
// input.addEventListener('blur', func);
// function func(){
// let arr = input.value.split(' ');
// let stt = '';
// for (let elem of arr){
// let input1 = elem[0].toUpperCase() + elem.slice(1);
// stt += input1;
// stt += "";
// }
// input.value = stt;
//}

//6
// let input = document.querySelector('input');
// input.addEventListener('blur', function() {
//     if (this.value) {
//       this.value = this.value.split(/\s+/).map(n => n[0].toUpperCase() + n.slice(1)).join(' ');
//     }
//   });