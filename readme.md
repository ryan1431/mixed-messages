# *Mixed Messages* &nbsp;<img src="img/images.jpeg" alt="drawing" width="35"/>

> *Codecademy Project*

* [Objective](#objective)
* [Implementation](#implementation)
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
      - etc
- each input will pull from a different category of messages

## **_Implementation:_** 

### **Setup**
- simple index.html pulls script from main.js 2
- main.js consistently loops a prompt which takes user input
& an alert with with the proper message output
- variable will be stored containing the user input, and that
will be used to determine the output message

### **Logic**
- 3 different arrays, titled their category name (jokes, inspirational
quotes, etc) which contain strings of different messages
- array of possible inputs
- simple math.floor & random can pull out a message from the array
and send it back to user with an alert message


### **Optional bonus material**
- input field & button functionality 
- more elements in each category / array
- styling of any sort
- more than 3 categories
- separate file for arrays 
- thorough readme.md explanation

## **_Languages_**
- HTML
- JavaScript
