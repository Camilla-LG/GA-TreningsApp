
function kneeView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   
    <div class="treningsInfo"> <h1>Knees</h1><p> 
    <ul>
    <li>Box Jumps: Hopp opp på en boks eller plattform og land mykt, deretter hopp ned igjen og gjenta </li>
    <li>Leg Press: Dette kan utføres på en maskin på treningssenteret. Sitte og dytte vekter vekk med bena. Pass på å bruke passende vekter og teknikk for å unngå belastning på knærne.</li>
    <li>Knebøy: Stå med føttene litt bredere enn skulderbredde, senk kroppen som om du setter deg på en stol ved å bøye knærne og senke hofta. Vær oppmerksom på å holde ryggen rett under øvelsen.</li>
    </ul>
     </div>
    
    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/RzL-mqiQW8M" title="Exercises for Knee Pain Relief" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/RzL-mqiQW8M"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_q_-adYzkh0"></div>

    </div>
    `;
}

