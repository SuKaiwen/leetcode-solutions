// idea one: sort the arr and just count the longest seq
// but this is O(nlogn)

// idea two: grab a arr of conseq and add it to arr

var longestConsecutive = function(nums) {
    
    // Make new set
    const numSet = new Set();
    
    // Add all values in set
    // O(n)
    for(var i = 0; i < nums.length; i++){
        numSet.add(nums[i]);
    }
    
    var longest = 0;
    
    for(var i = 0; i < nums.length; i++){
        // check if start of seq
        // O(1) lookup time on average
        if(numSet.has(nums[i] - 1)){
            continue;
        }else{
            // start of seq
            
            var currentLength = 1;
            
            var next = true;
            var count = 1;
            
            // look for consecutive numbers using the set
            // when you can't find anymore: break and update longest
            while(next){
                next = numSet.has(nums[i] + count);
                if(next){
                    currentLength++;
                    count++;
                }
            }
            
            // end of seq
            if(currentLength > longest){
                longest = currentLength;
            }
        }
    }
    
    return longest;
};