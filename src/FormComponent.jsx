import React, { useEffect, useState } from "react";
import style from './FormComponent.module.css'
import InputMask from "react-input-mask";
import {
  Container,
  TextField,
  Button,
} from "@material-ui/core";

const FormComponent = () => {
  const [ccNumber, setCcNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [CVV, setCVV] = useState('');
  const [amount, setAmount] = useState('');

  const [cardNumberError, setCardNumberError] = useState(false);
  const [expDateError, setExpDateError] = useState(false);
  const [cvvError, setCvvNumberError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const validate = () => {
    if (ccNumber.length == 0 || ccNumber == undefined) {
      setCardNumberError(true);
    }else{
      setCardNumberError(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCardNumberError(false);
    setExpDateError(false);
    setCvvNumberError(false);
    setAmountError(false);

    if (ccNumber === '') {
      setCardNumberError(true);
    }
    if (expDate === '') {
      setExpDateError(true);
    }
    if (CVV === '') {
      setCvvNumberError(true);
    }
    if (amount === '') {
      setAmountError(true);
    }
  }

  return (<>
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <div>Card number:</div>
        <InputMask
          mask="9999 9999 9999 9999"
          value={ccNumber}
          disabled={false}
          onChange={(e) => {setCcNumber(e.target.value); validate()}}
        >
          {() => <TextField
            required
            fullWidth
            style={{ margin: "5px" }}
            variant="outlined"
            placeholder="1111 2222 3333 4444"
            error={cardNumberError}
            helperText={ccNumber === "" ? "Empty field! Please enter 16 digits" : " "}
          />}
        </InputMask>
        <br />
        <div className={style.expDate}>
          <div>
            <div>Expiration Date:</div>
            <InputMask
              mask="99/9999"
              value={expDate}
              disabled={false}
              onChange={(e) => {setExpDate(e.target.value); validate()}}
            >
              {() => <TextField
                required
                style={{ width: "200px", margin: "5px" }}
                variant="outlined"
                placeholder="MM/YYYY"
                error={expDateError}
                helperText={expDate === "" ? "Empty field!" : " "}
              />}
            </InputMask>
          </div>
          <div>
            <div className={style.title}>CVV:</div>
            <InputMask
              mask="999"
              value={CVV}
              disabled={false}
              onChange={(e) => {setCVV(e.target.value); validate()}}
            >
              {() => <TextField
                required
                style={{ width: "55px", margin: "5px 15px" }}
                variant="outlined"
                placeholder="123"
                error={cvvError}
                helperText={CVV === "" ? "Required!" : " "}
              />}
            </InputMask>
          </div>

        </div>
        <div>Amount:</div>
        <InputMask
          mask = "99999999999999"
          maskChar=" "
          value={amount}
          disabled={false}
          onChange={(e) => {setAmount(e.target.value); validate()}}
        >
          {() => <TextField
            required
            fullWidth
            style={{ margin: "0px 5px" }}
            variant="outlined"
            error={amountError}
            helperText={amount === "" ? "Empty field!" : " "}
          />}
        </InputMask>
        <br />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          style={{ margin: "5px" }} 
          disabled={cardNumberError}
        >
          send
        </Button>
      </form>
    </Container>

  </>)
}

export default FormComponent;