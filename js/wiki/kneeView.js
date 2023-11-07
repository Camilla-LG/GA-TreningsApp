
function kneeView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1 class="wikiHeaderText">MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
    
    <div class="treningsInfo">Knees <p> 
    <li>Lunges: Ta et skritt fremover med en fot og senk hoften til det bakre kneet er nær bakken. Press deg opp igjen til startposisjonen. Gjenta på begge sider.</li>
    <li>Leg Press: Denne øvelsen kan utføres på en maskin på treningssenteret. Du sitter og dytter vekter med føttene. Pass på å bruke passende vekter og teknikk for å unngå belastning på knærne.</li>
    <li>Step-ups: Bruk en stepkasse eller lav benk. Trinn opp med en fot og presse deg opp til du står rett på boksen, og deretter senk deg ned igjen. Gjenta på begge sider.</li>
 
     </div>
    
    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/RzL-mqiQW8M" title="Exercises for Knee Pain Relief" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/RzL-mqiQW8M"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_dE_awk1CUs"></div>

    </div>
    `;
}

