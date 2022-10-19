let sex = document.querySelector("#inputSex");
let age = document.querySelector("#inputAge");
let biceps = document.querySelector("#inputBiceps");
let triceps = document.querySelector("#inputTriceps");
let subscapular = document.querySelector("#inputSubscapular");
let crest = document.querySelector("#inputCrest");
let resultDes = document.querySelector("#resultDes");

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

function calcPliegues (biceps, triceps, subscapular, crest) {
  let pliegues = biceps + triceps + subscapular + crest;
  return pliegues;
}

function calcDensidad (estC, estM, sumaPliegues) {
  let densidad = estC - (estM * (Math.log10(sumaPliegues)));
  return densidad;
}

function calcGrasa(densidad) {
  let grasa = ((4.95/densidad) - 4.5) * 100;
  return grasa;
}

let finalResult = () => {
    let folds = calcPliegues(biceps.valueAsNumber, triceps.valueAsNumber, subscapular.valueAsNumber, crest.valueAsNumber);
    let density = calcDensidad(estC(), estM(), folds);
    let grass = calcGrasa(density);
    let result = grass.toFixed(2);
    const text = "Your body fat percentage is ";
    const text2 = "% appropriate to "
    if (sex.value==2 && result<=14 || sex.value==1 && result<=5) {
      resultDes.innerText = text + result + text2 + "essential fat 🤯";
    } else if (sex.value==2 && result>14 && result<=22 || sex.value==1 && result>5 && result<=13){
      resultDes.innerText = text + result + text2 + "an athlete 💪";
    } else if (sex.value==2 && result>22 && result<=25 || sex.value==1 && result>13 && result<=18) {
      resultDes.innerText = text + result + text2 + "a good physical condition 🤩";
    } else if (sex.value==2 && result>25 && result<=31 || sex.value==1 && result>18 && result<=24) {
      resultDes.innerText = text + result + text2 + "a potencial risk 🙁";
    } else if (sex.value==2 && result>32 || sex.value==1 && result>24) {
      resultDes.innerText = text + result + text2 + "obesity 😤";
    }
}

function mesuare() {
  sex.value>0 && age.value>0 && biceps.value>0 && triceps.value>0 && subscapular.value>0 && crest.value>0
  ? finalResult()
  : resultDes.innerText = "You must fill all the fields ⚠️";
}