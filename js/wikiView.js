function wikiPage(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>MuscleWiki</h1>

    <!-- disse skal posisjoneres og være usynlige -->
    <div class="shoulder"id="shoulderDiv" onclick="shoulderView()">shoulder</div>
    <div class="arm"id="armDiv">arm</div>
    <div class="chest"id="chestDiv">chest</div>
    <div class="stomach"id="stomachDiv">stomach</div>
    <div class="back"id="backDiv">back</div>
    <div class="leg"id="legDiv">leg</div>

    <!-- placeholder bilde -->
    <img class="wikiBody"src="https://www.researchgate.net/profile/Yossi-Nagar/publication/352817535/figure/fig3/AS:1040001202675714@1624967017421/Completeness-diagram-of-the-skeleton-Drawing-by-Y-Nagar.ppm"><img>
    `;
}
