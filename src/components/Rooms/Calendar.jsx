import React from 'react';
import { DateRange } from 'react-date-range'

const Calendar = ({ value, handleSelect }) => {
    return (
        <DateRange
            rangeColors={['#F43F5E']}
            ranges={[value]}
            onChange={handleSelect}
            date={new Date()}
            direction='vertical'
            showDateDisplay={false}
            minDate={value.startDate}
            maxDate={value.endDate}
        />
    );
};

export default Calendar;