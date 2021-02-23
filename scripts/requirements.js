/*===========================
<|-Show Requirements      -|>
===========================*/
function tagAnimation(name){
    return document.getElementsByClassName(name);
}

let tabPanes = tagAnimation("tabHeader")[0].getElementsByTagName("div");

for (let i=0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click",function(){
        tagAnimation("tabHeader")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");
        
        tagAnimation("tabIndicator")[0].style.top = `calc(80px + ${i*50}px)`;
        
        tagAnimation("tabContent")[0].getElementsByClassName("active")[0].classList.remove("active");
        tagAnimation("tabContent")[0].getElementsByTagName("div")[i].classList.add("active");
    });
}
                    
  
  