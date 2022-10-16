let sex = document.getElementById("inputSex");
let age = document.getElementById("inputAge");
let biceps = document.getElementById("inputBiceps");
let triceps = document.getElementById("inputTriceps");
let subescapular = document.getElementById("inputSubescapular");
let crestaI = document.getElementById("inputCrestaI");
let printResult = document.getElementById("resultG");

const setVal = () => {
  if (sex.value==0 && age.value==0) {
    let Val = [0, 0];
    return Val;
  } else if (sex.value==1 && age.value==1){
    let Val = [1.1620, 0.0630];
    return Val;
  } else if (sex.value==1 && age.value==2){
    let Val = [1.1631, 0.0632];
    return Val;
  } else if (sex.value==1 && age.value==3){
    let Val = [1.1422, 0.0544];
    return Val;
  } else if (sex.value==1 && age.value==4){
    let Val = [1.1620, 0.0700];
    return Val;
  } else if (sex.value==1 && age.value==5){
    let Val = [1.1715, 0.0779];
    return Val;
  }else if (sex.value==2 && age.value==1){
    let Val = [1.1549, 0.0678];
    return Val;
  } else if (sex.value==2 && age.value==2){
    let Val = [1.1599, 0.0717];
    return Val;
  } else if (sex.value==2 && age.value==3){
    let Val = [1.1423, 0.0632];
    return Val;
  } else if (sex.value==2 && age.value==4){
    let Val = [1.1333, 0.0612];
    return Val;
  } else if (sex.value==2 && age.value==5){
    let Val = [1.1339, 0.0645];
    return Val;
  } else {
    let Val = [0, 0];
    return Val;
  }
}

const estC = () => parseFloat(setVal()[0]);
const estM = () => parseFloat(setVal()[1]);

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

let finalResult = () => {
    let folds = calcPliegues(biceps.valueAsNumber, triceps.valueAsNumber, subescapular.valueAsNumber, crestaI.valueAsNumber);
    let density = calcDensidad(estC(), estM(), folds);
    let grass = calcGrasa(density);
    let result = grass.toFixed(2);
    const text = "Tienes un porcentaje de grasa de ";
    if (sex.value==2 && result<=14 || sex.value==1 && result<=5) {
      printResult.innerText = text + result + "% correspondiente a grasa esencial 🤯";
    } else if (sex.value==2 && result>14 && result<=22 || sex.value==1 && result>5 && result<=13){
      printResult.innerText = text + result + "% correspondiente a un atleta 💪";
    } else if (sex.value==2 && result>22 && result<=25 || sex.value==1 && result>13 && result<=18) {
      printResult.innerText = text + result + "% correspondiente a una buena aptitup física 🤩";
    } else if (sex.value==2 && result>25 && result<=31 || sex.value==1 && result>18 && result<=24) {
      printResult.innerText = text + result + "% correspondiente a un riesgo potencial 🙁";
    } else if (sex.value==2 && result>32 || sex.value==1 && result>24) {
      printResult.innerText = text + result + "% correspondiente a una persona obesa 😤";
    }
}

function calc() {
  if (sex.value>0 && age.value>0 && biceps.value>0 && triceps.value>0 && subescapular.value>0 && crestaI.value>0) {
    finalResult();
  } else {
      result.innerText = "Debes llenar todos los campos ⚠️";
  }
}