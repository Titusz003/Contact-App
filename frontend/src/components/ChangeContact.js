import React, { useState } from "react";
import "../styles/ChangeContact.css";
import placeholder1 from "../assets/placeholder1.png";
import plusSign from "../assets/plusSign.png";
import utils from "../utils";

function ChangeContact() {
  const formData = new FormData();
  const [contactPictureURL, setContactPictureURL] = useState(placeholder1);
  const [formState, setFormState] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    contactPicture: "placeholder1.png",
    contactPictureFile: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: formState.name,
      phoneNumber: formState.phoneNumber,
      emailAddress: formState.emailAddress,
      contactPicture: formState.contactPicture,
      contactPictureFile: formState.contactPictureFile,
    };
    try {
      for (const element in data) {
        formData.append(element, data[element]);
      }
      const response = await fetch(`http://localhost:5000/contacts`, {
        method: "POST",
        body: formData,
      });

      if (!response.status === 200) {
        throw new Error(`Something went wrong! Error Code: ${response.status}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="ChangeContact">
      <h2 className="addContactText">Add Contact</h2>
      <div className="addPicture">
        <img
          src={contactPictureURL}
          width={"88px"}
          height={"88px"}
          alt="contactPicture"
          className="contactPicture"
        />
        <label className="addPictureButton">
          <img src={plusSign} alt="addNew" className="plusSign" />
          <p className="addPictureText">Add Picture</p>
          <input
            type="file"
            name="contactPicture"
            id="addPictureInput"
            onChange={(event) => {
              setContactPictureURL(URL.createObjectURL(event.target.files[0]));
              setFormState({
                ...formState,
                contactPicture: event.target.files[0].name,
                contactPictureFile: event.target.files[0],
              });
            }}
          />
        </label>
      </div>
      <form className="from">
        <label className="formLabel">
          Name
          <input
            name="name"
            type="text"
            className="formInput"
            placeholder="Jamie Wright"
            value={formState.name}
            onChange={handleChange}
          />
        </label>

        <label className="formLabel">
          Phone number
          <input
            name="phoneNumber"
            type="text"
            className="formInput"
            placeholder="+01 234 5678"
            value={formState.phoneNumber}
            onChange={handleChange}
          />
        </label>

        <label className="formLabel">
          Email address
          <input
            name="emailAddress"
            type="text"
            className="formInput"
            placeholder="jamie.wright@mail.com"
            value={formState.emailAddress}
            onChange={handleChange}
          />
        </label>
      </form>
      <div className="orderButtons">
        <button className="formCancel" onClick={utils.toggleAddContact}>
          Cancel
        </button>
        <button className="formDone" onClick={handleSubmit}>
          Done
        </button>
      </div>
    </div>
  );
}

export default ChangeContact;
