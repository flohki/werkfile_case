"use strict";

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
function controleerVoorwaardenUur(){
  let regExp=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  if(regExp.test(uurTxt) == false){
    document.getElementById("uur_error").innerHTML="Dit is niet correct!";
    allesCorrectIngevuld = false;
  }
  else{
    document.getElementById("uur_error").innerHTML="";
  }	
};

// function controleerVoorwaardenAantalPersonen(){
//   if (selectElement.value === '') {
//     document.getElementById('aantalpersonen_error').innerHTML= "Kies de hoeveelheid personen";
//   allesCorrectIngevuld = false;
//   }
//   else{
//     document.getElementById("aantalpersonen_error").innerHTML="";
//   }
// }
// function controleerVoorwaardenGelegenheid(){
//   if (selectElement.value === '') {
//     document.getElementById('gelegenheid_error').innerHTML= "Kies de gelegeneheid";
//   allesCorrectIngevuld = false;
//   }
//   else{
//     document.getElementById("gelegenheid_error").innerHTML="";
//   }
// }

function verstuur() {
  naamTxt = document.getElementById("naam").value;
  emailTxt = document.getElementById("email").value;
  datumTxt = document.getElementById("datum").value;
  uurTxt = document.getElementById("uur").value;
  gelegenheidTxt = document.getElementById("gelegenheid").value;
  aantalpersonenTxt = document.getElementById("aantalpersonen").value;
  allesCorrectIngevuld = true;

  if (naamTxt.length == 0) {
    document.getElementById("naam_error").innerHTML = "vul in a.u.b.";
    allesCorrectIngevuld = false;
  }
  else {
    controleerVoorwaardenNaam()
  }

  if (emailTxt.length == 0) {
    document.getElementById("email_error").innerHTML = "vul in a.u.b.";
    allesCorrectIngevuld = false;
  }
  else {
    controleerVoorwaardenEmail()
  }

  if (datumTxt.length == 0) {
    document.getElementById("datum_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  }
  else {
    controleerVoorwaardenDatum()
  }
  if (uurTxt.length == 0) {
    document.getElementById("uur_error").innerHTML = "Vul in a.u.b.";
    allesCorrectIngevuld = false;
  }
  else {
    controleerVoorwaardenUur()
  }

  if (gelegenheidTxt == 0) {
    document.getElementById("gelegenheid_error").innerHTML = "Kies a.u.b. een gelegenheid";
    allesCorrectIngevuld = false;
  }
  else {
    document.getElementById("gelegenheid_error").innerHTML = "";
  }

  if (allesCorrectIngevuld) {
    document.write("Verstuurd");
  }
  if (allesCorrectIngevuld) {
    document.write("Alles is correct ingevuld");
    let link = "mailto:" + encodeURIComponent("flore-jan_smeets@hotmail.com")
      + "?cc=" + encodeURIComponent("flore-jan_smeets@hotmail.com")
      + "&subject=" + encodeURIComponent("Formulier validatie")
      + "&body="
      + "naam:"
      + encodeURIComponent(naamTxt)
      + encodeURIComponent("\r\n\n")
      + "E-mail:"
      + encodeURIComponent(emailTxt)
      + encodeURIComponent("\r\n\n")
      + "Datum:"
      + encodeURIComponent(datumTxt)
      + encodeURIComponent("\r\n\n")
      + "Uur:"
      + encodeURIComponent(uurTxt)
      + "Gelegenheid:"
      + encodeURIComponent(gelegenheidTxt)
      + encodeURIComponent("\r\n\n")
      + "Aantal personen:"
      + encodeURIComponent(aantalpersonenTxt)
      + encodeURIComponent("\r\n\n")
    window.location.href = link;
  };
};

