let sex = document.getElementById("inputSex");
let age = document.getElementById("inputAge");
let biceps = document.getElementById("inputBiceps");
let triceps = document.getElementById("inputTriceps");
let subescapular = document.getElementById("inputSubescapular");
let crestaI = document.getElementById("inputCrestaI");
let result = document.getElementById("resultG");

// let sex = 1;
// let age = 3;
// let biceps = 5;
// let triceps = 7;
// let subescapular = 15;
// let crestaI = 18;


let estC = function (){
    if (sex.value==0 && age.value==0) {
      let C = 0;
      return C;
    } else if (sex.value==1 && age.value==1){
      let C = 1.1620;
      return C;
    } else if (sex.value==1 && age.value==2){
      let C = 1.1631;
      return C;
    } else if (sex.value==1 && age.value==3){
      let C = 1.1422;
      return C;
    } else if (sex.value==1 && age.value==4){
      let C = 1.1620;
      return C;
    } else if (sex.value==1 && age.value==5){
      let C = 1.1715;
      return C;
    }else if (sex.value==2 && age.value==1){
      let C = 1.1549;
      return C;
    } else if (sex.value==2 && age.value==2){
      let C = 1.1599;
      return C;
    } else if (sex.value==2 && age.value==3){
      let C = 1.1423;
      return C;
    } else if (sex.value==2 && age.value==4){
      let C = 1.1333;
      return C;
    } else if (sex.value==2 && age.value==5){
      let C = 1.1339;
      return C;
    } else {
      let C = 0;
      return C;
    }
  }


let estM = function () {
  if (sex.value==0 && age.value==0) {
    let M = 0;
    return M;
  } else if (sex.value==1 && age.value==1){
    let M = 0.0630;
    return M;
  } else if (sex.value==1 && age.value==2){
    let M = 0.0632;
    return M;
  } else if (sex.value==1 && age.value==3){
    let M = 0.0544;
    return M;
  } else if (sex.value==1 && age.value==4){
    let M = 0.0700;
    return M;
  } else if (sex.value==1 && age.value==5){
    let M = 0.0779;
    return M;
  }else if (sex.value==2 && age.value==1){
    let M = 0.0678;
    return M;
  } else if (sex.value==2 && age.value==2){
    let M = 0.0717;
    return M;
  } else if (sex.value==2 && age.value==3){
    let M = 0.0632;
    return M;
  } else if (sex.value==2 && age.value==4){
    let M = 0.0612;
    return M;
  } else if (sex.value==2 && age.value==5){
    let M = 0.0645;
    return M;
  } else {
    let M = 0;
    return M;
}
}

function calcPliegues (biceps, triceps, subescapular, crestaI) {
  let pliegues = biceps + triceps + subescapular + crestaI;
  return pliegues;
}


function calcDensidad (constC, constM, sumaPliegues) {
  let densidad = constC - (constM * (Math.log10(sumaPliegues)));
  return densidad;
}

function calcGrasa(densidad) {
  let grasa = ((4.95/densidad) - 4.5) * 100;
  return grasa;
}

function manFinalSuccess() {
    manRes();
}

function manFinalFail() {
  resultG.innerText = "Debes llenar todos los campos ⚠️";
}


let manRes = function () {
    let manC = estC();
    let manM = estM();
    let manFolds = calcPliegues(biceps.valueAsNumber, triceps.valueAsNumber, subescapular.valueAsNumber, crestaI.valueAsNumber);
    let manDen = calcDensidad(manC, manM, manFolds);
    let manGras = calcGrasa(manDen);
    let resultado = manGras.toFixed(2);
    if (sex.value==2 && resultado<=14) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a grasa esencial 🤯";
    } else if (sex.value==2 && resultado>14 && resultado<=22){
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un atleta 💪";
    } else if (sex.value==2 && resultado>22 && resultado<=25) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una buena aptitup física 🤩";
    } else if (sex.value==2 && resultado>25 && resultado<=31) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un riesgo potencial 🙁";
    } else if (sex.value==2 && resultado>32) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una persona obesa 😤";
    }else if (sex.value==1 && resultado<=5){
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a grasa esencial 🤯";
    } else if (sex.value==1 && resultado>5 && resultado<=13) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un atleta 💪";
    } else if (sex.value==1 && resultado>13 && resultado<=18) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una buena aptitup física 🤩";
    } else if (sex.value==1 && resultado>18 && resultado<=24) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un riesgo potencial 🙁";
    } else if (sex.value==1 && resultado>24) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una persona obesa 😤";
    }
}

function manFinal() {
  if (sex.value>0 && age.value>0 && biceps.valueAsNumber>0 && triceps.valueAsNumber>0 && subescapular.valueAsNumber>0 && crestaI.valueAsNumber>0) {
    manFinalSuccess();
  } else {
    manFinalFail();
  }
}
