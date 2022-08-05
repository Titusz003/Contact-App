import { contactsModel } from "../models/ContactsModel.js";

export const contactsService = {
  async getContacts() {
    return contactsModel.getContacts();
  },
  async postContact(name, phoneNumber, emailAddress, contactPicture) {
    contactsModel.postContact(name, phoneNumber, emailAddress, contactPicture);
    return "New contact added!";
  },
  async putContact(id, name, phoneNumber, emailAddress, contactPicture) {
    contactsModel.putContact(
      id,
      name,
      phoneNumber,
      emailAddress,
      contactPicture
    );
    return "Contact changed!";
  },
  async deleteContact(id) {
    contactsModel.deleteContact(id);
    return "Contact deleted!";
  },
};
