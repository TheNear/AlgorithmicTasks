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
const permute = (nums) => {
  if (nums.length < 2) return [nums];
  let flatIndex = nums.length - 2 > 0 ? nums.length - 2 : 0;
  const subPermute = (tail, head) => {
    if (tail.length < 2 ) return head ? head.concat(tail) : tail;
    return tail.reduce((acc, cur, i, arr) => {
      const arrTail = [...arr];
      const arrHead = head ? head.concat(arrTail.splice(i, 1)) : arrTail.splice(i, 1);
      acc.push(subPermute(arrTail,arrHead));
      return acc;
    }, []);
  }
  return subPermute(nums).flat(flatIndex);
};
```

*Это решение оказалось довольно сложным, мне оно особо не понравилось, но это первое решение.*
  
</details>
