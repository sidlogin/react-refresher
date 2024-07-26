### Create new React App
1. npx create-react-app my-app
# React-18-webpack-setup
Create new react application from scratch using webpack 5

## Basic steps:
1. Create a folder for react project
2. Go inside of newly created folder and run `npm init` command to generate package.json
3. Create `public` folder inside project folder and create `index.html` file
4. Create the `src` folder inside the react project folder
5. Create `App.css`, `App.js` and `index.js` inside the `src` folder
6. Install the `react` and `react-dom` node packages `npm i react react-dom`

## Babel transpiler configutation:
1. To run the React with `ES6` module which supports `jsx` syntax. Install the following node packages `npm i --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/cli`
2. Create the `.babelrc` configuration file, this tells babel transpiler to what preset and plugins to use to transpile our code

### React Hooks
1. useState(); - Mainly use to create state vailable for your react components.
2. useEffect(() => {}, []); - Mainly use to manage side-effects that are related to component rendering.
3. useContext(() => {});
4. useNavigator(() => {});
5. useLocations(() => {});
6. useMemo(() => {});
7. useCallbacks(() => {});
8. useReducer((checked) => !checked, false);
9. useRef() - Mainly use to map the UI DOM elements of your component for any kind of operations.

### Key Features:
## Props destructing properties
const App = ({data, isReceived}) => {

};
export default App;

## Array destructuring properties
const [state1, state2, state3] = ['NYC', 'CA', 'TX'];
const [posts, setPosts] = useState([]);

## Controle components
Controlling the component/form by creating the state values for the components



### Performance of React Application

1. List Virtualization or Windowing
2. Lazy loading
3. images memoization
4. Throttling and Debouncing Events 
5. Code-splitting
6. react fragments 
7. web workers
8. useTransition hook


