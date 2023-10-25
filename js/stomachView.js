function stomachView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   <!-- <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img> -->
    <div class="treningsInfo">Stomach <p> Mageøvelse går her
     </div>
    
     <iframe class="videoDisplay" width="632" height="355.5" src="https://www.youtube.com/embed/RKqb61-zTyY" title="Best 7 ABS Exercises For SIX PACK - Gym Body Motivation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <div class="prevArrow" id="prevArrow"></div>
    <div class="nextArrow" id="nextArrow"></div>

    </div>
    `;
}

