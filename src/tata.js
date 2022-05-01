var isPalindrome = function(x) {
    
    if(x < 0) return false;
    if(x===0) return true;
    if(x >= -(2**31) && x<= (2**31 -1 )){
        let num = [];
        while (x > 0){
            let r = x % 10;
            num.push(r);  
            x= parseInt((x-r)/ 10);
            console.log(x);
        }
        console.log(num);
        let lastIndex = num.length - 1;
        for(let i = 0 ; i <= lastIndex; i++){
            if(num[i] !== num[lastIndex-i]){
                return false
            }
        }
    }
    return true;
};

console.log(isPalindrome(5665665));