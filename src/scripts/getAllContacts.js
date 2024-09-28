import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    const contactList = await readContacts();
    if (!contactList.length) {
        return 'No contacts';   
    }
    return contactList;
};

console.log(await getAllContacts());
