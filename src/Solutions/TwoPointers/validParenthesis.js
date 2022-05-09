
// IDEA: use stack
// basically whenever we have a closing bracket we want to check the 
// top of the stack for an opening bracket to cancel it out
// if at the end there is still items in the stack it is obv false

// if there are mismatches e.g. [} 
// it is obv false

var isValid = function(s) {
    var stack = [];
    
    s = s.split('');
    
    for(var i = 0; i < s.length; i++){
        
        if(s[i] === ")"){
            // check for (
            var recent = stack.pop();
            if(recent !== "("){
                return false;
            }
            
        }else if(s[i] === "]"){
            // check for [
            var recent = stack.pop();
            if(recent !== "["){
                return false;
            }
            
        }else if(s[i] === "}"){
            // check for (
            var recent = stack.pop();
            if(recent !== "{"){
                return false;
            }
            
        }else {
            stack.push(s[i]);
        }
    }
    
    if(stack.length > 0){
        return false;
    }
    return true;
};