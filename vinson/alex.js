(function () {
    console.log("I wanted to buy a coffee but then I realized that I ran out of cache");
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.style['background-color'] = 'pink';
    document.body.style.backgroundColor = 'green';
    container.innerText = 'This is my js and you cant have it';
    container.style.border = '3px solid black';
})();

function createCarousel(parent, imgList) {
    const cContainer = documnet.createElement( tagName: 'div');
    cContainer
    const imgEl = document.createElement( tageName: 'img');
    imgEl.style.width = '300px';
    imgEl.style.height = '180px';
    imgEl.src -= imgList[0];
    cContainer.appendChild(imgEl);
    parent.appendChild(cContainer);
    const leftButton = document.createElement( tagName: 'button');
    leftButton.innerText = '<';
    const rightButton = document.createElement( tageName: 'button');
    rightButton.innerText = '>';
    cContainer.prepend(leftButton);
    cContainer.appendChild(rightButton);
    let imgIndex = 0;
    leftButton.addEventListener( type: 'click', listener: function () {
        imgIndex--;
        if(imgIndex < 0) {
            imgIndex
        }
    })

}

createCarousel(container, imgList: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfbzFWDI9kU353UWY8xXq0cqpHBmxuDIkDSGVCTkfuNQhSTcN', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-blue-sea-beach-anna-omelchenko.jpg', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'])
