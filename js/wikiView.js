function wikiPage(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <!-- knapp for å gå tilbake til mainPage -->
    <button onclick="mainPage()">X</button>
    <span>Main page</span>

    <div class="image-container">
    <h1>MuscleWiki</h1>

    <!-- usynlige div'er for å trykke på deler av kroppen -->
    <img class="wikiBody"src="https://www.researchgate.net/profile/Yossi-Nagar/publication/352817535/figure/fig3/AS:1040001202675714@1624967017421/Completeness-diagram-of-the-skeleton-Drawing-by-Y-Nagar.ppm"><img>
    <div class="leftShoulder"id="shoulderDiv" onclick="shoulderView()">shoulder</div>
    <div class="rightShoulder"id="shoulderDiv" onclick="shoulderView()">shoulder</div>
    <div class="leftArm"id="armDiv" onclick="armView()">arm</div>
    <div class="rightArm"id="armDiv" onclick="armView()">arm</div>
    <div class="chest"id="chestDiv" onclick="chestView()">chest</div>
    <div class="stomach"id="stomachDiv"onclick="stomachView()">stomach</div>
    <div class="leftKnee"id="kneeDiv"onclick="kneeView()">knee</div>
    <div class="rightKnee"id="kneeDiv"onclick="kneeView()">knee</div>
    <div class="leftLeg"id="legDiv"onclick="legView()">leg</div>
    <div class="rightLeg"id="legDiv"onclick="legView()">leg</div>
    </div>
    `;
}

