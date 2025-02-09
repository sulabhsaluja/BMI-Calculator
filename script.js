let form = document.getElementById('input-form');

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let selectWeight = document.getElementById('select-weight').value;
    let selectHeight = document.getElementById('select-height').value;
    let resultContainer = document.getElementById('result-container');

    // Convert height and weight to metric units
    if (selectHeight === 'inch') {
        height = height * 0.0254; // Convert inches to meters
    }
    if (selectWeight === 'pounds') {
        weight = weight * 0.453592; // Convert pounds to kg
    }

    if (height > 0 && weight > 0) {
        let BMI = weight / (height * height);
        let category = getBMICategory(BMI);
        let resultMessage = `Your BMI is <strong>${BMI.toFixed(2)}</strong> (${category})`;
        resultContainer.innerHTML = `<p>${resultMessage}</p>`;
    } else {
        resultContainer.innerHTML = `<p>Please enter valid height and weight.</p>`;
    }
});

function getBMICategory(BMI) {
    if (BMI < 18.5) {
        return "Underweight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        return "Normal weight";
    } else if (BMI >= 25 && BMI < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}