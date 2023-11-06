function chestView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   <!-- <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img> -->
    <div class="treningsInfo">Chest <p> Brystøvelse går her
    </div>

    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/mv42SYX9A3U" title="7 Huge chest exercises ( fastest )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/mv42SYX9A3U"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_q_-adYzkh0"></div>

    </div>
    `;
}

