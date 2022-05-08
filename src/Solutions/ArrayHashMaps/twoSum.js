// O(n^2) solution
// has two pointers: one at start and one at end
// moves the end one by one to the left then sums the two pointers
// if not the target keep moving end pointer to the left
// if end pointer reaches start pointer reset the end pointer to the end and move start pointer up by one
// continue...

// Assumes that there is always a solution

 var twoSum = function(nums, target) {
    var pointer1 = 0;
    var pointer2 = nums.length - 1;
    var found = false;
    var sum = 0;
    
    while(!found) {
        while(pointer2 > pointer1){
            sum = nums[pointer1] + nums[pointer2];
            if(sum === target){
                found = true;
                break;
            }else{
                pointer2--;
            }
        }
        if(!found){      
            pointer1++;
            pointer2 = nums.length - 1;
        }
    }
    
    return [pointer1, pointer2];
};