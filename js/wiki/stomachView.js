function stomachView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
    
    <div class="treningsInfo"><h1>Mage</h1> <p>   
    <li>Crunches: Ligge på ryggen med bøyde knær og føttene flatt på bakken. Plasser hendene bak hodet eller over brystet og løft skuldrene fra gulvet ved å bruke magemusklene. Senk deg tilbake til startposisjonen uten å hvile helt på gulvet mellom gjentakelsene.</li>
    <li>Beinhev: Ligg på ryggen og løft langsomt bena opp mot taket mens du holder dem rette. Senk dem deretter kontrollert tilbake til startposisjonen uten å la dem berøre gulvet.</li>
    </div>
    
     <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/RKqb61-zTyY" title="Best 7 ABS Exercises For SIX PACK - Gym Body Motivation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     <!-- Piler med funksjonalitet til å bytte video -->
     <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/RKqb61-zTyY"></div>
     <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/32JF-IT7BLk"></div> 
    
    </div>
    `;
}

