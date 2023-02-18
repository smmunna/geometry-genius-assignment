function findAreaOfThree(value1,value2){
// First InputBox
const triangleInputField1 = document.getElementById('tri-input1');
const triangleInputFieldValue1 = triangleInputField1.value;

// SECOND INPUT FIELD::
const triangleInputField2 = document.getElementById('tri-input2');
const triangleInputFieldValue2 = triangleInputField2.value;



    // Validation;
    if (isNaN(triangleInputFieldValue1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(triangleInputFieldValue2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (triangleInputFieldValue1 === '') {
        alert('Please enter any input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (triangleInputFieldValue2 === '') {
        alert('Please enter any input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else {

        // CALCULATION PART::

        const triangleAreaResult = 0.5 * value1 * value2;


        triangleInputField1.value = '';
        triangleInputField2.value = '';

        const tribase = document.getElementById('tri-base');
        tribase.innerText = triangleInputFieldValue1;

        const triheight = document.getElementById('tri-height');
        triheight.innerText = triangleInputFieldValue2;

        //   Fetch Name From UI;
        const triHeading = document.getElementById('tri-heading');
        const triHeadingText = triHeading.innerText;
        //   RESULT SHOWING PART;
        const name = document.getElementById('name');
        const result = document.getElementById('result');

        name.innerText = triHeadingText;
        result.innerText = triangleAreaResult.toFixed(2);

        // SHOWING THE RESULT IN A BLOCK::
        const olList = document.getElementById('ol-list');
        olList.style.display = 'block';

        // Convert to Meter square::
        document.getElementById('convert').addEventListener('click', function () {
            const meterSquareResult = triangleAreaResult / 10000;
            result.innerText = meterSquareResult.toFixed(3); //I took toFixed(3) because sometimes value comes 0.00 if i take toFixed(2);
            const cm = document.getElementById('c');
            cm.style.display='none';
        })

        // FOR CROSS BUTTON DELETE THE FULL ELEMENT OF RESULT::
        document.getElementById('cross-btn').addEventListener('click', function () {
            olList.style.display = 'none';
        })

    } //END OF ELSE CONDITION

}


// RECTANGLE INPUT BOX WORKING PROCEDURE::
document.getElementById('triangle-calculate').addEventListener('click', function () {
    
     // First InputBox
const triangleInputField1 = document.getElementById('tri-input1');
const triangleInputFieldValue1 = triangleInputField1.value;
const triangleInputFieldFloat1 = parseFloat(triangleInputFieldValue1);

// SECOND INPUT FIELD::
const triangleInputField2 = document.getElementById('tri-input2');
const triangleInputFieldValue2 = triangleInputField2.value;
const triangleInputFieldFloat2 = parseFloat(triangleInputFieldValue2);

const findAreaofTRriangle = findAreaOfThree(triangleInputFieldFloat1,triangleInputFieldFloat2);

})



// FINDING THE RHOMBOS AREA::

function findingArea(romValue1,romValue2){
 

 // Validation;
 if (isNaN(triangleInputFieldFloat1)) {
    alert('Please Enter valid Input...!');
    const olList = document.getElementById('ol-list');
    olList.style.display = 'none';
}
else if (isNaN(triangleInputFieldFloat2)) {
    alert('Please Enter valid Input...!');
    const olList = document.getElementById('ol-list');
    olList.style.display = 'none';
}

else {

    // CALCULATION PART::

    const triangleAreaResult = 0.5 * romValue1 * romValue2;

    const tribase = document.getElementById('rom-base');
    tribase.innerText = triangleInputFieldFloat1;

    const triheight = document.getElementById('rom-height');
    triheight.innerText = triangleInputFieldFloat2;

    //   Fetch Name From UI;
    const triHeading = document.getElementById('rom-heading');
    const triHeadingText = triHeading.innerText;
    //   RESULT SHOWING PART;
    const name = document.getElementById('name');
    const result = document.getElementById('result');

    name.innerText = triHeadingText;
    result.innerText = triangleAreaResult.toFixed(2);

    // SHOWING THE RESULT IN A BLOCK::
    const olList = document.getElementById('ol-list');
    olList.style.display = 'block';

    // Convert to Meter square::
    document.getElementById('convert').addEventListener('click', function () {
        const meterSquareResult = triangleAreaResult / 10000;
        result.innerText = meterSquareResult.toFixed(3); //I took toFixed(3) because sometimes value comes 0.00 if i take toFixed(2);
        const cm = document.getElementById('c');
        cm.style.display='none';
    })

    // FOR CROSS BUTTON DELETE THE FULL ELEMENT OF RESULT::
    document.getElementById('cross-btn').addEventListener('click', function () {
        olList.style.display = 'none';
    })

} 
}

// First RHOMBOS InputBox
const triangleInputField1 = document.getElementById('rom-value1');
const triangleInputFieldValue1 = triangleInputField1.innerText;
const triangleInputFieldFloat1 = parseFloat(triangleInputFieldValue1);

// SECOND RHOMBOS INPUT FIELD::
const triangleInputField2 = document.getElementById('rom-value2');
const triangleInputFieldValue2 = triangleInputField2.innerText;
const triangleInputFieldFloat2 = parseFloat(triangleInputFieldValue2);
// WORKING WITH RHOMBOS::
document.getElementById('rombhos-calculate').addEventListener('click',function(){
// PASSING THE VALUES TO THE FUNCTION;
const findAreaofRhombos = findingArea(triangleInputFieldFloat1,triangleInputFieldFloat2);
})