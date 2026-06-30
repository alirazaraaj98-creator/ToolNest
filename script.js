// Explore Button
const exploreBtn = document.querySelector(".hero button");

exploreBtn.addEventListener("click", () => {
    document.querySelector(".tools").scrollIntoView({
        behavior: "smooth"
    });
});

// Search Tools
const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    let value = search.value.toLowerCase();

    let cards = document.querySelectorAll(".tool");

    cards.forEach(card => {

        let text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

// Open Button
document.querySelectorAll(".tool button").forEach(btn=>{

btn.addEventListener("click",()=>{

alert("This tool will be available in the next update 🚀");

});

});