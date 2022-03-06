function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kyqBOGx1n/model.json', modelReady);
}
 
 
function modelReady() {
    classifier.classify(gotResults);
}
 
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255 + 1)
        random_number_g = Math.floor(Math.random() * 255 + 1)
        random_number_b = Math.floor(Math.random() * 255 + 1)
        document.getElementById("result_label").innerHTML = "i can hear " + results[0].label;
 
        document.getElementById("result_confidence").innerHTML = "Accuracy " + (results[0].confidence * 100).toFixed(2) + "%";
 
        img = document.getElementById('Barking');
        img1 = document.getElementById('Meowing');
        img2 = document.getElementById('Roaring');
        img3 = document.getElementById('Mooing');
        img4 = document.getElementById('Listening');
 
        if (results[0].label == "Barking") {
            img.src = 'bark.gif';
            img1.src = 'meow.png';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
            img4.src = 'listen.png';
 
        } else if (results[0].label == "Meowing") {
            img.src = 'dog.png';
            img1.src = 'meow.gif';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
            img4.src = 'listen.png';
 
        } else if (results[0].label == "Roaring") {
            img.src = 'dog.png';
            img1.src = 'meow.png';
            img2.src = 'lion.gif';
            img3.src = 'cow.png';
            img4.src = 'listen.png';
 
        } else if (results[0].label == "Mooing") {
            img.src = 'dog.png';
            img1.src = 'meow.png';
            img2.src = 'lion.png';
            img3.src = 'cow.gif';
            img4.src = 'listen.png';
 
          } else {
            img.src = 'dog.png';
            img1.src = 'meow.png';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
            img4.src = 'listen.gif';
        }
 
 
    }
 
}
 
 
