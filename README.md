# IMS Subscriber Portal 
This is a solution to the provided coding problem. A simple front-end interface has been built that can create API requests to the MongoDB database to upload/update, retrieve, and delete subscriber profiles.

## Installation 
Run ```npm i && npm start``` on both client and server side. You should be able to connect to the MongoDB database from any IP address.

## Assumptions
- There can only be one subscriber profile attached to each phone number.
- Phone numbers must be a minimum of ten characters in length. I didn't set a specific maximum length as the example provides a phone number with an area code.
- The phone number attached to a subscriber is the main identifier property.
- This service is administrator-facing, and so there is no authentication required to accept API calls
- With the exception of phone number, none of the subscriber information is required
- The 'Call Forward No Reply' is automatically updated with a false 'provisioned' parameter for a new subscriber