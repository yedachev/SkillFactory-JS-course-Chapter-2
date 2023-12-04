// Модуль 2
// Задание 1
// прошлом модуле в юните «Циклы» вы выполняли следующее задание:
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее
//На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


function getEvenOddAndZero(){
    let arr = [1, '+', 3, 0, null, 6, NaN, 8, 9]
    // arr.forEach(function(item) {
    //   console.log(typeof item)
    // })
    let zeroQty = 0;
    let evenQty = 0;
    let oddQty = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if ((typeof arr[i] === 'number') && (isNaN(arr[i]) === false)) {
        if (arr[i] === 0) {
          zeroQty = zeroQty + 1
        } else {
          if (arr[i] % 2 === 0) {
            evenQty = evenQty + 1
          } else {
            oddQty = oddQty + 1
          }
        }
      }
    }
    
    if ((zeroQty === 0) && (oddQty === 0) && (evenQty === 0)) {
      console.log("В введенном массиве не было четных, нечетных чисел или нулей")
    } else {
      console.log("Количество нечетных чисел в массиве = " + oddQty)
      console.log("Количество четных чисел в массиве = " + evenQty)
      if (zeroQty !==0) {
      console.log("Количество нулей в массиве = " + zeroQty)
      }
    }
    }
    
    getEvenOddAndZero();