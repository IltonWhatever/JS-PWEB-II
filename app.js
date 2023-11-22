const searchBar = document.querySelector('#url_text');
const iFrame = document.querySelector('#iframe');
const fechar = document.querySelector('#fechar');
const Browser = document.querySelector('.browser');

searchBar.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
        BrowserNav(searchBar.value);
    }
})

fechar.addEventListener('click', () =>{
    Browser.style.visibility='hidden';
})

document.body.addEventListener('keyup', (e)=>{
    if(e.key === "Escape");
    Browser.style.visibility='visible';
})


const BrowserNav = (url) =>{
    iFrame.src = url;
}