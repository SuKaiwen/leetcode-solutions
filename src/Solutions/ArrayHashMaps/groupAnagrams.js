// sort word function
const sortWord = function(word){
    return word.split('').sort((a,b) => a.localeCompare(b)).join('');
}

// basic idea: sort all the words in arr
// keep an arr of seen words
// loop through the sorted word list
// if NOT seen before push it into the final arr and the seen arr
// if seen before get the seen arr index and push that to the final arr's index
var groupAnagrams = function(strs) {
    var sortedStr = [];
    var finalKeepStr = [];
    var finalStr = [];
    
    strs.forEach(word => {
        sortedStr.push(sortWord(word));
    });
    
    console.log(sortedStr);
    
    for(var i = 0; i < strs.length; i++){
        if(finalKeepStr.indexOf(sortedStr[i]) === -1){
            finalKeepStr.push(sortedStr[i]);
            finalStr.push([strs[i]]);
        }else{
            finalStr[finalKeepStr.indexOf(sortedStr[i])].push(strs[i]);
        }
    }
    
    return finalStr;
};