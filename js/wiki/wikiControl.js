// wikipage bytting av video med pil div'ene
function selectExcercise(divElement) {
    const iframe = document.getElementById('videoId');
    const newVideoURL = divElement.getAttribute('videoUrl');
    
    iframe.src = newVideoURL;
  }

