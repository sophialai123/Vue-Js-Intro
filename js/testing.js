const fun1 = function (radius) {
  return 3.14 * radius ** 2;

}

const areas = fun1(5);
console.log(areas);


const fun2 = function (area) {
  return area;
}

console.log(fun2(areas)) // pass function as argument
