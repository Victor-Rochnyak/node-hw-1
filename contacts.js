const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию

// Отримати всі контакти
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

//   отримати один контакт по id
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === contactId);
  if (!result) {
    return null;
  }
  return result;
};

//Добавити контакт по name, email, phone
const addContact = async (name, email, phone) => {
  const addContacts = { name, email, phone };
  const contacts = await listContacts();
  const newContact = { ...addContacts, id: v4() };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
};

//Видалити контакт по id
const removeContact = async (contactId) => {
  const contacts = await listContacts();
  //варіант 1
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [deleteContact] = contacts.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return deleteContact;
  //варіант 2
  // const idx = contacts.findIndex((contact) => contact.id === contactId);
  // if (idx === -1) {
  //   return null;
  // }
  // const newContacts = contacts.filter((_, index) => index !== idx);
  // await fs.writeFile(contactsPath, JSON.stringify(contacts));
  // return contacts[idx];
};
module.exports = { listContacts, getContactById, addContact, removeContact };
