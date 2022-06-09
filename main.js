function preload(){

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function modelLoaded(){
    console.log("Pose net is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);}
 }

function draw(){

}
