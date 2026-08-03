class Solution {
    public String reverseWords(String s) {
        String[] arr = s.trim().split(" ");

        List<String> result = new ArrayList<>();

        for(String str:arr)
            {
                String init = str.trim();
                if(!init.isEmpty())
                    result.add(init);
            }
        
        Collections.reverse(result);
        
        return String.join(" ",result);
    }
}