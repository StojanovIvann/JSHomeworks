$(document).ready(function(){
    let mainDiv =  $('#mainOne');
    let greetButton = $('#greetButton')
    mainDiv.css('margin-bottom', '100px')

    //Homework 1
    greetButton.click(function(){
        let userGreet = $('#greetInput').val();
         if (!isNaN(userGreet)){
            alert(`Error. Please enter your name!!`)
        }
        else{
            mainDiv.html(`<h1> Hello there  ${userGreet} </h1>`)
        
        }
    });





    //Homework2
    let messages = $('#message')
    let generateButton = $('#generateButton');
    generateButton.click(function (){
        let colorInput = $('#color').val();
        let textInput = $('#text').val();
        if((!colorInput || !textInput)){
            messages.show().html(`<h3>You didn't enter a valid color or text </h3> `)
        }
    
        else {
            messages.html(`<h1> ${textInput} </h1>`).css('color' , colorInput);
    }
    });
});





    