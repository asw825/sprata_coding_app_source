import axios from "axios";


var xhr = new XMLHttpRequest();
const apiKey = '0PcCWU1CesBRpOzlpH1c6y7GSkRTArnwfNDnVTRa9yUfXnJmiLCVS0qhsu0d2jmap4nmtEGo8hD1fuCX1m2gpQ%3D%3D'
xhr.onload = function (){
    console.log('데이터로딩')
    console.log(this.responseText);
}
var url = `http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList/getpubReliefHospList?serviceKey=0PcCWU1CesBRpOzlpH1c6y7GSkRTArnwfNDnVTRa9yUfXnJmiLCVS0qhsu0d2jmap4nmtEGo8hD1fuCX1m2gpQ%3D%3D&pageNo=1` /*URL*/
 
axios.get(url)
        .then((res)=>{
            res.data()
        })