// RECTANGLE INPUT BOX WORKING PROCEDURE;
document.getElementById('triangle-calculate').addEventListener('click',function(){
    const triangleInputField1 = document.getElementById('tri-input1');
    const triangleInputFieldValue1 = triangleInputField1.value;
    const triangleInputFieldFloat1 = parseFloat(triangleInputFieldValue1);
    
    const triangleInputField2 = document.getElementById('tri-input2');
    const triangleInputFieldValue2 = triangleInputField2.value;
    const triangleInputFieldFloat2 = parseFloat(triangleInputFieldValue2);
    
   const triangleAreaResult = 0.5*triangleInputFieldFloat1*triangleInputFieldFloat2;
   

  triangleInputField1.value='';
  triangleInputField2.value='';

  const tribase = document.getElementById('tri-base');
  tribase.innerText = triangleInputFieldValue1;
 
  const triheight = document.getElementById('tri-height');
  triheight.innerText = triangleInputFieldValue2;


  


})