import java.util.HashMap;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int result = 0;
        int L = 0 , R = 0;
        Set<Character> set = new HashSet<>();
        while(R<s.length())
            {
                
                while(set.contains(s.charAt(R)))
                    {
                        set.remove(s.charAt(L));
                        L++;
                    }
                set.add(s.charAt(R));
                    
                result = Math.max(result , R-L+1);
                R++;
            }
        return result;
    }
}