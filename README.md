Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

Ademruimte en inspringen
In mijn HTML-bestand maak ik gebruik van ademruimte (witruimte) en inspringen (indentatie) om de code overzichtelijk, leesbaar en logisch gestructureerd te houden.

Ademruimte (witruimte)

Ik gebruik lege regels om verschillende onderdelen van mijn pagina van elkaar te scheiden. 
Dit zorgt ervoor dat je snel ziet waar een nieuw onderdeel begint en eindigt.

Bijvoorbeeld: ik heb witregels tussen mijn <header>, <main> en <footer> geplaatst:

</header>

<main>
    ...
</main>

<footer class="footer">
    ...
</footer>


Ook binnen mijn <main> gebruik ik ademruimte om secties te scheiden, 
zoals tussen de media gallery en de productinformatie:

<section class="media-gallery">
    ...
</section>

<section class="item-image-parent">
    ...
</section>


Dit maakt de structuur van mijn pagina duidelijker.

Inspringen (indentatie)

Ik gebruik inspringen om te laten zien welke elementen in andere elementen zitten.
Elk genest element springt een stukje naar rechts. Zo is direct te zien wat bij elkaar hoort.

Bijvoorbeeld in mijn navigatie:

<nav class="nav" id="nav">
    <ul>
        <li><a href="index.html">Sporten</a></li>
        <li><a href="#">Heren</a></li>
        <li><a href="#">Dames</a></li>
    </ul>
</nav>


Hier zie je:
<li> zit in <ul>
<ul> zit in <nav>

## Voorbeeld bij mijn productinformatie

Ook bij mijn productinformatie gebruik ik duidelijke inspringing:

<section class="select-items">

    <section class="change-color">
        ...
    </section>

    <section class="change-size">
        ...
    </section>

    <section class="description">
        ...
    </section>

</section>


Hierdoor zie je meteen dat deze drie onderdelen bij select-items horen.

Waarom ik dit doe

Door ademruimte en inspringen te gebruiken:
Is mijn code overzichtelijker
Kan ik sneller fouten vinden
Begrijp ik beter welke onderdelen bij elkaar horen
Is mijn code makkelijker te lezen voor anderen
Dit is vooral belangrijk bij grotere pagina’s zoals deze productpagina met veel verschillende onderdelen.


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


