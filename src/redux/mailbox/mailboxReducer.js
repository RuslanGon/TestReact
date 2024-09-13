const INITIAL_STATE = {
    users: [],
    filter: ''
  };
  
  export const mailboxReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) { 
      case "mailbox/ADD_USER": {
        return { 
          ...state,
          users: [...state.users, action.payload]
        };
      }
      default:
        return state;
    }
  };
  