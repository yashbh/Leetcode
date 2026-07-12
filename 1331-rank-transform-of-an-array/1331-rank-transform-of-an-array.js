/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let sorted = [...arr].sort((a,b)=>a-b);
    let map = new Map();
    let counter = 1;
    for(let i=0;i<sorted.length;i++)
    {
        if(i>0 && sorted[i]==sorted[i-1])
            continue;
        map.set(sorted[i],counter++);
    }
    let result = [];
    for(let i=0;i<arr.length;i++)
    {
        result.push(map.get(arr[i]));
    }

    return result;

};