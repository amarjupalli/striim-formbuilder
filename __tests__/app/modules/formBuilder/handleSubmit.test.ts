import handleSubmit from "@/app/modules/formBuilder/handleSubmit";

const mockEvent = {
  preventDefault: jest.fn(),
  target: document.createElement("form"),
} as unknown as React.FormEvent<HTMLFormElement>;

describe("handleSubmit", () => {
  const mockEntries = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    // We can mock the FormData as we just want to test handleSubmit function
    // @ts-expect-error - not mocking all the properties of FormData
    global.FormData = jest.fn(() => ({ entries: mockEntries }));
  });

  it("should convert form data to object with single values", () => {
    mockEntries.mockReturnValue([
      ["firstName", "amar"],
      ["lastName", "jupalli"],
    ]);

    const mockEvent = {
      preventDefault: jest.fn(),
      target: document.createElement("form"),
    } as unknown as React.FormEvent<HTMLFormElement>;

    const submitted = handleSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(submitted).toEqual({ firstName: "amar", lastName: "jupalli" });
  });

  it("should convert form data to object with array values for multiple selections", () => {
    mockEntries.mockReturnValue([
      ["firstName", "amar"],
      ["languages", "javascript"],
      ["languages", "c++"],
      ["languages", "python"],
    ]);

    const submitted = handleSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(submitted).toEqual({
      firstName: "amar",
      languages: ["javascript", "c++", "python"],
    });
  });
});
