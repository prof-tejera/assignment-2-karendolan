import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GENERIC  from "../../shared/COLOR";

const fontSizeMap = {
  small: '.8em',
  medium: '1em',
  large: '3.4em',
};

const Container = styled.div`
  text-align: center;
  font-size: ${(props) => props.size};
  color: ${(props) => {
    return GENERIC.DISPLAY_TIME[props.activeKey].color
  }};
  background-color: ${GENERIC.PANEL.DISPLAY.background};
`;

const Label = styled.span`
  margin-right: 5px;
  color: ${GENERIC.DISPLAY_TIME.label.color};
`;

class DisplayTime extends React.Component {
  render() {
    // const seconds = 7446; //2hr, 4 min, 6 secs
    const { seconds, label, active, size } = this.props;
    const textSize = fontSizeMap[size];
    // TODO: Move this to Utils area?
    // Split the seconds into Hour :  Min : Sec
    const hour = Math.floor(seconds / (60 * 60));
    const min = Math.floor(seconds % (60 * 60) / 60);
    const sec = Math.floor(seconds % (60 * 60) % 60);
    return (
      <Container
        size={textSize}
        activeKey={active ? 'active' : 'inactive'}
      >
        {!active && label && <Label>{label}</Label>}
        {('00' + hour).slice(-2)}
        :
        {('00' + min).slice(-2)}
        :
        {('00' + sec).slice(-2)}
      </Container >
    );
  }
};

DisplayTime.propTypes = {
  // The number of seconds to display
  seconds: PropTypes.number,
  // The label to display before the time display
  label: PropTypes.string,
  // The relative display size to use
  size: PropTypes.string,
  // Wether this is the a primary display or secondary
  active: PropTypes.bool,
};

DisplayTime.defaultProps = {
  seconds: 0,
  label: 'Work',
  size: 'medium',
  active: false,
};

// Class description for the docs
DisplayTime.docs =   {
    title: 'Display Time ',
    component: <DisplayTime />,
    props: [
      {
        prop: 'seconds',
        key: 'seconds',
        description: "Changes the time diplayed",
        type: "integer",
        defaultValue: DisplayTime.defaultProps.seconds,
      },
      {
        prop: 'label',
        key: 'label',
        description: 'Optional label for display time',
        type: 'string',
        defaultValue: DisplayTime.defaultProps.label,
      },
      {
        prop: 'active',
        key: 'active',
        description: 'Wether this is the active time display',
        type: 'boolean',
        defaultValue: String(DisplayTime.defaultProps.active),
      },
      {
        prop: 'size',
        key: 'size',
        description: 'Size of display time',
        type: 'string',
        defaultValue: DisplayTime.defaultProps.size,
      }
    ]
}

export default DisplayTime;
