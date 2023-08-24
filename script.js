const article1 = document.querySelector("article:first-child")
const article1P = document.querySelector("article:first-child p")
const article2P = document.querySelector("article:last-child p")
const article2LastP = document.querySelector("article:last-child p:last-child")
const article22ndP = document.querySelector("article:last-child p:nth-child(2n)")

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



