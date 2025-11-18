document.getElementById('menu-btn').addEventListener("click",
    ()=>{
        document.getElementById('drop-down').style.top="63px"; 
        document.getElementById('menu-btn').addEventListener("click",
    ()=>{
        document.getElementById('drop-down').style.top="-500px";})
})
window.addEventListener("scroll", function () {
    const section = document.querySelector(".about-me");
    const rect = section.getBoundingClientRect();
    document.getElementById('drop-down').style.top="-500px";

    // Trigger ONLY when the section is visible on screen
    if (rect.top <= window.innerHeight * 0.8) {
        section.classList.add("show");
    }
});
function revealOnScroll(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.85; 
}

window.addEventListener("scroll", () => {
    const card1 = document.getElementById("edu-card1");
    const card2 = document.getElementById("edu-card2");

    if (revealOnScroll(card1)) {
        card1.classList.add("show");
    }

    if (revealOnScroll(card2)) {
        card2.classList.add("show");
    }
});

window.addEventListener("scroll", () => {
    const section = document.querySelector(".skills");
    const bars = document.querySelectorAll(".bar div");

    const rect = section.getBoundingClientRect();
    const showPoint = window.innerHeight * 0.85;

    if (rect.top < showPoint) {
        bars.forEach(bar => {
            const targetWidth = bar.getAttribute("data-width");
            bar.style.width = targetWidth + "%";
        });
    }
});