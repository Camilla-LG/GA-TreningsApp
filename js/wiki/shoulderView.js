
function shoulderView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
    <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img>
    <div class="treningsInfo">Shoulder <h1> Shoulder</h1> <p> A shoulder workout at gym is for everyone. Whether you want just good looks or you want to prevent training-related injuries, a shoulder gym workout is going to benefit you no matter what your ultimate goal is. And the best part - there are a ton of exercises that you can add to your shoulder workout. 
    When you add various shoulder exercises to your workout, you increase your chances of sticking to it.
    <ul style="font-size: 15px;">
    <li>Trapezius: It connects your shoulders and supports the neck. </li>
    <li>Deltoid Muscles: This includes three types of muscles: anterior deltoid, lateral deltoid, and posterior deltoid. </li>
    <li>Pectoralis Major: Also known as pecs, these muscles cover your chest. These muscles are also responsible for connecting the chest and shoulders. </li>
    <li>Rhomboid Major: It is a back muscle that joins the spine and shoulder blades. </li>
    <li>Serratus Anterior: These muscles are present under your armpit, at the side of your chest. </li>
    <li>Serratus Anterior: These muscles are present under your armpit, at the side of your chest. </li>
    </ul>
     </div>
    
    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/LWolYLEelBs" title="13 BEST SHOULDER WORKOUT AT GYM 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/cBSD6mQIPQk"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/5yLcLmhhjDw"></div>

    </div>
    `;
}

