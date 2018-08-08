window.onload = () =>{
    listPins()
}
window.listPins = function () {
   const pins = window.getPinsList();
   const images = window.getPinImage();
   pins().then((pin) =>{
      images.then((image)=>{
           window.showPinsList(pin,image);
       })
   })
};
