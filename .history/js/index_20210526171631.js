// 导航栏下拉详情
const nav_lis=document.querySelector(".nav-ul").querySelectorAll("li");
const nav_contents=document.querySelector(".nav-content").querySelectorAll("ul");
const arr=new Array();
for(let i=1;i<nav_lis.length;i++){
    arr.push(nav_lis[i]);
}
for(let i=0;i<arr.length;i++){
    arr[i].onmouseenter=nav_contents[i].onmouseenter=function(){
        arr[i].classList.add("active");
        nav_contents[i].style.display="flex";
    }
    arr[i].onmouseleave=nav_contents[i].onmouseleave=function(){
        arr[i].classList.remove("active");
        nav_contents[i].style.display="none";
    }
}

const outNav=document.querySelector(".outNav");
outNav.addEventListener("scroll",fixed);
function fixed(){
    if(window.pageYOffset>outNav.offsetTop){
        outNav.
    }
}