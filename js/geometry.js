// PART 01 START:::::::::::
// FUNCTIONS FOR RECTANGULAR & PARALLEOGRAM AREA CALCULATIONS::

function findAreaOfRectPara(input1,input2,base,height,heading){
    const triangleInputFieldFloat1 = parseFloat(input1);
    const triangleInputFieldFloat2 = parseFloat(input2);

        // CALCULATION PART::
        const triangleAreaResult = triangleInputFieldFloat1 * triangleInputFieldFloat2;
        const tribase = document.getElementById(base); //change
        tribase.innerText = triangleInputFieldFloat1;
        const triheight = document.getElementById(height); //change
        triheight.innerText = triangleInputFieldFloat2;
        //   Fetch Name From UI;
        const triHeading = document.getElementById(heading); //change
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
            cm.style.display = 'none';
        })

        // FOR CROSS BUTTON DELETE THE FULL ELEMENT OF RESULT::
        document.getElementById('cross-btn').addEventListener('click', function () {
            olList.style.display = 'none';
        })

    
}

// FOR RECTANGLE::
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    // FIRST FIELD::
    const triangleInputField1 = document.getElementById('rec-input1'); //CHANGE
    const triangleInputFieldValue1 = triangleInputField1.value;
    // SECOND INPUT FIELD::
    const triangleInputField2 = document.getElementById('rec-input2'); //CHANGE
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
        
    // CALL THE FUNCTION::
    const recArea = findAreaOfRectPara(triangleInputFieldValue1,triangleInputFieldValue2,'rec-base','rec-height','rectangle-heading');
    
    triangleInputField1.value = '';
    triangleInputField2.value = '';
    }


})
// FOR Parrelleogram::
document.getElementById('para-calculate').addEventListener('click', function () {
    const triangleInputField1 = document.getElementById('para-value1');
    const triangleInputFieldValue1 = triangleInputField1.innerText;
    

    // SECOND INPUT FIELD::
    const triangleInputField2 = document.getElementById('para-value2');
    const triangleInputFieldValue2 = triangleInputField2.innerText;
    

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
    else {
        // CALCULATION PART::
        const recArea = findAreaOfRectPara(triangleInputFieldValue1,triangleInputFieldValue2,'para-base','para-height','para-heading');
    } //END OF ELSE CONDITION
})

// PART 01 END:::::::::::




// MADE FUNCTION FOR TRIANGLE, RHOMBOS, PENTAGOAN::
function AreaOfTriRhoPen(inputs1,inputs2,base1,height1,heading1){
    const triangleInputFieldFloat1 = parseFloat(inputs1); //CHANGE
    const triangleInputFieldFloat2 = parseFloat(inputs2); //CHANGE

    // CALCULATION PART::

    const triangleAreaResult = 0.5 * triangleInputFieldFloat1 * triangleInputFieldFloat2;

    const tribase = document.getElementById(base1); //CHANGE
    tribase.innerText = triangleInputFieldFloat1;

    const triheight = document.getElementById(height1); //CHANGE
    triheight.innerText = triangleInputFieldFloat2;

    //   Fetch Name From UI;
    const triHeading = document.getElementById(heading1); //CHANGE
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
        cm.style.display = 'none';
    })

    // FOR CROSS BUTTON DELETE THE FULL ELEMENT OF RESULT::
    document.getElementById('cross-btn').addEventListener('click', function () {
        olList.style.display = 'none';
    })

}

// TRIANGALE INPUT BOX WORKING PROCEDURE::
document.getElementById('triangle-calculate').addEventListener('click', function () {

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

        const areaOfTriangle = AreaOfTriRhoPen(triangleInputFieldValue1,triangleInputFieldValue2,'tri-base','tri-height','tri-heading');

        triangleInputField1.value = '';
        triangleInputField2.value = '';
    } //END OF ELSE CONDITION
})

// WORKING WITH PENTAGON
// FINDING THE pentagon AREA::
document.getElementById('calculate-pentagon').addEventListener('click', function () {
// First Pentagon InputBox
const triangleInputField1 = document.getElementById('penta-value1');
const triangleInputFieldValue1 = triangleInputField1.innerText;
const triangleInputFieldFloat1 = parseFloat(triangleInputFieldValue1);

// SECOND Pentagon INPUT FIELD::
const triangleInputField2 = document.getElementById('penta-value2');
const triangleInputFieldValue2 = triangleInputField2.innerText;
const triangleInputFieldFloat2 = parseFloat(triangleInputFieldValue2);
  
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

    else {

        // CALCULATION PART::

        const triangleAreaResult = 0.5 * triangleInputFieldFloat1 * triangleInputFieldFloat2;

        const tribase = document.getElementById('penta-base'); //CHANGE
        tribase.innerText = triangleInputFieldFloat1;

        const triheight = document.getElementById('penta-height'); //CHANGE
        triheight.innerText = triangleInputFieldFloat2;

        //   Fetch Name From UI;
        const triHeading = document.getElementById('penta-heading'); //CHANGE
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
            cm.style.display = 'none';
        })

        // FOR CROSS BUTTON DELETE THE FULL ELEMENT OF RESULT::
        document.getElementById('cross-btn').addEventListener('click', function () {
            olList.style.display = 'none';
        })

    }
})

