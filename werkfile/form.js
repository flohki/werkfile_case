"use strict"

let naamTxt;
let emailTxt;
let datumTxt;
let uurTxt;
let gelegenheidTxt;
let aantalPersonenTxt;

let allesCorrectIngevuld=true;

function controleerVoorwaardenNaam(){
    if(naamTxt.length < 2 ){
        document.getElementById("naam_error").innerHTML="Minstens 2 karakters lang!";
            allesCorrectIngevuld = false;
    }
    else{
        document.getElementById("naam_error").innerHTML="";
    }
}

function controleerVoorwaardenEmail(){
  let regExp=/^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;
  if(regExp.test(emailTxt) == false){
    document.getElementById("email_error").innerHTML="Dit is niet correct!";
    allesCorrectIngevuld = false;
  }
  else{
    document.getElementById("email_error").innerHTML="";
  }	
};
function controleerVoorwaardenDatum(){
  let regExp=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  if(regExp.test(datumTxt) == false){
    document.getElementById("datum_error").innerHTML="Dit is niet correct!";
    allesCorrectIngevuld = false;
  }
  else{
    document.getElementById("datum_error").innerHTML="";
  }	
};
function controleerVoorwaardenGelegenheid(){
  if (selectElement.value === '') {
    document.getElementById('gelegenheid_error').innerHTML= "Kies een gelegenheid";
  }
}

