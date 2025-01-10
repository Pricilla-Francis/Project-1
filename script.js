
const randTable = document.querySelector("randTable");
const months = ["Jan","Feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
const initSite = function(){

//sets each month element to random value between 0-13
for(let i = 0;i<months.length;i++){
    //TODO make this occur only if no values present
    //uncomment below line to fill array with values
    //localStorage.setItem(months[i],Math.floor(Math.random()*13));
};
//todo add table
//display key value pairs in table
console.log(months[0]);
console.log(randTable);
};
initSite();