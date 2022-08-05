import { db } from "../../connection.js";

export const contactsModel = {
  async getContacts() {
    const query = await db.query("SELECT * from contacts");
    return query;
  },
  async postContact(name, phoneNumber, emailAddress, contactPicture) {
    const query = await db.query(
      "INSERT INTO contacts (name,phoneNumber,emailAddress,contactPicture) VALUES (?,?,?,?)",
      [name, phoneNumber, emailAddress, contactPicture]
    );
  },
  async putContact(id, name, phoneNumber, emailAddress, contactPicture) {
    const query = await db.query(
      "UPDATE contacts SET name=?, phoneNumber=?, emailAddress=?, contactPicture=? WHERE id=?",
      [name, phoneNumber, emailAddress, contactPicture, id]
    );
  },
  async deleteContact(id) {
    const query = await db.query("DELETE FROM contacts WHERE id=?", [id]);
  },
};
