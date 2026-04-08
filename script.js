function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;

    if (!weight || !height) {
        document.getElementById("result").innerText = "Muessen Sie Gewicht oder Groeße ausfuellen.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    let category = "";

    if (bmi < 18.5) category = "Untergewicht";
    else if (bmi < 25) category = "Normal";
    else if (bmi < 30) category = "Übergewicht";
    else category = "Adipositas";

    document.getElementById("result").innerHTML =
        `Dein BMI: <strong>${bmi}</strong><br>Kategorie: <strong>${category}</strong>`;
}