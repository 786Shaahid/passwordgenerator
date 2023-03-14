const showPassword=document.querySelector('#passwordPara');
const passLenght=document.querySelector('#input1');
const containsUpper=document.querySelector('#input2');
const containsLower=document.querySelector('#input3');
const containsNum=document.querySelector('#input4');
const containsSymbol=document.querySelector('#input5');
const generateBtn=document.querySelector('#btn');

const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numSet="1234567890";
const symbolSet="!@#$%&*";

const getRandomPassword=(sets)=>{
  return  sets[Math.floor((Math.random()*sets.length))]; 
}

const showResult=(password="")=>{
  if(containsUpper.checked){
    password += getRandomPassword(upperSet);
  }
  if(containsLower.checked){
    password += getRandomPassword(lowerSet);
  }
  if(containsNum.checked){
    password += getRandomPassword(numSet);
  }
  if(containsSymbol.checked){
    password += getRandomPassword(symbolSet);
  }
  const charLength=passLenght.value;
  if(password.length<charLength){
   return showResult(password);
  }
  getRequiredPass(password,charLength);
} 
generateBtn.addEventListener("click",()=>{
    showResult();
});
const getRequiredPass=(pass,length)=>{
    let ansPass=pass.substring(0,length);
    showPassword.innerHTML=ansPass;
  }




// console.log(getNumSet);
