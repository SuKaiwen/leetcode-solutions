
// idea: sorted array so we can use 1 pointer at end and start

// if sum of numbers of the two pointers are less than target
// that means we need to get larger number aka increase pointer 1

// vice versa if sum of numbers at pointers are greater
// we need lower number so decreasing pointer 2

var twoSum = function(nums, target) {
    var pointer1 = 0;
    var pointer2 = nums.length - 1;
    
    var found = false;
    var sum = 0;
    
    while(!found) {
        sum = nums[pointer1] + nums[pointer2];
        if(sum === target){
            found = true;
            break;
        }
        
        else if(sum < target){
            pointer1++;
        }else{
            pointer2--;
        }
    }
    
    return [pointer1+1, pointer2+1];
};