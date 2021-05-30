Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90,
})
camera=document.getElementById("camera")
Webcam.attach(camera)

function take_snap(){
    Webcam.snap(function (data_uri){
        document.getElementById("captured_image").src=data_uri
    })
  
}
function modelLoaded()
{
    console.log("Loading Model")
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iDHtvLtet/model.json",modelLoaded);

function identify(){
    img= document.getElementById("captured_image")
    classifier.classify(img, gotResult)
}
function gotResult(error, results){
if(error){
    window.alert(error)
    console.error(error)
}else{
    console.log(results)
    confidence2=results[0].confidence.toFixed(3)
confidence=confidence2*100
document.getElementById("accuracy").innerHTML="Accuracy: "+confidence+"%"
document.getElementById("object").innerHTML="Object: "+results[0].label
}

}