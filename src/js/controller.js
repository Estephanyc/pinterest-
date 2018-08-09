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
                window.filterTags(pin.hashtag)
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
let tagsArray = []
window.filterTags = (tag) =>{
    let found = tagsArray.find(element=> element == tag);
    if(found == undefined){
        tagsArray.push(tag)
        window.showTags(tag)
    }
}
