let nameEll = "";
let emailEll = "";
let jelszoEll = "";
let birtEll = "";
let pont = 0;

let scoreArray = [];


//ellenőrzések
//Név ell.
function nevEllenorzes(element) {
    let p = /^([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+ ){1}[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+$/;
    if (p.test(element.value)){
    document.getElementById("nameError").innerText = "";
    nameEll = "correct";
  } else{
    document.getElementById("nameError").innerText = "Legalább 2 szóból álljon!, Minimum 2 karakter hosszú legyen!, Nagybetűvel kezdődjenek!, Ne legyen benne szám+Ne legyen benne szám!";
    nameEll = "wrong";
    
  }
}
//Email ell.
function emailEllenorzes(element) {
  let p = /^.+@.{3,}\..{2,4}$/;
  if (p.test(element.value)) {
    document.getElementById("emailError").innerText = " ";
    emailEll = "correct";
  } else {
    document.getElementById("emailError").innerText =
    "Legyen benne '@', a '@' előtt és után minimum 3 karakternek szerepelnie kell, '.' után 2-4 karakter legyen!";
    emailEll = "wrong";
  }
}
//szuido ell.
function szulidoEllenorzes(element) {
  let p = /^(19[2-9]\d|20[01]\d|202[0-3]).(0[1-9]|1[0-2]).(0[1-9]|[12]\d|3[01]).$/
 if(p.test(element.value)){
  document.getElementById("birthError").innerText = " ";
  birtEll = "correct";
 }else{
  document.getElementById("birthError").innerText = "Kérem valós születési dátumot adjon meg!";
  birtEll = "wrong";
 }
}

//jelszo ell.
let jelszo = 'asdasd123';
function jelszoEllenorzes(element) {
  if (element.value === jelszo) {
    document.getElementById("passError").innerText = " ";  
    jelszoEll = "correct"; 
  } else {
    document.getElementById("passError").innerText = "Helytelen jelszó! Kérem próbálja újra!";
    jelszoEll = "wrong";
  }
}

//Regisztráció ellenőrzése
function regEllenorzes() {
  let kerdesek = document.querySelector('#qQuestions');
  let activeBtn = document.getElementById('btn');
  if (nameEll === "correct"&& emailEll === "correct" && jelszoEll === "correct" && birtEll === "correct") {   
    activeBtn.disabled = true;
    kerdesek.style.display = 'block';
    document.getElementById("regError").innerText = "";

  }else if(nameEll === "wrong"||emailEll === "wrong"||jelszoEll === "wrong"||birtEll === "wrong") {
    activeBtn.disabled = false;
    document.getElementById("regError").innerText = "Kérem töltse ki a helyesen a regisztrációt!";

  }else {
    activeBtn.disabled = false;
    document.getElementById("regError").innerText = "Töltse ki a regisztrációt!";

  }
}








//Kérdések resz
//1.feladat
function feladat1(){
  let e = document.getElementsByClassName('Join');
  for(let i = 0; i < e.length; i++){
    if (e[i].checked && e[i].value === "040501"){     
      scoreArray[0] = "correct"
      return;
    }                              
    
  }
  scoreArray[0] = "wrong"
  
}

//2.feladat

function Fruits() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let e = document.getElementsByClassName('Fruits');
  let count = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      count++;
      if (count > 3) {
        checkboxes[i].checked = false;
      }
    }
  }

  scoreArray[1] = "wrong"
  scoreArray[2] = "wrong"
  scoreArray[3] = "wrong"
  for(let i = 0; i < e.length; i++){
    if (e[i].checked && e[i].value === "a"){
      scoreArray[1] = "correct"
    }                                              
    if (e[i].checked && e[i].value === "e"){
      scoreArray[2] = "correct"

    }
    if (e[i].checked && e[i].value === "b"){
      scoreArray[3] = "correct"

    }
    
  }
 
}

//3.feladat
function feladat3(){
  let x = document.querySelector('#bolya')
  const kisX = x.value.toLowerCase();
  if(kisX === "bólya"){
    scoreArray[4] = "correct"
  }else{
    scoreArray[4] = "wrong"
  }
}


