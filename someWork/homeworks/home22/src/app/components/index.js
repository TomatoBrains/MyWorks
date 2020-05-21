
let arr = [100, 160, 130];
function sum () {
let sumArr = 0;
for(let i=0; i<arr.length;i++){
sumArr+=arr[i];}
return sumArr;
};
sum()


let r = ['Html','css','ffffdvtvfgctrf','kjiik'];
let b = [];
function fn(a, b){
if (a.length > b.length){return 1};
if (a.length < b.length){return -1};
if (a.length = b.length){return 0};
}
function sort(){
b = b.concat(r);
return (b.sort(fn))
}
console.log(sort())



let ulyana = {name: 'Валик', age: 0};
let valik = {name: 'Ульяня', age: 12};
let zahar = {name: 'Захар', age: 27};
let users = [ulyana, valik, zahar];
let names = users.map(funct => funct.name);
console.log (names);




