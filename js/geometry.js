// FINDING THE AREA OF RECTANGLE::
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const triangleInputField1 = document.getElementById('rec-input1');
    const triangleInputFieldValue1 = triangleInputField1.value;
    const triangleInputFieldFloat1 = parseFloat(triangleInputFieldValue1);

    // SECOND INPUT FIELD::
    const triangleInputField2 = document.getElementById('rec-input2');
    const triangleInputFieldValue2 = triangleInputField2.value;
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

        const triangleAreaResult = triangleInputFieldFloat1 * triangleInputFieldFloat2;


        triangleInputField1.value = '';
        triangleInputField2.value = '';

        const tribase = document.getElementById('rec-base');
        tribase.innerText = triangleInputFieldValue1;

        const triheight = document.getElementById('rec-height');
        triheight.innerText = triangleInputFieldValue2;

        //   Fetch Name From UI;
        const triHeading = document.getElementById('rectangle-heading');
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

    } //END OF ELSE CONDITION
})
// FINDING THE AREA OF Parrelleogram::
document.getElementById('para-calculate').addEventListener('click', function () {
    const triangleInputField1 = document.getElementById('para-value1');
    const triangleInputFieldValue1 = triangleInputField1.innerText;
    const triangleInputFieldFloat1 = parseFloat(triangleInputFieldValue1);

    // SECOND INPUT FIELD::
    const triangleInputField2 = document.getElementById('para-value2');
    const triangleInputFieldValue2 = triangleInputField2.innerText;
    const triangleInputFieldFloat2 = parseFloat(triangleInputFieldValue2);

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

        const triangleAreaResult = triangleInputFieldFloat1 * triangleInputFieldFloat2;



        const tribase = document.getElementById('para-base');
        tribase.innerText = triangleInputFieldFloat1;

        const triheight = document.getElementById('para-height');
        triheight.innerText = triangleInputFieldFloat2;

        //   Fetch Name From UI;
        const triHeading = document.getElementById('para-heading');
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

    } //END OF ELSE CONDITION
})

function findAreaOfThree(value1, value2) {
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
            cm.style.display = 'none';
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

    const findAreaofTRriangle = findAreaOfThree(triangleInputFieldFloat1, triangleInputFieldFloat2);

})

// WORKING WITH PENTAGON
// FINDING THE pentagon AREA::

function findingArea(pentaValue1, pentaValue2) {


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

        const triangleAreaResult = 0.5 * pentaValue1 * pentaValue2;

        const tribase = document.getElementById('penta-base');
        tribase.innerText = PentagonInputFieldFloat1;

        const triheight = document.getElementById('penta-height');
        triheight.innerText = PentagonInputFieldFloat2;

        //   Fetch Name From UI;
        const triHeading = document.getElementById('penta-heading');
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
}
// First Pentagon InputBox
const PentagonInputField1 = document.getElementById('penta-value1');
const PentagonInputFieldValue1 = PentagonInputField1.innerText;
const PentagonInputFieldFloat1 = parseFloat(PentagonInputFieldValue1);

// SECOND Pentagon INPUT FIELD::
const PentagonInputField2 = document.getElementById('penta-value2');
const PentagonInputFieldValue2 = PentagonInputField2.innerText;
const PentagonInputFieldFloat2 = parseFloat(PentagonInputFieldValue2);

document.getElementById('calculate-pentagon').addEventListener('click', function () {
    // PASSING THE VALUES TO THE FUNCTION;
    const findAreaofPentagon = findingArea(PentagonInputFieldFloat1, PentagonInputFieldFloat2);
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