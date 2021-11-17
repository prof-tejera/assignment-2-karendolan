/**
 * Panel handles layout of the timer
 * It also controls the color palette
 */
 import React, {useContext} from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";

 // Import components
 import DisplayTime from "./DisplayTime";
 import DisplayRounds from "./DisplayRounds";
 import Input from "./Input";
 import ButtonPanel from "./ButtonPanel";

 // Import the data provider
 import { TimerContext } from "../../context/TimerProvider";

 //import constants and shared
 import GENERIC  from "../../shared/COLOR";

 const primaryColor =  GENERIC.PANEL.DEFAULT.background;

 const PanelStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   height: 85vh;
   width: 500px;
   /* Using Gill Sans because it's fun, easy to read, and emits energy */
   font-family: "Gill Sans", sans-serif;
   background-color: ${primaryColor};
   color: ${GENERIC.PANEL.DEFAULT.color};
`;

const TitleContainer = styled.div`
  color: ${GENERIC.PANEL.INPUT.background};
  background-color: ${GENERIC.BUTTON_COLORS.inactive.background};
  padding: 20px 20px 30px;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
`;
//   padding: 40px 2px;
 const InputsContainer = styled.div`
   color: ${GENERIC.PANEL.INPUT.color};
   background-color: ${GENERIC.PANEL.INPUT.background};
   min-height: 20%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

  const DisplayContainer = styled.div`
    background-color: ${GENERIC.PANEL.DISPLAY.background};
    padding: 20px 60px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
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
   displayRounds,
 }) => {
   // Two context items for hidding the settings
   const {
     isReset,
   } = useContext(TimerContext);

    console.log('KAREN  panel - rerendering')
    return (
     <PanelStyle>
      <InputsContainer>
        {(isReset() && inputs)}
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
   timerTitle: PropTypes.string,
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
     component: <Panel onClick={()=>{}} timerTitle="Panel" />,
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
       }
     ]
 }

 export default Panel;
