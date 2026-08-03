import java.util.*;

class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals,(a,b)->a[0]-b[0]);
        
        int[] prev = intervals[0];
        List<int[]> result = new ArrayList<>();

        for(int i=1;i<intervals.length;i++)
            {
                int[] curr = intervals[i];
                
                if(curr[0] > prev[1])
                    {
                        //we can put prev in result
                        result.add(prev);
                        prev = curr;
                    }
                else
                    {
                        //overlap
                        prev[1] = Math.max(prev[1],curr[1]);
                    }

            }
        //add last interval
        result.add(prev);

        return result.toArray(new int[result.size()][]);
    }
}