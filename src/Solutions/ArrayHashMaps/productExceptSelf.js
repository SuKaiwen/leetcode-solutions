// Idea have two arr prefix and postfix

var productExceptSelf = function(nums) {
    // Edge case of 1 return self
    if(nums.length <= 1){
        return nums;
    }
    
    // populate the arrays
    var prefix = new Array(nums.length).fill(0);
    var postfix = new Array(nums.length).fill(0);
    
    // populating prefix arr
    var pre = 1;
    for(var i = 0; i < nums.length; i++){
        prefix[i] = pre;
        pre = nums[i] * pre;
    }
    
    // populating postifx arr
    var post = 1;
    for(var i = 0; i < nums.length; i++){
        postfix[nums.length - 1 - i] = post;
        post = nums[nums.length - 1 -i] * post;
    }
    
    var finalArr = [];
    
    // push first value (postfix as there are no prefix)
    finalArr.push(postfix[0]);
    
    // Add nums
    for(var i = 1; i < nums.length - 1; i++){
        finalArr.push(prefix[i] * postfix[i]);
    }
    
    // push last value (prefix as there are no postfix)
    finalArr.push(prefix[nums.length -1]);
    return finalArr;
};