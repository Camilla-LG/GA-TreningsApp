
function kneeView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   
    <div class="treningsInfo">Knees <h1>Knees</h1><p> Being one of the most used joints in your body, your knees get subjected to overwork and stress. Not just this, your knees also support your entire body weight. This is the reason why this, the largest and the most complex joint, often gets ridden with pain and weakness. Other reasons for this include:
    <ul>
    <li>Ageing</li>
    <li>Arthritis</li>
    <li>Injury, strain, or sprains</li>
    <li>Damaged or torn cartilage and ligaments</li>
    <li>Lack of exercise</li>
    <li>Tendonitis</li>
    <li>Repeated knee movements </li>
    </ul>
     </div>
    
    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/RzL-mqiQW8M" title="Exercises for Knee Pain Relief" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/RzL-mqiQW8M"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_q_-adYzkh0"></div>

    </div>
    `;
}

