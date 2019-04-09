import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        })
    return (
        <Auxillary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnTypes="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnTypes="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Auxillary>
    );
}

export default orderSummary;