# Customer-Purchase-Demo-Moneris
**Tools Used: HTML, CSS, Javascript, Node.js, Express** 

## Introduction
This take home demonstration involved integrating a web-based client interface using the Moneris API to collect 
customer information using Hosted Tokenization in order to process a purchase transaction securely. This
exercise looks to bridge front-end data collection with back-end API communication, while following industry 
standard practices for data handling and security.

## Objective
The primary goal was to create a one-time payment after collecting the card information from the user using Hosted
Tokenization. Once the card information has been collected, customer information would also be need tobe gathered 
through the online form. After the generation of the temporary token and customer ID, it would be referenced to Postman. 
Finally, a one-time purchase transaction of $10 would be submitted through Postman, completing the demonstration.


## Approach
The project was structured into two parts:

**Frontend** – HTML/JavaScript form for collecting customer details (including name, shipping address, email, etc.), with logic to skip empty fields when submitting.

**Backend** (Node.js + Express) – Server-side routes that receive the form data, attach necessary authentication headers (Bearer token), and make secure server-to-server requests to the Moneris API.

To start, I was to create a working proof-of-concept that allows a user to input customer details into 
a web form, send the data to a Node.js/Express backend, and forward it to Moneris’ API for processing. This 
needed to be done securely, avoiding direct client-to-Moneris requests to prevent CORS issues and protect 
sensitive API keys. During the process, initial attempts to send requests directly from the browser to Moneris 
failed due to CORS restrictions. This issue was resolved by introducing a backend server through Node.js.

## Results
The final setup successfully collected customer information and customer ID through using Hosted Tokenization on 
the client side and was able to transmit it to Moneris via the backend. After the temporary token and customer ID 
was generated, it would then be used in the Postman in order to create the one-time purchase transaction of $10. 
The solution resolved previous CORS issues, securely handled authentication credentials, and returned API responses 
to the client without exposing sensitive information.

## Conclusion
This demonstration was able to show how a secure backend acts as a bridge between a web form and a third-party API.
While working with Moneris' API, encounters dealing with handling authentication securely, managing CORS restrictions,
and validating input. The result is a functional proof-of-concept that can be extended to real world e-commerce and/or 
payment processing solutions.
