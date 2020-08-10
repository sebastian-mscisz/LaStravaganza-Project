import React from "react";
import Example from "./Example";
import FormField from "./FormField";
import { useForm } from "react-hook-form";

const UserInfoForm = (props) => {
  const { handleSubmit } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-3 pt-3">
      <div className="form-group">
        <label>Sposób dostawy:</label>
        <FormField
          id="deliveryOption1"
          type="radio"
          radioName="deliveryOptions"
          value="delivery"
          labelText="Dostawa"
        />
        <FormField
          id="deliveryOption2"
          type="radio"
          radioName="deliveryOptions"
          value="selfTake"
          labelText="Odbiór własny"
        />
      </div>
      <FormField
        id="inputName"
        type="text"
        placeholder="Podaj imię..."
        value={props.userInfo.name}
        labelText="Imię i nazwisko:"
        required="Pole wymagane!"
      />
      <FormField
        id="inputCity"
        type="text"
        placeholder="Podaj miasto..."
        value={props.userInfo.city}
        labelText="Miasto:"
        required="Pole wymagane!"
      />
      <FormField
        id="inputAddress"
        type="text"
        placeholder="Podaj nazwę ulicy..."
        value={props.userInfo.address}
        labelText="Ulica:"
        required="Pole wymagane!"
      />
      <FormField
        id="inputNraddress"
        type="text"
        placeholder="Podaj numer domu/mieszkania..."
        value={props.userInfo.nrAddress}
        labelText="Nr domu/mieszkania:"
        required="Pole wymagane!"
      />
      <FormField
        id="inputNumber"
        type="text"
        placeholder="Podaj numer telefonu..."
        value={props.userInfo.number}
        labelText="Tel. komórkowy:"
        required="Pole wymagane!"
      />
      <FormField
        id="inputEmail"
        type="text"
        placeholder="Podaj adres email..."
        value={props.userInfo.email}
        labelText="Email:"
      />
      <FormField
        id="inputComments"
        type="text"
        placeholder="Dodatkowe uwagi do zamówienia..."
        value={props.userInfo.comments}
        labelText="Uwagi:"
      />
      <div className="form-group">
        <label>Metoda płatności:</label>
        <FormField
          id="paymentOption1"
          type="radio"
          radioName="paymentOptions"
          value="cash"
          labelText="Gotówka"
        />
        <FormField
          id="paymentOption2"
          type="radio"
          radioName="paymentOptions"
          value="blik"
          labelText="Blik"
        />
        <FormField
          id="paymentOption3"
          type="radio"
          radioName="paymentOptions"
          value="creditcard"
          labelText="Karta płatnicza VISA/MAESTRO/MASTERCARD"
        />
        <FormField
          id="paymentOption4"
          type="radio"
          radioName="paymentOptions"
          value="transfer"
          labelText="Szybki przelew"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default UserInfoForm;
