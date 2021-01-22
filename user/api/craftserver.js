import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://fe3e661e4d56.ngrok.io'
})


// instance.interceptors.request.use(
//     async (config) => {
//       const token = await AsyncStorage.getItem('token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (err) => {
//       return Promise.reject(err);
//     }
//   );
  
  export default instance;