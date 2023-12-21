let obj = [ 
      {
        url:"sur_Nirags_Ho.mp3" , src:"https://m.media-amazon.com/images/I/51jlI07aVML._SX354_SY354_BL0_QL100__UXNaN_FMjpg_QL85_.jpg"
     },
     {  url:"hawayein.mp3" ,src:"https://i.pinimg.com/originals/d4/9c/f5/d49cf571160d6bd8dda5f244546acb9c.jpg"},
     {url:"Bahana_Akull_320_Kbps.mp3" , src:"https://c.saavncdn.com/editorial/LetsPlayAkull_20221014173017_500x500.jpg"},{
        url:"Main_Agar_Kahoon.mp3" , src:"https://c-fa.cdn.smule.com/rs-s81/arr/44/ce/053d8ce7-4ece-4254-aa51-daee872239c1.jpg"
     }

] 
    
let arr = Array.from(obj)

console.log(arr)


let songname = document.querySelector("#songname");
let next = document.querySelector("#button1");
let previous = document.querySelector("#button2");
// let url1 = document.querySelector("#next");
let image = document.querySelector("img");
let audio = document.querySelector("audio");





i=0;

next.addEventListener('click',()=>{
   
    audio.src = arr[i].url;
   
    songname.innerHTML = arr[i].url
   
    image.src = arr[i].src
    
    i =i + 1;
   
})
console.log(arr[0])



// previous.addEventListener('click',()=>{
//     audio.src = arr[i].url;
   
//     songname.innerHTML = arr[i].url
   
//     image.src = arr[i].src
//      i = i - 1;
      
// })
// i=0;
// next.addEventListener('click',()=>{
   
//     audio.src = arr[i].url;
   
//     songname.innerHTML = arr[i].url
   
//     image.src = arr[i].src
    
//     i =i + 1;
   
// })
// console.log(arr[0])


// previous.addEventListener('click',()=>{
//     audio.src = arr[i].url;
   
//     songname.innerHTML = arr[i].url
   
//     image.src = arr[i].src
//     //  i = i - 1;
      
// })




// let prograce =  document.querySelector("#prograce");
// let song =  document.querySelector("#song");
// let ctrlIcon =  document.querySelector("#ctrlIcon");


// song.onloadedmetedata = function(){
//    prograce.max = song.duration;
//    prograce.value = song.currentTime;

// }

// ctrlIcon.addEventListener('click',()=>{

// })