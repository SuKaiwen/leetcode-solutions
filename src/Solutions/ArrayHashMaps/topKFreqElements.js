// sort the numbers
const sortNums = function(nums){
    return nums.sort((a,b) => a - b);
}

// basic solution:
// first sort the number array
// then while we havent found the k most freq elements
// go through the sorted array and find the most freq element
// add that to the final arr
// pop those elements and repeat

var topKFrequent = function(nums, k) {
    var sortedNums = sortNums(nums);
    var newArr = [];
    
    while(k > 0){
        var max_count = 0;
        var prev = sortedNums[0];
        var count = 1;
        var most_freq = sortedNums[0];

        // code to find most freq number
        for(var i = 1; i < sortedNums.length; i++){
            if(sortedNums[i] === prev){
                count++;
                prev = sortedNums[i];
                if(count > max_count){
                    max_count = count;
                    most_freq = sortedNums[i];
                }
            }else{
                count = 1;
                prev = sortedNums[i];
            }
        }
        
        newArr.push(most_freq);
        
        // pop most freq number
        for(var i = 0; i < sortedNums.length; i++){
            if(sortedNums[i] === most_freq){
                sortedNums.splice(i, 1);
                i--;
            }
        }
        
        k--;
    }
    
    return newArr;
};