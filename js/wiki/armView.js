function armView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
    <div class="treningsInfo">Arm<p>En av fordelene med å trene armer er at du ofte får sterkere rygg, skuldre og bryst med på kjøpet. Grunnen til dette er fordi mange av musklene i armene samarbeider med hele overkroppen.

    <ul>
    <li> Pushups med smalt grep 3 sett x 4-6 repetisjoner</li>
    <li> Floorpress med frivekter 2-3 sett x 8-12 repetisjoner</li>
    <li> Rullende trircepsextensions 2 sett x 10-15 repetisjoner</li>
    <li> Tricepspress- over hodet 2 sett x 10-20 repetisjoner</li>
    </ul>
    </div>
    
    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/cBSD6mQIPQk" title="Dumbbell Bicep Curl | Nuffield Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/cBSD6mQIPQk"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/WZxUiocabAE"></div>

    </div>
    `;
}

