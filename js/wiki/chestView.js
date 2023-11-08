function chestView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
  
    <div class="treningsInfo">Chest <h1>Chest</h1>
    
    <p>Hvis du vil bygge sterke brystmuskler, er det ingen vei utenom brystpress-øvelsen. Faktisk er det en av de grunnleggende øvelsene som trenere på treningssentre foreslår å legge til i brysttreningen når du nettopp har begynt.</p>
    <p>Å opprettholde riktig form er et must når du gjør brystpress-øvelsen. Ellers risikerer du å legge press på ulike muskelgrupper i kroppen.</p>
    <ul style="font-size: 14px">
    <li>Pectoralis: Pectoralis major er den øverste og største muskelen på fremsiden av brystveggen. Det er en tykk, vifteformet muskel som ligger under brystvevet og danner den fremre veggen av armhulen.</li>
    <li>Deltamuskel: Den tykke muskelen som danner den avrundede konturen på utsiden av skulderen og bidrar til å løfte armen.</li>
    
    <li>Serratus Anterior: Serratus anterior er en muskel på fremsiden av brystveggen. Den danner den mediale grensen av armhulen. Fester: Muskelen består av flere strimler som har utspring fra de laterale delene av ribbeina 1-8 og overflaten av den mediale grensen av skulderbladet.</li>
    
    </ul>
    </div>

    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/mv42SYX9A3U" title="7 Huge chest exercises ( fastest )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/mv42SYX9A3U"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_q_-adYzkh0"></div>

    </div>
    `;
}

