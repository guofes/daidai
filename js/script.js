window.onload = function() {
    // console.log("网页可见区域宽：" + document.body.clientWidth);
    // console.log("网页可见区域高：" + document.body.clientHeight);
    // console.log("网页可见区域宽：（包括边线的宽）" + document.body.offsetWidth );
    // console.log("网页可见区域高：（包括边线的宽）" + document.body.offsetHeight);
    // console.log("网页正文全文宽：" + document.body.scrollWidth);
    // console.log("网页正文全文高：" + document.body.scrollHeight);
    // console.log("网页被卷去的高：" + document.body.scrollTop);
    // console.log("网页被卷去的左：" + document.body.scrollLeft);
    // console.log("网页正文部分上：" + window.screenTop);
    // console.log("网页正文部分左：" + window.screenLeft);
    // console.log("屏幕分辨率的高：" + window.screen.height);
    // console.log("屏幕分辨率的宽：" + window.screen.width);
    // console.log("屏幕可用工作区高度：" + window.screen.availHeight);
    // console.log("屏幕可用工作区宽度：" + window.screen.availWidth);



var page1 = document.getElementById("page1");
var p1_lantern = document.getElementById("p1_lantern");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
var page5 = document.getElementById("page5");
var page6 = document.getElementById("page6");
var page7 = document.getElementById("page7");
var page8 = document.getElementById("page8");
var page9 = document.getElementById("page9");
var page10 = document.getElementById("page10");
// var music = document.getElementById("music");
// var audio = document.getElementsByTagName("audio")[0];
//当音乐播放完停止时，自动停止旋转,添加监听事件
// audio.addEventListener("ended",function(event){
//     music.setAttribute("class","");
// },false);

//点击音乐图标时，控制音乐播放效果
//  music.onclick =function(){
//     if(audio.paused){
//         audio.play();       this.setAttribute("class","play");
//         //this.style.animationPlayState = "running";可惜大多设备不兼容
//     }else {
//        this.setAttribute("class","");
//         //this.style.animationPlayState = "paused";
//         audio.pause();
//     };
// };
// music.addEventListener("touchstart",function(event){
//     if(audio.paused){
//         audio.play();
//         this.setAttribute("class","play");
//     }else {
//         audio.pause();
//         this.setAttribute("class","");
//     };
// },false);

p1_lantern.addEventListener("touchstart",function(event){
    page1.style.display="none";
    page2.style.display="block";
    page3.style.display="block";    
    page3.style.top="100%";
    setTimeout(function(){
        page2.setAttribute("class","page fadeOut");
        page3.setAttribute("class","page fadeIn");
//         page2.addEventListener("touchstart",function(event){
//     page2.style.display="none";
//     // page2.style.display="block";
//     page3.style.display="block";
//     // page3.style.top="100%";
//     // setTimeout(function(){
//     //     page2.setAttribute("class","page fadeOut");
//     //     page3.setAttribute("class","page fadeIn");
//     // },7500);

// },false);
    },4500);

},false);

page3.addEventListener("touchstart",function(event){
    page3.style.display="none";
    page4.style.display="block";

},false);

page4.addEventListener("touchstart",function(event){
    page4.style.display="none";
    page5.style.display="block";

},false);

page5.addEventListener("touchstart",function(event){
    page5.style.display="none";
    page6.style.display="block";

},false);

page6.addEventListener("touchstart",function(event){
    page6.style.display="none";
    page7.style.display="block";

},false);

page7.addEventListener("touchstart",function(event){
    page7.style.display="none";
    page8.style.display="block";

},false);

page8.addEventListener("touchstart",function(event){
    page8.style.display="none";
    page9.style.display="block";

},false);

page9.addEventListener("touchstart",function(event){
    page9.style.display="none";
    page10.style.display="block";

},false);


};
