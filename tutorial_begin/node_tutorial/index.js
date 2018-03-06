'use strict'
//console.log("hello world!");
/*
 * Hello.. this is node tutorial
 *
 */

var firstName;
firstName = 'John';

if (firstName === 'John') {
  console.log('Hello John');
} else if (firstName === 'James') {
  console.log('Hello James');
} else {
  console.log('Hello Unknown');
}

/*
for(var i=0; i<10; i++) {
  console.log(i);
}
*/

var myArr = [1,2,3,true,'John'];

/*
for(var i=0; i<myArr.length; i++){
  console.log(`${i} element is ${myArr[i]}`);
}

var i=0
while(i<myArr.length) {
  console.log(`${i} element is ${myArr[i]}`);
  i++;
}
*/

//function sayHi(name) {
//  console.log('Hi '+name);
//}

//sayHi('Kevin');

var saybye = function(name) {
  console.log('Bye '+name);
}

//saybye('Kevin');

//function callHi(func, name) {
//  func(name);
//}

// callHi(saybye,'Wood');

//myArr.forEach(function(element) {
//  console.log(element);
//});

//let variable is only available in block

function myForEach(arr, callback) {
  for(var i=0; i<arr.length; i++) {
    callback(i,arr[i]);
  }
}

myForEach(myArr,function(idx,element) {
  console.log(`${idx} element is ${element}`);
});

/*
var p1 = {
  name: 'John',
  title: 'Mr. ',
  city: 'Chicago',
  get_name: function() {
    return this.title+this.name;
  }
};

var p2 = {
  name: 'James',
  title: 'Mr. ',
  city: 'Chicago',
  get_name: function() {
    return this.title+this.name;
  }
};


console.log(p1.get_name());
console.log(p2.get_name());
*/


function Person(name, title, city) {
  this.name = name;
  this.title = title;
  this.city = city;
  this.get_name = function() {
    return this.title+this.name;
  }
}

exports.Person = Person;

var p1 = new Person('John','Mr. ','Toronto');
var p2 = new Person('James','Mr. ','Toronto');

console.log(p1.get_name());
console.log(p2.get_name());

console.log('======================');
var fs = require('fs');
//try {
//  var data = fs.readFileSync('./tmp1.txt','UTF8');
//  console.log(data);
//} catch(err) {
//  console.log(err);
//}

fs.readFile('./tmp.txt','utf8', function(err,data) {
   console.log(err);
   console.log(data);
});
console.log('comming here');


var http = require('http');
var url = "http://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json";
http.get(url, function(res) {
  var body = '';
  res.on('data', function(chunk) {
    body += chunk;
  });

  res.on('end', function() {
    body = body.replace(/\\/g,'');
    var quote = JSON.parse(body);
    console.log(quote.quoteText);
  });

});
