

// idea: make a check dupe function and call it on all rows and cols

// check duplicate
// true if there is dupe else false
const checkDupe = function(arr){
    
    // filter out dots
    var seen = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "."){
            continue;
        }
        
        if(seen.indexOf(arr[i]) === -1){
            // not seen
            // add it in
            seen.push(arr[i]);
        }else{
            // there is a dupe
            return true;
        }
    }
    
    return false;
}

// function to get column in JS
const arrayColumn = (arr, n) => arr.map(x => x[n]);

var isValidSudoku = function(board) {
    var x = checkDupe(board[1]);
    console.log(x);
    
    // Check every row
    for(var i = 0; i < board.length; i++){
        var dupeCheck = checkDupe(board[i]);
        if(dupeCheck){
            return false;
        }
    }
    
    // Check every col
    for(var i = 0; i < board.length; i++){
        var dupeCheck = checkDupe(arrayColumn(board, i));
        if(dupeCheck){
            return false;
        }
    }
    
    // Check every square in a col
    for(var x = 0; x < 3; x++){
        
        // check every 3x3 sq in a row
        for(var i = 0; i < 3; i++){
            // [0][0] to [2][2]

            var sq = [];
            
            // 3x3 sq
            for(var j = 0; j < 3; j++){
                for(var k = 0; k < 3; k++){
                    sq.push(board[j+3*i][k+3*x])
                }
            }
            
            var dupeCheck = checkDupe(sq);
            if(dupeCheck){
                return false;
            }
        }
    }
    
    
    return true;
};