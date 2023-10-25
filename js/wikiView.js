
function wikiPage(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <!-- knapp for å gå tilbake til mainPage -->
    <button class="wikiExitButton"onclick="mainPage()">X</button>
    <span class="wikiSpan">Main Page</span>
    <p>
    

    <div class="wikiSelectionText">
    <div>What is the focus of your workout?</div>
    <p>
    <div id="shoulderDiv" onclick="shoulderView()">shoulders</div>
    <div id="armDiv" onclick="armView()">arms</div>
    <div id="chestDiv" onclick="chestView()">chest</div>
    <div id="stomachDiv"onclick="stomachView()">stomach</div>
    <div id="kneeDiv"onclick="kneeView()">knees</div>
    <div id="legDiv"onclick="legView()">legs</div>
    </div>

    <div class="image-container">
    <h1 class="wikiHeader">MuscleWiki</h1>

    <!-- usynlige div'er for å trykke på deler av kroppen -->
    <img class="wikiBody"src="anatomy-charts-human-body-muscle-systems-skeletal(beskjært).jpg"><img>
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

