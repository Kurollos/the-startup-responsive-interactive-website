Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

Ademruimte en inspringen
Ademruimte in HTML

In mijn HTML heb ik bewust gebruikgemaakt van ademruimte en consistent inspringen. Dit maakt de code overzichtelijk, makkelijker leesbaar en eenvoudiger te onderhouden.

Ademruimte:
Lege regels gebruik ik om onderdelen visueel van elkaar te scheiden, zodat je ziet waar een element begint en eindigt.

Voorbeeld uit de header:

<img src="Assets/decathlon.png" alt="decathlon" id="logo">

<!-- Hamburger knop -->
<button class="hamburger" id="hamburger">☰</button>

<nav class="nav" id="nav">
    <ul>
        <li><a href="index.html">Sporten</a></li>
        <li><a href="#">Heren</a></li>
        <li><a href="#">Dames</a></li>
    </ul>
</nav>


Hier zie je:
Lege regels tussen logo, knop en navigatie
Commentaar om onderdelen te verduidelijken
Geen opeengepakte code

Inspringen:
Inspringen laat zien welke elementen bij elkaar horen. Elk genest element springt één niveau verder in.

Voorbeeld navigatie:

<nav class="nav" id="nav">
    <ul>
        <li><a href="index.html">Sporten</a></li>
        <li><a href="#">Heren</a></li>
        <li><a href="#">Dames</a></li>
    </ul>
</nav>


Door inspringen is direct zichtbaar dat <li> elementen onderdeel zijn van <ul>, en <ul> onderdeel is van <nav>.

Ademruimte in main en footer:

Ik gebruik lege regels tussen secties zoals .media-gallery en .item-image-parent

In de footer zijn nav, social buttons en newsletter duidelijk gescheiden

Volgorde en nesten van CSS selectors
Structuur van CSS

Mijn CSS volgt dezelfde volgorde als de HTML:

Header

Main / Productinformatie

Buttons

Tab-panes / Extra info

Footer

Social buttons

Responsive media queries

Waarom dit handig is:

Sneller vinden van code die bij een bepaald onderdeel hoort

CSS is overzichtelijk

Voorkomt dat selectors per ongeluk overschreven worden

Voorbeeld uit de header:

/* ========== HEADER ========== */
header {
    padding: 15px 20px;
    border-bottom: 1px solid #dddddd;
    background: #ffffff;
}

#logo {
    max-width: 160px;
    margin-bottom: 15px;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline-block;
    margin-right: 15px;
    font-size: 14px;
}

nav ul li a {
    text-decoration: none;
    color: #1a1a1a;
}

nav ul li a:hover {
    color: #0082c3;
}

Nesting van selectors

Nesting gebruik ik om aan te geven dat een selector onderdeel is van een groter geheel:

.nav ul {
    display: flex;
    gap: 1em;
}

.thumb-box img {
    border: 1px solid #dddddd;
    padding: 5px;
    background: #f5f5f5;
}


.nav ul hoort bij navigatie

.thumb-box img hoort bij .thumb-box

Nesten van media queries
Mobile First principe

Mijn CSS is Mobile First opgebouwd:

Basisstijl geldt voor mobiele schermen

Media queries pas ik toe voor grotere schermen

Structuur media queries

Tablet: @media (min-width: 390px)

Desktop: @media (min-width: 769px)

Mobiele navigatie: @media (max-width: 768px)

Voorbeeld tablet (min-width 390px):

@media (min-width: 390px) {
    nav {
        flex-direction: row;
        gap: 0.5rem;
    }

    nav button {
        width: auto;
    }
}


Voorbeeld desktop (min-width 769px):

@media (min-width: 769px) {
    section ul li img {
        width: 70%;
    }
}


Voorbeeld mobiel hamburger menu (max-width 768px):

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


Waarom nesting van media queries:

Media query staat direct bij de selector die wordt aangepast

Overzichtelijk en makkelijker te debuggen

Naamgeving
HTML

ID’s voor unieke elementen:

<img src="Assets/decathlon.png" alt="decathlon" id="logo">
<input type="search" id="site-search" name="q" placeholder="Zoeken...">


Classes voor groepen of herbruikbare onderdelen:

<section class="media-gallery">
    <img src="Assets/Picture 5.png" alt="De vijfde Skipully foto" class="item-image-main">
</section>

<li><img src="Assets/Picture 1.png" alt="Thumbnail 1" class="thumbnail"></li>

CSS

Class-namen corresponderen met HTML

Samengestelde woorden gescheiden met -

Unieke elementen met ID’s:

.item-image-main { width: 50%; height: 400px; }
.thumbnail.active { border-color: #007BFF; }
.round-black-btn { background: #0082c3; color: #ffffff; }

JavaScript
Variabelen en functies in camelCase
Klassen uit CSS gebruikt in JS

let prevButton = document.querySelector('.media-gallery-button:first-of-type');
let nextButton = document.querySelector('.media-gallery-button:last-of-type');
let mainImage = document.querySelector('.item-image-main');
let thumbnails = document.querySelectorAll('.thumbnail');
let currentIndex = 4;

function updateGallery() {
    mainImage.classList.add('fade-out');
    // update logic
}


Voordeel:
Samenhang tussen HTML, CSS en JS duidelijk
Classes hebben dezelfde naam in alle bestanden
Makkelijk onderhoudbaar en leesbaar

Samengevat
Bestand	Naamgevingsstijl	Voorbeeld
HTML	Semantische IDs en classes	id="logo", class="thumbnail"
CSS	Logische class-namen, scheiding met -	.item-image-main, .round-black-btn
JS	CamelCase variabelen/functies, gebruik CSS classes	currentIndex, updateGallery(), .active

Conclusie:
Door consistente naamgeving, ademruimte, inspringen en een logische CSS-structuur blijft mijn code overzichtelijk, onderhoudbaar en eenvoudig te begrijpen voor anderen.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


