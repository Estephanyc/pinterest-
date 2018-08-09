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
window.showTags = function (tag) {
    let color = '#'; 
    let letters = ['a78f7a', 'ba895e', '74882e', '97928c', '5f819f', 'ffbf00']; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];

    let render = '';
    render += `<div class="tag" id="${tag}">`
    render += `<span class="tag-title">${tag}</span>`
    render += `</div>`
    tags.innerHTML += render;
    document.getElementById(tag).style.background = color; 
}