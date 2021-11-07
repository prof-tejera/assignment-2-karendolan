import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GENERIC  from "../../shared/COLOR";

const sizeMapping = {
  small: 20,
  medium: 40,
  large: 60,
};

const Container = styled.div`
  background-color: ${GENERIC.PANEL.DISPLAY.background};
`;

const Round = styled.span`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: ${(props) => {
    return GENERIC.DISPLAY_ROUNDS[props.activeKey].background
  }};
  color: ${(props) => {
    return GENERIC.DISPLAY_ROUNDS[props.activeKey].color
  }};
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.75);
  transform-origin: 50% 50%;
`;

const RoundGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: "Round";
    color: ${GENERIC.DISPLAY_ROUNDS.label.color};
    padding-right:10px;
  }
`;

class DisplayRounds extends React.Component {
  render() {
    // construct the round row
    const { numRounds, curRound } = this.props;
    const dots = Array.from(Array(numRounds), (e,i)=>i+1).map(i => {
      const isCurRound = (i === curRound);
      return (
        <Round
          size={isCurRound ? sizeMapping.large : sizeMapping.medium}
          activeKey={isCurRound ? 'active' : 'inactive'}
          key={i}
        >
          {isCurRound && curRound}
        </Round>
      );
    })

    return (
      <Container>
        <RoundGroup>
          {dots}
        </RoundGroup>
      </Container>
    );
  }
};

DisplayRounds.propTypes = {
  // The number of rounds to display
  numRounds: PropTypes.number,
  // The round that is active
  curRound: PropTypes.number,
};

DisplayRounds.defaultProps = {
  curRound: 3,
  numRounds: 4,
};

// Class description for the docs
DisplayRounds.docs =   {
    title: 'Display rounds ',
    component: <DisplayRounds />,
    props: [
      {
        prop: 'numRounds',
        key: 'numRounds',
        description: 'The total number of rounds',
        type: 'number',
        defaultValue: DisplayRounds.defaultProps.numRounds,
      },
      {
        prop: 'curRound',
        key: 'curRound',
        description: "The number of the current round",
        type: 'number',
        defaultValue: DisplayRounds.defaultProps.curRound,
      },
    ]
};

export default DisplayRounds;
