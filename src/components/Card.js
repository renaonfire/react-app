import React from 'react';

const Card = ({name, email, id}) => {

    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
             <h2>Robofriends</h2>
            <img alt="robopic" src={`https://robohash.org/${id}?200x200`} />
            
                <h2> {name} </h2>
                <p> {email} </p>
           
        </div>
    )
}

export default Card;