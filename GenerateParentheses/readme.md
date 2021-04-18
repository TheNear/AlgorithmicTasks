### [Generate Parentheses (Medium)](https://leetcode.com/problems/generate-parentheses/)

#### Оригинальное условие:

Given `n` pairs of _parentheses_, write a function to _generate all combinations of well-formed parentheses_.

##### Перевод:

На вход приходит `n` - число. Ваша задача написать функцию, которая сгенерирует _массив всех возможных правильных расположений пар скобок_ `()`, количество пар определяется входным числом.

---

##### Примеры:

```js
Input: n = 3;
Output: ["((()))", "(()())", "(())()", "()(())", "()()()"];
```

```js
Input: n = 1;
Output: ["()"];
```

##### Ограничения:

```js
1)  1 <= n <= 8 // Число на вход от 1 до 8
```

<details>
  <summary><b>Моё первое решение:</b></summary>
  
```javascript
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
```  
</details>
