import { useEffect, useState } from "react";
import FruitFilter from "./FruitFilter";
import Fruitlist from "./FruitList";




export default function FruitContainer(props){
    // inittialize the fruit list to the full list passed in props
    const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)

    
    //handle the filter, and upstate when the filter value changes
    //store the filter state and filter the list of fruits to display

    const handleFilterChange = (event) => {
        event.preventDefault();

        //  grab value from event
        const filterValue = event.target.value;
        setFruitsToDisplay((_prevState) =>{
            //remove fruits that don't contain the filter value
            const filteredFruitList = props.fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase());
            });
        return filteredFruitList
        })
    }

    useEffect(() => {
        console.log("do something", fruitsToDisplay)
    }, [fruitsToDisplay])


    
    return (
        <div><h1>This is the FruitContainer</h1>
        <FruitFilter onChange={(e) => handleFilterChange(e)} />
        <Fruitlist fruits={fruitsToDisplay} />
        </div>

   )
    //All of the data is hoisted to the top of the tree in the container
    // and it is passed to the child components 
}