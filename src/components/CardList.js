import React from 'react';
import Card from './Card.js';



const CardList = ({ robots }) => {
    return (
        <div>
            {
               robots.map((user, i) => {
                return (
                    <Card 
                    // have to add key so react can keep track of elements and their order, otherwise if one is deleted it will not handle correclty
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} />
                );
               })
            }
        </div>
    );
}
    

export default CardList;