import './App.css';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
    <Counter></Counter>     
  </div>
  );
  }

  /*
  </PlayingWithProps property1="value1" property=2"value2">
 function PlayWithProps(properties){
  console.log(properties)
  console.log(properties.property1)
  console.log(properties.property2)
  return(
    <div>props</div>
  )
}
*/


// function PlayWithProps({property1, property2}){
//   console.log(property1)
//   console.log(property2)
//   return(
//     <div>props</div>
//   )
//}
export default App;
