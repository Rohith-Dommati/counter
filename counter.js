let count=0;
function counter(){
    count=count+1;
    document.getElementById("counter").innerText=count
}
function reset(){
    count=0;
    document.getElementById("counter").innerText=count
}