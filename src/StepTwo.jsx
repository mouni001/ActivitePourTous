import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [errorAge, setErrorAge] = useState(false);
  const [errorActivity, setErrorActivity] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
     if (
      validator.isEmpty(values.age) || validator.isEmpty(values.activity) 
    ) {
      if(validator.isEmpty(values.age)){
        setErrorAge(true);
      }
      if(validator.isEmpty(values.activity)){
        setErrorActivity(true);
      }
      
    } else {
      nextStep();
    }
  };

  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de participants</Form.Label>
              <Form.Control
                style={{ border: errorAge ? "2px solid red" : "" }}
                type="number"
                placeholder="Nombre de participants"
                onChange={handleFormData("age")}
              />
              {errorAge ? (
                <Form.Text style={{ color: "red" }}>
                  Ce champ obligatoire
                </Form.Text>
              ) : (
                ""
              )}
              </Form.Group>
              <Form.Group>
              <Form.Label>Choisir une Activité</Form.Label>
               <select multiple class="form-control" id="exampleFormControlSelect2" style={{ border: errorActivity ? "2px solid red" : "" }}
                type=""
                placeholder="activity"
                onChange={handleFormData("activity")}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
      
                  </select>
    
               
              {errorActivity ? (
                <Form.Text style={{ color: "red" }}>
                  Ce champ obligatoire
                </Form.Text>
              ) : (
                ""
              )}
            
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;