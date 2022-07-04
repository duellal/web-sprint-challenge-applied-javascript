# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [ ] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [ ] Open the assignment in Canvas and click on the "Set up git" option.
- [ ] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [ ] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

You are going to create a Bloomtech Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Bloomtech Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [ ] Navigate to the root of the project with your command line.
- [ ] Run `npm install` to download the dependencies listed in the `package.json` file.
- [ ] Run `npm start` to compile the project and serve it.
- [ ] Navigate Chrome to `http://localhost:3000`
- [ ] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [ ] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [ ] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [ ] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Demonstrate your understanding of this week's concepts by answering the following questions:

1. What is the DOM?

The DOM stands for Document Object Model. Referring to MDN web docs, the DOM is an interface for web documents and represents the document as nodes and objects. It lets programs change the document structure, content, and styles. 

The nodes in the DOM are "tree" elements starting with the document and working down through the child elements (or leaves). This is important, because we can use the DOM to get to the leave(s) that we want in the "tree" of the HTML file.

You can change a launched webpage by using the inspection tool, however these changes are not permanent. You can change the DOM permanently by using a Javascript Object. By using the Javascript Object, we can make the DOM responsive and interactive by using the nodes and methods for the DOM.
 
2. What is an event?

An event is when something on the webpage happens after being triggered by something else - this can be an API or an user. For example, if an user clicked on a button, they would be redirected to the corresponding page.

3. What is an event listener?

An event listener is a function that waits for an event to happen, such as a mouse click, a key being pressed down, or when something loads. The function then executes what should happen after the event is executed.

4. Why would we convert a NodeList into an Array?

You would convert a NodeList into an Array when you want to use an array method other than .forEach() to manipulate the data in the NodeList.

5. What is a component?

A component uses HTML, CSS, and/or Javascript to make the code reusable in the website or application - usually by writing a function. This makes the code less cumbersome and easier to read as well as using less memory to run the code.
