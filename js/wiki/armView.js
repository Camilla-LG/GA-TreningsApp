function armView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
    
    <div class="treningsInfo"> <h1>Armer</h1>
    Dumbbell bicep curl <p> Start standing with your feet shoulder-width apart holding a pair of dumbbells at your sides in a neutral grip (hands facing each other). 
    Squeeze your shoulders, abs, and glutes to create full-body tension.
    Squeeze one of your biceps to lift the dumbbell up. Move only at the elbow.
    </div>
    
    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/cBSD6mQIPQk" title="Dumbbell Bicep Curl | Nuffield Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/cBSD6mQIPQk"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/WZxUiocabAE"></div>

    </div>
    `;
}

