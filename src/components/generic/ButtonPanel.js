/**
* ButtonPanel handles layout of the the button set
*/
import React, {useContext} from "react";
import styled from "styled-components";

// Import the data provider
import { TimerContext } from "../../context/TimerProvider";
import { STATUS } from "../../utils/constants"

import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ButtonPanel = () => {
  const { work, pause, end, reset, isRunning } = useContext(TimerContext);

  return (
    <Container>
    <Button
      size='large'
      active={false}
      text={(isRunning ? 'End' : 'Reset')}
      onClick={(isRunning ? end : reset)}
    />
    <Button
      size='large'
      active={true}
      // TODO: fix this text, for skipping to end
      // TODO: timer has a effect for state change to stop or start timer
      // or, timer is an independant component
      text={(isRunning ? 'Pause' : 'Start')}
      onClick={(isRunning ? pause : work)}
    />
    </Container>
  )
};

// Class param description for the docs=
ButtonPanel.docs =   {
  title: 'ButtonPanel ',
  component: <ButtonPanel  onClick={()=>{}} />,
  // No more props, gets it all from context
  props: [],
}

export default ButtonPanel;
