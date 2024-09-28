import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const constants = await readContacts();
    return constants.length;
};

console.log(await countContacts());