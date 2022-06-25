[React Crash Corse for Beginners 2021](https://www.youtube.com/watch?v=Dorf8i6lCuk&t=1s)

* What is React.js
  * A client-side JavaScript library
  * All about building modern, reactive user interfaces for the web
    * Mobile apps and desktop apps feel very "reactive": Things happen instantly, you don't wait for new pages to load or action to start.
    * Traditionally, in web apps, you click a link and wait for a new page to load. You click a button  and wait for some action to complete.
  * Declarative, component-focused approach
  
* Building Single-Page-Applications(SPAs)
  * React can be used to control parts of HTML pages or entire pages
  * React can also be used to control the entire frontend of a web appliction
  * "Widget" approach on a multi-page-application. (Some) pages are still rendered on and served by a backend server.
  * "Single-Page-Application" (SPA) approach. Server only sends one HTML page. thereafter, React takes over and controls the UI.

* React.js Alternatives
  * React.js
    * Lean and focused component-based UI library. Certain features (e.g. routing) are added via community packages.
  * Angular
    * Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.
  * Vue.js
    * Complete component-based UI framework, includes most core features. A bit less popular than React & Angular.
    
* Let's get started with react
  * install node.js 
  * npx create-react-app react-course; cd react-cource;  code .
  * install prettier code formatter
  * Preferences -> Settings
    * search for default formatter & set it Prettier - Code Formatter  
  * clean up 
    * delete all the files under src folder except App.js, index.css, index.js
    * remove built-in content from App.js, index.css, and index.js
  * start development server
    * npm run start
  * index.js is the starting point of our react application  
  * JSX (JavaScript Syntax eXtension) 
    * HTML in JavaScript
    * This is What functional components return
    * Converted to plain HTML elements and reached to Browser

* src/App.js
  * To build JSX elements You can use built-in html elements as well as custom components
  * To assign class name for styling you should use className attribute, do not use class attribute

* src/components/Todo.js
  * define function Todo, and export it
  * Name of function component should start with capital character
  * Put the custom component Todo into App.js, include it by writing a self-closing tag.
  * React differentiate built in html element and custom element by casing all these built-in elements start with a lowercase character and custom elements start with a uppercase character.

* src/App.js
  * Duplicate <Todo /> custom components