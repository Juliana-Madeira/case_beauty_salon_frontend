const INITIAL_STATE = {
    appointments: [],
}

function appointment(state = INITIAL_STATE, action){
    switch(action.type){
        case '@appointment/ALL': {
            //bloco de codigo
            break
        }
        default: 
            return state;
    }
}

export default appointment;