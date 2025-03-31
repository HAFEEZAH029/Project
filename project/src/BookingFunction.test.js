import { initializeTimes, updateTimes } from "./BookingFunction";
import { fetchAPI } from "./api";

jest.mock( './api', () => ({
    fetchAPI: jest.fn(),
})
);

describe ("test to verify the two functions update available times", () => {
    beforeEach( () => {
        jest.clearAllMocks();
    });

    test("initialize should provide available times for today's date", () => {
        const mockTimes = ['5:00', '5:30', '6:00', '6:30'];
        fetchAPI.mockReturnValue(mockTimes);

        const result = initializeTimes();
        const today = new Date ();

        expect(fetchAPI).toHaveBeenCalledTimes(1);
        expect(fetchAPI).toHaveBeenCalledWith(today);
        expect(result).toEqual(mockTimes);
    });

    test("update should provide available times based on the user-selected date", () => {
        const mockTimes = ['5:00', '5:30', '6:00', '6:30'];
        fetchAPI.mockReturnValue(mockTimes);

        const action = {type: 'dateChanged', date: '2025-04-02' }
        const result = updateTimes( [], action);

        expect(fetchAPI).toHaveBeenCalledTimes(1);
        expect(fetchAPI).toHaveBeenCalledWith(new Date('2025-04-02'));
        expect(result).toEqual(mockTimes);
    });

    test("updateTimes should return the same state for unknown actions", () => {
        const initialState =['7:00', '7:30', '8:00', '8:30', '9:00'];
        const action = {type: 'unknownAction'};

        const result = updateTimes(initialState, action);

        expect(result).toEqual(initialState);
        expect(fetchAPI).not.toHaveBeenCalled();
    });


});