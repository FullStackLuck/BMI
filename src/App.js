
import './App.css';
import './index.css'
import React, {useState} from 'react';


// Create a function based component
function App() {

  //State
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0){
    alert("Please enter a valid weight and height")
    } else {
      let bmi = (weight /(height * height) *703 )
      setBmi(bmi.toFixed(1))

      //Logic for message

      if (bmi < 25){
        setMessage('You are under weight')
      } else if (bmi >= 25 && bmi < 30 ){
        setMessage('You are a healthy weight')
      }else {
        setMessage('You are overweight')
      }
    }
  }


  // Set image
  let imgSrc;

  // if(bmi < 1){
  //   imgSrc= null
  // } else {
  //   if(bmi <25){
  //     imgSrc = require ('')
  //   }
  // }

  //Reload function clears Data from input fields.

  let reload= ()=>{
    window.location.reload()
  }


  return (
    <div className="App">
       <div className='container'>
       <h2>BMI Calculator</h2>
       <form onSubmit= {calcBmi}>
        <div>
          <label>Weight in (lbs): </label>
          <input value={weight} onChange ={(event)=> setWeight(event.target.value)}/> 
        </div>
        <div>
          <label>Height in (in): </label>
          <input value={height} onChange ={(event)=> setHeight(event.target.value)}></input>
        </div>
        <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
       </form>

       <div className='center'>
        <h3>Your BMI is: {bmi}</h3>
        <p>{message}</p>
       </div>

       <div className='img-container'>
        <img src={imgSrc} alt=''></img>
       </div>
      </div>
    </div>
  );
}

export default App;
