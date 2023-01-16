const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const contactsPath = path.join(__dirname, "./db/contacts.json");
// TODO: задокументировать каждую функцию
// Отримати всі контакти -contactsPath.getAll
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

//   отримати один контакт по id
const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.Id === contactId);
  if (!result) {
    return null;
  }
  name, email, phone;
  return result;
};

//Добавити контакт по name, email, phone
const addContact = async (name, email, phone) => {
  // add ={name,email,phone}
  const contacts = await listContacts();
  // const newContact = { ...add, id: v4() };
  contacts.push({ id: v4(), name: name, email: email, phone: phone });
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
};

//Видалити контакт по id
function removeContact(contactId) {
  // ...твой код
}
module.exports = { listContacts, getContactById, addContact, removeContact };
