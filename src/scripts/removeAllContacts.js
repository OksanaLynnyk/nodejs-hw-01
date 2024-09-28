import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    const contactList = await readContacts();
    if (contactList.length) {
        await writeContacts([]);
        console.log('All contacts have been removed.');
    }
    else console.log('No contacts to remove.');
};

removeAllContacts();