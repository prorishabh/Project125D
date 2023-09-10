leftwristX=0;
rightwristX=0;

difference=0;

function preload()
{

}

function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(560 ,100);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log("Model is loaded");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;

        difference=floor(leftwristX-rightwristX);

        console.log(" rightwristX="+results[0].pose.rightWrist.x+" rightwristY="+results[0].pose.rightWrist.y);
        console.log(" leftwristX="+results[0].pose.leftWrist.x+" leftwristY="+results[0].pose.leftWrist.y);
    }
}

function draw()
{
    background('#106895');
    textSize(difference);
    fill('#252e52');
    text('Rishabh',50,400)
    document.getElementById("font_size").innerHTML="Font Size Of The Text will be="+difference+"px";
}