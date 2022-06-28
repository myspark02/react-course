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
  * Make ToDo component be more configurable
  * Pass text value to Todo component

* src/componentse/Todo.js
  * Receive value passed from App compnent using props
  * define button click event listener

* src/components/Modal.js
  * overlay component

* src/components/Backdrop.js
  * gray background behind the modal which blocks interaction with the page whilst the modal is open

* src/App.js
  * put Modal component below the last Todo component, and put Backdrop component below the Modal component.

* srx/components/Todo.js
  * import useState reack hook
  * React hooks can only be called directyly in react component functions and in custom hooks
  * modalIsOpen is component's state , setModalIsOpen state changing function
  * call setModalIsOpen when button click event listener executed

* src/App.js
  * remove Modal and Backdrop from there and move them to Todo component

* srx/components/Todo.js
  * conditional rendering
    * render Modal only wehn modalIsOpen is true
    * render Backdrop only when modalIsOpen is true

* Let's use more advanced react features like routing, json server, 
  * Clean up App.js, code from scratch 
  * React Routing
    * React controls what is visible on the screen based on the url
  * npm install react-router-doim  
  * create pages folder under src

* src/pages
  * AllMeetups.js
    * A component fror loading and displaying all the meetups we have
  * NewMeetup.js
    * Allow us to add a new meetup
  * Favorite.js
    * Allow us to view favorite meetups, a kind of bookmark

* src/index.js
  * Wrap App component with BrowserRouter

* src/App.js
  * Wrap each Route with Routes
  * Define a Route for AllMeetups component
  * Define a Route for NewMeetups component
  * Define a Route for Favorites component

* src/components/layout/MainNavigation.js
  * Main Navigation Links to our 3 Pages

* Make css files to be scoped to the component to which they belong
  * Create MainNavigation.module.css file
  * We can attach a css file to a specific component
    * We need to name a css file in a certain way, and we need to make sure that they end with dot module dot css.
    * Import a css file and assign it to a varialble
      * Then class name defined in a css file becomes a property of a JavaScript object

* src/pages/AllMeetups.js
  * Declare DUMMY_DATA array variable
  * For each item in DUMMY_DATA map it to a MeetupItem component

* src/components/meetups/MeetupItem.js
  * display title, address, description, and button to add to favorites
  * receive the contents to display through props
  * define css style for this component in MeetupItem.module.css
  * import the css to classes and use the classes as className values

* src/components/meetups/MeetupList.js
  * define css style for this component in MeetupIList.module.css
  * import the css to classes and use the classes as className values
  * import MeetupItem
  * receive  meetups array through props and map each meetup to a MeetupItem componet

* src/pages/AllMeetup.js
  * import MeetupList 
  * return jsx code including MeetupList component that has a meetups attribute and its value is DUMMY_DATA

* Reusable card styling component
* src/components/ui/Card.js
  * attach Card.module.css file
  * wrap props.children to style them as card

* src/components/MeetupItem.js
  * wrap the meetup content with opening Card tag end closing Card tag.

* src/components/layout/Layout.js
  * attach Layout.moudle.css file
  * cut MainNavigation from App.js and paste it to this component's JSX code.
  * put opening and closing tags of main below the MainNavigation
  * put props.children between opening tag and closing tag of main

* src/App.js
  * wrap the Routes component with Layout

* src/pages/NewMeeupPage.js
* src/components/meetups/NewMeetupForm.js
  * attach NewmeetupForm.module.css
  * put NewMeetupForm component to NewMeetupPage
  * wrap the content with Card
    * form which has 
      * input for meetup title, input for image url, input for address, and textarea for description
      * button for submit the form
  * define submit event handler function
    * event.preventDefault()
  * use useRef hook
    * establish a connection to each input through the object returned by calling useRef() hook
  * in submit event handler function 
    * You get the input value through the object returned by useRef()
    * construct meetupData as json from the input values and send the json to backend server,
  * SPA typically needs a backend API server
  * We don't directly connect to a DB server from react because of security issues 
  * Instead, we connect to a backend server and the server connects to a DB server
  * But in this course just for demonstration we directly connect to a Firebase from react application.
  * Firebase is a service offered by Google, you only need a google accound to use it.
    * console.firebase.google.com
      * create a project
      * build > realtime database > create a database > start in test mode
      ```
      {
        "rules": {
          ".read": "now < 1655910000000",  // 2022-6-23
          ".write": "now < 1655910000000",  // 2022-6-23
        }
      }
      ```
      * change the above to the below
      ```
      {
        "rules": {
          ".read": true
          ".write": true
        }
      }
      ```

  * You receive a function which sends json object to firebase realtim databse
    * Call the function with the json object

* src/pages/NewMeetupPage.js
  * define a addMeetupHander function 
    * and pass the fucntion reference to NewMeetupForm component
    * use builtin javascript function 'fetch' to send request to filrebase
      * append  /database_name.json to the realtime firebase url 
      * use json object to provide http method and body information as second argument to a fetch function
  * When you execute NewMeetup you can see the data is being stored in firebase database in real time
  * After adding new meetup we go back to '/' page by calling useNavigate hook

* src/pages/AllMeetups.js
  * Whenever after this component being rendered, It fetches all meetups data from firebase by calling useEffect() hook
    * without useEffect() hook, fetch() function call and then setting state variable causes infinite loop

* src/pages/Favorites.js
  * Depending on the current favorite state, We can add each MeetupItem component to favorite list or remove from the list 
  * Favorite meetups displayed on 'My Favoirtes' page, and the number of favorite meetups is displayed as badge beside 'My Favorites' link
  * We'll have a state that affects more than one component we'll need a mechanism of mananging that state globally and distributing that state to different components
    * We can manage global state by passing the state to lower hierarchy from the root component but it has a couple of downsides
      * one problem would be that if we have a bigger application with different states that affect different components we have to manange more and more state in root component and the root component becomes bigger and bigger that's may not be ideal.
      * another problem is that if we pass state down through props that we can end up with very long prop chains
  * One popular state management package is redux
  * Reat also has a built-in state management solution which is useContext hook

* src/store/favorites-context.js
  * import createContext
  * create context 
    * context is a javascript object
    * and the context object is a component, and the convention for component name is that the name starts with capital character
  * define a context provider component
    * declare userFavorites state using useState hook
    * define addFavoriteHandler, removeFavoriteHander, itemIsFavoriteHandler function
    * declare context using userFavorite state and the above functions and then pass it through the context value
  * wrap the components that are listening to the context change with the context's provider
    
* src/index.js
  * wrap BrowserRouter component with context provider component

* src/components/meetups/MeetupItem.js
  * import useContext
  * define toggleFavoriteStatusHandler using context object and associate it to click event of button tag

* src/pages/Favorites.js
  * import useContext
  * import MeetupList
  * return MeetupList component with meetups attribute and its value is context object's favorites

* src/components/layout/MainNavigation.js
  * add a badge representing total number of favorites
  * import useContext
  * get the number of favorites from the context object


* To make favorite meetups permanant, use web browser's local storage to store favorite meetups in context provider