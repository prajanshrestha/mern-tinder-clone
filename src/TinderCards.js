import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
        name: "Elon Musk",
        url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
    }, 
    {
        name: "Jeff Bezos",
        url: "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg"
    }
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  }

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  }

  return (
    <div className='tinder_cards'>
        <div className='tinderCards_cardContainer'>
            {people.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards