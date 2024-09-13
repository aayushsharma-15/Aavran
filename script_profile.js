const form = document.querySelector("#skinTypeForm");
const responseContainer = document.querySelector("#ProfileResult");

const API_KEY = "AIzaSyBSTNcvDj7z27CKBX2dgOd99ygyUVH809M";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${API_KEY}`;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const skinType = document.querySelector("#skinType").value;
    const appearance = document.querySelector("#appearance").value;
    const symptoms = document.querySelector("#symptoms").value;
    const changes = document.querySelector("#changes").value;
    const medicalHistory = document.querySelector("#medicalHistory").value;

    const userMessage = 
    `Act as a dermatologist and
 I will provide my skin type, symptoms, medical history, 
 and changes I am observing on my skin. Based on that information, 
 give me a well-formatted explanation of the potential skin condition I might be experiencing, 
 or whether it's normal.

First, introduce the condition, also suggest range of conditions not just one, 
followed by the heading "Possible Treatments," and list down potential treatments. 
Use bullet points for the treatments. Avoid making any headings bold or overly specific about the diagnosis. 
Provide a range of options, and at the end, 
suggest that if the condition does not improve, professional help should be sought. 
Do not use bold text for any headings or other elements; instead, 
use plain text and organize the information clearly, for points use'-', and for headings use "",

    Skin type:${skinType},
    Symptoms: ${symptoms},
    Medical history:${medicalHistory},
    Changes:${changes},
    appearance:${appearance}`;

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
        responseContainer.innerHTML = suggestion.replace(/\n/g, '<br>');

        // Clean up the suggestion

    } catch (error) {
        // Handle errors by showing a message
        responseContainer.innerHTML = "Oops! Something went wrong, please try again later.";
    }
});

document.getElementById('uploadButton').addEventListener('click', function() {
    // Logic to trigger file upload and handle the result
    const resultContainer = document.getElementById('ProfileResult');
    resultContainer.innerHTML = 'Analyzing image...';  // Example of displaying output
});

document.addEventListener('DOMContentLoaded', function() {
    const activePage = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav a').forEach(link => {
        if(link.getAttribute('href') === activePage) {
            link.classList.add('active');
        }
    });
});
