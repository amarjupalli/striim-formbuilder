import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FormBuilder from "@/app/modules/formBuilder/FormBuilder";
import formData from "@/app/modules/formBuilder/formData";
import handleSubmit from "@/app/modules/formBuilder/actions";

jest.mock("../../../../src/app/modules/formBuilder/handleSubmit");

describe("FormBuilder", () => {
  it("renders the FormBuilder", () => {
    const { container } = render(<FormBuilder formData={formData} />);
    expect(container).toMatchSnapshot();
  });

  it("should render text inputs and labels", () => {
    render(<FormBuilder formData={formData} />);
    expect(screen.getByText(/first name/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /first name/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/last name/i)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /last name/i }),
    ).toBeInTheDocument();
  });

  it("should render a submit and reset button", () => {
    render(
      <FormBuilder
        formData={{
          fields: [{ type: "text", name: "testInput", label: "Test input" }],
        }}
      />,
    );
    const submitButton = screen.getByRole("button", { name: /submit/i });
    const resetButton = screen.getByRole("button", { name: /reset/i });
    expect(submitButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  describe("radio buttons and checkboxes", () => {
    it("should render radio buttons and labels", () => {
      const { container } = render(<FormBuilder formData={formData} />);
      expect(
        screen.getByText("Are you a Software Engineer?"),
      ).toBeInTheDocument();

      expect(screen.getByText("yes")).toBeInTheDocument();
      expect(
        container.querySelector("#isSoftwareEngineer-yes"),
      ).toBeInTheDocument();

      expect(screen.getByText("no")).toBeInTheDocument();
      expect(
        container.querySelector("#isSoftwareEngineer-no"),
      ).toBeInTheDocument();
    });

    it("should render check boxes and labels", () => {
      const { container } = render(<FormBuilder formData={formData} />);
      expect(
        screen.getByText(/select your area of interests/i),
      ).toBeInTheDocument();

      expect(screen.getByText("Backend")).toBeInTheDocument();
      expect(
        container.querySelector("#interestedIn-Backend"),
      ).toBeInTheDocument();

      expect(screen.getByText("Frontend")).toBeInTheDocument();
      expect(
        container.querySelector("#interestedIn-Frontend"),
      ).toBeInTheDocument();
    });
  });

  it("should render select boxes, listboxes and their title", () => {
    render(<FormBuilder formData={formData} />);

    // assert for multiSelect aka ListBox
    expect(
      screen.getByText("Which languages are you proficient in?"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("listbox", {
        name: "Which languages are you proficient in?",
      }),
    ).toBeInTheDocument();

    // assert for another multiSelect aka ListBox
    expect(
      screen.getByText("When can you come to our office in Palo Alto?"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("listbox", {
        name: "When can you come to our office in Palo Alto?",
      }),
    ).toBeInTheDocument();

    // assert for regular select dropdown
    expect(
      screen.getByText("What's your favorite operating system to code on?"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("combobox", {
        name: "What's your favorite operating system to code on?",
      }),
    ).toBeInTheDocument();
  });
});
