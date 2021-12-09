console.log("....WELCOM TO ATM....");
const read=require("readline-sync")
total_balance=100000

function tab(){
    console.log("\n");
    widraw=read.question("do you want to bidrol again")
if(widraw=='yes')
{
    t=true
}
else{
    console.log("thank you ");  
    t=false  
}}
t=true
while(t){
var user=read.question("enter your card:- ")
if (user=="chip side"){
    lang=read.question("choose language:-")
    if (lang=='english'||lang=="hindi"){
        acount=read.question("choose accunt:-")
        if(acount=='saving'||acount=="current"){
            pin=read.questionInt("enter pin")
            if (pin==1234){
                console.log( "your total balance is",total_balance)
                amount=read.questionInt("enter amount:-")
                if (amount<100000){
                    console.log("succesful")
                    amut=read.question("do you want to cheak your current amount __enter yes or no:-")
                    if(amut=='yes'){
                        console.log(  "your current amount is:-",total_balance-amount)
                        console.log("\n");
                        tab()}
                        else{
                            console.log("ok")
                            console.log("\n");
                            tab()}}
                else{
                    console.log("entered amount is not sufficient")
                    tab()}}
            else{
                console.log("your pin is incorrect")
                tab()}}
        else{
            console.log("your account is not there")
            tab()}}
    else{
        console.log("this language is not available");
            tab()}}           
else{
    console.log("please insert right side")
    tab()}}




