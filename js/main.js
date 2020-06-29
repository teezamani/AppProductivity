
//All the question in an array
var questions = [
    'Whats your name ?',
    'Are you working remotely or onsite  ?',
    'Have a productive day bye'
];

//set the counter of the Question 
var num = 0;
//Declare variables for the inputs question and ans
var output = document.getElementById("question");
var inputbox = document.querySelector("#ans");

//set the first question as default
output.innerHTML=questions[0];

//this function get the  user response
function showResponse(){
    var input = inputbox.value;
    if (inputbox.value == "") {
    }else{
        if (num == 0) {
            output.innerHTML = `Hello ${input} nice meeting you`;
            inputbox.value = "";
            ++num;
            setTimeout(nextQuestion,2000);
        }else if(num == 1){
                if (input.toLowerCase() === "remotely" ||input.toLowerCase() === "remote" ) {
                    output.innerHTML =`Okay ${input} work . Hence schedule your daily activities with productivity app like clocify and also make use of your calender`;
                }else if (input.toLowerCase() === "onsite" ||input.toLowerCase() === "office" ) {  
                    output.innerHTML =`Okay ${input} work . Remember to move with caution and also plan your day with a productivity app like clockify also make use of your calender`;
                } else {
                    output.innerHTML =` I didn't get your reply but remember to move with caution and also plan your day with a productivity app like clockify also make use of your calender`;
                }
            inputbox.value = "";
            ++num;
            setTimeout(nextQuestion,9000);
        }
    }
}
//Change the input display if on the last question
function nextQuestion() {
    output.innerHTML = questions[num];
    if(num == 2){
        inputbox.style.display = "none";
    }
};

//invoke the showResponse when user clicks enter
$(document).on('keypress' , function(e) {
    if (e.which == 13) {
        showResponse();
    }
});

// inputbox.addEventListener('keypress' , showResponse)

// function showResponse(e) {
//     if (inputbox.value =="") {
//     }else{
//         if (e.which == 13) {
//             alert(true)
//         }
//     }
// };