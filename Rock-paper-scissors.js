let your_score=0;
let comp_score=0;
let your_choice;
let comp_choice=()=>(Math.round(Math.random()*10)%3);
let return_int=(a)=>{
    let b=a.slice(0,1);
    let c=b.toUpperCase();
    let d=a.substr(1);
    let e=d.toLowerCase();
    let final=c+e;
    if(final=="Paper")
        return 0;
    else if(final=="Rock")
        return 1;
    else
        return 2;
}
let calc_compare=(choice_your,choice_comp)=>{
    if(choice_your==choice_comp)
        return 0;
    if((choice_your!=0||choice_comp!=2)&&((choice_your!=2)||choice_comp!=0))
    {
        if(choice_your<choice_comp)
            return 1;
        else
            return -1;
    }
    else
    {
        if(choice_your>choice_comp)
            return 1;
        else
            return -1;
    }
}
let calc_score=(comp_result)=>{
    if(comp_result<0)
    {
        your_score-=1;
        comp_score+=1;
    }
    else if(comp_result>0)
    {
        your_score+=1;
        comp_score-=1;
    }
    else
    {
        your_score+=0;
        comp_score+=0;
    }
}
let b=(a)=>{
    let c;
    if(a==1)
        c="FIRST";
    else if(a==2)
        c="SECOND";
    else if(a==3)
        c="THIRD";
    else if(a==4)
        c="FOURTH";
    else if(a==5)
        c="FIFTH";
console.log(`THE ${c} ROUND BEGINS`);
your_choice=prompt("enter your choice");
calc_score(calc_compare((return_int(your_choice)),comp_choice()));
console.log(`THE RESULTS OF ${c} ROUND ARE:`);
console.log("              SCORE                  ");
console.log("YOUR                         COMPUTER");
console.log(your_score+"                                 "+comp_score);
}
b(1);
b(2);
b(3);
b(4);
b(5);
if(your_score>comp_score)
    console.log("Congrats you won");
else if(your_score==comp_score)
    console.log("Oh! there is a tie");
else
    console.log("Sorry But You Lost nevertheless try again");