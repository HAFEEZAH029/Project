   import { fetchAPI } from "./api";

export const updateTimes = (state, action) => {
    switch(action.type) {
        case "dateChanged":
            return fetchAPI(new Date(action.date));

        default:  return state;
    }
};

export function initializeTimes () {
   const today = new Date();
   return fetchAPI(today);
};