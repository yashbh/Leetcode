/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let lMax=0 , rMax=0;
    let L = 0 , R=height.length-1;
    let maxWater = 0;
    while(L<R)
        {
            maxWater = Math.max(maxWater,Math.min(height[L],height[R])*(R-L))
           if(height[L]<=height[R])
                {
                    L++;
                }
            else
                {
                    R--;
                }
           
            
        }
        return maxWater;
};