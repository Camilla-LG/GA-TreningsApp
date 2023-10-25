function armView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   <!-- <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img> -->
    <div class="treningsInfo">Dumbbell bicep curl <p> Start standing with your feet shoulder-width apart holding a pair of dumbbells at your sides in a neutral grip (hands facing each other). 
    Squeeze your shoulders, abs, and glutes to create full-body tension.
    Squeeze one of your biceps to lift the dumbbell up. Move only at the elbow.
     </div>
    
    <iframe class="videoDisplay" width="632" height="355.5" src="https://www.youtube.com/embed/cBSD6mQIPQk" title="Dumbbell Bicep Curl | Nuffield Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <div class="prevArrow" id="prevArrow"></div>
    <div class="nextArrow" id="nextArrow"></div>

    </div>
    `;
}

