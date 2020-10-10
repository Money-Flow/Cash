import createTotalDriver from "./Total.spec.driver";
import { TotalDriverSpecTypes } from "../../types/driverTypes/TotalDriverTypes";

describe("Total", () => {
  let totalDriver: TotalDriverSpecTypes;

  beforeEach(() => {
    totalDriver = createTotalDriver();
  });

  it("should not show anything when there are no elements", () => {
    const total = totalDriver.when.created().then.getTotal();
    expect(total).toBe(null);
  });

  it("should get the amount when we get 2 items", () => {
    const total = totalDriver.given
      .amountList([10, 40])
      .when.created()
      .then.getTotal();
    expect(total).toBe(50);
  });
});
