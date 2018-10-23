import React, { Component } from 'react';
import styled from 'styled-components';
import { dateTimeFormat } from './dateUtils';

const Root = styled.div`
  width: 165px;
  max-height: 330px;
  font-weight: 700;
  background-color: rgb(0, 188, 212);
  color: rgb(255, 255, 255);
  padding: 20px;
	overflow: scroll;
  @media (max-width: 400px) {
    display: none;
  }
`;

const DateTime = styled.div`
  overflow: hidden;
  height: 16px;
  margin: 0px 0px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

class DateDisplay extends Component {
  state = {
    selectedYear: false,
  };

  componentWillMount() {
    if (!this.props.monthDaySelected) {
      this.setState({ selectedYear: true });
    }
  }

  getFormatedDate = date => {
    const dateTime = new dateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(date);

    return `${dateTime}`;
  };

  render() {
    const { selectedDates } = this.props;

    return (
      <Root>
        {selectedDates.map(date => <DateTime key={`${date.toString()}`}>{this.getFormatedDate(date)}</DateTime>)}
      </Root>
    );
  }
}

export default DateDisplay;
