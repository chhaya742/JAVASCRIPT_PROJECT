const fs=require("fs");
const { disconnect } = require("process");
const o_s=0900
const o_e=1730
// var user=require("readline-sync");
// const time=require("./demo")
// t=true
// while (t){
//     console.log(time());
//     var v=user.question("you do want meeating:-")
//     if(v=="yes"){
//         t=true
//     }
//     else{
//         t=false
//     }
// };
d=fs.readFileSync("submission_time.json","utf8");
data=JSON.parse(d);
d1=fs.readFileSync("meeting_time.json","utf8");
data1=JSON.parse(d1);
d1={}
l=[]
l1=[]
for (i  in data,data1){
    for(j of data[i]){
        date=j.slice(0,10)
        
       
        l.push(date)}
    for (j of data1[i]){
        l1.push(j)}}
l0=[]
for ( i of l1){
    date=i.slice(0,10)
    if (! l0.includes(date)){
        l0.push(date)}
}
dict2={}
for (i of l0){
    console.log(i);
    count=0
    lp=[]
    for (j of l1){
        d=j.slice(0,10)
        if (i==d){
            lp.push(j)
  }
    dict2[i]=lp
}}
console.log(dict2)
