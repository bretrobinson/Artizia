import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
<<<<<<< HEAD
    baseURL: 'http://073525f85744.ngrok.io',
=======
    baseURL: 'http://4ff181127b2f.ngrok.io',
>>>>>>> 7ceae87c97a2b71f3d82885e3de9df44d7ef17ae
   })

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