import React from "react";
import { Card } from "react-bootstrap";
import Home from "./Home";

const Final = ({ values }) => {

    //destructuring the object from values
  const { firstName, lastName, age, email, activity } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <h2>Votre place est réservé</h2>
          <p>
            <strong>First Name :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Last Name :</strong> {lastName}{" "}
          </p>
          <p>
            <strong>Age :</strong> {age}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>Activité :</strong> {activity}{" "}
          </p>
          <a href="./Home"> Revenir à la page d'Acceuil</a>
          <a href="./Activities">Voir les autres activités</a>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;