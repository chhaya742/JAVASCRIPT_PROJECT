squire=[[8, 3, 4],
        [1, 5, 9],
        [6, 7, 2]]
    row=0
    colom=0
    d=0
    d2=0
    for (var i=0,k=2;i<squire.length;i++,k--){
        for (var j=0;j<squire[i].length;j++){
            row+=squire[i][j]}
        for (var j=0,k=0;j<squire[i].length;j++){
            colom+=squire[i][j]}      
        d+=squire[i][i]
        d2+=squire[i][k]}
if(row==colom && d2==d){
    console.log("its magic square")
}
else{
    console.log("not a magic square");
}

