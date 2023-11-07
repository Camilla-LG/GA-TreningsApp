function legView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   <!-- <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img> -->
    <div class="treningsInfo">Legs <p> Benøvelse går her
     </div>
    
     <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/uYkpTWfpFHA" title="Full LEG Muscle Transformation 8 Best Exercises" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     <!-- Piler med funksjonalitet til å bytte video -->
     <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/uYkpTWfpFHA"></div>
     <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_HW0jz00Au4"></div>

    </div>
    `;
}

