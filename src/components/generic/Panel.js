/**
 * Panel handles layout of the components of the timer
 */
 import React, {useContext} from "react";
 import styled from "styled-components";

 // Import component
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
   displayRound,
 }) => {
   // The inputs are only shown in the RESET state.
   // The inputs are hidden when the timer is running or paused.
   const {
     isReset,
   } = useContext(TimerContext);

    return (
     <PanelStyle>
      <InputsContainer>
        {(isReset() && inputs)}
      </InputsContainer>
      <DisplayContainer>
        {displayTimes}
        {displayRound}
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
         prop: 'inputs',
         key: 'inputs',
         description: "An array of Input objects",
         type: "[Input]",
         defaultValue: "none",
       },
       {
         prop: 'displayRound',
         key: 'displayRound',
         description: "A DisplayRound object",
         type: "DisplayRound",
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
