function showInfo(anime) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("infoText");

    let info = "";

    if (anime === "Naruto") {
        info = "Naruto adalah anime tentang ninja yang ingin menjadi Hokage.";
    } else if (anime === "One Piece") {
        info = "One Piece menceritakan petualangan Luffy mencari harta karun.";
    } else if (anime === "Attack on Titan") {
        info = "Anime tentang manusia melawan titan raksasa.";
    }

    text.innerText = info;
    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
