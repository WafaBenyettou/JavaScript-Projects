
function generate(){
    let quotes = {
        "- unkown" : '"li 9ra 9ra bakri" ' ,
        "- Wafa":'"Ray dyalk yatraba f 3azk "',
        "- ITC":'"Sahring is caring"'  ,
     }
     
     
     let authors = Object.keys(quotes);
console.log(Object.keys(quotes));
     let author = authors[Math.floor(Math.random() * authors.length)];
     
     let quote = quotes[author];


     document.getElementById("quote").innerHTML=quote;
     document.getElementById("author").innerHTML=author;
}