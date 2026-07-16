/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
    let prefixGcd = new Array(nums.length);
    let size = nums.length;
    prefixGcd[0] = nums[0];

    let max = nums[0];

    for (let i = 1; i < size; i++) {
        max = Math.max(max, nums[i]);
        prefixGcd[i] = gcd(max, nums[i]);
    }

    function gcd(a, b) {
        if (b == 0)
            return a;
        return gcd(b, a % b);
    }

    prefixGcd.sort((a,b)=>a-b);

    let sum = 0;

    for (let i = 0; i < Math.floor(size / 2); i++) {
        sum += gcd(prefixGcd[i], prefixGcd[size - 1 - i]);
    }

    return sum;

};

