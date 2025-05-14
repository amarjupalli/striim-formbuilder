import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormBuilder from "@/app/modules/formBuilder/FormBuilder";
import formData from "@/app/modules/formBuilder/formData";

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

  it("should render a submit button", () => {
    render(<FormBuilder formData={formData} />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("should render checkbox and labels", () => {
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
