### [Permutations (Medium)](https://leetcode.com/problems/permutations/)

#### Оригинальное условие:
Given an *array* ``nums`` of distinct integers, return *all the possible permutations*. You can return the answer in **any order**.

##### Перевод: 
На вход приходит *массив* ``nums`` состоящий из различных чисел. Функция должна возвращать массив *со всеми возможными перетасовками этого массива*. Порядок значений с возможными перестановками может быть в **любом порядке**.

****
##### Примеры: 
```js
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```
```js
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```
```js
Input: nums = [1]
Output: [[1]]
```

##### Ограничения: 

```js
1)   1 <= nums.length <= 6 // Длинна входного массива от 1 до 6 чисел.
2)  -10 <= nums[i] <= 10 // Диапазон чисел во входном массиве от -10 до 10
3)   All the integers of nums are unique. // Все числа во входном массиве уникальны
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
