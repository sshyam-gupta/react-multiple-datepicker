import React, { Component } from 'react';
import styled from 'styled-components';
import DateUtilities from './utils';
import { dateTimeFormat } from './dateUtils';

const StyledWeek = styled.div`
  display: flex;
`;

const DayButton = styled.div`
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: ${({ disabled }) => (disabled === true ? 'not-allowed' : disabled === false ? 'pointer' : 'auto')};
  text-align: center;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  line-height: 34px;
  margin: 4px;
  border: transparent;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  background-color: ${({ selected }) => (selected ? 'rgba(0, 151, 167, 1)' : 'rgba(0, 151, 167, 0)')};
`;

const Day = styled.div`
  color: ${({ selected }) => (selected ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, 0.87)')};
  font-weight: ${({ today }) => (today ? '500' : '400')};
  font-size: ${({ today }) => (today ? '1.1rem' : '')};
  color: ${({ disabled }) => (disabled ? 'lightgrey' : '')};
`;

class Week extends Component {
  onSelect = day => {
    if (!this.isDisabled(day)) this.props.onSelect(day);
  };

  isDisabled = day => {
    let minDate = this.props.minDate,
      maxDate = this.props.maxDate;

    return (minDate && DateUtilities.isBefore(day, minDate)) || (maxDate && DateUtilities.isAfter(day, maxDate));
  };

  isSelected = day => this.props.selectedDates && DateUtilities.dateIn(this.props.selectedDates, day);

  render() {
    const dateInNumberic = new dateTimeFormat('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });

    const dateToday = dateInNumberic.format(new Date());

    const dayInNumeric = new dateTimeFormat('en-US', {
      day: 'numeric',
    });
    return (
      <StyledWeek>
        {this.props.week.map((day, i) => {
          if (day) {
            const isToday = day && dateToday === dateInNumberic.format(day);
            const isDisabled = this.isDisabled(day);
            const isSelected = this.isSelected(day);

            return (
              <DayButton
                key={`day-${day}`}
                onClick={(e) => {e.preventDefault(); this.onSelect(day)}}
                disabled={isDisabled}
                selected={isSelected}
              >
                <Day selected={isSelected} disabled={isDisabled} today={isToday}>
                  {dayInNumeric.format(day)}
                </Day>
              </DayButton>
            );
          }
          return <DayButton key={`blank-${i}`} />;
        })}
      </StyledWeek>
    );
  }
}

export default Week;
