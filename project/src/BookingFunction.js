

export const updateTimes = (state, action) => {
    switch(action.type) {
        case "Update Times":
            return ["7 : 00 PM", "8 : 00 PM", "9 : 00 PM"];

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export function initializeTimes () {
    return [
        "5 : 00 PM", "6 : 00 PM", "7 : 00 PM", "8 : 00 PM", "9 : 00 PM", "10:00 PM"
     ];
};