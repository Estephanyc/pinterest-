window.showPinsList = function (pins,imageUrl) {
    let render = '';
    pins.forEach((pin) => {
        render += `<div class="card">`;
        render += `<img class="card-img-top" src="${imageUrl}">`
        render += `<div class="card-body">`
        render += `<h5 class="card-title">${pin.title}</h5>`
        render += `<p class="card-text">${pin.description}</p>`;
        render += `<p class="card-text">User: ${pin.user})</p>`;
        render += `</div>`;
        render += `</div>`;
    });
    appContainer.innerHTML = render;
};
