const responseContainer = document.querySelector("#imageResult");

const API_KEY = "AIzaSyBSTNcvDj7z27CKBX2dgOd99ygyUVH809M";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${API_KEY}`;

document.getElementById('uploadButton').addEventListener('click', async (e) => {
    e.preventDefault(); // Prevent the default form submission if it's inside a form

    const skinCondition = "Melanoma";

    const userMessage = 
    `Act as a dermatologist and
I will provide the name of the skin condition, 
give me a well-formatted explanation of that skin condition. First, 
write down you are suffering from skin condition name,
introduce the condition in detail at least one paragraph, 
followed by the heading "Symtoms you may be experiencing," and list down potential symtoms. 
Use bullet points '-' for any point. 
Avoid making any headings bold or overly specific about the diagnosis. 
Provide a range of options, and at the end, please write this sentence "for possible cure please use the profile analyzer from our portal". 
Do not use bold text for any headings or other elements; instead, 
use plain text and organize the information clearly. Skin condition: ${skinCondition}`;

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

        // Clean up the suggestion by removing asterisks and replacing newlines with line breaks
        responseContainer.innerHTML = suggestion.replace(/\n/g, '<br>').replace(/\*/g, '');

    } catch (error) {
        // Handle errors by showing a message
        responseContainer.innerHTML = "Oops! Something went wrong, please try again later.";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const activePage = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav a').forEach(link => {
        if(link.getAttribute('href') === activePage) {
            link.classList.add('active');
        }
    });
});
