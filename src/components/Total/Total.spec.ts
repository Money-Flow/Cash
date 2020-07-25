import { createTotalDriver } from "./Total.unit.driver";
describe("Total", () => {
  let totalDriver: any;

  beforeEach(() => {
    totalDriver = createTotalDriver();
  });

  it("should not show anything when there are no elements", () => {
    const total = totalDriver.given.props().when.created().then.getTotal();
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
