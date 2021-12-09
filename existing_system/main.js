time=()=>{
    const fs=require("fs")
    var user=require("readline-sync");
    const path = "/home/chhaya/Desktop/existing_system/submission_time.json"
    const path1="/home/chhaya/Desktop/existing_system/meeting_time.json"
    file_exist=fs.existsSync(path)
    file_exist1=fs.existsSync(path1)
    if (file_exist==false && file_exist1==false){
        var submission_time=user.question("submission time in the format YYYY-MM-DD HH:MM:SS:-");
        var meeting_start_time=user.question("meeting start time, in the format YYYY-MM-DD HH:MM and meeting_time_duration:-");
        var user1=user.question("employee name:-")
        var dic2={}
        var dic3={}
        arr=[]
        arr1=[]
        arr.push(submission_time)
        arr1.push(meeting_start_time)
        dic2[user1]=arr
        dic3[user1]=arr1
        fs.writeFileSync("submission_time.json",JSON.stringify(dic2,null,3));
        fs.writeFileSync("meeting_time.json",JSON.stringify(dic3,null,3));}
    else if (file_exist==true && file_exist1==true){
        d=fs.readFileSync("submission_time.json","utf8");
        data=JSON.parse(d);
        d1=fs.readFileSync("meeting_time.json","utf8");
        data1=JSON.parse(d1)
        var submission_time=user.question("submission time in the format YYYY-MM-DD HH:MM:SS:-");
        var meeting_start_time=user.question("meeting start time, in the format YYYY-MM-DD HH:MM and meeting_time_duration:-");
        var user1=user.question("employee name:-")
        arr=[]
        arr1=[]
        arr.push(submission_time)
        arr1.push(meeting_start_time,)
        data[user1]=arr
        data1[user1]=arr1
        fs.writeFileSync("submission_time.json",JSON.stringify(data,null,3))
        fs.writeFileSync("meeting_time.json",JSON.stringify(data1,null,3))}


}
module.exports= time;

