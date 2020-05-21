let alertBtn = document.querySelector('.alert'),
    alertDebugBtn = document.querySelector('.alert__debuger'),
    stringBtn = document.querySelector('.string'),
    numberBtn = document.querySelector('.number'),
    booleanBtn = document.querySelector('.boolean'),
    objectBtn = document.querySelector('.object'),
    undefinedBtn = document.querySelector('.undefined'),
    nullBtn = document.querySelector('.null'),

    stringStringBtn = document.querySelector('.string__string'),
    stringNumberBtn = document.querySelector('.string__number'),
    stringBooleanBtn = document.querySelector('.string__boolean'),
    stringObjectBtn = document.querySelector('.string__object'),
    stringUndefinedBtn = document.querySelector('.string__undefined'),
    stringNullBtn = document.querySelector('.string__null'),
    numberNumberBtn = document.querySelector('.number__number'),
    numberBooleanBtn = document.querySelector('.number__boolean'),
    numberObjectBtn = document.querySelector('.number__object'),
    numberUndefinedBtn = document.querySelector('.number__undefined'),
    numberNullBtn = document.querySelector('.number__null'),
    booleanBooleanBtn = document.querySelector('.boolean__boolean'),
    booleanObjectBtn = document.querySelector('.boolean__object'),
    booleanUndefinedBtn = document.querySelector('.boolean__undefined'),
    booleanNullBtn = document.querySelector('.boolean__null'),
    objectObjectBtn = document.querySelector('.object__object'),
    objectUndefinedlBtn = document.querySelector('.object__undefined'),
    objectNullBtn = document.querySelector('.object__null'),
    undefinedUndefinedBtn = document.querySelector('.undefined__undefined'),
    undefinedNullBtn = document.querySelector('.undefined__null'),
    nullNullBtn = document.querySelector('.null__null');

let logicStringBtn = document.querySelector('.logic__string'),
    logicNumberBtn = document.querySelector('.logic__number'),
    logicBooleanBtn = document.querySelector('.logic__boolean'),
    logicObjectBtn = document.querySelector('.logic__object'),
    logicUndefinedBtn = document.querySelector('.logic__undefined'),
    logicNullBtn = document.querySelector('.logic__null');

let stringType = 'String',
    numberType = 42,
    booleanType = true,
    objectType = {name:'Valentin',
              age: 22},
    undefinedType,
    nullType = null;
    
alert('Пожмякайте кнопочки');

alertBtn.onclick = function(){alert('Собственно Alert');};
alertDebugBtn.onclick = function(){
    alert('Жмяк F12');
    debugger;
    alert('ALert после debugger')};


console.log(stringType);
stringBtn.onclick = function(){
    stringType = 'New String';
    stringBtn.innerHTML = stringType;
    console.log(stringType);
};
console.log(numberType);
numberBtn.onclick = function(){
    numberType = 999;
    numberBtn.innerHTML = numberType;
    console.log(numberType)
};
console.log(booleanType);
booleanBtn.onclick = function(){
    booleanType = false;
    booleanBtn.innerHTML = booleanType;
    console.log(booleanType);
};
console.log(objectType);
objectBtn.onclick = function() {
    objectType = {name: 'Batman',
                  age: 42 };
    objectBtn.innerHTML = objectType.name;
    console.log(objectType);
};
console.log(undefinedType);
undefinedBtn.onclick = function() {
    undefinedType = 'Not undefined';
    undefinedBtn.innerHTML = undefinedType;
    console.log(undefinedType);
};
console.log(nullType);
nullBtn.onclick = function() {
    nullType = 'Not null';
    nullBtn.innerHTML = nullType;
    console.log(nullType);
};


