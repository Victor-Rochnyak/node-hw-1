const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");
// TODO: задокументировать каждую функцию
// Отримати всі контакти -contactsPath.getAll
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data)
  return contacts;
};

//   отримати один контакт по id
function getContactById(contactId) {
  // ...твой код
}

//Добавити контакт по name, email, phone
function addContact(name, email, phone) {
  // ...твой код
}

//Видалити контакт по id
function removeContact(contactId) {
  // ...твой код
}
module.exports = { listContacts };
