import React,{Component} from 'react' ;
import Header from './component/header/header';
import Navbar from './component/navbar/navbar';
import List from './component/list/list';
import './App.css'

class App extends Component{
  state={}
  render() {
    return (
      <div>
        <Header/>
        <Navbar/>
        <List/>
      </div>
    );
  }
}

export default App;
