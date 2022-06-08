// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //create output variable with value of object literal
    let output = {};
    //push an 'id' property with value of first id parameter into output object
    output.id = id;
    //push a 'nameFirst' key-value pair with nameFirst parameter as it's value
    output.nameFirst = nameFirst;
    //push a 'nameLast' key value pair with nameLast parameter as it's value
    output.nameLast = nameLast;
    //return output object
    return output;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            //use for loop to iterate through contacts array
            for (let i = 0; i < contacts.length; i++) {
               //determine if contacts[i].nameFirst equals nameSplit[0] and contacts[i].nameLast equals nameSplit[1]
                if (`${contacts[i].nameFirst} ${contacts[i].nameLast}` === fullName) {
                 //if condition is true, return contacts[i];
                 return contacts[i];     
                }
            }
            //return message undefined if contacts is not found
            return undefined;           
        }, 
        removeContact: function(obj) {
            //create an index variable; use indexOf method to determine the index of the given object 
            //argument in contacts array
            //index will return Number -1 if it is not found in the contacts array,
            // otherwise it will the index of that value
            let index = contacts.indexOf(obj);
            //determine if index is equal is greater than -1 (this means this element does exist in this array)
            if (index > -1) {
            //use splice method to remove element from contacts array
            contacts.splice(index, 1);   
            }
        },
        printAllContactNames: function() {
            //create output variable with value of empty string
            let output = '';
            //use for loop to iterate over the contacts array
            for (let i = 0; i < contacts.length; i++) {
                //determine if i === contacts.length - 1
                if (i === contacts.length - 1) {
                    //push contact first and last name into ouput
                    output += (contacts[i].nameFirst + ' ' + contacts[i].nameLast);
                }
                else {
                    //otherwise, print first and last name with no new line
                    output += (contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n');
                }
            }
            return output;
        }
    }
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
