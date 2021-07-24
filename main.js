nose_x = 0;
nose_y = 0; 
r_w_x = 0; 
l_w_x = 0; 
difference = 0;


function setup(){
    c1 = createCanvas(550, 480);
    c1.position(850,230);
    v1 = createCapture(VIDEO);
    v1.position(100,230); 

poseN = ml5.poseNet(v1, modelLoaded); 
poseN.on('pose', gotPoses);
    }

    function gotPoses(results){

if (results.length>0){

console.log(results);
 nose_x= results[0].pose.nose.x; 
 nose_y = results[0].pose.nose.y; 

 console.log("Nose X = "+nose_x+ " Nose Y = "+nose_y);
 r_w_x = results[0].pose.rightWrist.x; 
 l_w_x = results[0].pose.leftWrist.x; 
 difference = floor(l_w_x - r_w_x);

 console.log("Right Wrist X = "+r_w_x+ " Left Wrist X = "+l_w_x+ " Difference: "+difference);

}

    }

    function modelLoaded(){
console.log("Model has Loaded!!");


    }

    function draw(){ 
name_of = document.getElementById("name_input").value;

background("lightyellow");
document.getElementById("size_box").innerHTML= "Size of Text is: "+difference+ "px";

fill ("darkred");
text (name_of, nose_x, nose_y,);
textFont("Cochin"); 
textStyle(BOLD);
textSize (difference);
    }