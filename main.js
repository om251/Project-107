function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});

classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pyKPsLqNw/model.json", modelReady);
}


function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        
        document.getElementById('no_of_audio').innerHTML="I can hear : "+results[0].label;
        document.getElementById('name_of_audio').innerHTML="Accuracy : "+(results[0].confidence*100).toFixed(2)+"%";

        img1=document.getElementById('image1');
   

        if(results[0].label=="Class 5"){
            image1.src="roar.gif";

        }
        else if(results[0].label=="barking"){
            image1.src="bark.gif";
        }
        else if(results[0].label=="meowing"){
            image1.src="cat.gif";
        }
        else if(results[0].label=="mooing"){
            image1.src="cow-mooo.gif";
        }
        else{
            image1.src="background.jpeg";
        }
    }
}

