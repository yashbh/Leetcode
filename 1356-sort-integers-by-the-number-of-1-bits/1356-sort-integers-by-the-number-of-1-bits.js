/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    function countBits(num) {
        let count = 0;
        for (let i = 0; i < 32; i++) {
            if (num & (1 << i))
                count++;
        }
        return count;
    }
    arr.sort((a, b) => {
        const x = countBits(a);
        const y = countBits(b);

        if (x !== y) return x - y;
        return a - b;          // tie-breaker
    })


    return arr;

};