// Working with RHOMBOS::
document.getElementById('rombhos-calculate').addEventListener('click', function () {

    // First Rhombos InputBox
    const romInputField1 = document.getElementById('rom-value1');
    const romInputFieldValue1 = romInputField1.innerText;
    const romInputFieldFloat1 = parseFloat(romInputFieldValue1);

    // SECOND Rhombos INPUT FIELD::
    const romInputField2 = document.getElementById('rom-value2');
    const romInputFieldValue2 = romInputField2.innerText;
    const romInputFieldFloat2 = parseFloat(romInputFieldValue2);

    // Validation;
    if (isNaN(PentagonInputFieldFloat1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(PentagonInputFieldFloat2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }

    else {

        // CALCULATION PART::

        const triangleAreaResult = 0.5 * romInputFieldFloat1 * romInputFieldValue2;

        const tribase = document.getElementById('rom-base');
        tribase.innerText = romInputFieldFloat1;

        const triheight = document.getElementById('rom-height');
        triheight.innerText = romInputFieldFloat2;

        //   Fetch Name From UI;
        const triHeading = document.getElementById('rom-heading');
        const PentaHeadingText = triHeading.innerText;
        //   RESULT SHOWING PART;
        const name = document.getElementById('name');
        const result = document.getElementById('result');

        name.innerText = PentaHeadingText;
        result.innerText = triangleAreaResult.toFixed(2);

        // SHOWING THE RESULT IN A BLOCK::
        const olList = document.getElementById('ol-list');
        olList.style.display = 'block';

        // Convert to Meter square::
        document.getElementById('convert').addEventListener('click', function () {
            const meterSquareResult = triangleAreaResult / 10000;
            result.innerText = meterSquareResult.toFixed(3); //I took toFixed(3) because sometimes value comes 0.00 if i take toFixed(2);
            const cm = document.getElementById('c');
            cm.style.display = 'none';
        })

        // FOR CROSS BUTTON DELETE THE FULL ELEMENT OF RESULT::
        document.getElementById('cross-btn').addEventListener('click', function () {
            olList.style.display = 'none';
        })

    }

})

// WORKING WITH ELLIPSE::
document.getElementById('ell-calculate').addEventListener('click', function () {

    // First Rhombos InputBox
    const romInputField1 = document.getElementById('ell-value1');
    const romInputFieldValue1 = romInputField1.innerText;
    const romInputFieldFloat1 = parseFloat(romInputFieldValue1);

    // SECOND Rhombos INPUT FIELD::
    const romInputField2 = document.getElementById('ell-value2');
    const romInputFieldValue2 = romInputField2.innerText;
    const romInputFieldFloat2 = parseFloat(romInputFieldValue2);

    // Validation;
    if (isNaN(PentagonInputFieldFloat1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(PentagonInputFieldFloat2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }

    else {

        // CALCULATION PART::

        const triangleAreaResult = 3.1416 * romInputFieldFloat1 * romInputFieldValue2;

        const tribase = document.getElementById('ell-base');
        tribase.innerText = romInputFieldFloat1;

        const triheight = document.getElementById('ell-height');
        triheight.innerText = romInputFieldFloat2;

        //   Fetch Name From UI;
        const triHeading = document.getElementById('ell-heading');
        const PentaHeadingText = triHeading.innerText;
        //   RESULT SHOWING PART;
        const name = document.getElementById('name');
        const result = document.getElementById('result');

        name.innerText = PentaHeadingText;
        result.innerText = triangleAreaResult.toFixed(2);

        // SHOWING THE RESULT IN A BLOCK::
        const olList = document.getElementById('ol-list');
        olList.style.display = 'block';

        // Convert to Meter square::
        document.getElementById('convert').addEventListener('click', function () {
            const meterSquareResult = triangleAreaResult / 10000;
            result.innerText = meterSquareResult.toFixed(3); //I took toFixed(3) because sometimes value comes 0.00 if i take toFixed(2);
            const cm = document.getElementById('c');
            cm.style.display = 'none';
        })

        // FOR CROSS BUTTON DELETE THE FULL ELEMENT OF RESULT::
        document.getElementById('cross-btn').addEventListener('click', function () {
            olList.style.display = 'none';
        })

    }

})