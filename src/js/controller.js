window.onload = () =>{
    listPins()
}
window.listPins = function () {
   const pins = window.getPinsList();
   pins().then((pinsArray) =>{
       pinsArray.forEach((pin) => {
         const images = window.getPinImage();
            images.then((image)=>{
                window.updateImagePin(pin, {
                    image: image
                });
                window.showPinsList(pin);
                window.filterTags(pin.hashtag);
            })
       })
   })
};
window.openModal = (id) => {
    showModal(window.getPin(id))
}
let tagsArray = []
window.filterTags = (tag) =>{
    let found = tagsArray.find(element=> element == tag);
    if(found == undefined){
        tagsArray.push(tag)
        window.showTags(tag)
    }
}
searchPin.addEventListener("change", function () {
    appContainer.innerHTML = '';
    window.filterPins(searchPin.value).forEach(element => {
        console.log(element)
            window.showPinsList(element)
        });       
});
window.filterPins = (search)=>{
    const pins = pinsObject
    return pins.filter(function (element) {
            return element.title.toLowerCase().indexOf(search.toLowerCase()) >= 0;
        })
}
let counter= 41;
window.addPin = ()=>{
    console.log('agregado')
    let title =  titleNewPin.value;
    let description =  descriptionWebPin.value;
    const images = window.getPinImage();
    images.then((image) => {
        let object = {
            "id": counter++,
            "title": title,
            "description": description,
            "user": "Minerva Welch",
            "image": image,
            "username": "dulcefru", 
            "hashtag": "Colors"
        }
        window.addPinObject(object)
    })   
}