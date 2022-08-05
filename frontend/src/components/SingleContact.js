import trashCan from "../assets/trashCan.png";
import hearth from "../assets/heart.png";
import notBell from "../assets/notBell.png";
import headset from "../assets/headset.png";
import cogwheel from "../assets/cogwheel.png";

function SingleContact({ id, name, phoneNumber, contactPicture }) {
  async function handleDelete(e) {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/contacts`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      if (!response.status === 200) {
        throw new Error(`Something went wrong! Error Code: ${response.status}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="contactElement">
      <img
        src={`http://localhost:5000/${contactPicture}`}
        width="40px"
        height="40px"
        alt={name}
        className="contactElementPicture"
      />
      <div>
        <p className="contactElementName">{name}</p>
        <p className="contactElementPhoneNumber">{phoneNumber}</p>
      </div>
      <div className="buttons">
        <img src={notBell} alt="notificationOff" className="button" />
        <img src={headset} alt="call" className="button" />
        <img src={cogwheel} alt="edit" className="button" />
        <img src={hearth} alt="favorite" className="button" />
        <img
          src={trashCan}
          alt="delete"
          className="button"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

export default SingleContact;
