//  for next button
var nextButton = document.getElementById('btnNext');
//  for quiz box
var quizbox = document.getElementById('questionBox') 


// for options 

var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

// / for list
var ul = document.getElementById('ul') 


// questions query
var app={
        questions:[
            {
                q:'Who is the caption of the Leafs?',
                options: ['Matthews', 'Marner', '`Nylander', 'Tavares'],
                answer:4
            },
            {
                q:'When did the  Raptors won the NBA championship',
                options: ['1999', '2018', '2019', 'Never'],
                answer:3
            }, 
            {
                q:'How many Stanely Cup Championships has the Leafs won ?',
                options: ['24', '1', '13', '0'],
                answer:3
            }, 
            {
                q:'Which NHL team lost to a Zamboni driver as a goalie for the first time in history?',
                options: ['Boston', 'Montreal Canadiens ', 'Carolina Hurricanes', 'It never happened'],
                answer:4
            }, 
            {
                q:'Which player is known for the famous bat flip on the Jays',
                options: ['Vladimir Guerrero', 'Jose Bautista', 'Jose Reyes', 'Mark Buehrie'],
                answer:2
            } 
     
            
          
        ],



        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="End of Quiz";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },

        //  
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML= this.score + "/" +   this.questions.length ;
        }
} 





//  Event listeners NEED TO FIXXXX

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
} 

// for timer 


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

 
}

window.onload = function () {
    var twoMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};
