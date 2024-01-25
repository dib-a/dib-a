document.addEventListener('DOMContentLoaded', function() {
    // Hier füge den Code für das Popup hinzu
    showPopup();
});

function showPopup() {
    // Hier kannst du den Popup-Inhalt definieren
    var popupContent = "Willkommen! Um die Webseite als App auf dem Smartphone zu sehen, teste sie im responsiven Design-Modus deines Browsers.";

    // Hier wird das Popup erstellt
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = popupContent;

    // Füge das Popup zum Body der Webseite hinzu
    document.body.appendChild(popup);

    // Schließe das Popup nach einer gewissen Zeit (z.B., 10 Sekunden)
    setTimeout(function() {
        document.body.removeChild(popup);
    }, 10000); // 10000 Millisekunden = 10 Sekunden
}
