(function () {
const scottainer = document.createElement('div');
document.body.appendChild(scottainer);
scottainer.style.height = '825px';
scottainer.style['background-color'] = '#999999';
scottainer.style.borderBottom = 'black';
scottainer.style.border = '5px solid black'


const title = document.createElement("h1");
title.innerText = 'Scott';
title.style.textAlign = 'center';
title.style.fontSize = '10em';
scottainer.appendChild(title);


const pic = document.createElement("IMG");
pic.setAttribute("src" , "https://avatars2.githubusercontent.com/u/25591987?s=460&v=4");
pic.setAttribute("height", "225");
scottainer.appendChild(pic);


const about = document.createElement("p");
about.innerText = 'This is where text about me will go';
about.style.textAlign = 'center';
scottainer.appendChild(about);
}();
