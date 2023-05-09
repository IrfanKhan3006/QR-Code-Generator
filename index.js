const input = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const Generate = document.getElementById('Generate');
const Download = document.getElementById('Download');

const Container = document.querySelector('.qr-body');

let size = sizes.value;

Generate.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmpty();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmpty();
});

Download.addEventListener('click',()=>{
    let img = document.querySelector('.qr-body img');

    if( img !== null){
        let imgAtrr = img.getAttribute('src');
        Download.setAttribute("href",imgAtrr);
    }else{
        Download.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmpty(){
    input.value.length>0 ? GenerateQRCode() : alert("Please Enter Text or URL");
}

function GenerateQRCode(){
    Container.innerHTML = "";
    new QRCode(Container,{
        text:input.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}