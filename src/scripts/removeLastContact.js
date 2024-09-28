import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    const contactList = await readContacts();
    if (contactList.length) {
        contactList.pop();
        await writeContacts(contactList);
        console.log('Contact has been removed.');
    }
    else console.log('No contact to remove.');
};

removeLastContact();
