console.log("Nizovi objekata");

let blog1 = {
    title: "Osnovni HTML tagovi!",
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

let arrBlogs = [blog1, blog2, blog3];

//ispis objekata iz niza pomocu for.each prtlje
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});

arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`
});

//ispis objekata iz niza pomocu for prtlje
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i]);
    
}

for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
    
}

//promena vrednosti elementa
// blog3.title = "Napredni HTML tagovi";
// // console.log(blog3.title);
// console.log(arrBlogs);
// arrBlogs[2].title = "HTML5 tagovi";
// console.log(arrBlogs[2].title);

//Vezbanje

//1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumLikes = arr => {
    let sum = 0;

    //1.nacin
    // arr.forEach(b => {
    //     sum += b.likes;
    // });

    //2.nacin
    for (let i = 0; i < arr.length; i++) {
        //arr[i] je objekat
        //arr[i].likes je broj lajkova objekta arr[i]
        sum += arr[i].likes;
        
    }


    return sum;
}
console.log(`ukupan broj lajkova: ${sumLikes(arrBlogs)}`);

//lajkovi 1. i 3. bloga
let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;
console.log(sum13);

sum13 = arrBlogs[0]["likes"] + arrBlogs[2]["likes"];
console.log(sum13);

//2. vezbanje
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosBrL = arr => {
    let zbir = 0; //= sumLikes(arrBlogs);
    let br = 0;
    arr.forEach(e => {
        zbir += e.likes;
        br++;
    });
    return zbir / br;
}
console.log(prosBrL(arrBlogs));


//3. 
// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let moreLikes = arr => {
    arr.forEach(elem => {
        if (elem.likes > elem.dislikes) {
            console.log(elem.title);
        }
    });
}
console.log("blogovi sa vise lajkova nego dislajkova");
moreLikes(arrBlogs);

// 4. vezbanje
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploPoz = arr => {
    arr.forEach(e => {
        if (e.likes >= e.dislikes * 2) {
           console.log(e.title); 
        }
        
    });
}
duploPoz(arrBlogs);

// 5. vezbanje
//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnikUNaslovu = arr => {
    arr.forEach(e => {
        if (e.title.slice(-1) == "!") //e.title[el.title.length-1] 
        {
            console.log(e.title);
        }
    });
}
uzvicnikUNaslovu(arrBlogs);

////objekti u objektima