//4.feladat
function trianonBeke(){
  let x = document.getElementById("trianonArea").value;
  let kisbetus = x.toLowerCase();
  let splitx = kisbetus.replace(/[.,!?]/g,"").replace(/-/g," ").split(" ");
  scoreArray[5] = "wrong"
  scoreArray[6] = "wrong"
  scoreArray[7] = "wrong"
  for (let i = 0; i < splitx.length; i++) {
    if(splitx[i] === "1920"){     
      scoreArray[5] = "correct"
    }
    if(splitx[i] === "románia"){
      scoreArray[6] = "correct"      //okokokokokokOKK
    }
    if(splitx[i] === "ausztria"){
      scoreArray[7] = "correct"         //okokokokokokOKK
    }
  }
  
}

//5.feladat
function himnusz1(){
  scoreArray[8] = "wrong"
  let ans1 = document.querySelector("#ansWer1").value
  if(ans1 === "Magyart"){
    scoreArray[8] = "correct"
  }
  if(ans1 === "-1"){
    scoreArray[8] = ""

  }
}

//5.feladat 2.resz
function himnusz2(){
  scoreArray[9] = "wrong"
  let ans2 = document.querySelector("#ansWer2").value
  if(ans2 === "Megbünhödte"){
    scoreArray[9] = "correct"
  }
  if(ans2 === "-1"){
    scoreArray[9] = ""

  }

}

//Ellenőrző gomb
function qEllenorBtn() {
  pont = 0;
  let scoreDiv = document.querySelector('#scoreDiv');
  let activeBtn2 = document.getElementById('ellBtnn');
  let ov = 0;
  console.log(scoreArray);
  for (let i = 0; i < scoreArray.length; i++) {
    if(scoreArray[i] === "correct" || scoreArray[i] === "wrong"){
      ov = ov + 1;
      if(ov === 10){
        activeBtn2.disabled = true;
        scoreDiv.style.display = 'block';
        document.getElementById("qError").innerText = "";       
      }           
      if(scoreArray[i] === "correct"){
        pont = pont + 1
      }
    }
    else{
      activeBtn2.disabled = false;
      document.getElementById("qError").innerText = "Kérem válaszoljon az összes kérdésre!";
    }
  }
  if(ov === 0){
    activeBtn2.disabled = false;
    document.getElementById("qError").innerText = "Kérem válaszoljon az összes kérdésre!";
  }
  document.getElementById("score").innerText = `${(pont/10)*100}%`;
  console.log(pont)
  console.log((pont/10)*100)
}


function init() {
  let kerdesek = document.querySelector('#qQuestions');
  kerdesek.style.display = 'none';
  let scoreDiv = document.querySelector('#scoreDiv');
  scoreDiv.style.display = 'none';

  let ans1 = ['Magyart','Oroszt','Megbünhödte','ELfeledte'] 
  let ans2 = ['Magyart','Oroszt','Megbünhödte','ELfeledte'] 
  let answers1 = []
  let answers2 = []
  let indexs1 = [] 
  let indexs2 = [] 
  while (indexs1.length < 4 && indexs2.length < 4) {
    let help1 = Math.floor(Math.random() * 4);

    if (indexs1.indexOf(help1) === -1) {
      indexs1.push(help1);
    }

    if (indexs2.indexOf(help1) === -1) {
      indexs2.push(help1);
    }
  }

  for (let i = 0; i < ans1.length; i++) {
    answers1[i] = ans1[indexs1[i]] 
    answers2[i] = ans2[indexs2[i]]
  }

  answers1 = answers1.sort();
  let select1 = document.querySelector('[name=answer1]');
  answers1.forEach((item, m) => {
    select1.innerHTML += `<option value="${answers1[indexs1[m]]}">${answers1[indexs1[m]]}</option>`;
  });

  answers2 = answers2.sort();
  let select2 = document.querySelector('[name=answer2]');
  answers2.forEach((item, m) => {
    select2.innerHTML += `<option value="${answers2[indexs2[m]]}">${answers2[indexs2[m]]}</option>`;
  });

}
