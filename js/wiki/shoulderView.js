
function shoulderView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
    <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img>
    <div class="treningsInfo">Shoulder <p> Skulderøvelse går her
     </div>
    
    <iframe class="videoDisplay" width="632" height="355.5" src="https://www.youtube.com/embed/LWolYLEelBs" title="13 BEST SHOULDER WORKOUT AT GYM 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <div class="prevArrow" id="prevArrow"></div>
    <div class="nextArrow" id="nextArrow"></div>

    </div>
    `;
}
