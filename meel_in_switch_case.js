let read=require("readline-sync");
var d=read.question("enter  day")
meal=read.question("enter meal time")
switch (d){
  case 'sunday':
      switch(meal){
        case 'breakfast':
            console.log("poha")
            break;
        case 'lunch':
            console.log("dal,allu sabji,roti")
            break;
        case 'dinner':
            console.log('chana dal,roti')
            break; }
    break;
  case 'monday':
    switch(meal){
        case 'breakfast':
            console.log("pasta")
            break;
        case 'lunch':
            console.log("dal,bengan sabji,roti")
            break;
        case 'dinner':
            console.log('tuar dal,roti')
            break; 
      }
    break;
  case 'tuesday':
    switch(meal){
        case 'breakfast':
            console.log("meggi")
            break;
        case 'lunch':
            console.log("dal,tomato sabji,roti")
            break;
        case 'dinner':
            console.log('tuar dal,roti')
            break; 
    }
    break;
  case 'wednesday':
    switch(meal){
        case 'breakfast':
            console.log("poha")
            break;
        case 'lunch':
            console.log("dal,turai and tomato sabji,roti")
            break;
        case 'dinner':
            console.log('tuar dal,roti')
            break; 
    }
    break;
  case 'thursday':
    switch(meal){
        case 'breakfast':
            console.log("sprouts")
            break;
        case 'lunch':
            console.log("dal,tinda and tomato sabji,roti")
            break;
        case 'dinner':
            console.log('tuar dal,roti')
            break; }
    break;
  case 'friday':
    switch(meal){
        case 'breakfast':
            console.log("chila")
            break;
        case 'lunch':
            console.log("dal,tinda and tomato sabji,roti")
            break;
        case 'dinner':
            console.log('tuar dal,roti')
            break; }
    break;
  case  'suterday':
    switch(meal){
        case 'breakfast':
            console.log("khichdi")
            break;
        case 'lunch':
            console.log("dal,tinda and tomato sabji,roti")
            break;
        case 'dinner':
            console.log('tuar dal,roti')
            break; }}




