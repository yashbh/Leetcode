class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();

        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '{' || ch == '[')
                stack.push(ch);
            else {
                if (stack.size() > 0) {
                    char top = stack.peek();
                    if ((top == '(' && ch == ')') || (top == '{' && ch == '}') || (top == '[' && ch == ']'))
                        stack.pop();
                    else
                        return false;
                }
                else {
                    return false;
                }
            }
        }
        return stack.size() == 0 ? true : false;
    }
}