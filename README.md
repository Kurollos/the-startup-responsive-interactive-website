Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

README – Ademruimte, Nesten en Naamgeving
Ademruimte en inspringen

In mijn HTML heb ik bewust gebruikgemaakt van ademruimte en consistent inspringen. 
Dit zorgt ervoor dat de code overzichtelijk blijft, makkelijker te lezen is en eenvoudiger te onderhouden.

Ademruimte
Met ademruimte bedoel ik dat ik lege regels gebruik tussen verschillende onderdelen van de pagina. 
Hierdoor is direct zichtbaar waar een onderdeel begint en eindigt.
<img src="Assets/decathlon.png" alt="decathlon" id="logo">

<!-- Hamburger knop -->
```<button class="hamburger" id="hamburger">☰</button>

<nav class="nav" id="nav">
    <ul>
        <li><a href="index.html">Sporten</a></li>
        <li><a href="#">Heren</a></li>
        <li><a href="#">Dames</a></li>
    </ul>
</nav>```
Voorbeeld uit mijn header:

Hier heb ik:
Lege regels tussen logo, knop en navigatie
Commentaar toegevoegd om onderdelen te verduidelijken
Geen opeengepakte code

Volgorde en nesten van CSS selectors

In mijn CSS-bestand heb ik bewust gelet op de volgorde van mijn selectors en het nesten van elementen.
Dit zorgt ervoor dat mijn code overzichtelijk blijft en dat stijlen alleen worden toegepast op de juiste onderdelen van de pagina.

Volgorde van mijn CSS

Ik heb mijn CSS opgebouwd van algemeen naar specifiek.
Dit betekent dat ik eerst algemene stijlen definieer en daarna steeds gerichter ga stylen per onderdeel.

Bijvoorbeeld: ik begin met basisinstellingen die voor de hele pagina gelden:

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #1a1a1a;
  background: #ffffff;
}

img {
  max-width: 100%;
  display: block;
}


Daarna style ik grotere onderdelen zoals de header:

header {
  padding: 15px 20px;
  border-bottom: 1px solid #dddddd;
  background: #ffffff;
}


En vervolgens steeds specifiekere onderdelen, zoals knoppen, productinformatie en thumbnails.

Nesten van selectors

Ik gebruik geneste selectors om duidelijk te maken welke elementen bij elkaar horen.
Zo zorg ik ervoor dat stijlen alleen gelden binnen een bepaald onderdeel.

Bijvoorbeeld in mijn navigatie:

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


Hiermee geef ik aan dat:

de ul in de nav zit
de li in de ul zitten
de a-tags in de li zitten
Zo voorkom ik dat deze stijlen ook op andere lijsten op mijn pagina worden toegepast.

Voorbeeld: Media gallery
Ook bij mijn galerij gebruik ik geneste selectors:

.media-gallerij {
  display: flex;
  gap: 1em;
  list-style: none;
}

.media-gallerij li {
  width: 20%;
}

.media-gallerij img {
  width: 80%;
  height: auto;
}


Hierdoor weet ik precies welke stijlen horen bij de container, de lijstitems en de afbeeldingen.
Specifieke combinaties van selectors
Soms gebruik ik meerdere classes tegelijk om heel gericht te stylen, zoals hier:

.thumbnail.active {
  border-color: #007BFF;
}


Deze stijl geldt alleen wanneer een thumbnail actief is.
Hierdoor heb ik meer controle over het gedrag van mijn elementen.

Waarom ik dit zo heb gedaan
Door mijn CSS logisch te ordenen en selectors te nesten:
Blijft mijn code overzichtelijk
Kan ik sneller aanpassingen maken
Krijgen onderdelen geen verkeerde stijlen
Is mijn code makkelijker te begrijpen
Dit is vooral handig bij grotere pagina’s zoals mijn productpagina met veel verschillende onderdelen.

Nesten van media queries

Voor mijn Responsive Design heb ik gebruikgemaakt van media queries in CSS. Media queries zorgen ervoor dat de layout en styling van de pagina zich aanpassen aan verschillende schermgroottes, zoals mobiele telefoons, tablets en desktops.

Hoe ik mijn CSS voor Responsive Design heb opgebouwd

Standaard CSS eerst
Eerst schrijf ik de algemene stijlen voor de gehele website. Dit geldt bijvoorbeeld voor fonts, kleuren, layout van de header, footer en productpagina.

Media queries onderaan
Vervolgens plaats ik de media queries onderaan mijn CSS. Dit zorgt ervoor dat ze de standaardstijlen kunnen overschrijven wanneer het scherm kleiner of groter wordt.

Voorbeelden uit mijn CSS
Mobiel / hamburger menu (max-width: 768px)

Wanneer het scherm kleiner is dan 768px, wordt het hamburger-menu zichtbaar en verdwijnt de standaard navigatie:

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


Hiermee wordt de navigatie op mobiele schermen compact en gebruiksvriendelijk.
Kleinere aanpassingen voor kleine tablets / kleine schermen
Bij schermen vanaf 390px pas ik de richting van de nav-items aan:

@media (min-width: 390px) {
  nav {
    flex-direction: row;
    gap: 0.5rem;
  }

  nav button {
    width: auto;
  }
}

Aanpassing voor grotere schermen (desktop)

Bij schermen vanaf 769px worden sommige afbeeldingen iets aangepast om de layout beter te laten passen:

@media (min-width: 769px) {
  section ul li img {
    width: 70%;
  }
}

Waarom ik dit zo heb gedaan
Door media queries te nesten en onderaan de CSS te plaatsen:

Blijven de standaard stijlen overzichtelijk
Zijn specifieke aanpassingen voor verschillende schermgroottes makkelijk te vinden
Voorkom ik conflicten tussen mobiele en desktop-stijlen
Kan de website zich netjes aanpassen aan elk apparaat

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



