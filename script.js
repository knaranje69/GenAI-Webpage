// Replace YOUR_API_KEY with your actual OpenAI API key
const apiKey = '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';

// Replace this with your desired description
const description = 'This is a Generative AI prompt powered by OpenAI GPT-3.5 Turbo.';

document.getElementById('description').textContent = description;

async function generateResponse() {
    const prompt = document.getElementById('prompt').value;
    const response = document.getElementById('response');
    response.textContent = 'Generating response...';

    try {
        const requestData = {
            prompt: prompt,
            max_tokens: 1000,
            temperature: 0.7,
            model: 'gpt-3.5-turbo',
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestData),
        };

        const apiResponse = await fetch('https://api.openai.com/v1/completions', requestOptions);
        const data = await apiResponse.json();

        if (data.choices && data.choices.length > 0) {
            response.textContent = data.choices[0].text.trim();
        } else {
            response.textContent = 'No response generated.';
        }
    } catch (error) {
        console.error(error);
        response.textContent = 'An error occurred while generating the response.';
    }
}