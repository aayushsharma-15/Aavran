 **Aavran**, an AI-driven virtual dermatology solution aimed at the early detection of various skin conditions and providing personalized skincare recommendations. Leveraging advanced deep learning models, including DenseNet121 and InceptionV3, Aavran performs detailed image analysis to support several key functionalities: accurate skin disease classification, user-profile-based condition predictions, and tailored skincare guidance.
 
The system integrates seamlessly with generative AI technologies, which enrich its offerings by delivering in-depth disease information and customized product recommendations. Through this multi-faceted approach, Aavran empowers users with reliable insights and solutions for proactive skin health management.

![aavran_front](https://github.com/user-attachments/assets/beb36444-8955-4706-aa8b-edd13dc4f4b1)

System Architecture and Directory Structure
The project is organized with a modular directory structure to facilitate efficient management and development. Each folder and file serves a distinct purpose in delivering the project’s functionality, from frontend design to backend processing and model deployment. Below is an overview of the directory structure and the role of each component.

![aavran_directory](https://github.com/user-attachments/assets/f49d1272-5fb2-49b7-8283-f045e3aeb4cf)

-static/: This directory contains all static files served to the frontend, including images, JavaScript files, and CSS for styling. JavaScript files are organized by functionality (e.g., script_image.js for image analysis, script_profile.js for profile-based recommendations, and script_skincare.js for skincare suggestions), while style.css provides consistent styling across the site.

-templates/: This folder holds the HTML templates that structure the user interface of Aavran. Key pages include index.html (home page), image-analyzer.html (disease classification), profile-analyzer.html (profile-based predictions), and skincare.html (skincare recommendations). These templates interact dynamically with the backend to display results and feedback to users.

-Test_Image/: This directory stores test images, primarily for model evaluation and demonstration purposes. It provides a convenient way to test the model's performance on known images during development.

-inceptionv3_model.h5: This is a pre-trained model file, specifically InceptionV3, used for skin disease detection. The model file is loaded by the backend and is critical for performing image-based analysis tasks.

-model.py: The primary Python script that handles model loading, image preprocessing, and predictions. It utilizes DenseNet121 and InceptionV3 to perform skin condition analysis and communicate results back to the frontend.

This structure supports the following functionalities:

Frontend: HTML, CSS, and JavaScript files in the static and templates directories enable the user interface and interactive elements.
Backend: Flask server application manages user requests, interacts with models for skin analysis, and delivers results to the frontend.
Models: Pre-trained CNN models (DenseNet121 and InceptionV3) are utilized for disease classification, supported by the model file inceptionv3_model.h5 for accurate skin condition detection.
Data: Datasets like HAM10000 for disease classification and additional data for skin types help personalize recommendations based on specific skin conditions and types.
API Integration: External APIs provide additional information on skin conditions and product recommendations, enhancing the user experience with personalized suggestions.

Convolutional Neural Network (CNN) Model for Disease Detection:

Four distinct deep learning models were implemented to classify skin diseases with high accuracy: a simple Artificial Neural Network (ANN), InceptionV3, MobileNetV2, and DenseNet121. Each model was chosen for its unique architecture and ability to handle complex image data effectively. The ANN model served as a baseline, while InceptionV3, MobileNetV2, and DenseNet121 are advanced convolutional neural network architectures known for their efficient performance in image recognition tasks. These models were trained and evaluated to identify the most suitable architecture for accurate skin disease classification.
![aavran_upload](https://github.com/user-attachments/assets/910327c2-a985-452a-a504-e0203005addd)
![aavran_result1](https://github.com/user-attachments/assets/52de30d7-6fb4-468e-a42e-877e93193729)
User Profile-Based Skin Condition Prediction

The Profile-Based Analysis feature in Aavran personalizes skin condition predictions and skincare recommendations by factoring in individual user profiles. This feature enhances the platform’s diagnostic accuracy and user engagement by considering personal attributes that affect skin health.

User Data Collection:
Users input personal details like skin type (oily, dry, etc.), age, skin concerns (e.g., acne, pigmentation), and lifestyle factors. This information is collected through a form on the Profile Analyzer page and helps the system tailor recommendations.

Analysis and Insights:
Contextualize Model Outputs: The platform uses profile information to frame model-based disease detection results within the context of the user’s personal skin characteristics. For example, it may provide additional explanations about certain skin conditions that are more likely to occur with specific skin types or age groups.

Provide Profile-Based Insights: Beyond simple diagnostic information, Aavran offers insights based on user attributes. For instance, it might highlight that a particular condition is more common in certain lifestyles or skin types, helping users understand why they may be more susceptible.

Generative AI Support:
The platform integrates with generative AI (e.g., Gemini) to provide contextual explanations and adaptive product suggestions. This AI-driven layer helps the system respond to specific needs, offering relevant advice and follow-up tips based on the user’s profile.

![aavran_profile](https://github.com/user-attachments/assets/3d678a6d-0f51-4f45-b6c0-d1e2555a2c67)
![aavran_result2](https://github.com/user-attachments/assets/209b1e70-00c2-41e6-91fb-25fd1fd6543f)

Personalized Skincare Product Recommendation System:

The Personalized Skincare Product Recommendation System in Aavran is designed to offer users targeted product suggestions based on their unique skin profiles and needs. By leveraging user profile data and integrating generative AI, this feature provides customized product recommendations that align with each individual’s skin type, concerns, and lifestyle.

User Profile-Based Filtering:
The system uses data collected from each user’s profile—such as skin type, primary skin concerns (e.g., acne, dryness, pigmentation), and lifestyle factors—to create a foundation for personalized recommendations. 

For instance:
Skin Type-Specific Products: Users with oily skin are directed towards non-comedogenic products, while users with dry skin are recommended hydrating and barrier-repair products.
Concern-Targeted Solutions: Users who specify concerns like pigmentation receive recommendations for products with brightening agents, while those with acne concerns see suggestions for gentle, anti-inflammatory options.

Generative AI Integration for Dynamic Recommendations:
To further enhance personalization, Aavran integrates generative AI (e.g., large language models) to dynamically refine product suggestions. This integration enables:
Contextual Product Descriptions: Generative AI provides users with detailed explanations of why certain products are suitable based on their profiles, enhancing user understanding.
Adaptive Recommendations: The AI model adjusts product suggestions as users update their profiles over time, ensuring that recommendations stay relevant to their current skin conditions and concerns.
This feature allows Aavran to go beyond diagnosis, transforming it into a holistic skincare advisor that provides users with actionable product suggestions tailored to their unique profiles.
![aavran_product](https://github.com/user-attachments/assets/dcf3c212-e00e-467f-987f-072be86b969c)
![aavran_result3](https://github.com/user-attachments/assets/8456f9f3-c92a-475a-8346-e591b0f72e39)

