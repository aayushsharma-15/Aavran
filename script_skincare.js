const form = document.querySelector("#skincareForm");
const responseContainer = document.querySelector("#productResult");

const API_KEY = "AIzaSyBSTNcvDj7z27CKBX2dgOd99ygyUVH809M";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${API_KEY}`;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const skinType = document.querySelector("#skinType").value;
    const concerns = document.querySelector("#concerns").value;
    const allergies = document.querySelector("#allergies").value;
    const medicalHistory = document.querySelector("#medicalHistory").value;
    const desiredOutcomes = document.querySelector("#desiredOutcomes").value;
    const productPreferences = document.querySelector("#productPreferences").value;
    const budget = document.querySelector("#budget").value;

    const userMessage = 
    `Act as a skincare product specialist and based on the information provided, 
    suggest relevant skincare products, also make sure all the costs are in indian rupee only,

    Skin type: ${skinType}
    Specific concerns: ${concerns}
    Allergies: ${allergies}
    Medical history: ${medicalHistory}
    Desired outcomes: ${desiredOutcomes}
    Product preferences: ${productPreferences}
    Budget: ${budget}`;

    // Display "Analyzing..." while waiting for the API response
    responseContainer.innerHTML = "Analyzing...";
    responseContainer.style.display = "block";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: userMessage }]
                }]
            })
        });

        const data = await response.json();
        const suggestion = data?.candidates[0]?.content?.parts[0]?.text || "Sorry, no suggestion available.";

        // Display the result after receiving the API response
        responseContainer.innerHTML = suggestion.replace(/\n/g, '<br>').replace(/\*/g, '');

    } catch (error) {
        // Handle errors by showing a message
        responseContainer.innerHTML = "Oops! Something went wrong, please try again later.";
    }
});
