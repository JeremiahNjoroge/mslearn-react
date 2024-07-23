import React from "react";

function RecipeSteps(props){
    // Create the list items using map
    const RecipeStepsListItems = props.recipesteps.map((recipestep, index) => {
        return (
            // Return the desired HTML for each ingredient
            <li key={index} >
                { recipestep.name }
            </li>
        );
    });

    // return the HTML for the component
    // recipestepsListItems will be rendered as li elements
    return (
        <ol>
            { RecipeStepsListItems }
        </ol>
    );
}
export default RecipeSteps;