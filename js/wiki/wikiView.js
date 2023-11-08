
function wikiPage(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <!-- knapp for å gå tilbake til mainPage -->
    <button class="wikiExitButton"onclick="mainPage()">X</button>
    <span class="wikiSpan">Hovedside</span>
    <p>
    
    <!-- tekstinnhold med valgmuligheter -->
    <div class="wikiSelectionText">
    <div class="wikiSelectionTextHeader">Planlegg din treningsøkt</div>
    <p>
    <div id="shoulderDiv"class="shoulderSelectionText" onclick="shoulderView()">Skuldre</div>
    <div id="armDiv"class="armSelectionText" onclick="armView()">Armer</div>
    <div id="chestDiv"class="chestSelectionText" onclick="chestView()">Bryst</div>
    <div id="stomachDiv"class="stomachSelectionText" onclick="stomachView()">Mage</div>
    <div id="kneeDiv"class="kneeSelectionText" onclick="kneeView()">Knær</div>
    <div id="legDiv"class="legSelectionText" onclick="legView()">Ben</div>
    </div>

    <div class="image-container">
    <h1 class="wikiHeader">MuscleWiki</h1>

    <!-- usynlige div'er for å trykke på deler av kroppen -->
    <img class="wikiBody"src="images/anatomy-charts-human-body-muscle-systems-skeletal(beskjært).jpg"><img>
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

