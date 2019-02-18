import { APP_LOAD, SEARCH_ORIGIN, SEARCH_DESTINATION } from "../constants/actionTypes";

const defaultState = {
    appName: "Cogoport",
    appLoaded: false,
    search_origin: "",
    search_destination: ""
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                appLoaded: true
            };
        case SEARCH_ORIGIN:
            return {
                ...state,
                search_origin: action.search_origin
            };
        case SEARCH_DESTINATION:
            return {
                ...state,
                search_destination: action.search_destination
            };
        default:
            return state;
    }
};
