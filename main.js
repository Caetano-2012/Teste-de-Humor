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

 ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gPgiwYmvR/model.json",)
    .then(model =>{
        classifier = model;
        console.log('Model Loaded');
    })
    .catch(err => console.error('Erro ao carregar o modelo:', err));

    function speak() {
        let synth = window.speechSynthesis;
        let speakData1 = "A primeira previsão é " + prediction1;
        let speakData2 = "E a segunda previsão é " + prediction2; 
    }