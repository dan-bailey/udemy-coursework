async function fetchGreeting() {
    const response = await fetch('http://localhost:9000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: 'query { greeting }',
        }),
    });
    const { data } = await response.json();
    console.log(data.greeting);
    return data.greeting;
}

fetchGreeting().then((greeting) => {
    document.getElementById('status').textContent = greeting;
});