import { readContacts } from "../utils/readContacts.js";
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {
    const contactList = await readContacts();
    const newContactList = Array(number).fill(0).map(createFakeContact);
    contactList.push(...newContactList);
    await writeContacts(contactList);
    console.log('Contacts successfully written to file.');
};

generateContacts(5);
