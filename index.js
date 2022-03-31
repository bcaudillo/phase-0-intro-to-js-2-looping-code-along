// Code your solutions in this file
let newArray=[];
let i = 0;
function writeCards(names,event){
    for (i;i<names.length; i++){
        newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    }
return newArray
}

function countDown(integer){
    while (integer > -1){
        console.log(integer)
        integer--
    }
}