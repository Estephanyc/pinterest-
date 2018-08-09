let pinsObject = '';
window.getPinsList = () =>{
    let requiereData = async function () {
        try {
            const jsonPins = await fetch('https://estephanyc.github.io/pinterest-/assets/data/data.json');
            pinsObject = await jsonPins.json();
            return pinsObject
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
window.getPin= (id)=>{
    return pinsObject.find(
        element => {
            return element.id == id;
        }
    );
}

window.updateImagePin = (pin, updateObj)=>{
    let getPin = window.getPin(pin.id)
    Object.entries(updateObj).forEach(element => {
        getPin[element[0]] = element[1];
    });
    return pin
}