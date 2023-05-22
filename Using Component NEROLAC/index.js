// start new js 
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let content_img1 =document.getElementById("content1_img1");
let content_img2 =document.getElementById("content1_img2");
let list1=document.getElementById("list1");
let list2=document.getElementById("list2");
let list3=document.getElementById("list3");
let list4=document.getElementById("list4");
let list5=document.getElementById("list5");
let list6=document.getElementById("list6");
let list7=document.getElementById("list7");
let overlaytext1=document.getElementById("overlay-text1");
let overlaytext2=document.getElementById("overlay-text2");
let headline =document.getElementById("headline");
list1.classList.add("active");

function nextpage1(){

if (checkbox1.checked) {
content_img1.src="./images/img3.jpg";
content_img2.src="./images/img4.jpg";
checkbox1.checked = false;
list1.classList.remove("active");
list1.classList.add("visited");
list2.classList.add("active");
overlaytext1.innerHTML="FRESH";
overlaytext2.innerHTML="REPAIR";
headline.innerHTML="Fresh work or repair work, we have it all. is yours a...";

} else if (checkbox2.checked) {
  content_img1.src="./images/img3.jpg";
content_img2.src="./images/img4.jpg";
checkbox2.checked = false;
list1.classList.remove("active");
list1.classList.add("visited");
list2.classList.add("active");

overlaytext1.innerHTML="FRESH";
overlaytext2.innerHTML="REPAIR";
headline.innerHTML="Fresh work or repair work, we have it all. is yours a...";

}else {
  alert("plaese select checkbox")
}
}
function oldpage1()
{

  content_img1.src="./images/img1.jpg";
  content_img2.src="./images/img2.jpg";
  list1.classList.add("active");
  list1.classList.remove("visited");
  list2.classList.remove("active");
  
overlaytext1.innerHTML=" VILLA";
overlaytext2.innerHTML=" APARTMENT";

headline.innerHTML="What's your home Like?";
}
// animation section 

const element = document.querySelector("#content1_img1");  
const element1 = document.querySelector("#content1_img2");  
element.addEventListener("mouseenter", () => {
  gsap.to(element, { scale: 1.1 });
});
element.addEventListener("mouseleave", () => {
  gsap.to(element, { scale: 1 });
});
element1.addEventListener("mouseenter", () => {
  gsap.to(element1, { scale: 1.1 });
});
element1.addEventListener("mouseleave", () => {
  gsap.to(element1, { scale: 1 });
});