stringStringBtn.onclick = function() {
    stringStringBtn.innerHTML = stringType + ' ' + stringType;
};
stringNumberBtn.onclick = function() {
    stringNumberBtn.innerHTML = stringType + ' ' + numberType;
};
stringBooleanBtn.onclick = function() {
    stringBooleanBtn.innerHTML = stringType + ' ' + booleanType;
};
stringObjectBtn.onclick = function() {
    stringObjectBtn.innerHTML = stringType + ' ' + objectType;
};
stringUndefinedBtn.onclick = function() {
    stringUndefinedBtn.innerHTML = stringType + ' ' + undefinedType;
};
stringNullBtn.onclick = function() {
    stringNullBtn.innerHTML = stringType + ' ' + nullType;
};
numberNumberBtn.onclick = function() {
    numberNumberBtn.innerHTML = numberType + numberType;
};
numberBooleanBtn.onclick = function() {
    numberBooleanBtn.innerHTML = numberType + booleanType;
    console.log(numberType + booleanType);
};
numberObjectBtn.onclick = function() {
    numberObjectBtn.innerHTML = numberType + objectType;
    console.log(numberType + objectType);
};
numberUndefinedBtn.onclick = function() {
    numberUndefinedBtn.innerHTML = numberType + undefinedType;
    console.log(numberType + undefinedType);
};
numberNullBtn.onclick = function() {
    numberNullBtn.innerHTML = numberType + nullType;
    console.log(numberType + nullType);
};
booleanBooleanBtn.onclick = function() {
    booleanBooleanBtn.innerHTML = booleanType + booleanType;
    console.log(booleanType + booleanType);
};
booleanObjectBtn.onclick = function() {
    booleanObjectBtn.innerHTML = booleanType + objectType;
    console.log(booleanType + objectType);
};
booleanUndefinedBtn.onclick = function() {
    booleanUndefinedBtn.innerHTML = booleanType + undefinedType;
    console.log(booleanType + undefinedType);
};
booleanNullBtn.onclick = function() {
    booleanNullBtn.innerHTML = booleanType + nullType;
    console.log(booleanType + nullType);
};
objectObjectBtn.onclick = function() {
    objectObjectBtn.innerHTML = objectType + objectType;
    console.log(objectType + objectType);
};
objectUndefinedlBtn.onclick = function() {
    objectUndefinedlBtn.innerHTML = objectType + undefinedType;
    console.log(objectType + undefinedType);
};
objectNullBtn.onclick = function() {
    objectNullBtn.innerHTML = objectType + nullType;
    console.log(objectType + nullType);
};
undefinedUndefinedBtn.onclick = function() {
    undefinedUndefinedBtn.innerHTML = undefinedType + undefinedType;
    console.log(undefinedType + undefinedType);
};
undefinedNullBtn.onclick = function() {
    undefinedNullBtn.innerHTML = undefinedType + nullType;
    console.log(undefinedType + nullType);
};
/*nullNullBtn.onclick = function() {
    nullNullBtn.innerHTML = nullType + nullType;
    console.log(nullType + nullType);
};*/


logicStringBtn.onclick = function logicString () {
    if (stringType == 'String') {
        alert('Это старый стринг');
    }
    else   {
        alert('Это новый стринг');
    }   
    console.log(logicString)
};
logicNumberBtn.onclick = function logicNumber() {
    if (numberType == 42) {
        alert('Это старый number');
    }
    else   {
        alert('Это новый number');
    }   
    console.log(logicNumber)
};
logicBooleanBtn.onclick = function logicBoolean() {
    if (booleanType == true) {
        alert('Это старый boolean');
    }
    else   {
        alert('Это новый boolean');
    }   
    console.log(logicBoolean)
};
logicObjectBtn.onclick = function logicObject() {
    if (objectType.age == 22) {
        alert('Это старый object age');
    }
    else   {
        alert('Это новый object age');
    }   
    console.log(logicObject)
};
logicUndefinedBtn.onclick = function logicUndefined() {
    if (undefinedType == undefined) {
        alert('Это undefined');
    }
    else   {
        alert('Это не undefined');
    }   
    console.log(logicUndefined)
};
logicNullBtn.onclick = function logicNull() {
    if (nullType == null) {
        alert('Это null');
    }
    else   {
        alert('Это не null');
    }   
    console.log(logicNull)
};






