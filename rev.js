function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");
console.log(reverseString("hello"))

  // var abc1 = Symbol('welcome');
  // console.log(abc1);