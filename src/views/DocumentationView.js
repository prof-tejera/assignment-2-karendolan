import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";
import TimerProvider from "../context/TimerProvider";

// Components to describe
import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import DisplayTime from "../components/generic/DisplayTime";
import Input from "../components/generic/Input";
import DisplayRounds from "../components/generic/DisplayRounds";
import Panel from "../components/generic/Panel";
import ButtonPanel from "../components/generic/ButtonPanel";

// The list of components to Describe
const DocList = [Loading, DisplayTime, Input, DisplayRounds, Button, ButtonPanel, Panel];

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Documentation = () => {
  // compomose the component elements
  const components = DocList.map(CurrComp => {
    const {title, component, props} = CurrComp.docs;
    return (
      <DocumentComponent
        key={title}
        title= {title}
        component={component}
        propDocs={props}
      />
    )
  })
  return (
    <Container>
      <div>
        <Title>Documentation</Title>
        <TimerProvider>
          {components}
        </TimerProvider>
      </div>
    </Container>
  );
}

export default Documentation;
