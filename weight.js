// let sex = document.getElementById("inputSex");
// let age = document.getElementById("inputAge");
// let biceps = document.getElementById("inputBiceps");
// let triceps = document.getElementById("inputTriceps");
// let subescapular = document.getElementById("inputSubescapular");
// let crestaI = document.getElementById("inputCrestaI");
let result = document.getElementById("resultG");

// let sex = 1;
// let age = 3;
// let biceps = 5;
// let triceps = 7;
// let subescapular = 15;
// let crestaI = 18;


let estC = function (){
    if (sex==0 && age==0) {
      let C = 0;
      return C;
    } else if (sex==1 && age==1){
      let C = 1.1620;
      return C;
    } else if (sex==1 && age==2){
      let C = 1.1631;
      return C;
    } else if (sex==1 && age==3){
      let C = 1.1422;
      return C;
    } else if (sex==1 && age==4){
      let C = 1.1620;
      return C;
    } else if (sex==1 && age==5){
      let C = 1.1715;
      return C;
    }else if (sex==2 && age==1){
      let C = 1.1549;
      return C;
    } else if (sex==2 && age==2){
      let C = 1.1599;
      return C;
    } else if (sex==2 && age==3){
      let C = 1.1423;
      return C;
    } else if (sex==2 && age==4){
      let C = 1.1333;
      return C;
    } else if (sex==2 && age==5){
      let C = 1.1339;
      return C;
    } else {
      let C = 0;
      return C;
    }
  }
let manC = estC();

let estM = function () {
  if (sex==0 && age==0) {
    let M = 0;
    return M;
  } else if (sex==1 && age==1){
    let M = 0.0630;
    return M;
  } else if (sex==1 && age==2){
    let M = 0.0632;
    return M;
  } else if (sex==1 && age==3){
    let M = 0.0544;
    return M;
  } else if (sex==1 && age==4){
    let M = 0.0700;
    return M;
  } else if (sex==1 && age==5){
    let M = 0.0779;
    return M;
  }else if (sex==2 && age==1){
    let M = 0.0678;
    return M;
  } else if (sex==2 && age==2){
    let M = 0.0717;
    return M;
  } else if (sex==2 && age==3){
    let M = 0.0632;
    return M;
  } else if (sex==2 && age==4){
    let M = 0.0612;
    return M;
  } else if (sex==2 && age==5){
    let M = 0.0645;
    return M;
  } else {
    let M = 0;
    return M;
}
}
let manM = estM();

function calcPliegues (biceps, triceps, subescapular, crestaI) {
  let pliegues = biceps + triceps + subescapular + crestaI;
  return pliegues;
}
let manFolds = calcPliegues(biceps, triceps, subescapular, crestaI);

function calcDensidad (constC, constM, sumaPliegues) {
  let densidad = constC - (constM * (Math.log10(sumaPliegues)));
  return densidad;
}
let manDen = calcDensidad(manC, manM, manFolds);

function calcGrasa(densidad) {
  let grasa = ((4.95/densidad) - 4.5) * 100;
  return grasa;
}

let manRes = function () {
    let manGras = calcGrasa(manDen);
    let resultado = manGras.toFixed(2);

    if (sex==2 && resultado<=14) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a grasa esencial 🤯";
    } else if (sex==2 && resultado>14 && resultado<=22){
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un atleta 💪";
    } else if (sex==2 && resultado>22 && resultado<=25) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una buena aptitup física 🤩";
    } else if (sex==2 && resultado>25 && resultado<=31) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un riesgo potencial 🙁";
    } else if (sex==2 && resultado>32) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una persona obesa 😤";
    }else if (sex==1 && resultado<=5){
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a grasa esencial 🤯";
    } else if (sex==1 && resultado>5 && resultado<=13) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un atleta 💪";
    } else if (sex==1 && resultado>13 && resultado<=18) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una buena aptitup física 🤩";
    } else if (sex==1 && resultado>18 && resultado<=24) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a un riesgo potencial 🙁";
    } else if (sex==1 && resultado>24) {
      resultG.innerText = "Tienes un porcentaje de grasa de " + resultado + "% correspondiente a una persona obesa 😤";
    }
}

if (sex>0 && age>0 && biceps>0 && triceps>0 && subescapular>0 && crestaI>0) {
  function manFinal() {
      manRes();
  }
} else {
  function manFinal() {
    resultG.innerText = "Debes llenar todos los campos ⚠️";
  }
}
