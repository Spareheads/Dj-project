song = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;

function setup()
{
canvas = createCanvas(600, 500);
canvas.center();


video= createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", result);
}


function modelLoaded() {
console.log("Model Loaded");


}

function result(Gotresults){
if(Gotresults.length > 0){

    console.log(Gotresults);
leftWristx = Gotresults[0].pose.leftWrist.x;
leftWristy = Gotresults[0].pose.leftWrist.y;

console.log("leftWristx = " + leftWristx +", leftWristy = "+ leftWristy);

rightWristx = Gotresults[0].pose.rightWrist.x;
rightWristy = Gotresults[0].pose.rightWrist.y;

console.log("rightWristx = " + rightWristx +", rightWristy = "+ rightWristy);
}
    


}

function draw()
{


image(video, 0, 0, 600, 500);

fill("#FF0000");
stroke("#FF000");
if(scoreRightWrist > 0.2)
{
circle(rightWristX, rightWristY, 20);

if(rightWristY >0 && rightWristY <= 100); 
{
document.getElementById("speed").innerHTML = "Speed = 0.5x";
song.rate(0.5);
}

if(rightWristY >100 && rightWristY <= 200); 
{
document.getElementById("speed").innerHTML = "Speed = 1x";
song.rate(1);
}


if(rightWristY >200 && rightWristY <= 300); 
{
document.getElementById("speed").innerHTML = "Speed = 1.5x";
song.rate(1.5);
}

if(rightWristY >300 && rightWristY <= 400); 
{
document.getElementById("speed").innerHTML = "Speed = 2x";
song.rate(2);
}


if(rightWristY >400 && rightWristY <= 500); 
{
document.getElementById("speed").innerHTML = "Speed = 2.5x";
song.rate(2.5);
}
}

circle(leftWristX,leftWristY,20);
InNumberLeftWristY = Number(leftWristY);
remove_decimals = floor(InNumberLeftWristY);
volume = remove_decimals/500;
document.getElementById("volume")




}

function preload()
{
song = loadSound("music.mp3")
}


function play()
{
song.play();
song.setVolume(1);
song.rate(1);
}


function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
scorerightWrist = results[0].pose.keypoints[10].score;
scoreleftWrist = results[0].pose.keypoints[9].score;
console.log("scoreRightWrist = " + scoreRightWrist +"scoreLeftWrist = " + scoreLeftWrist );

rightWristX = result[0].pose.rightWrist.x;
rightWristY = result[0].pose.rightWrist.y;
console.log("rightWristX = "+ rightWristX +"rightWristY = "+rightWristY)


leftWristX = result[0].pose.leftWrist.x;
leftWristY = result[0].pose.leftWrist.y;
console.log("leftWristX = "+ lefttWristX +"leftWristY = "+leftWristY)








}
}