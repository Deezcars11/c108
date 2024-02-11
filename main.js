function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-XNxqLkZT/model.json', modelLoaded);

}
function modelLoaded() {
    classifier.classify(gotResult);
    
}
var dog = 0;
var cat = 0;
function gotResult(error,results){
    
}