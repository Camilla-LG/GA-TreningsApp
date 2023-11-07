function chestView(){
    document.getElementById('app').innerHTML = /*HTML*/`

    <div class="image-containerWiki">
    <h1>MuscleWiki</h1>
    <button class="wikiHeaderBackground"></button>
    <button class="wikiMenuButton"onclick="wikiPage()">X</button>
   <!-- <img class="wikiShoulder" src="https://www.shoulder-pain-explained.com/images/shoulder-bones-anatomy.png"><img> -->
    <div class="treningsInfo"> chest <h1>Chest</h1> <p> If you want to build strong chest muscles, there is no way you can ignore the chest press exercise. In fact, it is one of the basic exercises that gym trainers suggest adding to the chest workout when you are just starting out. 

    Maintaining the proper form is a must while doing the chest press exercise. Otherwise, you might end up putting pressure on various muscle groups in your body. 

    <ul style="font-size: 15px;">
    <li>Pectorals: The pectoralis major is the superior most and largest muscle of the anterior chest wall. It is a thick, fan-shaped muscle that lies underneath the breast tissue and forms the anterior wall of the axilla.</li>
    <li>Deltoids: The deltoid is one of the intrinsic muscles of the shoulder.</li>
    <li>Triceps: The triceps is a large muscle on the back of the upper limb of many vertebrates. It consists of 3 parts: the medial, lateral, and long head. It is the muscle principally responsible for extension of the elbow joint</li>
    <li>Serratus Anterior: When the shoulder girdle is fixed, all three parts of the serratus anterior muscle work together to lift the ribs, assisting with respiration</li>
    <li>Biceps: The biceps brachii muscle (biceps) is a large, thick muscle of the arm consisting of two heads.</li>
    </ul> 
    </div>

    <iframe class="videoDisplay" id="videoId" width="632" height="355.5" src="https://www.youtube.com/embed/mv42SYX9A3U" title="7 Huge chest exercises ( fastest )" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
    <!-- Piler med funksjonalitet til å bytte video -->
    <div class="prevArrow" id="prevArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/mv42SYX9A3U"></div>
    <div class="nextArrow" id="nextArrow" onclick="selectExcercise(this)" videoUrl="https://www.youtube.com/embed/_q_-adYzkh0"></div>

    </div>
    `;
}

