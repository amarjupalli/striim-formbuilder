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
});
