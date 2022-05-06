var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;
  if (x >= -(2 ** 31) && x <= 2 ** 31 - 1) {
    let num = [];
    while (x > 0) {
      let r = x % 10;
      num.push(r);
      x = parseInt((x - r) / 10);
      console.log(x);
    }
    console.log(num);
    let lastIndex = num.length - 1;
    for (let i = 0; i <= lastIndex; i++) {
      if (num[i] !== num[lastIndex - i]) {
        return false;
      }
    }
  }
  return true;
};
// end is palidrom funtion

// backspace compare
var backspaceCompare = function (s, t) {
  if (s.length >= 1 && t.length < 200) {
    let isDiaz = true;
    while (isDiaz) {
      let si = s.indexOf("#");
      let ti = t.indexOf("#");
      if (ti !== -1) {
        if (ti !== 0) {
          t = t.replace(t.slice(ti - 1, ti + 1), "");
        } else {
          t = t.slice(1);
        }
      }
      if (si !== -1) {
        if (si !== 0) {
            s = s.replace(s.slice(si - 1, si + 1), "");
          } else {
            s = s.slice(1);
          }
      }
      if (si === -1 && ti === -1) {
        isDiaz = false;
      }
    }
    console.log(s, t);
    return s === t ? true : false;
  }
};




//3-number of steps problem 
var numberOfSteps = function(num) {
     if(num > 0 && num <= 10**6){
       let steps = 0;
       while(num > 0 ){
         num % 2 === 0 ? num/= 2 : num--;
         steps++;
       }
       return steps;
     }  
};

//
var twoSum = function(nums, target) {
  let solution = []
  if(nums.length <= 1 || nums.length > 10**4 || target <= -(10**9) || target >= 10**9) throw new Error('the length must be less then 10power4 and bigger then 1')
  for(let i = 0 ; i< nums.length; i++){
    if(nums[i] <= -(10**9) || nums[i] >=(10**9)) return null
     for(let j =0 ; j< nums.length; j++){
        if(nums[j] + nums[i+1] === target && i+1 !== j ){
          if(solution.length === 0){
              solution.push(i+1);
              solution.push(j);
            console.log(solution);
          }else if(j !== solution[0] && i+1 !== solution[1]){
            console.log(j , i+1)
            return 'more then one solution';
          }
        }
     }
  }
  return solution.length > 0 ? solution : null;
};



//longest palindrom

var longestPalindrome = function(s) {
    let substrings = [];
    
};


//remove all occurence from an array

// var removeElement = function(nums, val) {

//  var lastIndex = nums.length - 1;
//     if(lastIndex === 0 && nums[0] === val) return 0
//     let i=0;
//     while(lastIndex > i){
//       console.log(nums , i, lastIndex);
//       if(nums[i] === val){
//         //swipe
//         if(nums[lastIndex] !== val){
//           let x = nums[lastIndex];
//           nums[lastIndex] = nums[i];
//           nums[i] = x;
//           i++;
//         }
//       }else{
//         i++;
//       }
//       while(nums[lastIndex] === val){
//         lastIndex--;
//       }
//     }
//     console.log(nums, 'result')
//     return lastIndex+1;
// };

var removeElement = function(nums, val) {

    let i = 0; 
    while(i< nums.length){
      if(nums[i] === val ){
        nums.splice(i, 1);
      }else{
        i++;
      }
    }
    return nums.length;
};

// arr = [1]
// value = 1;
// console.log(removeElement(arr, value))

// Pascal's triangle

var generate = function(numRows) {
 
  if(numRows >30 || numRows <= 1) return [];
  var pascal = new Array(numRows);
  if(numRows === 1) {
    pascal[0] = [1]
    return pascal;
  }else{
    pascal[0] = [1];
  }
  for(var i = 1; i < numRows; i++){
    var tmpArray = new Array(i+1);
    tmpArray[0] = 1;
    tmpArray[i] = 1;
    previousArray = pascal[i-1];
     for(var j = 1 ; j < i; j++){
        tmpArray[j] = previousArray[j] + previousArray[j-1]
     }
     pascal[i] = [...tmpArray];
  }
  return pascal;
};
let a = 10;
let x = generate(a);

for(let i =0 ; i<a ; i++){
  console.log(x[i]);
}
