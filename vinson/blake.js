var blakesbox = document.createElement('div');
document.body.appendChild(blakesbox);
blakesbox.style['z-index'] = '-1';
blakesbox.style['position'] = 'relative';
blakesbox.style['background-color'] = 'lightBlue';
blakesbox.style.border = '5px solid black';
blakesbox.style['height'] = '30vh';

var textbox = document.createElement('h1');
blakesbox.appendChild(textbox);
textbox.innerText = "This is Blake's Box";
textbox.style['text-align'] = 'center';
textbox.style['padding-top'] = '75px';

var btn = document.createElement('button')
blakesbox.appendChild(btn);
// btn.style['padding-left'] = '100px';
btn.innerText = 'Portal';
btn.style['text-align'] = 'center';
