function preload() {
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    Video=createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();

    poseNet = ml5.posNet(video,modelLoaded);
    poseNet.on('posenet Is Initialized');
}

function modeLoded(){
    console.log('posenet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('myFilter.Image');
}

function gotPose(results)
{
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x)
    console.log("nose y = " + results[0].pose.nose.y)
}