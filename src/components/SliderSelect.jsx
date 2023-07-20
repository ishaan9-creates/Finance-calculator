import React from "react";
import SliderComponent from "./common/SliderComponent";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

const SliderSelect = ({ data, setData, unit }) => {
  const max_lim = 10000;

  return (
    <>
      <Stack>
        <SliderComponent
          defaultValue={data.homeValue}
          value={data.homeValue}
          min={1000}
          max={max_lim}
          step={10}
          label="Home Value"
          unit={unit}
          amount={data.homeValue}
          onChange={(e, value) => setData({ ...data, downPayment: 0.2 * value, loanAmount: 0.8 * value,  homeValue: value })}
        />

        <SliderComponent
          defaultValue={data.downPayment}
          value={data.downPayment}
          min={100}
          max={data.homeValue}
          step={20}
          label="Down Payment"
          unit={unit}
          amount={data.downPayment}
          onChange={(e, value) => setData({ ...data, loanAmount: (data.homeValue - value), downPayment: value })}
        />

        <SliderComponent
          defaultValue={data.loanAmount}
          value={data.loanAmount}
          min={100}
          max={data.homeValue}
          step={20}
          label="Loan Amount"
          unit={unit}
          amount={data.loanAmount}
          onChange={(e, value)=>setData({ ...data, downPayment: (data.homeValue - value), loanAmount: value})}
          />

        <SliderComponent
          defaultValue={data.interestRate}
          value = {data.interestRate}
          min={2}
          max={18}
          step={0.5}
          label="Interest Rate"
          unit="%"
          amount={data.interestRate}
          onChange={(e, value) => setData({ ...data, interestRate: value})}
        />
      </Stack>
    </>
  );
};

export default SliderSelect;
