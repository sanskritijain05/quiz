function showScore() {

   let answer1 =  document.getElementById('ans1').value
   let answer2 =  document.getElementById('ans2').value
   let  answer3 = document.getElementById('ans3').value
    
    let a = "Joe Biden"
    let b = "Narendra Modi"
    let c = "Indian space research organisation"

    if ( answer1 == a,  answer2 == b, answer3 == c) {
    document.getElementById('score').innerHTML = "Score = Congragulations all your scores are perfect"
    }
    else{
        document.getElementById('score').innerHTML = "Score = Check again"
    }

}


