function showInfo(anime) {
    const popup = document.getElementById("popup");
    const text = document.getElementById("infoText");

    let info = "";

    if (anime === "Yosuga no sora") {
        info = "Yosuga no Sora bercerita tentang dua saudara kembar Kasugano Haruka dan Kasugano Sora. Mereka menjadi yatim piatu setelah orang tua mereka meninggal dalam kecelakaan mobil yang tragis. Dari kehidupan di perkotaan yang penuh hiruk pikuk, mereka harus pindah ke rumah peninggalan kakek dan nenek mereka di pedesaan.";
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
