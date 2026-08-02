class Solution {
    public void rotate(int[] nums, int k) {
        
        k = k % nums.length;   

        reverseK(nums,0,nums.length-1);
        reverseK(nums,0,k-1);
        reverseK(nums,k,nums.length-1);
            

    }

    public void reverseK(int[] nums,int start,int end)
        {   
            while(start<end)
                {
                    int temp = nums[start];
                    nums[start] = nums[end];
                    nums[end] = temp;
                    start++;
                    end--;
                }
        }
}