### [Top K Frequent Elements (Medium)](https://leetcode.com/problems/subsets/)

#### Оригинальное условие:
Given an integer array ``nums`` and an integer ``k``, return the ``k`` most *frequent elements*. You may return the answer in **any order**.

##### Перевод: 
На вход приходит *массив* ``nums`` и число ``k``. Функция должна возвращать ``k`` число самых повторяющихся элементов в формате *массива*. Порядок возможных подмассивов может быть в **любом порядке**. 

****
##### Примеры: 
```js
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```
```js
Input: nums = [1], k = 1
Output: [1]
```

##### Ограничения: 

```js
1)  1 <= nums.length <= 10^5 // Длинна входного массива от 1 до 10 чисел.
2)  k is in the range [1, the number of unique elements in the array]. // Диапазон чисел во входном массиве от -10 до 10
3)  It is guaranteed that the answer is unique. // Все числа во входном массиве уникальны
```

<details>
  <summary><b>Моё первое решение:</b></summary>
  
```javascript
var topKFrequent = function (nums, k) {
  const numsMap = nums.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const keys = Object.keys(numsMap).sort((a, b) => numsMap[b] - numsMap[a]);

  return keys.reduce((acc, cur, i) => {
    if (i < k) {
      acc.push(cur);
    }
    return acc;
  }, []);
};
```

*Первое решение, O(n log n). Есть решение O(n), я его не нашел, но разобрал у тех кто нашел*
  
</details>
