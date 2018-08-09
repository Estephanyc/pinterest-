window.showPinsList = function (pin) {
   // console.log(pin)
    let render = '';
        render += `<div class="card pin" onclick="window.openModal('${pin.id}')">`;
        render += `<img class="card-img-top" src="${pin.image}">`
        render += `<div class="card-body">`
        render += `<h5 class="pinTitle">${pin.title}</h5>`
        render += `<p class="likes"><i class="fas fa-thumbtack"> 36.6k</i> <i class="fas fa-check"> 9</i></p>`
        render += `<p class="card-text">${pin.description}</p>`;
        render += `<p class="card-text"><div class="pinUser">M</div>${pin.user}</p>`;
        render += `</div>`;
        render += `</div>`;
    appContainer.innerHTML += render;
};
window.showModal = function (pin) {
    $('#exampleModal').modal('show')
    pinModalTitle.innerHTML = pin.title
    imageModal.innerHTML= `<img class="" src="${pin.image}">`
    userModal.innerHTML = pin.user
    modalDescription.innerHTML = pin.description
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