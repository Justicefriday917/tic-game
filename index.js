const button = document.querySelectorAll('.papper');
const Detail = document.getElementsByClassName("GameDetails")[0]
const stop = document.getElementsByClassName("stopButton")[0]


const list = ['paper', 'scissor','rock'];
let TotalResult = 0
let Result = 0
let Words = ""

function Stop(){
    TotalResult = 0
    Result = 0
    Words = "None"

}
function Result1(Human, Computer){
        if (Human == Computer){
            Result = 0
            Words = "Tie"
        }
        else if(Human == "paper" && Computer == "scissor"){
            Result =-1;
            Words = "Computer Win"}
        else if(Human == "paper" && Computer == "rock"){
            Result =-1;
            Words = "Computer Win"}
        else if(Human == "scissor" && Computer == "rock"){
            Result  =-1;
            Words = "Computer Win"}
        else{
            Result  =+1;
            Words = "Human Win"
        }
        TotalResult += Result
}


button.forEach((item) => {
    item.onclick = () => {
        let Random = Math.floor(Math.random()*3);
        let RandomItem = list[Random];
        let random = Math.floor(Math.random()*3);
        let randomItem = list[random];
        Result1(RandomItem,randomItem)
        Detail.innerText =`${Words}   =  ${Result}_____Total Score = ${TotalResult}`
               
    }
})
stop.onclick = () => {
    Stop()
    Detail.innerText =`Total Score = ${TotalResult}`
}
