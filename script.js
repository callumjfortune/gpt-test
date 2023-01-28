var apiKeyStart = "sk-rF1Wm9crTFFLEXXBzUgcT3B"
var apiKeyEnd = "lbkFJ6oQ1Qiqg7ioGzeIDkGk1"

function makeAjaxCall() {
    const apiKey = apiKeyStart + apiKeyEnd;
    const endpoint = 'https://api.openai.com/v1/engines/davinci/completions';
  
    const prompt = 'What is the capital of France?';
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        temperature: 0.7
      })
    };
  
    fetch(endpoint, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  
  
  
  
  