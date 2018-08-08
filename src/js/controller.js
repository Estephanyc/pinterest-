window.onload = () =>{
    listPins()
}
window.listPins = function () {
   const pins = window.getPinsList();
   pins().then((pinsArray) =>{
       pinsArray.forEach((pin) => {
       const images = window.getPinImage();
      images.then((image)=>{
           window.showPinsList(pin,image);
       })
   })
   })
};
window.openModal = (id,image) => {
    const pins = window.getPinsList();
    pins().then((pinsArray) => {
        const pinEncontrado = pinsArray.filter(pin => pin.id == id);
        showModal(pinEncontrado,image)
    })
}