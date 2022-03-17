//Variable definitions
var today = new Date();
var hours = today.getHours(); 
var mins = today.getMinutes();
const input = process.argv[2];
var stringH = "";
var stringM = "";

//Tell me the current time
function Clock (){

    //Calculate hour
    if(hours == 00){
        stringH = "Twelve"
    }else if(hours == 01){
        stringH = "One"
    }else if(hours == 02){
        stringH = "Two"
    }else if(hours == 03){
        stringH = "Three"
    }else if(hours == 04){
        stringH = "Four"
    }else if(hours == 05){
        stringH = "Five"
    }else if(hours == 06){
        stringH = "Six"
    }else if(hours == 07){
        stringH = "Seven"
    }else if(hours == 08){
        stringH = "Eight"
    }else if(hours == 09){
        stringH = "Nine"
    }else if(hours == 10){
        stringH = "Ten"
    }else if(hours == 11){
        stringH = "Eleven"
    }else if(hours == 12){
        stringH = "Twelve"
    }else if(hours == 13){
        stringH = "One"
    }else if(hours == 14){
        stringH = "Two"
    }else if(hours == 15){
        stringH = "Three"
    }else if(hours == 16){
        stringH = "Four"
    }else if(hours == 17){
        stringH = "Five"
    }else if(hours == 18){
        stringH = "Six"
    }else if(hours == 19){
        stringH = "Seven"
    }else if(hours == 20){
        stringH = "Eight"
    }else if(hours == 21){
        stringH = "Nine"
    }else if(hours == 22){
        stringH = "Ten"
    }else if(hours == 23){
        stringH = "Eleven"
    }else if(hours == 24){
        stringH = "Twelve"
    };

    //Calculate minute
    if (mins >= 0 && mins <= 9){
        stringM = "O'Clock";
    }else if(mins >= 10 && mins <= 19){
        stringM = "ten";
    }else if(mins >= 20 && mins <= 29){
        stringM = "twenty";
    }else if(mins >= 30 && mins <= 39){
        stringM = "thirty";
    }else if(mins >= 40 && mins <= 49){
        stringM = "fourty";
    }else if(mins >= 50){
        stringM = "fifty";
    };

   return console.log("The current time is... " + stringH + " " + stringM);  
};

//Tell me the friendly version of my input
function timeInput(){

    //Variable definitions
    var inputH = input[0] + input[1];
    var inputM1 = input[3];
    var inputM2 = input[4];
    var friendlyTimeH = ""
    var friendlyTimeM1 = ""
    var friendlyTimeM2 = ""
    
    //Calculate hours
    if(inputH == "00" || inputH ==  "12" || inputH == "24"){
        friendlyTimeH = "Twelve";  
    }else if(inputH == "01" || inputH == "13"){
        friendlyTimeH = "One"
    }else if(inputH == "02" || inputH == "14"){
        friendlyTimeH = "Two"
    }else if(inputH == "03" || inputH == "15"){
        friendlyTimeH = "Three"
    }else if(inputH == "04" || inputH == "16"){
        friendlyTimeH = "Four"
    }else if(inputH == "05" || inputH == "17"){
        friendlyTimeH = "Five"
    }else if(inputH == "06" || inputH == "18"){
        friendlyTimeH = "Six"
    }else if(inputH == "07" || inputH == "19"){
        friendlyTimeH = "Seven"
    }else if(inputH == "08" || inputH == "20"){
        friendlyTimeH = "Eight"
    }else if(inputH == "09" || inputH == "21"){
        friendlyTimeH = "Nine"
    }else if(inputH == "10" || inputH == "22"){
        friendlyTimeH = "Ten"
    }else if(inputH == "11" || inputH == "23"){
        friendlyTimeH = "Eleven"
    }else{
        console.log('INVALID HOURS ENTERED')
    }

    //Calculate first digit of minute
    if(inputM1 == 0){
        friendlyTimeM1 = "O'Clock"
    }else if(inputM1 == 1  && inputM2 == 1){
        friendlyTimeM1 = "Eleven"
    }else if(inputM1 == 1  && inputM2 == 2){
        friendlyTimeM1 = "Twelve"
    }else if(inputM1 == 1  && inputM2 == 3){
        friendlyTimeM1 = "Thirteen"
    }else if(inputM1 == 1  && inputM2 == 4){
        friendlyTimeM1 = "Fourteen"
    }else if(inputM1 == 1  && inputM2 == 5){
        friendlyTimeM1 = "Fifteen"
    }else if(inputM1 == 1  && inputM2 == 6){
        friendlyTimeM1 = "Sixteen"
    }else if(inputM1 == 1  && inputM2 == 7){
        friendlyTimeM1 = "Seventeen"
    }else if(inputM1 == 1  && inputM2 == 8){
        friendlyTimeM1 = "Eighteen"
    }else if(inputM1 == 1  && inputM2 == 9){
        friendlyTimeM1 = "Nineteen"
    }else if(inputM1 == 2){
        friendlyTimeM1 = "Twenty"
        lastDigit()
    }else if(inputM1 == 3){
        friendlyTimeM1 = "Thirty"
        lastDigit()
    }else if(inputM1 == 4){
        friendlyTimeM1 = "Fourty"
        lastDigit()
    }else if(inputM1 == 5){
        friendlyTimeM1 = "Fifty"
        lastDigit()
    }else{
        console.log('INVALID MINUTES ENTERED')
    }

    //Calculate second digit of minute
    function lastDigit(){
        if(inputM2 == 0){
            friendlyTimeM2 = " "
        }else if(inputM2 == 1){
            friendlyTimeM2 = "-One"
        }else if(inputM2 == 2){
            friendlyTimeM2 = "-Two"
        }else if(inputM2 == 3){
            friendlyTimeM2 = "-Three"
        }else if(inputM2 == 4){
            friendlyTimeM2 = "-Four"
        }else if(inputM2 == 5){
            friendlyTimeM2 = "-Five"
        }else if(inputM2 == 6){
            friendlyTimeM2 = "-Six"
        }else if(inputM2 == 7){
            friendlyTimeM2 = "-Seven"
        }else if(inputM2 == 8){
            friendlyTimeM2 = "-Eight"
        }else if(inputM2 == 9){
            friendlyTimeM2 = "-Nine"
        }else{
            console.log('INVALID MINUTES ENTERED')
        }
    }
    return console.log("Your input time is... " + friendlyTimeH + " " + friendlyTimeM1 + friendlyTimeM2);
}

//Run functions
Clock();
if(input){
    timeInput();
}

