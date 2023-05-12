let contentBodies = document.querySelectorAll('.content-body');
let tabs = document.querySelectorAll('.tab');

for (let tab of tabs) {
    tab.addEventListener('click', function(e) {
        setNewActive(e.currentTarget);
})}

function setNewActive(el) {
    for (let contentBody of contentBodies) {
        contentBody.classList.remove('content-active');
    }
    document.getElementById(el.textContent).classList.add('content-active');

    for (let tab of tabs) {
        tab.classList.remove('tab-active');
    }
    el.classList.add('tab-active');
}



let tab2s = document.querySelectorAll('.tab-2');
let contentBodies2 = document.querySelectorAll('.content-body-2');

for(let tab of tab2s) {
    tab.addEventListener('click', function(e) {
        setActive2(e.currentTarget)
    })
}

function setActive2(el) {
    for (let contentBody2 of contentBodies2) {
        contentBody2.classList.remove('content-2-active');
    }
    document.getElementById(el.textContent).classList.add('content-2-active');

    for (let tab2 of tab2s) {
        tab2.classList.remove('tab-2-active')
    }
    el.classList.add('tab-2-active');
}