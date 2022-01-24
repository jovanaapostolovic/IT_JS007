function generateImage(src) {
    let slika = document.createElement("img");
    slika.src = src;
    slika.style.width = "100px";
    return slika;
}

// export {generateImage}; 
export default generateImage; // za samo 1 export