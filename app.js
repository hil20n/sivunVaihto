var vaihdasivu = document.getElementById("vaihdasivubtn");
vaihdasivu.onclick = function(){
    //vaihdetaan sivuja päivittämättä sivua piilottamalla ja aktiivisoimalla osiot
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divtoka").classList.add("active");
}

var vaihdasivu2 = document.getElementById("vaihdasivubtn2");
vaihdasivu2.onclick = function(){
    //aktiivisena oleva sivu (tässä #divtoka) poistetaan näkyvistä ja aktivoidaan #divkolmas
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divkolmas").classList.add("active");
}

var vaihdasivu3 = document.getElementById("vaihdasivubtn3");
vaihdasivu3.onclick = function(){
    //jokainen sivu laitetaan erikseen (tässä palataan kotisivulle)
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divhome").classList.add("active");
}

var kotisivu = document.getElementById("kotisivu");
kotisivu.onclick = function(){
    //jokaisella sivulla olisi myös painike takaisin kotisivulle
    //piilotetaan aktiivinen sivu ja aktivoidaan kotisivu
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divhome").classList.add("active");
}