let wrap = document.getElementById('wrapper');
let block = document.querySelector('element');


wrap.onclick = function () {
    alert('click');
    let node = document.createElement('span');
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let m = Math.floor( Math.random() * 10);
    node.className = 'element';
    wrap.appendChild(node);
    node.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    node.style.margin = m + 'px';
};



