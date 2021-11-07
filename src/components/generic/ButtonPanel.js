/**
 * ButtonPanel handles layout of the the button set
 */
 import React from "react";
 import PropTypes from "prop-types";
 import styled from "styled-components";
 import { STATUS } from "../../utils/helpers"

 import Button from "./Button";

 const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
`;

 class ButtonPanel extends React.Component {

   // Change button text based on status
   getText(status) {
     switch (status) {
       case STATUS.RUNNING:
       case STATUS.RESTING:
        return 'Pause';
       case STATUS.RESET:
       case STATUS.PAUSED:
       default:
        return 'Start';
      };
   };

   render() {
     const {onClick, onReset, status} = this.props;
     return (
       <Container>
         <Button
           size='large'
           active={false}
           text='Reset'
           onClick={onReset}
         />
          <Button
            size='large'
            active={true}
            text={this.getText(status)}
            onClick={onClick}
          />
       </Container>
     )
   };
 }

 ButtonPanel.propTypes = {
   // Callback for the primary button
   onClick: PropTypes.func,
   // Callback for the reset button
   onReset: PropTypes.func,
   // Status of the timer
   status: PropTypes.oneOf(STATUS),
 };

 ButtonPanel.defaultProps = {
   status: STATUS.RESET,
 };
 // Class param description for the docs=
 ButtonPanel.docs =   {
     title: 'ButtonPanel ',
     component: <ButtonPanel  onClick={()=>{}} />,
     props: [
       {
         prop: 'onClick',
         key: 'onClick',
         description: 'Callback for clicking primary button',
         type: 'function',
         defaultValue: 'none',
       },
       {
         prop: 'onReset',
         key: 'onReset',
         description: 'Callback for clicking reset button',
         type: 'function',
         defaultValue: 'none',
       },
       {
         prop: 'status',
         key: 'status',
         description: 'Status of the timer',
         type: 'string',
         defaultValue: ButtonPanel.defaultProps.status,
       }
     ]
 }

 export default ButtonPanel;
