document.addEventListener('DOMContentLoaded', function() {
    // Hier füge den Code für das Popup hinzu
    showPopup();
});

function showPopup() {
    // Hier kannst du den Popup-Inhalt definieren
    var popupContent = "Willkommen! Dies ist eine Dummy Web-Applikation und dient nur der Veranschaulichung, daher sind viele Funktionen nicht implementiert <br> <br> Um die Webseite als App auf dem Smartphone zu sehen, teste sie im responsiven Design-Modus deines Browsers. <br><br> Unter Firefox: F12 dann das Smartphone-Symbol unten rechts";

    // Hier wird das Popup erstellt
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = popupContent;

    // Füge das Popup zum Body der Webseite hinzu
    document.body.appendChild(popup);

    // Schließe das Popup nach einer gewissen Zeit (z.B., 20 Sekunden)
    setTimeout(function() {
        closePopup();
    }, 20000); // 20000 Millisekunden = 20 Sekunden

    // Füge einen Event Listener für das Click-Ereignis hinzu
    popup.addEventListener('click', function() {
        closePopup();
    });
}

function closePopup() {
    // Hole das Popup-Element
    var popup = document.querySelector('.popup');

    // Überprüfe, ob das Popup-Element existiert, bevor du es entfernst
    if (popup) {
        // Entferne das Popup vom Body der Webseite
        document.body.removeChild(popup);
    }
}