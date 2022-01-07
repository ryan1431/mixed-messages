# *Mixed Messages* &nbsp;<img src="img/images.jpeg" alt="drawing" width="35"/>

> *Codecademy Project*

> [**Download Project ZIP**](https://github.com/ryan1431/mixed-messages/archive/refs/heads/master.zip)
---

Contents: 
* [Objective](#objective)
* [Implementation](#implementation)
* [Instructions](#instructions)
* [Languages](#languages)


## **_Objective_**:

Display random messages from collection based on user's input.
- Each random message should be made up of at least 
      three different pieces of data
- The user will be prompted to answer a question and receive
      a message based on their input 
    - eg. how are you feeling?
      - happy --> tell joke, 
      - sad --> inspire 
      - other --> pick random
- each input will pull from a different category of messages

## **_Implementation:_** 

### **Setup**
- simple index.html pulls script from main.js
- main.js loops a prompt which takes user input
& an alert with with the proper message output
- variable will be stored containing the user input, and that
will be used to determine the output message

### **Logic**
- 3 different arrays, titled their category name (jokes, inspirational
quotes, etc) which contain strings of different messages
- array of possible inputs
- simple math.floor & random can pull out a message from the array
and send it back to user with an alert message

<br/>

### **Optional stuff**
- [ ] input field & button functionality 
- [x] more elements in each category / array
- [ ] styling of any sort
- [x] more than 3 categories
- [x] separate file for arrays 
- [x] descriptive readme.md

<br/>

### **Instructions**
1. If you haven't already, [download](https://github.com/ryan1431/mixed-messages/archive/refs/heads/master.zip) the project ZIP file.
2. Unzip the file & double click 'index.html'
3. Enter an input into the field, and hit enter to see a response!

<br/>

## **_Languages_**
- HTML
- JavaScript
