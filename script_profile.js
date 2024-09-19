const form = document.querySelector("#skinTypeForm");
const responseContainer = document.querySelector("#ProfileResult");

const API_KEY = "AIzaSyBSTNcvDj7z27CKBX2dgOd99ygyUVH809M";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${API_KEY}`;

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Retrieve the form data including conditionStatus
    const conditionStatus = document.querySelector("#conditionStatus").value;  // You missed this line earlier
    const skinType = document.querySelector("#skinType").value;
    const appearance = document.querySelector("#appearance").value;
    const symptoms = document.querySelector("#symptoms").value;
    const changes = document.querySelector("#changes").value;
    const medicalHistory = document.querySelector("#medicalHistory").value;
    const knownCondition = document.querySelector("#knownCondition").value;

    let userMessage = "";

    if (conditionStatus === 'yes') {
        // If the user knows the condition, construct a prompt for known condition
        userMessage = `Act as a dermatologist, and I will provide the name of a skin condition. 
Based on this, give me a detailed, well-formatted explanation.
Start by writing: "As per information, you are suffering from: ${knownCondition}."
Introduce the condition in detail in a plain-text paragraph. 
Avoid using any bold, italic, or other text formatting.
Next, under the heading "Symptoms you may be experiencing," 
list the potential symptoms using bullet points '-'. Ensure all lists are in plain text.
Under the heading "Possible Stages of the Condition," 
explain how the condition typically progresses through various stages. 
Provide this information in plain text, listing the stages clearly.
Then, add a section titled "Is this condition common or rare?" describing 
how frequently this condition occurs and which demographic groups are most likely to experience it(as per india).
Continue with a section titled "Possible Treatments and Care." List treatments, 
lifestyle recommendations, and home remedies using bullet points '-'. Keep the information plain and clear(consider the skin type as well:${skinType}).
Add the following sentence: "For specialized help, consider reaching out to a dermatologist or 
skin specialist in your area."
Make sure all information is presented in simple, plain text, and use bullet points '-' for any lists. 
Do not use bold, italics, or any other formatting.
Skin condition: ${knownCondition}`;
    } else if (conditionStatus === 'no') {
        // If the user doesn't know the condition, send detailed form data
        userMessage = `ct as a dermatologist, and 
I will provide detailed information based on the user's skin type, medical history, appearance, 
symptoms, and changes. Start by writing: "As per the information provided, you are experiencing symptoms 
that may be associated with the following conditions:[condtion names]."
Introduce the conditions in detail in a plain-text paragraph. 
Avoid using any bold, italic, or other text formatting.

Then, add a section titled "Is this condition common or rare?" 
Describe how frequently this conditions occurs and which demographic groups are most likely to experience it in india.

Continue with a section titled "Possible Treatments and Care." 
List treatments, lifestyle recommendations, and home remedies using bullet points '-'. Keep the information plain and clear.
Finally, include the sentence: "For specialized help, consider reaching out to a dermatologist or skin specialist in your area."
Make sure all information is presented in simple, plain text, and use bullet points '-' for any lists. 
Do not use bold, italics, or any other formatting.

Data provided:
Skin type: ${skinType}
Medical history: ${medicalHistory}
Appearance: ${appearance}
Symptoms: ${symptoms}
Changes: ${changes}`;
    }

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

    } catch (error) {
        responseContainer.innerHTML = "Oops! Something went wrong, please try again later.";
    }
});
function toggleForm() {
    const conditionStatus = document.getElementById('conditionStatus').value;
    const knownConditionField = document.getElementById('knownConditionField');
    const detailedForm = document.getElementById('detailedForm');

    if (conditionStatus === 'yes') {
        knownConditionField.style.display = 'block';
        detailedForm.style.display = 'none';
    } else if (conditionStatus === 'no') {
        knownConditionField.style.display = 'none';
        detailedForm.style.display = 'block';
    } else {
        knownConditionField.style.display = 'none';
        detailedForm.style.display = 'none';
    }
}