window.showPinsList = function (pin,imageUrl) {
    let render = '';
        render += `<div class="card pin" onclick="window.openModal('${pin.id}', '${imageUrl}')">`;
        render += `<img class="card-img-top" src="${imageUrl}">`
        render += `<div class="card-body">`
        render += `<h5 class="pinTitle">${pin.title}</h5>`
       // render += `<span class="pinTitle">12 k</span>`
        render += `<p class="card-text">${pin.description}</p>`;
        render += `<p class="card-text"><div class="pinUser">M</div>${pin.user}</p>`;
        render += `</div>`;
        render += `</div>`;
    appContainer.innerHTML += render;
};
window.showModal = function (pin,image) {
    console.log(pin)
    $('#exampleModal').modal('show')
    pinModalTitle.innerHTML = pin[0].title
    imageModal.innerHTML= `<img class="" src="${image}">`
    userModal.innerHTML = pin[0].user
    modalDescription.innerHTML = pin[0].description
}