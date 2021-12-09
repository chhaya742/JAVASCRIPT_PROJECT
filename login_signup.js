const fs=require("fs");
const { stringify } = require("querystring");
const read=require("readline-sync")
const path = '/home/chhaya/Desktop/js/Js_project/userdetail.json';
file_exist=fs.existsSync(path)
console.log(file_exist)
if (file_exist==false){
    dic1={}
    list3=[]
    user=read.question("signup or login:-")
    if (user=="signup"){
        names=read.question("enter user name:-")
        console.log("your password length should be between 8-32");
        pas=read.question("creat a strong password:-")
        if (pas.length>=8 && pas.length<=32){
            size=/^[/S/s]{8,32}$/ , upper=/[A-Z]/,lower=/[a-z]/,num=/[0-9]/ ,special=/[@#$&.*]/
            if (size.test(pas),upper.test(pas),lower.test(pas),num.test(pas),special.test(pas)){
                pas2=read.question("confirm password")
                if (pas==pas2){
                    console.log("congrats ",names,"you have succesfully signup")
                    dob=read.question("enter your date of birth tin form of - 00/00/1900__  ")
                    descr=read.question("description  ")
                    hobbies=read.question("hobbies  ")
                    gender=read.question("gender ( male of female)   ")
                    dic1={}
                    console.log("congrats ",names,"you have succesfully signup")
                    list1=["name","pas2","dob","descr","hobbies","gender"]
                    list2=[names,pas2,dob,descr,hobbies,gender]
                    i=0
                    while (i <list2.length){
                        dic1[list1[i]]=list2[i]
                        i+=1}
                        dic2={}
                    list4=[]
                    list4.push(dic1)
                    dic2[pas]=list4
                    fs.writeFileSync("Js_project/userdetail.json",JSON.stringify(dic2,null,3))}
                else{
                    console.log("both password are not same")}}
            else{
                console.log("your password is not strong,try again")}}
        else{
            console.log("your password length should be between 8-32")}}}
else if (file_exist==true){
        list3=[]
        user=read.question("signup or login:-")
        if (user=="signup"){
            names=read.question("enter user name:-")
            console.log("your password length should be between 8-18")
            pas=read.question("creat a strong password:-")
            d=fs.readFileSync("Js_project/userdetail.json","utf8");
            data=JSON.parse(d)
            if(d.includes(names && pas))
            {
                console.log("this account is already axists")
            }
            else{
                if (pas.length>=6 && pas.length<=18){
                    size=/^[/s/s]{8,32}$/ , upper=/[A-Z]/,lower=/[a-z]/,num=/[0-9]/ ,special=/[@#$&.*]/
                    if (size.test(pas),upper.test(pas),lower.test(pas),num.test(pas),special.test(pas)){
                        pas2=read.question("confirm password:-")
                        if (pas==pas2){
                            console.log("congrats ",names,"you have succesfully signup")
                            dob=read.question("enter your date of birth in form of - 00/00/1900:- ")
                            descr=read.question("description  ")
                            hobbies=read.question("hobbies  ")
                            gender=read.question("gender  (male of female)   ")
                            console.log("congrats ",names,"you have succesfully signup")
                            list1=["name","pas2","dob","descr","hobbies","gender"]
                            list2=[names,pas2,dob,descr,hobbies,gender]
                            i=0
                            dic1={}
                            while (i <list2.length){
                                dic1[list1[i]]=list2[i]
                                i+=1}
                            list4=[]
                            list4.push(dic1)
                            data[pas]=list4
                            fs.writeFileSync("Js_project/userdetail.json",JSON.stringify(data,null,3))}
                        else{
                            console.log("both password are not same")}}
                    else{
                        console.log("your password is not strong,try again") }}}}
            else if ( user=="login"){
                user_name=read.question("enter user name:-")
                password=read.question("enter password")
                f=fs.readFileSync("Js_project/userdetail.json","utf8")
                data=JSON.parse(f)
                    if (f.includes( password && user_name)){
                        console.log(" succesfull")
                    }
                    else{
                        console.log("sorry..this acount is not exist")}
                    }}