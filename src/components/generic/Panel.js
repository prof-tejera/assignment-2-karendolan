/**
 * Panel handles layout of the timer
 * It also controls the color palette
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";

 // Import components
 import DisplayTime from "./DisplayTime";
 import DisplayRounds from "./DisplayRounds";
 import Input from "./Input";
 import ButtonPanel from "./ButtonPanel";

 //import constants and shared
 import GENERIC  from "../../shared/COLOR";

 const primaryColor =  GENERIC.PANEL.DEFAULT.background;

 const PanelStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 500px;
   /* Using Gill Sans because it's fun, easy to read, and emits energy */
   font-family: "Gill Sans", sans-serif;
   background-color: ${primaryColor};
   color: ${GENERIC.PANEL.DEFAULT.color};
`;

const TitleContainer = styled.div`
  color: ${GENERIC.PANEL.INPUT.background};
  background-color: ${GENERIC.PANEL.DISPLAY.background};
  background-color: ${GENERIC.BUTTON_COLORS.inactive.background};
  padding: 20px 20px 30px;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
`;

 const InputsContainer = styled.div`
   color: ${GENERIC.PANEL.INPUT.color};
   background-color: ${GENERIC.PANEL.INPUT.background};
   padding: 40px 2px;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

  const DisplayContainer = styled.div`
    background-color: ${GENERIC.PANEL.DISPLAY.background};
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;

  const ControlsContainer = styled.div`
    background-color: ${GENERIC.PANEL.CONTROLS.background};
    padding: 20px 40px;
  `;

  /**
   * the Panel function
   */
 const Panel = ({
   timerTitle,
   inputs,
   displayTimes,
   displayRounds
 }) => {
    console.log('KAREN  panel - rerendering')
    return (
     <PanelStyle>
      <InputsContainer>
        {inputs}
      </InputsContainer>
      <DisplayContainer>
        {displayTimes}
        {displayRounds}
      </DisplayContainer>
      <ControlsContainer>
        <ButtonPanel/>
      </ControlsContainer>
      <TitleContainer>
        {timerTitle}
      </TitleContainer>
     </PanelStyle>
   );
 };

 Panel.propTypes = {
   timerTitle: PropTypes.string.isRequired,
   // An array of display round objects
   displayRound: PropTypes.arrayOf(DisplayRounds),
   // An array of display time objects
   displayTime: PropTypes.arrayOf(DisplayTime),
   // An Array of input objects
   inputs: PropTypes.arrayOf(Input),
 };

 // Class description for the docs
 Panel.docs =   {
     title: 'Panel ',
     component: <Panel onClick={()=>{}} />,
     props: [
       {
         prop: 'timerTitle',
         key: 'timerTitle',
         description: "The name of the timer",
         type: "String",
         defaultValue: "none",
       },
       {
         prop: 'displayRound',
         key: 'displayRound',
         description: "An Array of DisplayRound objects",
         type: "[DisplayRound]",
         defaultValue: "none",
       },
       {
         prop: 'displayTimes',
         key: 'displayTimes',
         description: "An Array of DisplayTimes objects",
         type: "[DisplayTimes]",
         defaultValue: "none",
       },
       {
         prop: 'status',
         key: 'status',
         description: 'Status of the timer',
         type: 'string',
         defaultValue: "RESET",
       }
     ]
 }

 export default Panel;
