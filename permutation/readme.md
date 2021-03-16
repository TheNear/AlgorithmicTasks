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
  
</details>
