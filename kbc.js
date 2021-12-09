console.log("''''''🙏WELCOME🙏''''''");
const read=require("readline-sync")
var question=[
    "How many continents are there?",       
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"  
]
option=[
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh","bhopal","Delhi","chennai"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]
solution=[3,3,1]
l=question.length
index=0
tem1=0
tem2=1
count = 0
amount=10000
tem3=1
while (index<l){
    console.log(question[index])
    j=0
    num=1
    while (j<option[index].length){
        console.log(num,option[index][j])
        num+=1
        j+=1    }
    m=["3.seven","4.eight","2.bhopal","3.delhi","1.Software Engineering", "2.Counseling"]
    user_input_1=read.question("do  you want life line you  have one life line,yes or no..")
    if (user_input_1=="yes"){
        console.log("50-50")
        if (count == 0){
            console.log(m[index+tem1])
            console.log(m[index+tem2])
            user_input_2=read.question("enter answer")
            if (solution[index]==user_input_2){
                console.log("right👏👏👏")
                count = count + 1}
            else{
                console.log("wrong😢😢")
                break}}
        else{
            console.log("you already used lifeline.")
            u=read.questionInt("enter answer")
            if (solution[index]==u){
                console.log("right👏👏👏")
            }
            else{
                console.log("wrong😔😔")
                break}}}
    else if( user_input_1=="no"){
        user_input_2=read.questionInt("enter answer")
        if (solution[index]==user_input_2){
            console.log("right👏👏👏")
        }
        else{
            console.log("wrong😔😔")
            break}}
    else{
        console.log("something went wrong")
        break}
    index+=1
    tem1+=1
    tem2+=1
    console.log("congratulation you won",amount,"amount\n🎊 🎉🎊 🎉")
    tem3+=1
    amount*=tem3}
