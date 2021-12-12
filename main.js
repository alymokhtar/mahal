let title ="Elzero",
    des ="Elzero web school",
    date="25 / 10"
    ;
let theTitle = `
    <div class="card">
        <h3>Hello ${title}</h3>
        <p>${des}</p>
        <span>${date}</span>
    </div>
    <div class="card">
        <h3>Hello ${title}</h3>
        <p>${des}</p>
        <span>${date}</span>
    </div>
    <div class="card">
        <h3>Hello ${title}</h3>
        <p>${des}</p>
        <span>${date}</span>
    </div>
    <div class="card">
        <h3>Hello ${title}</h3> 
        <p>${des}</p>
        <span>${date}</span>
    </div>
`;
document.write(theTitle);

let a = 100;
console.log(a++);
console.log(a++);
console.log(a++);
console.log(a);
console.log(a);
console.log(a);
console.log(a);
console.log(++a);
console.log(a++);
console.log(a);
console.log(a);
console.log(++a);
console.log(a++);
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(- d * e); //2000
console.log(- d + ++e + ++f + g + --e); //173

// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400);

let num = 3;
console.log(num + num);
console.log(++num + --num - true);
console.log(num++ - num++ +num +num - --num + true);
console.log(--num * num-- - num-- - true);
console.log(++num + num + num);
console.log(num++ + num + true);

let number = "10";
console.log(+number + +number);

console.log(+number );
console.log(+number + +number);
// ----------------------------------------

//-------------from 27 to 30
let str = "Elzero";
console.log(str[0].toLowerCase());
console.log(str.charAt(0).toLowerCase());
console.log(str.slice(0, 1).toLowerCase());
console.log(str.substring(0, 1).toLowerCase());
console.log(str.substr(0, 1).repeat(3).toLowerCase());
