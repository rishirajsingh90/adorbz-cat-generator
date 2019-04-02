import React from "react";
import { generateCatName } from "../utils/cat";
import { CatName } from "./cat-name";
import { CatPic } from "./cat-pic";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const { useState, Suspense } = React;

export const App = () => {
  const [catName, setCatName] = useState("");

  return (
    <div className="App">
      <Container>
        <div className="cat-top-right" />
        <Row className="Title">
          <h1>Adorbz Cat Generator</h1>
        </Row>
        <Row>
          <p>Click the button to name your tots adorbz cat name!</p>
        </Row>
        <Row>
          <Button variant="primary" onClick={() => setCatName(generateCatName)}>
            Name me!
          </Button>
        </Row>
        <Row>
          <CatName name={catName} />
        </Row>
        <Row className="image-content">
          <Suspense fallback={<span>LOADING...</span>}>
            <CatPic />
          </Suspense>
        </Row>
        <Row>
          <div className="cat-bottom-left" />
        </Row>
      </Container>
    </div>
  );
};
