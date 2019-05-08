(function () {
    console.log("I wanted to buy a coffee but then I realized that I ran out of cache");
    const container = document.createElement('div');
    document.body.appendChild(container);
    container.style['background-color'] = 'pink';
    document.body.style.backgroundColor = 'green';
    container.innerText = 'This is my js and you cant have it';
    container.style.border = '3px solid black';
})();