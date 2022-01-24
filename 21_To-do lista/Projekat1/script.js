let n = document.querySelectorAll("li");
let n1 = Array.from(n);
for (let i = 0; i < n1.length; i++) {
    n1[i].addEventListener("click", () => {
        if (n1[i].style.textDecoration == "line-through") {
        n1[i].style.textDecoration = "none";
        }
        else {
         n1[i].style.textDecoration = "line-through";
        }
    });
    
}