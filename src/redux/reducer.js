var initialState = {
    user: '',
    profileInfo: {
        id: '',
        description: '',
        profile_image: '',
        website: '',
        instagram:'',
        facebook:''
    },
    password:'',
    username:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    city:'',
    state:'',
    zip:'',
    country:'',
    categories: ''
}

const FETCH_USER_DATA = 'FETCH_USER_DATA'
const FETCH_PROFILE_DATA = 'FETCH_PROFILE_DATA'
const UPDATE_PROFILE_DATA = 'UPDATE_PROFILE_DATA'
const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
const USERNAME = 'USERNAME'
const PASSWORD = 'PASSWORD'
const FIRST_NAME = 'FIRST_NAME'
const LAST_NAME = 'LAST_NAME'
const EMAIL = 'EMAIL'
const PHONE = 'PHONE'
const CITY = 'CITY'
const STATE = 'STATE'
const ZIP = 'ZIP'
const COUNTRY = 'COUNTRY'




export default function(state=initialState, action){
    switch(action.type){
        case FETCH_USER_DATA:
    
            return {...state, user: action.payload};
        case FETCH_CATEGORIES:

            return {...state, categories: action.payload};

        case FETCH_PROFILE_DATA: 
        
            return {...state, profileInfo: action.payload};

        case USERNAME:

            return {...state, username: action.payload}

        case PASSWORD:

            return {...state, password: action.payload}

        case FIRST_NAME:

            return {...state, firstName: action.payload}

        case LAST_NAME:

            return {...state, lastName: action.payload}
        case EMAIL:

            return {...state, email: action.payload}

        case PHONE:

            return {...state, phone: action.payload}
        case CITY:

            return {...state, city: action.payload}

        case STATE:

            return {...state, state: action.payload}
        case ZIP:

            return {...state, zip: action.payload}

        case COUNTRY:

            return {...state, country: action.payload}
            
        default:

            return state;
    }
}

//function to populate user account with user data
export function fetchUserData(user){
    return {
        type: FETCH_USER_DATA,
        payload: user
    }
}

export function fetchProfileInfo(profile){
    return {
        type: FETCH_PROFILE_DATA,
        payload: profile
    }
}

export function fetchCategories(categories){
    return {
        type: FETCH_CATEGORIES,
        payload: categories
    }
}

//enter username
export function enterUserName(username){
    return {
        type: USERNAME,
        payload: username
    }
}

//enter password
export function enterPassword(password){
    return {
        type: PASSWORD,
        payload: password
    }
}

//enter password
export function enterFirstName(first){
    return {
        type: FIRST_NAME,
        payload: first
    }
}
//enter password
export function enterLastName(last){
    return {
        type: LAST_NAME,
        payload: last
    }
}
//enter password
export function enterEmail(email){
    return {
        type: EMAIL,
        payload: email
    }
}

//enter phone
export function enterPhone(phone){
    return {
        type: PHONE,
        payload: phone
    }
}
//enter password
export function enterCity(city){
    return {
        type: CITY,
        payload: city
    }
}

//enter password
export function enterState(state){
    return {
        type: STATE,
        payload: state
    }
}
//enter password
export function enterZip(zip){
    return {
        type: ZIP,
        payload: zip
    }
}

export function enterCountry(country){
    return {
        type: COUNTRY,
        payload: country
    }
}