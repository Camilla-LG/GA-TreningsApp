function chestView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
  
    <div class="treningsInfo"> <h1>Bryst</h1>
    
    <ul>
    <li>Benkpress: Ligge på en benk og løfte en vektstang opp og ned fra brystet. Dette kan gjøres med en stang eller manualer.</li>
    <li>Dips: Bruk en dip-stativ eller to stabile overflater. Senk kroppen ned ved å bøye albuene og press deretter opp igjen.</li>
    <li>Decline Push-Ups: Gjør push-ups med føttene høyere enn hodet, for eksempel ved å plassere føttene på en lav benk. Dette fokuserer mer på nedre del av brystet.</li>
    <li>Incline Bench Press: Ligge på en benk som er vinklet oppover, og gjenta benkpressbevegelsen. Dette fokuserer mer på øvre del av brystet.</li>
    </ul>
    </div>

    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/mv42SYX9A3U" title="7 Huge chest exercises ( fastest )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/mv42SYX9A3U"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_q_-adYzkh0"></div>

    </div>
    `;
}

