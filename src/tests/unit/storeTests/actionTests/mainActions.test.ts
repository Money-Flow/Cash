import { addOperation, deleteOperation } from "store/actions/mainActions";
import { ADD_OPERATION, DELETE_OPERATION } from "store/constants";

describe("mainActions", () => {
  it("addOperation should create ADD_OPERATION action", () => {
    const data = {
      amount: 920,
      notes: "Lorem ipsum",
      id: "dbf04612-6984-4cdd-adc4-27b4a8700dff",
    };
    expect(addOperation(data)).toEqual({
      type: ADD_OPERATION,
      payload: { data },
    });
  });

  it("deleteOperation should create DELETE_OPERATION action", () => {
    expect(deleteOperation("420")).toEqual({
      type: DELETE_OPERATION,
      payload: { id: "420" },
    });
  });
});
