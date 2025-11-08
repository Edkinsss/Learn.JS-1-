// Пусто обьект ('пустой ящик') :
// let user = new Object(); - cинтаксис конструктор обьекта;
// let user = {}; - синтаксис 'литерал обьекта';

// Литералы и свойства

// let user = {
//  name : 'John',
//  age : 30
// };

// Для получения инф-ции следует обращаться к свойствам так:
// alert( user.name ); John 

// Задание 1

let user = {
    name : "John",
    surname : "Smith"
};

user.name = "Pete";
delete user.name;

// Задание 2

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Задание 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete:130
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);

// Задание 4


function multiplyNumberic(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2; 
        };
    };
};




