const INITIAL_STATE = {
  data: 
    {
      notifications: [],
      tasks: [],
      messages: []
    },
  loading: false,
  error: false
};

export default function notifications(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SUCCESS_NOTIFICATIONS":
      return {
        ...state,
        data: action.payload.data,
        loading: true,
        error: false
      };
    case "FALILURE_NOTIFICATIONS":
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}
