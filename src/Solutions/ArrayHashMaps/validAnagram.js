// Custom function to sort word alphabetically
// first splits the word into char arr
// then uses the sort funciton to sort the letters alphabetically
// lastly it joins the word back together
 const sortWord = function(word){
    return word.split('').sort((a, b) => a.localeCompare(b)).join('');
}

// first we sort both words
// then we compare both words
// they should be the same arr if it is anagram as anagrams will use the same letters
var isAnagram = function(s, t) {
    
    // sorting the words
    s = sortWord(s);
    t = sortWord(t);

    // test
    console.log(s);
    
    // comparing results
    if(s === t){
        return true;
    }
    
    return false;
};