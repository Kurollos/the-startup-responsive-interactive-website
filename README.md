Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

## Ademruimte en inspringen in mijn HTML
In mijn HTML heb ik bewust gebruikgemaakt van ademruimte en consistent inspringen. 
Dit zorgt ervoor dat mijn code overzichtelijk blijft, makkelijker te lezen is en eenvoudiger te onderhouden.

## Ademruimte
Met ademruimte bedoel ik dat ik lege regels gebruik tussen verschillende onderdelen van mijn pagina. 
Hierdoor zie je duidelijk waar een onderdeel begint en eindigt.

 Voorbeeld uit mijn header
https://github.com/Kurollos/the-startup-responsive-interactive-website/blob/17d74783f31b87df9a79d275b472f11393baa484/index.html#L12-L31

Hier heb ik:
Lege regels tussen logo, knop en navigatie
Commentaar om onderdelen te verduidelijken
Geen opeengepakte code
Dit zorgt voor rust in mijn code en maakt het sneller leesbaar.

## Inspringen
Inspringen gebruik ik om te laten zien welke elementen bij elkaar horen. Elk genest element springt één niveau verder in.

# Voorbeeld uit mijn navigatie
https://github.com/Kurollos/the-startup-responsive-interactive-website/blob/17d74783f31b87df9a79d275b472f11393baa484/index.html#L18-L30
Je ziet hier duidelijk:

<ul> zit in <nav>
<li> zit in <ul>
<a> zit in <li>

Door het inspringen is deze structuur meteen zichtbaar.

Waarom ik dit belangrijk vind is Door ademruimte en inspringen toe te passen is mijn HTML overzichtelijk en
kunnen anderen mijn code beter begrijpen en dan ziet mijn code er beter uit


## Volgorde en nesten van CSS selectors
“Ik gebruik geneste CSS selectors om de volgorde van mijn code te laten volgen zoals de HTML, waardoor stijlen overzichtelijk en makkelijk aanpasbaar zijn.

Voorbeeld uit mijn CSS:
https://github.com/Kurollos/the-startup-responsive-interactive-website/blob/17d74783f31b87df9a79d275b472f11393baa484/productpagestyle.css#L1-L19
Het laat zien de volgorde van selectors: body, img, section/header/footer/nav 
en dat houd het er meer overzichtelijker en duidelijker voor de code in de site.

Waarom ik voor nesten van css selectors gebruikt
Omdat de navigatie een duidelijk afgebakend component is op de pagina.
Alle stijlen die specifiek voor de navigatie gelden, kunnen hier worden gegroepeerd.
Zo hoef je later niet in de hele CSS te zoeken naar nav ul li a of andere subelementen.

## Nesten van media queries
Ik gebruik geneste media queries binnen componenten voor Mobile First responsive design, zodat alle responsive aanpassingen bij het juiste component staan en onderhoud eenvoudig is.”

 Voorbeelden uit mijn CSS
https://github.com/Kurollos/the-startup-responsive-interactive-website/blob/17d74783f31b87df9a79d275b472f11393baa484/productpagestyle.css#L33-L43


4. Waarom ik nesting van media queries gebruik
Deze breakpoint is gekozen voor mobiel naar desktop overgang.
Mobile First: standaard verticale navigatie voor kleine schermen (mobiel).
Vanaf 390px verandert de layout naar horizontaal, zodat de navigatie beter past bij bredere schermen.
Door de media query genest bij nav, staat alle responsive styling op één plek en blijft het overzichtelijk.

## Naamgeving

Bij dit project heb ik bewust gekozen voor duidelijke en consistente namen in HTML, CSS en JS. Doel was om de code leesbaar, begrijpelijk en onderhoudbaar te houden.

HTML

Classes en IDs beschrijven altijd het element of component waarop ze van toepassing zijn.
Voorbeeld: class="item-image-main" voor de grote productafbeelding, id="logo" voor het bedrijfslogo.
Kebab-case wordt gebruikt voor class-namen die uit meerdere woorden bestaan, bijvoorbeeld footer-menu of media-gallery-button.
Engels wordt consequent gebruikt voor alle classes en IDs, zodat het internationaal begrijpelijk blijft en aansluit bij de meeste frameworks en libraries.

CSS

Selectors volgen de HTML-structuur: eerst algemene elementen (body, img), dan componenten (header, nav, main, footer) en daarna specifieke sub-elementen (.thumbnail.active, .round-black-btn).
Mobile First: media queries zijn genest binnen het component, zoals bij nav of .item-image-main, zodat alle responsive styling overzichtelijk bij elkaar staat.
Consistentie in benaming: dezelfde naam als in HTML wordt gebruikt, zodat het makkelijk te koppelen is, bijvoorbeeld .media-gallerij of .footer-newsletter.

JS

Variabelen beschrijven het element of de functie waarvoor ze bedoeld zijn:
mainImage, thumbnails, prevButton, nextButton zijn duidelijk en beschrijven precies hun rol.
CamelCase wordt gebruikt voor variabelen en functies (updateGallery, currentIndex), omdat dit de conventie is in JavaScript.
Event listeners verwijzen altijd naar descriptive class- of ID-namen, zodat het duidelijk is welke elementen worden aangestuurd.

Voorbeelden uit de code

HTML: <ul class="media-gallerij"> – een duidelijke naam voor de thumbnaillijst.

CSS: .media-gallery-button:hover – hover effect staat bij het component, naam zegt precies waarvoor het is.

JS: currentIndex – beschrijft welke afbeelding momenteel actief is in de gallery.

Door deze conventies aan te houden, blijft de code overzichtelijk, kan een andere ontwikkelaar snel begrijpen wat elk element doet, en wordt onderhoud of uitbreiding veel eenvoudiger.

## WCAG Audit
Accessibility Audit 

Deze website is getest op toegankelijkheid volgens de WCAG-richtlijnen met behulp van Lighthouse en handmatige checks.

Resultaten
Score: 91% (Lighthouse Accessibility)
Headings & Landmarks:
Hoofdtitel: h1
Subsecties: h2 / h3
Landmarks <main> en <nav> aanwezig → snelle navigatie voor screenreadergebruikers.

Keyboard & Interactive Elements:

Navigatie met Tab werkt volledig; focus-indicatie zichtbaar (blauwe outline).
Hover-effecten voor muisgebruik zichtbaar (rood).
Knoppen en links duidelijk, beschrijven hun functie (bijv. “Add to Cart”).


Conclusie

De website is grotendeels toegankelijk:
Logische heading-structuur en landmarks.
Interactieve elementen duidelijk en focus/hover zichtbaar.
Over het algemeen goed contrast, enkele links in de footer kunnen beter.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



