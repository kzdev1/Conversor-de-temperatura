/* alert("Bem-vindo ao coversor!")

let selection = prompt("Digite para a forma de coversão: \n 1 - Celsius para Fahrenheit\n 2 - Celsius para Kelvin\n 3 - Fahrenheit para Celsius\n 4 - Fahrenheit para Kelvin\n 5 - Kelvin para Celsius\n 6 - Kelvin para Fahrenheit")

if (selection == 1){
   let C = prompt("Digite o número a ser convertido: ")
   let resultado = C * 1.8 + 32;
   alert(`O resultado é ${resultado.toFixed(2)}C`)
}
if (selection == 2){
   let C = prompt("Digite o número a ser convertido: ")
   let resultado = C + 273.15;
   alert(`O resultado é ${resultado.toFixed(2)}C`)
}
if (selection == 3){
   let F = prompt("Digite o número a ser convertido: ")
   let resultado = (F - 32) / 1.8;
   alert(`O resultado é ${resultado.toFixed(2)}C`)
}
if (selection == 4){
   let F = prompt("Digite o número a ser convertido: ")
   let resultado = ((F -32)/ 1.8) + 273.15;
   alert(`O resultado é ${resultado.toFixed(2)}C`)
}
if (selection == 5){
   let K = prompt("Digite o número a ser convertido: ")
   let resultado = K - 273.15;
   alert(`O resultado é ${resultado.toFixed(2)}C`)
}
if (selection == 6){
   let K = prompt("Digite o número a ser convertido: ")
   let resultado = (K - 273.15) * 1.8 + 32;
   alert(`O resultado é ${resultado.toFixed(2)}C`)
} */



function calcular(){

   let select1 = document.getElementById("de")
   let select2 = document.getElementById("para")
   let option1 = select1.value
   let option2 = select2.value 
   let resultado
   
 

   let input1 = document.getElementById("entrada1")
   let valor1 = input1.value;
   let temperatura = parseFloat(valor1);
   
   if(option1 == "C" && option2 == "F"){
      resultado = temperatura * 1.8 + 32;
     
   }
   if(option1 == "C" && option2 == "K"){
      resultado = temperatura + 273.15;;
     
   }
   if(option1 == "F" && option2 == "K"){
      resultado = ((temperatura32)/ 1.8) + 273.15
     
   }
   if(option1 == "F" && option2 == "C"){
      resultado = (temperatura - 32) / 1.8;
     
   }
   if(option1 == "K" && option2 == "F"){
      resultado = (temperatura - 273.15) * 1.8 + 32;
     
   }
   if(option1 == "K" && option2 == "C"){
      resultado = temperatura - 273.15;
     
   }


   if(isNaN(resultado)){
      alert("Campo Vazio")
      return false;
   }
   
   

   if (option1 == option2) {  
      alert("Selecione o modelo para conversão!")
      return false;
      
   } 
  
   else{
      alert(resultado.toFixed(3))
   }
}




