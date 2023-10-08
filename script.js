var answer=[];
var currentLevel=1;
var question=[], p;
var colours=["red","green","blue","yellow"];
$(".card").on("click",function(event){
    console.log("You clicked "+this.innerHTML);
    answer.push(this.innerHTML);
});
document.addEventListener("keydown",function(event){
    var key=event.key;
    if(key=="Enter"){
        console.log("Start Game called.");
        startGame();
    }
});
function startGame(){
    var status=$("#status");
    status.html("Level"+currentLevel);
    currentLevel++;
    question.push(generateRandom());
    console.log(question);
    answer.length=0;
    highlighter(0);
}
function checkAnswer(){
    setTimeout(function(){
        console.log(question);
        console.log(answer);
        var test=true;
        if(answer.length==question.length){
            for(var l=0;l<question.length;l++)
            {
                if(answer[l]!=question[l]){
                    test=false;
                    break;
                }
            }
        }
        else test=false;
        if(test){
            console.log("Correct Answer");
            startGame();
        }
        else {
            console.log("Incorrect ans");
            restart();
        }
    } , 4000+currentLevel*500);
}
function highlighter(index){
        setTimeout(function(){
            if(index<question.length){
            $("."+colours[question[index]]).fadeIn(100).fadeOut(100).fadeIn(1000);
            highlighter(++index);
            }
            else{
                checkAnswer();
            }
        }, 200);
    //$("."+colours[index]).fadeIn(100).fadeOut(100).fadeIn(1000);
    
}
function restart(){
    currentLevel=1;
    answer.length=0;
    question.length=0;
    $("#status").html("Press ENTER to start");
    document.addEventListener("keydown",function(event){
        var key=event.key;
        if(key=="Enter"){
            console.log("Start Game called.");
            startGame();
        }
    });
}
function generateRandom(){
    return Math.floor(Math.random()*4);
}