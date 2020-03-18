import { getDriver } from "../../components/Main/Main.unit.driver";

describe("Main", () => {
  let mainDriver;

  beforeEach(() => {
    mainDriver = getDriver();
  });

  it("should get main", () => {
    const main = mainDriver.given
      .props()
      .when.created()
      .then.getMain();
    expect(main).toBe(true);
  });
});
