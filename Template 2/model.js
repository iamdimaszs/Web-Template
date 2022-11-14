// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      console.log("wawa");
    } else {
    
      if (event.detail.totalProgress === 0) {
        console.log("wawa");
      }
    }
  };
//   const el = document.querySelector('model-viewer');
// if(el){
//   el.addEventListener('progress', onProgress);
// }
 