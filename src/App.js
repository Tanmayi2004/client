import logo from './icon.svg';
import './App.css';
import Registration from './components/Registration'
import Login from './components/Login';
import Appbar from './components/Appbar';
import Profile from './components/Profile';
import Entry from './components/Entry';
import Category from './components/Category';
import History from './components/History';
import Home from './components/Home'; // Import Home component only once
import ForgotPassword from './components/ForgotPassword'; // Import ForgotPassword component
import Food from './components/Food';
import Clothing from './components/Clothing';
import State from './components/State';
import About from './components/About';
import Festival from './components/Festival';
import Error from './components/Error';

function App({store}) {

  function Page() {
    switch(store.getState().NavReducer) {
      case "Login":
        return(<div><Login store={store} /></div>)
      case "Registration":
        return(<div><Registration /></div>)
      case "Profile":
        if(localStorage.getItem("role") == 1)
          return(<div><Profile /></div>)
        else
          return(<div><Error /></div>)
      case "Entry":
        if(localStorage.getItem("role") == 1)
          return(<div><Entry /></div>)
        else
          return(<div><Error /></div>)
      case "Category":
        if(localStorage.getItem("role") == 1 || localStorage.getItem("role") == 2)
          return(<div><Category /></div>)
        else
          return(<div><Error /></div>)
      case "History":
          if(localStorage.getItem("role") == 1)
           return(<div><History /></div>)
          else
           return(<div><Error /></div>)
      case "Home":
          if(localStorage.getItem("role") == 1)
            return(<div><Home /></div>)
          else
            return(<div><Error /></div>)
      case "ForgotPassword":
          if(localStorage.getItem("role") == 1)
            return(<div><ForgotPassword /></div>)
          else
            return(<div><Error /></div>)
      case "Food":
          if(localStorage.getItem("role") == 1)
            return(<div><Food /></div>)
          else
            return(<div><Error /></div>)
      case "Clothing":
          if(localStorage.getItem("role") == 1)
            return(<div><Clothing /></div>)
          else
            return(<div><Error /></div>)
      case "State":
          if(localStorage.getItem("role") == 1)
            return(<div><State /></div>)
          else
            return(<div><Error /></div>)
      case "Festival":
          if(localStorage.getItem("role") == 1)
            return(<div><Festival /></div>)
          else
            return(<div><Error /></div>)
      case "About":
          if(localStorage.getItem("role") == 1)
            return(<div><About /></div>)
          else
            return(<div><Error /></div>)
      
         
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Indian Culture Management System </p>
      </header>
      <div className="App-body">
        <Appbar store={store} />
        <center><Page /></center>
      </div>
    </div>
    
  );
}

export default App;
