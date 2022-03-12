
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2xADWRRmp/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

//--------
var Dogo=0;
var Cat=0;
var Parrot=0;

function gotResults(error,results){
if(error){
console.error(error);
}
else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*254)+1;
    random_number_g=Math.floor(Math.random()*254)+1;
    random_number_b=Math.floor(Math.random()*254)+1;

    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Detected Dog - '+Dogo+ ' Detected Parrot - '+Parrot + ' Detected Cat - '+Cat;

    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";


    img=document.getElementById('Sound_Detected');


    if (results[0].label == "Dogo") {
        img.src = 'dog.png';
        Dogo = Dogo+1;
      } 
      else if (results[0].label == "Cat") {
        img.src = 'cat.jpeg';
        Cat = Cat + 1;
      } 
      else if (results[0].label == "Parrot") {
          img.src = 'parrot.png';
          Parrot = Parrot + 1;
      } 
      else{
        img.src = 'ear.gif';
      }
}
}
