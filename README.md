README – Ademruimte, Nesten en Naamgeving
Ademruimte en inspringen

In mijn HTML heb ik bewust gebruikgemaakt van ademruimte en consistent inspringen. Dit zorgt ervoor dat mijn code overzichtelijk blijft, makkelijker te lezen is en eenvoudiger te onderhouden.

Ademruimte
Met ademruimte bedoel ik dat ik lege regels gebruik tussen verschillende onderdelen van mijn pagina. Hierdoor zie je duidelijk waar een onderdeel begint en eindigt.

Voorbeeld uit mijn header:

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


Hier zie je dat er lege regels zijn tussen het logo, de knop en de navigatie. Daarnaast gebruik ik commentaar om de onderdelen te verduidelijken. Dit voorkomt opeengepakte code en zorgt voor rust en leesbaarheid.

Inspringen
Inspringen gebruik ik om te laten zien welke elementen bij elkaar horen. Elk genest element springt één niveau verder in.

Voorbeeld uit de navigatie:

<ul>
    <li><a href="index.html">Sporten</a></li>
    <li><a href="#">Heren</a></li>
    <li><a href="#">Dames</a></li>
</ul>


Hier wordt duidelijk welke elementen genest zijn binnen de <ul>. Door inspringen is de structuur meteen zichtbaar.

Ademruimte en inspringen in main en footer
Ook in <main> en <footer> gebruik ik ademruimte en nesting om de code overzichtelijk te houden, bijvoorbeeld bij de media-gallery of footer-menu:

<ul class="media-gallerij">
    <li><img src="Assets/Picture 1.png" alt="Thumbnail 1" class="thumbnail"></li>
    <li><img src="Assets/Picture 2.png" alt="Thumbnail 2" class="thumbnail"></li>
</ul>

<nav class="footer-menu">
    <ul>
        <li><a href="#">Gratis retourneren binnen 365 dagen</a></li>
        <li><a href="#">Afhalen in winkel</a></li>
    </ul>
</nav>


Door dit toe te passen blijft de HTML overzichtelijk en gemakkelijk te onderhouden.

Volgorde en nesten van CSS selectors

In mijn CSS heb ik de selectors gestructureerd volgens de volgorde van mijn HTML. Dit betekent dat de styling van de header bovenaan staat, gevolgd door het main-gedeelte, productinformatie, buttons, tab-panes, footer, social buttons en tenslotte de responsive media queries.

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

nav ul li a:hover {
    color: #0082c3;
}


Nesten van selectors
Ik gebruik nesting waar mogelijk om aan te geven dat bepaalde styling bij een groter onderdeel hoort:

.nav ul {
    display: flex;
    gap: 1em;
}

.thumb-box img {
    border: 1px solid #dddddd;
    padding: 5px;
    background: #f5f5f5;
}


Hier zie je duidelijk dat .nav ul onderdeel is van de navigatie en .thumb-box img onderdeel is van de .thumb-box. Nesting houdt de context van een selector behouden.

Nesten van media queries

Mijn CSS is opgebouwd volgens het Mobile First-principe: de basisstyling geldt voor mobiele schermen, en met media queries pas ik stijlen aan voor grotere schermen.

Structuur van media queries:

Mobiel (standaard): meeste styling buiten media queries

Tablet/medium schermen: @media (min-width: 390px)

Desktop/large schermen: @media (min-width: 769px)

Specifieke navigatie-aanpassingen: @media (max-width: 768px)

Voorbeelden:

Tablet (min-width 390px):

@media (min-width: 390px) {
    nav {
        flex-direction: row;
        gap: 0.5rem;
    }

    nav button {
        width: auto;
    }
}


Desktop (min-width 769px):

@media (min-width: 769px) {
    section ul li img {
        width: 70%;
    }
}


Mobiel – hamburger menu (max-width 768px):

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


Door media queries dicht bij de originele selector te plaatsen blijft de CSS overzichtelijk en makkelijk te debuggen.

Naamgeving

HTML
Ik gebruik semantische ID’s en class-namen om elementen duidelijk te benoemen.

ID’s voor unieke elementen: id="logo", id="price"

Classes voor groepen of herbruikbare onderdelen: class="thumbnail", class="item-image-main"

CSS
Classes zijn logisch en consistent genoemd, met koppelteken (-) om samengestelde woorden te scheiden:

.item-image-main

.round-black-btn

.thumbnail.active

JavaScript
Variabelen en functies gebruik ik in camelCase, en classes corresponderen met de CSS:

Variabelen: let prevButton, let currentIndex

Functies: updateGallery()

Classes uit CSS: .active, .fade-out

Door consistente naamgeving tussen HTML, CSS en JS blijft de code overzichtelijk en onderhoudbaar.

Samengevat

HTML gebruikt semantische ID’s en classes, bijvoorbeeld id="logo" en class="thumbnail".

CSS gebruikt logische class-namen, met koppelteken als scheiding, bijvoorbeeld .item-image-main en .round-black-btn.

JS gebruikt camelCase voor variabelen en functies, en classes uit CSS, bijvoorbeeld currentIndex, updateGallery() en .active.

Door deze conventies is de code leesbaar, samenhangend en gemakkelijk aan te passen of te debuggen.
