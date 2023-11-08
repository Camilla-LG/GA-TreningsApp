
function shoulderView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>

    <div class="treningsInfo"> <h1>Skulder</h1><p> De fleste øvelsene for skuldrene er pressøvelser og vanligvis betyr å presse vekter over eller bort fra kroppen slik som militærpress og sidhev. Andre øvelser er fronthev og stående roing.
    <p> A shoulder workout at gym is for everyone. Whether you want just good looks or you want to prevent training-related injuries, a shoulder gym workout is going to benefit you no matter what your ultimate goal is. And the best part - there are a ton of exercises that you can add to your shoulder workout. 
    When you add various shoulder exercises to your workout, you increase your chances of sticking to it. 
    <li>Militærpress: Plasser føttene i skulderbreddes avstand. Hvil stangen på forsiden av skuldrene. Ha et overhåndsgrep med god avstand mellom hendene. Stangen skal presses opp over hodet. Albueleddet skal være helt utstrakt i topposisjon. Pass på at stangen løftes rett opp, og ikke for langt ut fra kroppen. </li>
    <li>Kinesisk sidehev: Stå med føttene i hoftebreddes avstand. Hold en manual i hver hånd. Stå litt framoverlent med overkroppen. Vri manualene slik at tomlene er vendt inn mot hverandre. Når du beveger armene ut og opp til siden vrir du naturlig manualene med tomlene opp og inn mot toppen av hodet. Husk å plasser skuldrene ned og bak i topposisjon. Kom ned til startposisjon og gjenta. </li>
    </ul>
     </div>
    
    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/LWolYLEelBs" title="13 BEST SHOULDER WORKOUT AT GYM 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/LWolYLEelBs"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/5yLcLmhhjDw"></div>

    </div>
    `;
}

