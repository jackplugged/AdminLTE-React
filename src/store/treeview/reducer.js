
const INITIAL_STATE = {
    menu:{
        multlevel:{
            parent: false,
            child:  false,
            grandChild: false
        }
    }
};

export default function treeview(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "OPEN_TREEVIEW_MENU":
        return {
          ...state,
          //data: action.payload.data
        };
      default:
        return state;
    }
  }
  