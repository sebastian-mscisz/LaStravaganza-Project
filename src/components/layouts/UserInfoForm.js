import React from "react";
import FormField from "./FormField";

const UserInfoForm = (props) => {
  const { errors, messages } = props;
  return (
    <form
      onSubmit={props.handleSubmit}
      className="col-md-9 basketForm pb-3 pt-3"
    >
      <div className="form-group" onChange={props.handleUserInfoChange}>
        <label>Sposób dostawy:</label>
        <FormField
          id="deliveryOption1"
          type="radio"
          radioName="deliveryMethod"
          value="delivery"
          labelText="Dostawa"
        />
        <FormField
          id="deliveryOption2"
          type="radio"
          radioName="deliveryMethod"
          value="selfTake"
          labelText="Odbiór własny"
        />
        {errors.deliveryMethod && messages.deliveryMessage}
      </div>
      <FormField
        id="inputName"
        type="text"
        name="name"
        placeholder="Podaj imię..."
        value={props.userInfo.name}
        labelText="Imię i nazwisko:"
        handleUserInfoChange={props.handleUserInfoChange}
        error={errors.name}
        errorMessage={messages.requiredMessage}
      />
      <FormField
        id="inputCity"
        type="text"
        name="city"
        placeholder="Podaj miasto..."
        value={props.userInfo.city}
        labelText="Miasto:"
        handleUserInfoChange={props.handleUserInfoChange}
        error={errors.name}
        errorMessage={messages.requiredMessage}
      />
      <FormField
        id="inputAddress"
        type="text"
        name="address"
        placeholder="Podaj nazwę ulicy..."
        value={props.userInfo.address}
        labelText="Ulica:"
        handleUserInfoChange={props.handleUserInfoChange}
        error={errors.name}
        errorMessage={messages.requiredMessage}
      />
      <FormField
        id="inputNraddress"
        type="text"
        name="nrAddress"
        placeholder="Podaj numer domu/mieszkania..."
        value={props.userInfo.nrAddress}
        labelText="Nr domu lub mieszkania:"
        handleUserInfoChange={props.handleUserInfoChange}
        error={errors.name}
        errorMessage={messages.requiredMessage}
      />
      <FormField
        id="inputNumber"
        type="tel"
        name="number"
        placeholder="Podaj numer telefonu..."
        value={props.userInfo.number}
        labelText="Tel. komórkowy:"
        handleUserInfoChange={props.handleUserInfoChange}
        error={errors.number}
        errorMessage={messages.numberMessage}
      />
      <FormField
        id="inputEmail"
        type="text"
        name="email"
        placeholder="Podaj adres email..."
        value={props.userInfo.email}
        labelText="Email:"
        handleUserInfoChange={props.handleUserInfoChange}
        error={errors.email}
        errorMessage={messages.emailMessage}
      />
      <FormField
        id="inputComments"
        type="text"
        name="comments"
        placeholder="Dodatkowe uwagi do zamówienia..."
        value={props.userInfo.comments}
        labelText="Uwagi:"
        handleUserInfoChange={props.handleUserInfoChange}
      />
      <div className="form-group" onChange={props.handleUserInfoChange}>
        <label>Metoda płatności:</label>
        <FormField
          id="paymentOption1"
          type="radio"
          radioName="paymentMethod"
          value="cash"
          labelText="Gotówka"
        />
        <FormField
          id="paymentOption2"
          type="radio"
          radioName="paymentMethod"
          value="blik"
          labelText="Blik"
        />
        <FormField
          id="paymentOption3"
          type="radio"
          radioName="paymentMethod"
          value="creditcard"
          labelText="Karta płatnicza VISA/MAESTRO/MASTERCARD"
        />
        <FormField
          id="paymentOption4"
          type="radio"
          radioName="paymentMethod"
          value="transfer"
          labelText="Szybki przelew"
        />
        {errors.paymentMethod && messages.paymentMessage}
      </div>
      <div className="form-group" onChange={props.handleUserInfoChange}>
        <FormField
          id="checkboxTerms"
          type="checkbox"
          name="termsAccept"
          value={props.userInfo.termsAccept}
          labelText="Random zgoda na przetwarzanie lorem ipsum"
          error={errors.termsAccept}
          errorMessage={messages.termsMessage}
        />
        <FormField
          id="checkboxNewsletter"
          type="checkbox"
          name="newsletterAccept"
          value={props.userInfo.newsletterAccept}
          labelText="Random coś tam na newsletter"
        />
      </div>
      <button type="submit" className="btn btn-outline-secondary">
        <strong>Złóż zamówienie!</strong>
      </button>
    </form>
  );
};

export default UserInfoForm;
