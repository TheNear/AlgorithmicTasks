/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:
  Input: n = 1
  Output: ["()"]

*/

const generateParenthesis = (n) => {
  const result = [];
  const generate = (open, close, current) => {
    if (current.length === n * 2) return result.push(current);
    if (open <= close || open < n) generate(open + 1, close, current + "(");
    if (open > close) generate(open, close + 1, current + ")");
  };
  generate(0, 0, "");
  return result;
};
