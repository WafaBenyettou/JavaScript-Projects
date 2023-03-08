//array of objects

const reviews = [
    {
        id:1,
        name:"Wafa",
        job:"House wife",
        img:"",
        text:"Ya khawti ana 3yit mn 9raya ",

    },
    {
        id:2,
        name:"Wafa2",
        job:"House wife2",
        img:"",
        text:"Ya khawti ana 3yit mn 9raya 2",

    },
    {
        id:3,
        name:"Wafa3",
        job:"House wife",
        img:"",
        text:"Ya khawti ana 3yit mn 9raya ",

    },
    {
        id:4,
        name:"Wafa4",
        job:"House wife",
        img:"",
        text:"Ya khawti ana 3yit mn 9raya ",

    },
];


//selection 
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const rightbutton = document.querySelector(".right");
const leftbutton = document.querySelector(".left");



let current_item =0;

//logic 
window.addEventListener('DOMContentLoaded', function(){
    reviewPage(current_item);
  });

  //avoid repeat
  function reviewPage(revp){
     const item = reviews[revp];
     author.textContent=item.name;
     job.textContent=item.job;
     info.textContent=item.text;
  }
//moving 
rightbutton.addEventListener('click', function(){
    current_item++;
    if(current_item> reviews.length-1){
        current_item=0;
    }
    reviewPage(current_item);
});

leftbutton.addEventListener('click', function(){
    current_item--;
    if(current_item < 0){
        current_item=reviews.length-1;
    }
    reviewPage(current_item);
});





