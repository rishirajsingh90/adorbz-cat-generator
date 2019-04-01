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
          <p>Click the button to generate a tots adorbz cat name!</p>
        </Row>
        <Row>
          <Button variant="primary" onClick={() => setCatName(generateCatName)}>
            Click me!
          </Button>
        </Row>
        <CatName name={catName} />
        <Suspense fallback={<span>LOADING...</span>}>
          <CatPic />
        </Suspense>
        <div className="cat-bottom-left" />
        <div className="branding" />
      </Container>
    </div>
  );
};
