console.log("Pozdrav iz JS datoteke!");

let a = 3, b = 6;
console.log(a * b);
console.log("Pera" + "Stanković");
console.log("Pera" * "Stanković");

b = b / a;
console.log(a, b); // a = 3, b = 2
a = b * a + a; // 2 * 3 + 3 = 9
console.log(a, b); // a = 9, b = 2
b = (a - b * b) / b; // (9 - 2 * 2) / 2 = 2.5
console.log(a, b);

// a = a + 10; // 9 + 10 = 19
a += 10;
console.log(a); // a = 19
b /= a;
console.log(b);

// a = a + 1;
// a += 1;
a++;
console.log(a);

++a;
console.log(a);

let c = 5;
console.log(c++); // Prvo se iskoristi stara vrednost promenljive u izrazu, pa se onda vrednost promenljive poveća - ispisuje 5
console.log(c); // ispisuje 6

let d = 3;
console.log(++d); // Prvo se vrednost promenljive poveća za jedan, a onda se nova vrednost koristi u izrazu - ispisuje 4
console.log(d); // ispisuje 4

c = 4;
d = 3;
x = (c++) * (--d); // 4 * 2 = 8
console.log(c, d, x); // c = 5, d = 2, x = 8

console.log(7 % 2); // 7 = 3 * 2 + 1
console.log(9 % 2); // 9 = 4 * 2 + 1
console.log(6 % 2); // 6 = 3 * 3 + 0

console.log(180 % 60); // 180 = 3 * 60 + 0 mogući rezultati 0, 1, 2,...59
// (42%13)+1=1 -> (1, 2 3,... 12, 13)

console.log(365 % 7);
console.log(366 % 7);

console.log(4 ** 3); // 64

c =3;
d = c ** 3 + 1 // (3 ** 3) + 1 = 27 + 1 =28
console.log(d);