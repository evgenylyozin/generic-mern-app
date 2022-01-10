# Generic MERN application  
This app is generic and is for reference.

MERN app with all main CRUD operations with json data and files.  
Files are stored either on backend or in mongodb gridfs.  
The whole application is booted up with docker-compose and consists of three containers:  
 - react in development mode  
 - express in development mode  
 - mongodb in development mode  

User input is validated:
- Text data is validated on the frontend with yup
- Files are checked for correct mime types and size on frontend (with yup) and backend (with custom checks for multer)

## Backend part  
- express
- typescript
- eslint
- ts-node-dev
- prettier
- mongoose
- multer
## Frontend part  
- react
- typescript
- eslint
- prettier
- react hook form
- yup
- styled components
## Docker stack  
- docker-compose up --build
- backend is available at localhost:5000
- frontend is available at localhost:3000
- mongodb is available at mongodb:3333

