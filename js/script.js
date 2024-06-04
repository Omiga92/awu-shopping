window.addEventListener("scroll", () => {
    let nbrScroll = window.scrollY;
    let header = document.querySelector("#header-fixed");
    let icon = document.querySelector(".fa-solid");
    if (nbrScroll > 200) {
        header.classList.add("header-fixed");
        icon.style.color = "#FFF";

    } else {
        header.classList.remove("header-fixed");
        icon.style.color = "#40464d";

    }
});