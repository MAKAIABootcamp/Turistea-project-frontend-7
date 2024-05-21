import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const today = new Date();
today.setDate(today.getDate()+30);

const max = new Date();
max.setMonth(max.getMonth() + 18);

const SelectDate = (props) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
    props.getDate(newValue.startDate)
  };

  return (
    <Datepicker
      asSingle={true}
      useRange={false}
      value={value}
      onChange={handleValueChange}
      startFrom={today} 
      displayFormat={"DD/MM/YYYY"}
      inputClassName="w-1/2 border border-highlight-color rounded-lg font-normal focus:ring-highlight-color focus:border-highlight-color"
      popoverDirection="down"
      toggleClassName="absolute text-highlight-color"
      primaryColor={"orange"}
      minDate={today}
      maxDate={max}
      readOnly={true}
    />
  );
};

export default SelectDate