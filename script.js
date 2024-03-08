const imgs = document.querySelectorAll('.header-slider ul img');                      //select all the imges inside this ul
const prev_btn = document.querySelector('.control_prev');                                       //
const next_btn = document.querySelector('.control_next');

let n = 0;  //it means 1st img

function changeSlide(){
    for(let i=0;i < imgs.length; i++){
        imgs[i].style.display = 'none';//selects all images and adding the style property none so all imgs will be hidden
    }
    imgs[n].style.display = 'block';//selects only one image and adding a css property display block so particular img will be displayed
}
//hide all imges we use for loop
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }
    else{
        n=imgs.length-1;

    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length-1){
        n++;
    }
    else{
        n=0;

    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');

for(const items of scrollContainer)
{
    items.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        items.scrollLeft+= evt.deltaY;
    })
}