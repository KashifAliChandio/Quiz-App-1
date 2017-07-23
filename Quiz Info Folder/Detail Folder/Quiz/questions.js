                             /* ***** Questions for Quiz Application ***** */
var questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript",
        "option1": "<javascript>",
        "option2": "<scripting>",
        "option3": "<script>",
        "option4": "<js>",
        "answer": "3"
    },

    {
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below?  <p id='demo'> This is a paragraph. </p>",
        "option1": "document.getElementById('demo').innerHTML = 'Hello!'",
        "option2": "document.getElementByName('p').innerHTML = 'Hello!'",
        "option3": "#demo.innerHTML = 'Hello!'",
        "option4": "document.getElement('p').innerHTML = 'Hello!'",
        "answer": "1"
    },

    {
        "question": "Where is the correct place to insert a JavaScript?",
        "option1": "The <body> section",
        "option2": "The <head> section",
        "option3": "Both the <head> section and the <body> section are correct",
        "option4": "None of these.",
        "answer": "3"
    },

    {
        "question": "What is the correct syntax for reffering an external script called 'xxx.js'?",
        "option1": "<script name='xxx.js'>",
        "option2": "<script src='xxx.js'>",
        "option3": "<script href='xxx.js'>",
        "option4": "None of these.",
        "answer": "2"
    },

    {
        "question": "The external JavaScript file must contain the <script> tag.",
        "option1": "False",
        "option2": "True",
        "option3": "I don't know",
        "option4": "None of these.",
        "answer": "1"
    },

    {
        "question": "How do you write 'Hello World' in an alert box?",
        "option1": "msgBox('Hello World');",
        "option2": "alertBox('Hello World');",
        "option3": "msg('Hello World');",
        "option4": "alert('Hello World');",
        "answer": "4"
    },

    {
        "question": "How do you create a function in JavaScript?",
        "option1": "function:myFunction()",
        "option2": "function = myFunction()",
        "option3": "function myFunction()",
        "option4": "None of these.",
        "answer": "3"
    },

    {
        "question": "How do you call a function named 'myFunction'?",
        "option1": "myFunction()",
        "option2": "call myFunction()",
        "option3": "call function myFunction()",
        "option4": "None of these.",
        "answer": "1"
    },

    {
        "question": "How to write an IF statement in JavaScript?",
        "option1": "if i == 5 then",
        "option2": "if i = 5",
        "option3": "if i = 5 then",
        "option4": "if (i == 5)",
        "answer": "4"
    },

    {
        "question": "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        "option1": "if i <> 5",
        "option2": "if i =! 5 then",
        "option3": "if (i <> 5)",
        "option4": "if (i != 5)",
        "answer": "4"
    },

    {
        "question": "How does a FOR loop start?",
        "option1": "for (i = 0; i <= 5; i++)",
        "option2": "for i = 1 to 5",
        "option3": "for (i <= 5; i++)",
        "option4": "for (i = 0; i <= 5)",
        "answer": "1"
    },

    {
        "question": "How can you add a comment in a JavaScript?",
        "option1": "//This is a comment",
        "option2": "<!--This is a comment-->",
        "option3": "//This is a comment//",
        "option4": "None of these.",
        "answer": "1"
    },

    {
        "question": "How to insert a comment that has more than one line?",
        "option1": "//This commnet has more than one line//",
        "option2": "/*This commnet has more than one line*/",
        "option3": "<!--This commnet has more than one line-->",
        "option4": "None of these.",
        "answer": "2",
    },

    {
        "question": "What is the correct way to write a JavaScript array?",
        "option1": "var colors = (1:'red', 2:'green', 3:'blue')",
        "option2": "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        "option3": "var colors = 'red', 'green', 'blue'",
        "option4": "var colors = ['red', 'green', 'blue']",
        "answer": "4"
    },

    {
        "question": "What is the correct JavaScript syntax for opening a new window called 'w2' ?",
        "option1": "w2 = window.new('http://www.w3schools.com');",
        "option2": "w2 = window.open('http://www.w3schools.com');",
        "option3": "w2 = window.href('http://www.w3schools.com');",
        "option4": "None of these.",
        "answer": "2"
    },

    {
        "question": "JavaScript is the same as Java.",
        "option1": "False",
        "option2": "True",
        "option3": "I don't know.",
        "option4": "None of these.",
        "answer": "1"
    },

    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "option1": "onmouseclick",
        "option2": "onchange",
        "option3": "onmouseover",
        "option4": "onclick",
        "answer": "4"
    },

    {
        "question": "How do you declare a JavaScript variable?",
        "option1": "variable carName;",
        "option2": "var carName;",
        "option3": "v carName;",
        "option4": "None of these.",
        "answer": "2"
    },

    {
        "question": "Which operator is used to assign a value to a variable?",
        "option1": ":",
        "option2": "-",
        "option3": "*",
        "option4": "=",
        "answer": "4"
    },

    {
        "question": "Which of the following function of String object returns the calling string value converted to upper case?",
        "option1": "toLocalUpperCase()",
        "option2": "toUpperCase()",
        "option3": "toString()",
        "option4": "subString()",
        "answer": "2"
    },

    {
        "question": "Which of the following type of variable is visible everywhere in your JavaScript code?",
        "option1": "Global Variable",
        "option2": "Local Variable",
        "option3": "Both of the above.",
        "option4": "None of these.",
        "answer": "1"
    },

    {
        "question": "JavaScript is a __________ language.",
        "option1": "Programming",
        "option2": "Application",
        "option3": "None of these.",
        "option4": "Scripting",
        "answer": "4"
    },

    {
        "question": "JavaScript is a __________ Side Scripting Language.",
        "option1": "Server",
        "option2": "ISP",
        "option3": "Browser",
        "option4": "None of these.",
        "answer": "3"
    },

    {
        "question": "What is the extension of JavaScript file?",
        "option1": ".jvs",
        "option2": ".javascript",
        "option3": ".jsc",
        "option4": ".js",
        "answer": "4"
    },

    {
        "question": "Which of the following Attribute is used to include External JS code inside your HTML Document?",
        "option1": "src",
        "option2": "script",
        "option3": "link",
        "option4": "href",
        "answer": "1"
    }
]

                                    /* ***** Questions Complete ***** */