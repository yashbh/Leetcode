/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let arr = new Array(1001).fill(0);

    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }




    let first, second;

    for (let i = 1000; i >= 1; i--) {
        if (arr[i] !== 0) {
            if(!first && !second && arr[i]>=2)
                {
                    first = i;
                    second = i;
                    break;
                }
            if (!first) {
                first = i;
                arr[i]--;
            }
            else if (!second) {
                second = i;
                arr[i]--;
            }
        }
    }

    return (first - 1) * (second - 1);
};