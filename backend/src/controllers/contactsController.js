import { contactsService } from "../services/contactsService.js";

export const contactsController = {
  async get(req, res) {
    try {
      const data = await contactsService.getContacts();
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async post(req, res) {
    try {
      const data = await contactsService.postContact(
        req.body.name,
        req.body.phoneNumber,
        req.body.emailAddress,
        req.body.contactPicture
      );
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async put(req, res) {
    try {
      const data = await contactsService.putContact(
        req.body.id,
        req.body.name,
        req.body.phoneNumber,
        req.body.emailAddress,
        req.body.contactPicture
      );
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async delete(req, res) {
    try {
      const data = await contactsService.deleteContact(req.body.id);
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
