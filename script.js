setTimeout(()=>{
    fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(data => data.json())
      .then(res => {
        // Check if 'attachments' exists, else use 'joke' property
        const joketext = res.attachments && res.attachments.length > 0 
          ? res.attachments[0].text 
          : res.joke;
          
        console.log(joketext);
        document.getElementById('jokes').innerHTML = joketext;
      })
      .catch(error => console.error('Error fetching joke:', error));
},500)