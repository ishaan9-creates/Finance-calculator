import React from 'react'
import Stack from "@mui/material/Stack"
import CalcCard from './CalcCard'

const CardRow = () => {
    
    const Name1="Home Loan";
    const Name2 = "Car loan";

  return (
    <Stack direction="row" gap={2}>
        <CalcCard firstName={Name1} Descrption="Lorem Ipsum"/>
        <CalcCard firstName={Name2} Descrption="Lorem Ipsum"/>
    </Stack>
  )
}

export default CardRow
