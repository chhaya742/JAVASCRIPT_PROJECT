var read=require("readline-sync")
var number=read.question("ener number")
if (number<10)
{
    console.log("number is lessthen 10")

}
else if (number>10 && number<20)
{
    console.log("number is lessthen 20")
}
else if ( number==20)
{
    console.log(" number equal to 20")
}
else{
    console.log("greater than 20")
}
