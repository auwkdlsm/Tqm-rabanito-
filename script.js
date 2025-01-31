document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Yeiiiii! Gracias por decir q si 😺😺💕🫶💐";
    document.getElementById("images-container").innerHTML = `
        <img src="1imagen.png" alt="Imagen 1">
        <img src="2imagen.png" alt="Imagen 2">
        <img src="3imagen.png" alt="Imagen 3">
    `;
});

document.getElementById("noBtn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Okey, gracias 😿🫶";
    document.getElementById("images-container").innerHTML = `
        <img src="4imagen.png" alt="Imagen triste">
    `;
});

document.getElementById("maybeBtn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Hmm,esta bn, hablemos por whatsapp😺";
});