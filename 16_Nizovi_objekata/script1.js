let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let blog4 = {
    title: "Uvod u JS",
    likes: 150,
    dislikes: 50
};

let blog5 = {
    title: "If naredba grananja",
    likes: 250,
    dislikes: 160
};

let user1 = {
    username: "JelenaMatejic",
    age: 27,
    blogs: [blog1, blog2, blog3],
    myLikes : function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    myLikes : function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    }
};

//ispis
console.log(user1.username);

//podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

//naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);


//1. Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
///niz korisnika
let users = [user1, user2];

// ko su autori blogova?
users.forEach(u => {
    console.log(u.username);
});

//ispisati sve naslove blogove koje su napisali autori iz niza users
users.forEach(u => {
    // u je jedan user iz niza
    let blogsU = u.blogs; //ovo su svi blogovi tekuceg korisnika
    blogsU.forEach(b => {
        console.log(b.title);
    });
});

//2. zadatak
console.log("Ispisati imena onih autora koji imaju ispod 30 godina"); 
users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});

//3. zadatak
console.log("Ispisati naslove onih blogova koji imaju više od 50 lajkova");
users.forEach(u => {
    let blogsU = u.blogs; //niz blogova tekuceg korisnika U
    blogsU.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        } 
    });

});

//4. zadatak
console.log("Ispisati sve blogove autora čiji je username StefanStanimirovic");
users.forEach(u => {
    let blogsU = u.blogs;
    if (u.username == "StefanStanimirovic") {
       blogsU.forEach(b => {
            console.log(b.title);
       });
    }
   
});

//drugi nacin
users.forEach(u => {
    if (u.username == "StefanStanimirovic") {
       u.blogs.forEach(b => {
            console.log(b.title);
       });
    }
   
});

//5. zadatak
console.log("Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali");
// 1. nacin
users.forEach(u => {
    let sumaLajkovaU = 0; //suma lajkova jednog user-a
    //krecem se od bloga do bloga usera u
    u.blogs.forEach(b => {
        sumaLajkovaU += b.likes;
    });
    if (sumaLajkovaU > 200) {
        console.log(u.username);
    }
});

//2. nacin
//kreirali smo metode u user1 i user 2
users.forEach(u => {
    if (u.myLikes() > 200) {
        console.log(u.username);
    }
});
 

//6. zadatak
console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena");
//jelena likes: 30 + 50 + 70
// stefan likes; 150 + 250
//globalni prosek likes: zbir jeleninih i stefanovih podeljeno sa 5 = 550/5 = 110
// jelenin prosek lajkova (30 + 50 + 70)/3= 50
//stefanov prosek lajkova 200
// (jelenin prosek + stefanov prosek) / 2 = 125

let globalAvgLikes = arr => {
    let globalSum = 0; // suma svih lajkova svih korisnika
    let globalBr = 0; //broj blogova svih korisnika
    arr.forEach(u => {
        globalSum += u.myLikes(); // dodaj koliko je pojedinacni korisnik ima lajkova na svim svojim blogovima
        globalBr += u.blogs.length; // dodaj koliko je pojedinacni korisnik ima blogova
    });
    return globalSum / globalBr;
}
console.log(`globalan prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviSaNatprosecnoLajkova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > globalAvg) {
                console.log(b.title);
            }
        });
    });
}
console.log(`ispis naslov blogova sa natprosecnim brojem lajkova`);
blogoviSaNatprosecnoLajkova(users);