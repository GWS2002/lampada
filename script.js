function changeImage() {
    if (
      document.getElementById("imagem").src ===
      "https://i.postimg.cc/KjK1wL3c/bulb-off.png"
    ) {
      document.getElementById("imagem").src =
        "https://i.postimg.cc/6QyTynzr/bulb-on.png";
      document.getElementById("switch").innerHTML = "Desligar";
      document.getElementById("main").classList.remove("desligar");
      document.getElementById("main").classList.add("ligar");
    } else if (
      document.getElementById("imagem").src ===
      "https://i.postimg.cc/6QyTynzr/bulb-on.png"
    ) {
      document.getElementById("imagem").src =
        "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
      document.getElementById("switch").innerHTML = "Ligar";
      document.getElementById("main").classList.add("desligar");
      document.getElementById("main").classList.remove("ligar");
    }
  }
  
  document.getElementById("switch").addEventListener("click", changeImage);
  