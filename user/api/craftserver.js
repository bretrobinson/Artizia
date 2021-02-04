import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
<<<<<<< HEAD
    baseURL: 'http://00bfabb43d02.ngrok.io',
   
})
=======
    baseURL: 'http://65304143c1d6.ngrok.io',
   })
>>>>>>> 78744d62e85dba25613b577e8f8f4520f55bcc47

instance.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  
  
  export default instance;