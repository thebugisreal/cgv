import { USR_LOGIN, TOGGLE_NAV_MENU } from '../constants/userTypes';

const initialState = {
  navMenu: false,
  isLogin: false,
  errorMessage: '',
  user: [
    {
      id: 1,
      userName: 'admin',
      password: 'admin'
    }
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case TOGGLE_NAV_MENU:
      return {
        ...state,
        navMenu: !state.navMenu
      }
    case USR_LOGIN:
      const userList = state.user;
      const data = action.payload;
      const checkUserName = userList.filter(item => {
        return (item.userName === data.userName);
      })
      const checkPassword = userList.filter(item => {
        return (item.password === data.password);
      })
      if(checkUserName.length === 0 || checkPassword.length === 0) {
        return {
          ...state,
          errorMessage: 'Invalid user name or password.'
        }
      } 
      if(checkUserName.length !== 0 && checkPassword.length !== 0) {
        return {
          ...state,
          isLogin: true,
          navMenu: false
        }
      }
    break;
    default: 
      return state
  }
}