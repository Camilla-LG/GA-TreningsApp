function legView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
    
    <div class="treningsInfo">Legs <p> <li>Dype step-ups: Bruk en stepkasse eller en lav benk. Trinn opp med en fot, så det andre benet følger etter. Gå helt opp og senk deg ned igjen. Gjenta på begge sider.</li>
    <li>Calf Raises: Stå med føttene flatt på bakken og løft kroppen opp på tærne. Senk deretter hælene tilbake til startposisjonen og gjenta.</li>
    <li>Kettlebell Swings: Bruk en kettlebell og sving den mellom bena dine ved å bøye deg i hofta og kneposisjon. Bruk hoftebevegelse til å svinge kettlebellen opp til skulderhøyde.</li>
     </div>
    
     <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/uYkpTWfpFHA" title="Full LEG Muscle Transformation 8 Best Exercises" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     <!-- Piler med funksjonalitet til å bytte video -->
     <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/uYkpTWfpFHA"></div>
     <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_HW0jz00Au4"></div>

    </div>
    `;
}

