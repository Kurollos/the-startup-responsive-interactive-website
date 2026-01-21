Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

Ademruimte en inspringen in mijn HTML

In mijn HTML heb ik bewust gebruikgemaakt van ademruimte en consistent inspringen. 
Dit zorgt ervoor dat mijn code overzichtelijk blijft, makkelijker te lezen is en eenvoudiger te onderhouden.

Ademruimte

Met ademruimte bedoel ik dat ik lege regels gebruik tussen verschillende onderdelen van mijn pagina. 
Hierdoor zie je duidelijk waar een onderdeel begint en eindigt.

Voorbeeld uit mijn header
https://github.com/Kurollos/the-startup-responsive-interactive-website/blob/f86f248858e5deba8cae8e14fef39c6634d5f688/index.html#L12-L31


Hier heb ik:
Lege regels tussen logo, knop en navigatie
Commentaar om onderdelen te verduidelijken
Geen opeengepakte code
Dit zorgt voor rust in mijn code en maakt het sneller leesbaar.

Inspringen
Inspringen gebruik ik om te laten zien welke elementen bij elkaar horen. Elk genest element springt één niveau verder in.

Voorbeeld uit mijn navigatie
https://github.com/Kurollos/the-startup-responsive-interactive-website/blob/f86f248858e5deba8cae8e14fef39c6634d5f688/index.html#L18-L30
Je ziet hier duidelijk:

<ul> zit in <nav>
<li> zit in <ul>
<a> zit in <li>

Door het inspringen is deze structuur meteen zichtbaar.

Waarom ik dit belangrijk vind
Door ademruimte en inspringen toe te passen is mijn HTML overzichtelijk en
kunnen anderen mijn code beter begrijpen en dan ziet mijn code er beter uit


Volgorde en nesten van CSS selectors
1. Volgorde van CSS selectors

Voorbeeld uit mijn CSS:
https://github.com/Kurollos/the-startup-responsive-interactive-website/blob/f86f248858e5deba8cae8e14fef39c6634d5f688/productpagestyle.css#L23-L8

Hier zie je dat alles van de header netjes bij elkaar staat en in logische volgorde, zoals in de HTML: <header> → <nav> → <ul> → <li> → <a>.


Hier is duidelijk dat:
.nav ul onderdeel is van de navigatie
Door te nesten blijft de context van een selector behouden.

Volgorde en nesten van CSS selectors
1. Volgorde van CSS selectors


Nesten van media queries
1. Hoe ik mijn CSS heb opgebouwd voor Responsive Design



3. Voorbeelden uit mijn CSS

a) Kleine aanpassingen voor tablets (min-width 390px)

@media (min-width: 390px) {
  nav {
    flex-direction: row;
    gap: 0.5rem;
  }

  nav button {
    width: auto;
  }
}


Hier pas ik de navigatie aan voor iets bredere schermen.

flex-direction: row maakt de menu-items naast elkaar in plaats van onder elkaar.

b) Grotere schermen (min-width 769px)

@media (min-width: 769px) {
  section ul li img {
    width: 70%;
  }
}


Thumbnails worden groter weergegeven op grotere schermen

De stijlen blijven genest bij het onderdeel (section ul li img), zodat je ziet waar ze bij horen.

c) Hamburger menu voor mobiel (max-width 768px)

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    width: 100%;
    padding: 1em;
    border-bottom: 1px solid #ddd;
  }

  .nav ul {
    flex-direction: column;
    gap: 1em;
  }

  .nav.show {
    display: block;
  }
}


Hier laat ik zien dat mobiele navigatie zich aanpast:
Hamburger knop wordt zichtbaar
Menu-items worden verticaal gezet
Wanneer .nav.show wordt toegevoegd (via JS), wordt het menu zichtbaar

4. Waarom ik nesting van media queries gebruik

De media query staat bij de selector waar het bij hoort, in plaats van helemaal onderaan de CSS
Hierdoor zie je meteen welke componenten aangepast worden op verschillende schermgroottes
Het maakt de CSS overzichtelijk, onderhoudbaar en makkelijker te debuggen

Naamgeving
1. HTML

In mijn HTML heb ik duidelijke en semantische namen gebruikt voor elementen:

ID’s voor unieke elementen:

<img src="Assets/decathlon.png" alt="decathlon" id="logo">
<input type="search" id="site-search" name="q" placeholder="Zoeken...">


Class-namen voor groepen of herbruikbare onderdelen:

<section class="media-gallery">
    <img src="Assets/Picture 5.png" alt="De vijfde Skipully foto" class="item-image-main">
</section>

<li><img src="Assets/Picture 1.png" alt="Thumbnail 1" class="thumbnail"></li>


Voordelen:

Semantische structuur duidelijk voor de lezer en browser
Eenvoudig te stylen in CSS en aan te spreken in JS

2. CSS
In mijn CSS heb ik logische en consistente class- en ID-namen gebruikt die overeenkomen met de HTML.

Voorbeeld:

.item-image-main {
    width: 50%;
    height: 400px;
}

.thumbnail.active {
    border-color: #007BFF;
}

.round-black-btn {
    background: #0082c3;
    color: #ffffff;
}


Conventies die ik hanteer:

Koppel CSS selectors direct aan hun betekenis/rol (.thumbnail, .round-black-btn)
Gebruik - om samengestelde woorden te scheiden (.item-image-main)

ID’s voor unieke elementen (#logo, #price)

3. JavaScript

In JS gebruik ik beschrijvende variabelen en functies, zodat de code leesbaar is:

Variabelen:

let prevButton = document.querySelector('.media-gallery-button:first-of-type');
let nextButton = document.querySelector('.media-gallery-button:last-of-type');
let mainImage = document.querySelector('.item-image-main');
let thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 4;


Functies:

function updateGallery() {
    mainImage.classList.add('fade-out');
    // ... update logic ...
}


Conventies:

Variabelen in camelCase (prevButton, currentIndex)
Functies ook in camelCase en beschrijvend (updateGallery)\
Klassen die in CSS gebruikt worden (active, fade-out) corresponderen met JS

Voordeel:

Samenhang tussen HTML, CSS en JS is duidelijk
Je ziet direct welke classes in CSS en JS effect hebben

4. Samengevat
Bestand	Naamgevingsstijl	Voorbeeld
HTML	Semantische IDs en classes	id="logo", class="thumbnail"
CSS	Logische class-namen, scheiding met -	.item-image-main, .round-black-btn
JS	CamelCase variabelen en functies, gebruik classes uit CSS	currentIndex, updateGallery(), .active

Conclusie:
Door consistente naamgeving tussen HTML, CSS en JS blijft de code overzichtelijk en onderhoudbaar. Het vergemakkelijkt ook samenwerking en debugging, omdat de rol van elk element of variabele direct duidelijk is.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



