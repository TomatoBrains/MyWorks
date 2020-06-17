let a = prompt('Введите число');
function test () {
    if (a > 0) {
        alert('Больше 0')
    }
    else if (a < 0) {
        alert('Меньше 0')
    }
    else if (a == 0) {
        alert('Null')
    }
    else {
        alert('Not number');
        a = prompt('Введите число ');
    }
};
test() 

let b = prompt('Nubmer > 100');
let c = Number(b);
console.log(c);
console.log(b);
function ez () {
    /*if ( c === NaN) {
        alert('Not number');
        b = prompt('Pls Number > 100');
    };*/
    while(b < 100 && b !== null) {
        b = prompt('Pls Number > 100');
    };
    if(b > 100) {
        alert('Nice');
    };
};
ez();







