/*

Дан массив строк arr.
Требуется написать функцию, которая принимает произвольную строку.
Функция должна проверить, существует ли как минимум два значения в
массиве, которые являются анаграммами к переданной в функцию строке,
если такие строки существуют, тогда функция должна вернуть первую
встретившуюся в массиве строку-анаграмму.
В случае если анаграмм в массиве менее 2, необходимо вернуть null.
*/
const arr = ['asfd', 'asd', 'dsa', '1nkil', 'asd', 'fhk', 'lfd', 'link', 'link1'];

const getFirst = (str) => {
  let result;
  for (let arrStr of arr ) {
    if (arrStr.length !== str.length) continue;
    let temp = {}
    for (let j = 0; j < str.length; j++) {
      if (temp[arrStr[j]]) delete temp[arrStr[j]];
      else temp[arrStr[j]] = true;
      if (temp[str[j]]) delete temp[str[j]];
      else temp[str[j]] = true;
    }
    if (!Object.keys(temp).length) {
      if (result) {
        return result;
      }
      result = arrStr;
    }  
  }
  return null;
};


console.log(getFirst("asd"));
console.log(getFirst("link1"));
console.log(getFirst("linkd"))
