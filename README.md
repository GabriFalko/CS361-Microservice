# CS361-Microservice

This is a microservice made for group #162 in CS 361. 
Microservice for sending and retreving highestScore for a game application.


## Usage (Client Code):
- Example to retreive highest score, as http request: `GET http://localhost:[port]/highScore`
    - In JavaScript: `fetch("http://localhost:[port]/highScore");`

The http request returns content-type `.json` if successful. If not successful, returns `{  message: 'the specific error' }`

1. Example to send new score and name, as http request:

<img width="388" alt="Screen Shot 2023-02-15 at 6 58 00 PM" src="https://user-images.githubusercontent.com/115046607/219256880-6310e141-f941-4329-a793-e401dea2f736.png">

2. and for Shell: 

<img width="432" alt="Screen Shot 2023-02-15 at 6 58 10 PM" src="https://user-images.githubusercontent.com/115046607/219256883-e3176684-aa25-4c60-91ce-359cecd9ec01.png">

3. and for Python:

<img width="480" alt="Screen Shot 2023-02-15 at 6 58 37 PM" src="https://user-images.githubusercontent.com/115046607/219256885-cf1a4ee9-49e7-4294-bf94-4e738ff17cb7.png">

### UML Sequence Diagram:

![UML Sequence Diagram] <img width="778" alt="Screen Shot 2023-02-15 at 8 21 25 PM" src="https://user-images.githubusercontent.com/115046607/219267913-5bb4e503-6fcd-4e2d-b693-5c86e975bd0b.png">

## Running the microservice (Server Code):
To run on your own server:
1. Ensure you have [Node.js](https://nodejs.org/en/) installed.
2. Clone this repository.
3. Run `npm install` or `npm i` in a terminal in the repository's directory, to install all dependencies.
4. Run `npm start` to start the microservice.
    - Use CTRL+C to stop the microservice.

The port used can be changed by editing the value of PORT at the top of `index.js`
