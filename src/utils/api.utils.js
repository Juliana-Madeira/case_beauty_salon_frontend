import axios from 'axios';

class Api {
    constructor(){
        this.api = axios.create({
            baseURL:'http//localhost:8000'
        })

        this.api.interceptors.request.use((config) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers = {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
                return config;
            }, 
            (error) => console.log(error)
        
        );


        this.api.interceptors.response.use((response) => response , 
        (error) => {
            if(error.response.status === 401){
                localStorage.removeItem('token')
                window.location = '/'
            }
            throw error
        })
    }
    

    //login
    login = async (payload) => {
        try {
            const { data } = await this.api.post('/login', payload);
            const { token } = data;
            const id = data.payload.id;

            localStorage.setItem('token', token);
            localStorage.setItem('id', id);

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }


    //register - signup
    signup = async(signupInfo) => {
        try {
            const { data } = await this.api.post('/signup', signupInfo);
            return data;
        } catch (error) {
            throw new Error(error)
        }
    }

    //get all hairdressers
    getAllHairdressers = async () => {
        try {
          const { data } = await this.api.get('/hairdresser');
          return data;
        } catch (error) {
          console.error(error);
        }
      }


    //get one hairdresser
    getOneHairdresser = async (id) => {
        try {
          const { data } = await this.api.get(`/hairdresser/${id}`)
          return data;
        } catch (error) {
            console.error(error);
        }
      }


    //get all salons
    getAllSalons = async () => {
        try {
            const { data } = await this.api.get('/salons');
            return data;
        } catch (error) {
            console.error(error);
            
        }
    }

    //get one salon
    getOneSalon = async (id) => {
        try {
            const { data } = await this.api.get(`/salons/${id}`);
            return data;
        } catch (error) {
            console.error(error);
            
        }
    }

    //get all appointments
    getAllAppointments = async () => {
        try {
            const { data } = await this.api.get('/appointments');
            return data;
        } catch (error) {
            console.error(error);
            
        }
    }

    //get one appointment
    getOneAppointment = async (id) => {
        try {
            const {data } = await this.api.get(`/appointments/${id}`);
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    //add appointment
    addAppointment = async (payload) => {
        try {
            await this.api.post('/appointment', payload);
        } catch (error) {
            console.error(error);
        }
    }

}

export default new Api();