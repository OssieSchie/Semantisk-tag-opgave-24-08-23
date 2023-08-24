const article1 = document.querySelector("article:first-child");
const article1P = document.querySelector("article:first-child p");
const article2P = document.querySelector("article:last-child p");
const article2LastP = document.querySelector("article:last-child p:last-child");
const article22ndP = document.querySelector("article:last-child p:nth-child(2n)");
const article1Img = document.querySelector("article img");
const article2Img = document.querySelector("article:last-child img");
const div1 = document.querySelector("div");

// article1.textContent="lorem 2 måske?"

article1P.innerHTML += " <b>nu har jeg måske tilføjet noget tekst?</b>";
console.log(article1P.textContent);

article2P.innerHTML = "Lorem <b>ipsum dolor sit amet, consectetur adipisicing elit. Itaque</b> similique provident, ullam fugiat excepturi hic eligendi praesentium! Cum fuga <b>voluptatum delectus, laborum, facilis nostrum blanditiis corrupti</b> aliquam, officiis molestiae nemo. ";
console.log(article2P.innerHTML);

article2LastP.textContent = "måske står der noget helt tredje nu???";

// article22ndP.innerHTML = "<b>HAHAHHAAHHAHAH</b> haha ha ...";

function scaleUp(){
    article22ndP.classList.add("scaleUp");
    article22ndP.addEventListener("animationend", resetAnim);

}

function resetAnim(){
    article22ndP.classList.remove("scaleUp");
}

article22ndP.addEventListener("mouseover", scaleUp);

article1Img.src = "https://laclosette.com/wp-content/uploads/2017/10/500x300.png";
article2Img.src = "https://laclosette.com/wp-content/uploads/2017/10/500x300.png"

// div1.innerHTML

// document.createElement = "<article><img src='picsum.photos/500/300'><h2>Overskrift</h2><p>halløj</p></article>";
document.createElement = "<article><img src='picsum.photos/500/300'><h2>Overskrift</h2><p>halløj</p></article>";


