var isPalindrome = function(s) {
    // first we need to split the string removing all non letters/numbers
    s = s.replace(/[^0-9A-Z]+/gi,"").toLowerCase();   
    
    // edge case
    if(s.length < 2){
        return true;
    }
    
    // two pointers: one at start and one at the end
    var pointer1 = 0;
    var pointer2 = s.length - 1;
    
    // while they havent reached in the center 
    // check if the start and end chars are equal
    while(pointer1 < pointer2){
        
        // not equal that means 
        // NOT palindrome
        if(s[pointer1] !== s[pointer2]){
            return false;
        }
        
        // update pointers to further check
        pointer1++;
        pointer2--;
    }
    
    return true;
};