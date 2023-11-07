function chestView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   <!-- <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img> -->
    <div class="treningsInfo">Chest <h1>Chest</h1><p>If you want to build strong chest muscles, there is no way you can ignore the chest press exercise. In fact, it is one of the basic exercises that gym trainers suggest adding to the chest workout when you are just starting out. 

    Maintaining the proper form is a must while doing the chest press exercise. Otherwise, you might end up putting pressure on various muscle groups in your body.
    <ul style="font-size: 14px">
    <li>Pectorals: The pectoralis major is the superior most and largest muscle of the anterior chest wall. It is a thick, fan-shaped muscle that lies underneath the breast tissue and forms the anterior wall of the axilla.</li>
    <li>Deltoids: The thick muscle forming the rounded contour of the outer edge of the shoulder and acting to raise the arm</li>
    <li>Triceps: The main function of triceps brachii is extension of the forearm at the elbow joint. In addition, its long head contributes to the extension and adduction of the arm at the shoulder joint.</li>
    <li>Serratus Anterior: The serratus anterior is a muscle of the anterior chest wall. It forms the medial border of the axilla region. Attachments: The muscle consists of several strips, which originate from the lateral aspects of ribs 1-8. surface of the medial border of the scapula.</li>
    <li>Biceps: The biceps  is a large muscle that lies on the front of the upper arm between the shoulder and the elbow.</li>
    </ul>
    </div>

    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/mv42SYX9A3U" title="7 Huge chest exercises ( fastest )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/mv42SYX9A3U"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_q_-adYzkh0"></div>

    </div>
    `;
}

