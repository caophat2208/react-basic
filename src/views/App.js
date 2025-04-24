import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
/**
 * component: class component / function component ( function, arrow )
 * 
 */


function App() {
//const app = () => { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js.
        </p>
        
        <MyComponent />

        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
