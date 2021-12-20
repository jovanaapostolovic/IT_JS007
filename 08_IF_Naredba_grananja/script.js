console.log("If - naredba grananja")

if (true) {
    console.log("uslov je ispunjen")
}

if (false) {
    console.log("uslov je ispunjen")
}

console.log("neki kod...")

//uslovi Operatori poređenja: ==, !=, <, >, <=, >=
let a = 7;
let b = 7;
if (a == b) {
    console.log("a i b su jednake vrednosti");
}

a = 4;
b = 4;
if (a != b) {
    console.log("a i b nisu jednaki");
}

if (a < b) {
    console.log("a je strogo manje od b")
}

if (a <= b) {
    console.log("a je manje ili jednako b");
}

a = 5;
b = "3";
//c = a + b;
//console.log(c);

if(a == b) {
    console.log("a i b su jednake vrednosti");
}
// == proverava samo jednakost vrednosti (nije bitan tip)

a = 5;
b = 5;
if (a === b) {
    console.log("a i b su jednaki po vrednosti i po tipu");
}

a = "5";
b = "5";
if (a === b) {
    console.log("a i b su jednaki po vrednosti i po tipu");
}

// proverava jednakost i po tipu i po vrednosti (bitan je tip)

// da li su dve promenljive različite bilo po tipu bilo po vrednosti
a = 7;
b = "7";
if(a !== b) {
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti");
}

a = "8";
b = "7";
if(a !== b) {
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti");
}

a = "7";
b = "7";
if(a !== b) {
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti");
}

a = 7;
b = 7;
if(a !== b) {
    console.log("a i b nisu jednaki bilo po tipu, bilo po vrednosti");
}

// različiti samo po vrednosti
a = 7;
b = "8";
if (a !=b) {

}

let x = 3;
let y = 4;
let z = 5;
if(x+y == z+2) {
    console.log("x+y je jednako sa z+2");
}

//if(x = z+2) {console.log("hello");} - = dodeljuje vrednost!



