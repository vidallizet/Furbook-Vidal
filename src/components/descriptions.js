import React from 'react';
import './css/descriptions.css';

function Descriptions() {
  return(
    <div className = 'container-fluid Descriptions'>
      <div className = 'row'>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Cats</h5>
          <p className = 'sub-text'>
            Contrary to popular belief, cats aren't loners. At furbook, we know cats need friendship, affection, and comradery. It is 						  our core belief that beneath every cat's hard, angry, exterior there is a pet who jus wants to play and cuddle with a friend. they are great companions and may relieve your stress once you come home.</p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Dogs</h5>
          <p className = 'sub-text'>
            Dogs are a man's best friend. But dogs can also be dog's best friend. Maybe even bester than a man's best friend. On furbook, 					      you can find millions of other dogs who can be a loyal companion, trusted confidant, and reliable wrestling partner. Their naturally optimistic spirits help us relieve many stress and it's also entertaining to watch how a dog's behavior varies from being with you and with other dogs.</p>
        </div>
        <div className = 'col'>
          <h5 className = 'title-text'>Real Friends</h5>
          <p className = 'sub-text'>s
            Who says cats and dogs can't get along? Here at Furbook, we believe all pets can be best friends. Our furbook users 					         believe it doesn't matter if you are a cat, dog, rabbit, or ferret; underneath that fur we are all cute, wonderful pets. Of course, each pet has it's differences but they can learn to get along with other pets if shown the right way. 					 </p>
         </div>
      </div>
    </div>
  );
}


export default Descriptions;