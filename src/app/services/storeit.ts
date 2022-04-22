 import { Storage } from '@capacitor/storage';

   const setKey = async (key,value) => {
    await Storage.set({
      key: key,
      value: value,
    });
  };
  
  const checkKey = async (key) => {
    const { value } = await Storage.get({ key: key});
  
    console.log(`Hello ${value}!`);
  };
  
  const removeKey = async (key) => {
    await Storage.remove({ key: key });
  };
