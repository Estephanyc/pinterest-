window.getPinsList = () =>{
    let pins = '';
    let requiereData = async function () {
        try {
            const jsonPins = await fetch('../../assets/data/data.json');
            pins = await jsonPins.json();
            return pins
        } catch (err) {
            alert('no se pudierón cargar los datos' + err);
        }
    }
   return requiereData
}
window.getPinImage = ()=>{
   return fetch('https://dog.ceo/api/breeds/image/random').then(response => {
        return response.json();
    }).then(data => {
        return data.message
    }).catch(err => {
        alert(err)
    });
}
window.addPinImage = (pin,image) =>{

}