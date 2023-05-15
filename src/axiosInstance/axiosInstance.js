import axios from 'axios';
import store from '../store/store';
import changeLoader from '../store/Actions/action_loader';


const axiosInstance=axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
       api_key:'ccf8c6ae815d92c29a6ef1e71002c368'
    }
})

axiosInstance.interceptors.request.use((config)=>{

    store.dispatch(changeLoader(true))
    return config;
},(error)=>{
  
    return Promise.reject(error)
});

axiosInstance.interceptors.response.use((response)=>{
    store.dispatch(changeLoader(false))
    return response;
},(error)=>{
  
    return Promise.reject(error)
});
export default axiosInstance;

