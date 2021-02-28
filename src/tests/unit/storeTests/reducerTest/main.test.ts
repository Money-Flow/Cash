import { main } from "../../../../store/reducers/main";
import { ADD_OPERATION, DELETE_OPERATION } from "../../../../store/constants";

describe("reducer", () => {
  describe("main", () => {
    const data = {
      amount: 920,
      notes: "Lorem ipsum",
      id: "dbf04612-6984-4cdd-adc4-27b4a8700dff",
    };
    const initialState = { operationDataList: [data] };

    it("should handle initial state", () => {
      expect(main(undefined, { payload: {}, type: "" })).toEqual({
        operationDataList: [],
      });
    });

    it("should handle ADD_OPERATION", () => {
      expect(
        main(undefined, {
          type: ADD_OPERATION,
          payload: {
            data,
          },
        })
      ).toEqual({
        operationDataList: [data],
      });

      const newData = {
        amount: 5,
        notes: "Cash Flow",
        id: "4cdd-adc4-27b4a8700dff-dbf04612-6984",
      };
      expect(
        main(initialState, {
          type: ADD_OPERATION,
          payload: {
            data: newData,
          },
        })
      ).toEqual({
        operationDataList: [data, newData],
      });
    });
    it("should handle DELETE_OPERATION", () => {
      expect(
        main(initialState, {
          type: DELETE_OPERATION,
          payload: { id: "dbf04612-6984-4cdd-adc4-27b4a8700dff" },
        })
      ).toEqual({
        operationDataList: [],
      });
      expect(
        main(initialState, {
          type: DELETE_OPERATION,
          payload: { id: "" },
        })
      ).toEqual({
        operationDataList: [data],
      });
    });
  });
});
