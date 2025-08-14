// server.js
const express = require('express');
const fetch = require('node-fetch'); // npm install node-fetch@2
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allow all origins to access this backend (adjust for prod)
app.use(express.json()); // Parse JSON body

// Proxy endpoint for Moneris customer creation
app.post('/api/customers', async (req, res) => {
  try {
    const monerisResponse = await fetch('https://api.sb.moneris.io/customers', {
      method: 'POST',
      headers: {
        'Api-Version': '2024-09-17',
        'X-Correlated-Id': crypto.randomUUID ? crypto.randomUUID() : 'random-id-' + Math.random().toString(36).slice(2),
        'X-Merchant-Id': '0030137014958',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImZ0NExGRnpFcXlKYXdmcmZKdjB2UC0wWWE0YmM2azRZNGlJTHhyVk9JQjAiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiIxNjM2MjFmZC00OGExLTQ0MGEtYjY5Zi1jNDkwMTlkNmYyMGMiLCJpc3MiOiJodHRwczovL21vbmVyaXNwb3J0YWwuYjJjbG9naW4uY29tLzc5YWEyNWE1LWI4MDUtNDhlOC04M2U1LTQ3YzE3M2YyMGE5NS92Mi4wLyIsImV4cCI6MTc1NDI3NTYyMSwibmJmIjoxNzU0MTg5MjIxLCJ1aWQiOiJjOTE2YTZiMy0wNjI4LTRmYzAtOWMwYy1kZTg3ZGQ1ZjZlMDYiLCJlbnZpcm9ubWVudE5hbWUiOiJTQU5EQk9YIiwic3ViIjoiYzkxNmE2YjMtMDYyOC00ZmMwLTljMGMtZGU4N2RkNWY2ZTA2IiwiZW1haWwiOiJlZGlzb24udHJhbjA0NUBnbWFpbC5jb20iLCJ0aWQiOiI3OWFhMjVhNS1iODA1LTQ4ZTgtODNlNS00N2MxNzNmMjBhOTUiLCJzY3AiOiJwYXltZW50LndyaXRlIHBheW1lbnQucmVhZCBrb3VudC5yZWFkIHJlZnVuZC5yZWFkIHJlZnVuZC53cml0ZSBrb3VudC53cml0ZSBjdXN0b21lci53cml0ZSBjdXN0b21lci5yZWFkIiwiYXpwYWNyIjoiMSIsIm9pZCI6ImM4MDI5MjIzLTI1N2EtNGUzZS04ZDg5LWRmYTA1MGUwMDg5ZCIsInZlciI6IjIuMCIsImF6cCI6IjIwYTE4NmEzLTM0OTUtNDNkMi05NzgzLWE2OWExMDQ5OGM4NSIsImlhdCI6MTc1NDE4OTIyMX0.gUOM_qg1CYO5poNDL39Wn2pqStAf2sg4ivTFyRHqV8FSw-UhfhlYFZWk_YdetLyCEUeNhdeZlQxKm0m1oIJeAr3pLKas4sg45XcWks9XHjWzV1P1F9YF7QDw1-ktjQ5wSXgwOjLrqOrjRyrjnxRgRWcu8oVA_BZUHaLrsnmMFUwa7gcwXjb1ubsZB23fJLGMuyxsSTTPAHfhfWh0u2XXLwK7qtITBlVkxeVF_dx_gjna_GCfidHIJEGlI3FWAFK6-L1Lfsa159bmJfnYlTRNx5zapVv7D06BWqAGfkSMedVKjWQGoCLQNWxVtr94GI29o_OMxnEWPLJ0qLNu_h3kQA'
      },
      body: JSON.stringify(req.body)
    });

    const data = await monerisResponse.json();
    res.status(monerisResponse.status).json(data);
  } catch (error) {
    console.error('Backend error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend proxy listening on http://localhost:${PORT}`);
});
