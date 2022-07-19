import React, {textarea, useState} from 'react'
import pkg from 'semantic-ui-react/package.json'
import female from './assets/female.png'
import male from './assets/male.png'
import StarRating from './StarRating'
import { Dropdown } from 'semantic-ui-react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaPencilAlt, GrRotateRight, FaHeart} from "react-icons/fa";
import Home from './Home'

import './style.css'





const Commentaire = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <div className="container d-flex justify-content-center mt-100 mb-100">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Commentaires Récents</h4>
              <h6 class="card-subtitle">Commentaire récents des participants</h6> 
            </div>
            <div class="comment-widgets m-b-20">
            <div class="d-flex flex-row comment-row">
                <div class="p-2"><span class="round"><img src={female} alt="user" width="50"/></span></div>
                <div class="comment-text w-100">
                    <h5>Samso Nagaro</h5>
                    <div class="comment-footer">
                        <span class="date">14 Avril 2019</span>
                        <span class="label label-info">Pending</span> <span class="action-icons">
                                <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">J'ai adoré l'activité de poterie! J'ai appris beacoup de technique. Merci beaucoup!</p>
                </div>
            </div>
            <div class="d-flex flex-row comment-row ">
                <div class="p-2"><span class="round"><img src={male} alt="user" width="50"/></span></div>
                <div class="comment-text active w-100">
                    <h5>Jonty Andrews</h5>
                    <div class="comment-footer">
                        <span class="date">13 Mars 2020</span>
                        <span class="label label-success">Apprové</span> <span class="action-icons active">
                        <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">Contrairement aux croyances, 
                    les activités gratuites de cette entreprise à but communautaire donne des activités de qualité. 
                    Je me suis inscrit au groupe de vélo et je ne regrette pas</p>
                </div>
            </div>
            <div class="d-flex flex-row comment-row">
                <div class="p-2"><span class="round"><img src={female} alt="user" width="50"/></span></div>
                <div class="comment-text w-100">
                    <h5>Sarah Tim</h5>
                    <div class="comment-footer">
                        <span class="date">20 Janvier 2022</span>
                        <span class="label label-success">Apprové</span> <span class="action-icons active">
                        <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">J'ai inscrite mes deux enfants de 8 ans et de 10 ans à l'activité d'escalade.
                      Comme je suis heureuse. Ils ont passés un moment mémorable et ont dépensés toute leur énergie.
                      C'est fantastique!Je recomande pour les enfants energétiques</p>
                </div>
            </div>
            <div class="d-flex flex-row comment-row">
                <div class="p-2"><span class="round"><img src={male} alt="user" width="50"/></span></div>
                <div class="comment-text w-100">
                    <h5>Samso Nagaro</h5>
                    <div class="comment-footer">
                        <span class="date">Mars 2022</span>
                        <span class="label label-info">Pending</span> <span class="action-icons">
                        <a href="#" data-abc="true"><i class="fa fa-heart"><FaHeart/></i></a>
                            </span>
                    </div>
                    <p class="m-b-5 m-t-10">Je n'étais pas sûr que ses activités gratuites étaient pour moi. 
                    Après avoir lu les commentaires, je me suis lancé à l'eau et me suis inscrit au jardin communautaire avec ma famille.
                    Nous avons passé un aprés-midi fabuleux. Les enfants étaient fatigués et moi et ma femme heureux. </p>
                </div>
            </div>
            </div>
            </div>
            </div>
            <h2>Laissez nous vous aussi vos commentaires</h2>
      <div className='container'>
        <h2>Activité à évaluer</h2>
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <p>Choisir le nombre d'étoile: </p><StarRating/>
      <textarea>
        Écrivez-nous un commentaire!
      </textarea>
      </div>
      <Button variant="primary" class="btn btn-light" onClick={handleShow}>
        Soumettre
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Merci Beacoup</Modal.Title>
        </Modal.Header>
        <Modal.Body>Merci pour votre commentaire. Avant de l'afficher, notre 
          équipe analysera votre commentaire afin d'améliorer nos services</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"href='./Commentaire'>
            Écrire un autres commentaire
          </Button>
          <Button variant="primary" href="./">
            Revenir à la page d'accueil
          </Button>
        </Modal.Footer>
      </Modal>
            
          </div>
        </div>
      </div>


  )
}

export default Commentaire
