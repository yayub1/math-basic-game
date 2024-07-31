
const calculator=document.getElementById('calculator');
const calculator1=document.getElementById('calculator1');
const mysubmit=document.getElementById('mysubmit');

const answer1=document.getElementById('answer1');
const comp1=document.getElementById('comp1');
const answer2=document.getElementById('answer2');
const comp2=document.getElementById('comp2');
const answer3=document.getElementById('answer3');
const comp3=document.getElementById('comp3');
const answer4=document.getElementById('answer4');
const comp4=document.getElementById('comp4');
const evalute=document.getElementById('evalute');
const evalute2=document.getElementById('evalute2');
const evalute3=document.getElementById('evalute3');
const evalute4=document.getElementById('evalute4');
const score=document.getElementById('score');

let min=1;
let max=100;
let number;
let number1;
let plus;
let minus;
let multiple;
let divid;
let sum=0;

mysubmit.onclick=function(){
    number=Math.floor(Math.random()*(max-min)+min);
    number1=Math.floor(Math.random()*(max-min)+min);
    
    calculator.textContent=number;
    calculator1.textContent=number1;
}

evalute.onclick=function(){
    plus=document.getElementById('answer1').value;

    
    if(number + number1 == plus){
        comp1.textContent = "you are correct!.keep it up";
        sum += 1;
        score.textContent=sum;
    }
    else if(plus == ""){
        comp1.textContent = "the question is not answered";
      
    }
    
    else{
        comp1.textContent = "incorrect please try again";
    }

}
evalute2.onclick=function(){
    minus=document.getElementById('answer2').value;
    if(number - number1 == minus){
        comp2.textContent = "you are correct!.keep it up";
        sum += 1;
        score.textContent=sum;
    }
    else if(minus == ""){
        comp2.textContent = "the question is not answered";
    }
    else{
        comp2.textContent = "incorrect please try again";
    }
}


    evalute3.onclick=function(){
        multiple=document.getElementById('answer3').value;
        if(number * number1 == multiple){
            comp3.textContent = "you are correct!.keep it up";
            sum+=1;
            score.textContent=sum;
        }
        else if(multiple == ""){
            comp3.textContent = "the question is not answered";
        }
        else{
            comp3.textContent = "incorrect please try again";
        }
    




    }
    evalute4.onclick=function(){
        divid=document.getElementById('answer4').value;
        if(Math.floor(number/number1) == divid && divid != ""){
            comp4.textContent = "you are correct!.keep it up";
            sum+=1;
            score.textContent=sum;
        }
        else if(divid == ""){
            comp4.textContent = "the question is not answered";
        }
        else{
            comp4.textContent = "incorrect please try again";
        }
    
    }    


