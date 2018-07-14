let highScore = 60;
userScore = 55;

if(userScore> highScore){
    console.log("Congratulations!! Your new high score is" + userScore);
} else if (userScore < highScore){
    console.log("Try again. You just need " + (highScore - userScore + 1));
}