document.addEventListener('DOMContentLoaded', function() {

    // Elementen selecteren
    // Selecteer de links/rechts buttons, de grote afbeelding en de thumbnails
    let prevButton = document.querySelector('.media-gallery-button:first-of-type');
    let nextButton = document.querySelector('.media-gallery-button:last-of-type');
    let mainImage = document.querySelector('.item-image-main');
    let thumbnails = document.querySelectorAll('.thumbnail');

    // Array van grote afbeeldingen (zelfde volgorde als thumbnails)
    let images = [
        'Assets/Picture 1.png',
        'Assets/Picture 2.png',
        'Assets/Picture 3.png',
        'Assets/Picture 4.png',
        'Assets/Picture 5.png'
    ];

    // Huidige index van de grote afbeelding
    let currentIndex = 4; // start met afbeelding 5

    // Functie om de grote afbeelding en de actieve thumbnail bij te werken
    function updateGallery() {
        // Grote afbeelding veranderen
        mainImage.src = images[currentIndex];

        // Randje toevoegen aan de actieve thumbnail
        thumbnails.forEach((thumb, index) => {
            if(index === currentIndex){
                thumb.classList.add('active'); // blauwe rand
            } else {
                thumb.classList.remove('active'); // rand verwijderen
            }
        });
    }

      // ---------------------------
    // Events koppelen aan buttons
    // ---------------------------
    // Klik op links-button
    prevButton.addEventListener('click', function() {
        currentIndex--;
        if(currentIndex < 0) currentIndex = images.length - 1; // terug naar laatste
        updateGallery(); // update grote afbeelding en randje
    });

    // Klik op rechts-button: ga naar volgende afbeelding
    nextButton.addEventListener('click', function() {
        currentIndex++;
        if(currentIndex >= images.length) currentIndex = 0; // terug naar eerste
        updateGallery(); // update grote afbeelding en randje
    });

     // ---------------------------
    // Events koppelen aan thumbnails
    // ---------------------------
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            currentIndex = index;
            updateGallery(); // update grote afbeelding en randje
        });
    });

    // Laat bij het laden meteen de juiste afbeelding en randje zien
    updateGallery();

});
