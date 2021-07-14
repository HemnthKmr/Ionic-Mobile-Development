import { Contacts } from '@capacitor-community/contacts';
import { isPlatform } from '@ionic/react';
let contactData = [];


 const GetContacts = async () => {
    if(isPlatform('android')){
        let permission = await Contacts.getPermissions();
        if(!permission.granted){
            return
        }
    }
    
    let result = await Contacts.getContacts();
    
    for(let element of result.contacts)
      {
          if(element.phoneNumbers.length > 0)
          {
            contactData.push(element);
          }
      }  
}

export {contactData, GetContacts};




