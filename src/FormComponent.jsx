import React from "react";
import { useForm } from "react-hook-form";
import {
    Container,
    TextField,
    Button,
  } from "@material-ui/core";

const FormComponent = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => console.log(data);
    function cc_format(value) {
        var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        var matches = v.match(/\d{4,16}/g);
        var match = matches && matches[0] || ''
        var parts = []
    
        for (i=0, len=match.length; i<len; i+=4) {
            parts.push(match.substring(i, i+4))
        }
    
        if (parts.length) {
            return parts.join(' ')
        } else {
            return value
        }
    }


    return (<>
    <Container maxWidth ="xs">
    <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          style={{ margin: "5px" }}
          id = "cardNumber"
          type="text"
          label="Card Number"
          variant="outlined"
          fullWidth
          {...register("cardNumber", {required: "Field is required ", pattern: {
            value: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
            message: "Invalid card number"
          }})}
          error = {!!errors?.cardNumber}
          helperText = {errors?.cardNumber ? errors.cardNumber.message : null}
        />
        <br />
        {/* <TextField
          style={{ width: "200px", margin: "5px" }}
          id = "expDate"
          required
          type="text"
          label="Expiration Date"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "100px", margin: "5px" }}
          id = "cvv"
          required
          type="text"
          label="CVV"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ margin: "5px" }}
          id = "amount"
          required
          type="text"
          label="Amount"
          variant="outlined"
          fullWidth
        />
        <br /> */}
        <Button type = "submit" variant="contained" color="primary" fullWidth style={{ margin: "5px" }} >
          send
        </Button>
      </form>
    </Container>
    
    </>)
}

export default FormComponent;