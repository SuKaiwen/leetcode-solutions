
// first idea: go from highest to lowest...

var maxArea = function(height) {
    
    // BRUTE FORCE (DOESNT WORK TO SOLVE LEETCODE)
    // [1, 8, 6, 2, 5, 4, 8, 3, 7]
    // [0, 1, 2, 3, 4, 5, 6, 7, 8]
    
    // some sort of forumla: (x1 - x2) * (y1 - y2)
    
//     var p1 = 0;
//     var p2 = height.length - 1;
//     var maxArea = 0;
    
//     while(p1 < height.length){
//         while(p2 > -1){
//             var lowerHeight = Math.min(height[p1], height[p2]);
//             var diff = Math.abs(p2 - p1);
//             var area = diff * lowerHeight;
            
//             if(area > maxArea){
//                 maxArea = area;
//             }
            
//             p2--;
//         }
//         p2 = height.length - 1;
//         p1++;
//     }
    
    // Same idea as before but instead of looping through all of them 
    // we need to maximise x axis area...
    // in order to maximise y axis area we keep the largest height of 
    // the p1 p2 heights...
    
    var p1 = 0;
    var p2 = height.length - 1;
    var maxArea = 0;
    
    while(p1 < p2){
        var left = height[p1];
        var right = height[p2];
        
        var lowerHeight = Math.min(height[p1], height[p2]);
        var diff = Math.abs(p2 - p1);
        var area = diff * lowerHeight;
        
        if(area > maxArea){
            maxArea = area;
        }
        
        // update p1p2
        if(left > right){
            p2--;
        }else{
            p1++;
        }
        
    }
    
    return maxArea;
    
};