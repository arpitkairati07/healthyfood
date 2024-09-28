import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrormMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./FoodInput";
import { useState } from "react";

function App() {
  let [food_items ,setFoodItems] = useState([]);

let textStateArr=useState("Food item is enetered by user");
let textToShow=textStateArr[0];
let setTextState=textStateArr[1];
console.log(`Current Value of TextState : ${textToShow}`);


const onKeyDown =(event) =>{
  if (event.key === "Enter"){
    let newFoodItem=event.target.value;
    event.target.value="";
    let newItems=[...food_items,newFoodItem];
    setFoodItems(newItems);
    console.log("Food value entered is "+newFoodItem)
  } 
};

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food Items.</h1>
      
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={food_items}></ErrorMessage>
        <p>{textToShow}</p>
        <FoodItems items={food_items}></FoodItems>
      </Container>

      <Container>
        <p>Eating healthy can be both delicious and satisfying!.</p>
      </Container>
    </>
  );
}

export default App;
