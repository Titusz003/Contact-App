import React, { useEffect, useState } from "react";
import "../styles/Contacts.css";
import cogwheel from "../assets/cogwheel.png";
import photo from "../assets/photo.png";
import plusSign from "../assets/plusSign.png";
import leftArrow from "../assets/leftArrow.png";
import sun from "../assets/sun.png";
import SingleContact from "./SingleContact";

import utils from "../utils";
function Contacts() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/contacts`, {
          method: "GET",
        });

        if (!response.status === 200) {
          throw new Error(
            `Something went wrong! Error Code: ${response.status}`
          );
        }
        let actualData = await response.json();
        setContactList(actualData);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, []);
  return (
    <div className="Contacts">
      <div className="header">
        <img src={leftArrow} alt="back" className="leftArrow" />
        <h1 className="contactsText">Contacts</h1>
        <img src={cogwheel} alt="options" className="cogwheel" />
        <img src={photo} alt="profilePicture" className="photo" />

        <button className="addNew" onClick={utils.toggleAddContact}>
          <img src={plusSign} alt="addNew" className="plusSign" />
          <p className="addNewText">Add New</p>
        </button>
        <img src={sun} alt="sun" className="sun" />
      </div>
      <div className="contactList">
        {contactList &&
          contactList.map(({ id, name, phoneNumber, contactPicture }) => (
            <div key={id}>
              <SingleContact
                id={id}
                name={name}
                phoneNumber={phoneNumber}
                contactPicture={contactPicture}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Contacts;
