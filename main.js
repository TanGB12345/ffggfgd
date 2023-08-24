var lion=0;
var monkey=0;
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/rlMXGyB0A/model.json",modelloaded);

}
function modelloaded(){
    console.log("model is ready");
    classifier.classify(gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
    console.log(results);
    red = Math.floor(Math.random()*255)+1;
    green = Math.floor(Math.random()*255)+1;
    blue = Math.floor(Math.random()*255)+1;
    document.getElementById("nice").innerHTML="detected voices"+results[0].label;
    document.getElementById("wow").innerHTML=" detected lion " + lion + " detected monkey " + monkey;
    document.getElementById("nice").style.color="rgb("+red+","+blue+","+green+")";
    document.getElementById("wow").style.color="rgb("+red+","+blue+","+green+")";
    img = document.getElementById("animal");
    if(results[0].label=="lion"){
        img.src="hi.jpg";
        lion=+1;
    }
    else if(results[0].label=="monkey"){
        img.src="download.jpg";
        monkey=+1;
    }
    else{
        img.src="j.png";
    }
    }
}