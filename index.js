// function showCode() {
//   console.log("NamaSte JavaScript");
// }

// showCode();
// console.log(a);

// var a = 10;
// var a = 100;

// let b = 100;

// b = 20;

// const ab;
// ab = 122;

// function addItemToList(list, item) {
//   return list.push(item);
// }

// const answer = addItemToList(["banana", "orange"], "mango");

// console.log(answer);

// function addAnotherList(item) {
//   let list = ["apple", "Banana"];
//   list.push(item);
//   return list;
// }
// console.log(addAnotherList("mango"));

// function lexicalScope() {
//   c();
//   function c() {
//     console.log(a);
//   }
// }
// let a = 10;
// lexicalScope();

// function helloworld() {
//   try {
//     console.log("Hello");
//   } catch (e) {
//     console.log(e.name);
//   }

//   try {
//     console.log("world");
//   } catch (e) {
//     console.log(e.name);
//   }

//   return "bye";

//   var hello = "hello";
//   let world = "world";
// }
// helloworld();

// function ReturnText() {
//   const j = 'javaScript';
//   return 'javaScript'
//   }
//   ReturnText()

// Console.log(Object.prototype.toString.call(["hello", "world"]));
// console.log(Object.prototype.toString.call({}));

//#18
// function add(x) {
//   return x + 10;
// }

// let multi = function (y) {
//   return y * 10;
// };

// console.log(add(2));
// console.log(multi(2));
// console.log(add(multi(2)));

//#17
// let name = (function () {
//   const name = "JS startup";
//   return name;
// })();

// console.log(name);
// console.log(typeof name);

// let name = "JavaScript";
// let fullName = "kranthi";

// if (name > fullName) {
//   console.log(name);
// } else {
//   console.log(fullName);
// }

//Output: kranthi kumar

// let nums = ["one", "two", "three"];
// let pets = ["dog", "cat", "fish"];

// let merged = nums.concat(pets);
// console.log(merged);

// let merged1 = [nums, ...pets];
// console.log(`Spread Operator ${merged1}`);

//TWO SUM
// let twoSum = function (nums, target) {
//   const previousValues = {};
//   console.log(previousValues);
//   for (let i = 0; i < nums.length; i++) {
//     const currentValue = nums[i];
//     console.log(currentValue);
//     const neededValue = target - currentValue;
//     console.log(neededValue);
//     const index2 = previousValues[neededValue];
//     console.log(index2);

//     if (index2 != null) {
//       console.log([index2, i]);
//       return [index2, i];
//     } else {
//       previousValues[currentValue] = i;
//       console.log(previousValues[currentValue]);
//     }
//   }
// };
// twoSum([11, 13, 7, 2], 9);

var reverse = function (x) {
  let reversed = 0;
  let negitive = x < 0;

  if (negitive) {
    x *= -1;
  }

  //1) x = 123
  //2) x = 12
  //3) x = 1
  //4) x > 0 is True
  //it runs untill x > 0
  while (x > 0) {
    //1)reversed = 0
    //1)reversed = 3
    //1)reversed = 32
    //1)reversed = 321
    reversed = reversed * 10 + (x % 10);
    console.log(reversed);
    x = Math.floor(x / 10);
    console.log(x);
  }

  //       321 > 2147483647
  if (reversed > 2 ** 31 - 1) {
    return 0;
  }
  return negitive ? reversed * -1 : reversed;
};
reverse(123);
