import express from 'express'; 
// But it will raise an error to overcome ----- add "type": "module" in package.json

const app = express();

app.get('/',(req, res)=>{
  res.send('Server is Ready');
});

// API to get jokes
app.get('/jokes', (req, res) => {
    // Object Of Arrays
    const jokes = [
        {
            id: 1,
            title: "Programmer Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "JavaScript",
            content: "Why did JavaScript break up with CSS? Because it found the relationship too complicated."
        },
        {
            id: 3,
            title: "Backend",
            content: "I told my backend to stay calm. It replied with status 200."
        },
        {
            id: 4,
            title: "Database",
            content: "My SQL database and I have a strong relationship. It's well indexed."
        },
        {
            id: 5,
            title: "React",
            content: "React developers never get lost. They always follow the router."
        },
        {
            id: 6,
            title: "Node.js",
            content: "Node.js never sleeps. It keeps the event loop running."
        },
        {
            id: 7,
            title: "Git",
            content: "I asked Git if it loved me. It said, 'Commit first.'"
        },
        {
            id: 8,
            title: "College",
            content: "Engineering students don't make mistakes. They create unexpected features."
        },
        {
            id: 9,
            title: "Exam",
            content: "I studied for five hours and the exam asked about the one topic I skipped."
        },
        {
            id: 10,
            title: "Coffee",
            content: "Programmers turn coffee into code."
        }
    ];

    res.send(jokes);

});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
  console.log(`Server at http://localhost:${port}`);
});