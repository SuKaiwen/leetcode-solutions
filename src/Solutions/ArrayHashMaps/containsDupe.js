// My solutions
// Loops through nums
// Stores values seen in nums in arr called numsArr
// If we see a value in nums that is also in numsArr (aka already seen) return true
// Keep looping if still haven't seen dupe by end: return false

var containsDuplicate = function(nums) {
    var numsArr = []
    for(let i = 0; i < nums.length; i++){
        if(numsArr.indexOf(nums[i]) !== -1){
            return true;
        }else{
            numsArr.push(nums[i]);
        }
    }
    
    return false;
};