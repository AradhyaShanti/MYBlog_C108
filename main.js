function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wyQcT4OYP/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var Dog = 0;
var Cat = 0;
var Sparrow = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog -  '+Dog + ' Detected Cat -  '+Cat + ' Detected Sparrow -  '+Sparrow;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Angry dogs Barking") {
      img.src = 'bark.gif';
      Dog = Dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'meow.gif';
      Cat = Cat + 1;
    } else if (results[0].label == "Chirping") {
        img.src = 'Sparrow.gif';
        Sparrow = Sparrow + 1;
    } else {
        img.src = 'listen.gif'
    }
  }
}