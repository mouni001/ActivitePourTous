import { useState } from "react";
import cuisine from './assets/ado.jpg'
import ShowTable from "./ShowTable";
function Portfolio() {
	const [description, setDescription] = useState(false);
	const [reviews, setReviews] = useState(false);
	const descriptionHandler = () => {
		setDescription(true);
		setReviews(false);
	};
	const reviewsHandler = () => {
		setDescription(false);
		setReviews(true);
	};
	return (
    <>
		<div className="containerbutton">
      <h1 >QUOI FAIRE?</h1>
    <h3 > Inscrivez-vous à une activité de votre choix</h3>
    <p>Vous avez la possibilité de voir les activités en portfolio ou en tableau.</p>
			<button type="button" class="btn btn-dark" onClick={descriptionHandler}>
				Voir en Portfolio</button>
        
			<button  type="button" class="btn btn-dark" onClick={reviewsHandler}>
				Voir en Tableau</button>
        </div>
			{description && (
				<ShowTable/>
			)}
			{reviews && (
				<table id="customers">
                <tr>
                  <td>
                  <img src={cuisine} alt="ado" className="img-overlay"/>
                      <p>blabla</p>
                  </td>
                  <td>Place restante: 8/10</td>
                  <td> 
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
      
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Peinture</h4>
                    <p>Lorem ipsum dolor..</p>
                  
                  </td>
                  <td>  <p>Place restante</p></td>
                  <td>
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Jardins communautaires</h4>
                    <p>Lorem ipsum dolor..</p>
                  </td>
                  <td><p>Place restante</p></td>
                  <td> 
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Atelier d'art</h4>
                    <p>Lorem ipsum dolor..</p>
                  </td>
                  <td>Place restante</td>
                  <td>
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Yoga en groupe</h4>
                    <p>Lorem ipsum dolor..</p>
                  </td>
                  <td>Place restante</td>
                  <td>
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
      
                  </td>
                </tr>
                <tr>
                  <td>
                  <img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Activités de natation</h4>
                    <p>Lorem ipsum dolor..</p>
                  </td>
                  <td>Place restante</td>
                  <td>
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
      
                  </td>
                </tr>
                <tr>
                  <td> <img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Vélo en groupe</h4>
                    <p>Lorem ipsum dolor..</p>
                  </td>
                  <td>Place restante</td>
                  <td>
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Escalade en groupe</h4>
                    <p>Lorem ipsum dolor..</p>
                  </td>
                  <td>Place restante</td>
                  <td>
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
      
                  </td>
                </tr>
                <tr>
                  <td><img src={cuisine} alt="ado" className="img-overlay"/>
                    <h4>Atelier de poterie</h4>
                    <p>Lorem ipsum dolor..</p>
                  </td>
                  <td>Place restante</td>
                  <td>
                    <a type="button" class="btn btn-light" href="essaie.html">Réservez votre place</a>
                    <a type="button" class="btn btn-light" href="commentaires.html">Laissez nous votre commentaire</a>
      
                  </td>
                </tr>
              </table>
			)}
		</>
	);
}

export default Portfolio;
