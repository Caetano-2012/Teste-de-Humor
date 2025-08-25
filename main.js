let prediction1 = "";
let prediction2 = "";
let classifier;

Webcam.set({
    width: 350,
    height: 275,
    imageFormat: "png"
});

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = `<img id="capturedImage" src="${datauri}">`;
    });
}

console.log("versão ml5:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gPgiwYmvR/.json",modelLoaded)