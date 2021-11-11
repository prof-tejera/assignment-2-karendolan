import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GENERIC  from "../../shared/COLOR";

const primaryColor =  GENERIC.INPUT.DEFAULT.background;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 330px;
  background-color: ${GENERIC.PANEL.INPUT.background};
`;

const InputStyled = styled.input`
  flex: 1;
  padding: 5px 10px;
  width: 80px;
  text-align: right;
  text-decoration: none;
  font-weight: bold;
  color: ${GENERIC.INPUT.color};
  background-color: ${primaryColor};
  border-width: medium;
  border-radius: 20px;
  margin-left: 10px;
`;

const LabelStyled = styled.label`
  flex: 1;
  color: ${GENERIC.INPUT.LABEL.color};
  text-align: right;
`;

// The Generic Input cannot use a Timer context because the component is
// too generic. The values it updates are variable in the
// context (rounds, work secs, rest secs, etc). The context of the iput is
// controlled at the timer level.
const Input = ({value, onChange, name, label, maxNum}) => {
  return (
    <InputContainer>
      <LabelStyled
        htmlFor={name}
      >
        {label}
        :
      </LabelStyled>
      <InputStyled
        id={name}
        name={name}
        type="number"
        min="0"
        max={maxNum}
        onChange={onChange}
        autocomplete="off"
        placeholder={0}
        value={value}
      />
    </InputContainer>
  )
};

Input.propTypes = {
  // The input element name identifier to use
  name: PropTypes.string,
  // The display text to use for the input
  label: PropTypes.string,
  // The value to display in the input
  value: PropTypes.number,
  // The max number allowed in the input
  maxNum: PropTypes.number,
  // The callback to use when the input changes
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  name: 'Input',
  label: 'Input',
  value: undefined,
  maxNum: 86400, // 24 hours
};


// Class description for the docs
Input.docs =   {
    title: 'Input ',
    component: <Input defaultValue="" onChange={()=>{}} />,
    props: [
      {
        prop: 'name',
        key: 'name',
        description: 'Name of input field',
        type: 'string',
        defaultValue: Input.defaultProps.name,
      },
      {
        prop: 'label',
        key: 'label',
        description: 'label for input field',
        type: 'string',
        defaultValue: Input.defaultProps.label,
      },
      {
        prop: 'value',
        key: 'value',
        description: 'Value of input field',
        type: 'number from 0 to maxNum',
        defaultValue: 'none',
      },
      {
        prop: 'maxNum',
        key: 'maxNum',
        description: 'Maximum input number',
        type: 'number',
        defaultValue: Input.defaultProps.maxNum,
      },
      {
        prop: 'onChange',
        key: 'onChange',
        description: "Callback for change of input",
        type: "function",
        defaultValue: 'none',
      }
    ]
}

export default Input;
