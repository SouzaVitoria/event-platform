import { render, screen } from "@testing-library/react"
import { Button } from "../../components/Button"

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button text="button-text" variant="secondary" />)

    const button = screen.getByRole('link', { name: /button\-text/i })

    expect(button).toBeInTheDocument()
  })

  it("should to have the props of the primary variant", () => {
    render(<Button text="button-text" variant="primary" />)

    const getByText = screen.getByText("button-text")
    const variantPrimaryClass = "bg-green-500"

    expect(getByText).toHaveClass(variantPrimaryClass)
  })

  it("should to have the props of the secondary variant", () => {
    render(<Button text="button-text" variant="secondary" />)

    const getByText = screen.getByText("button-text")
    const variantSecondaryClass = "border-blue-500"

    expect(getByText).toHaveClass(variantSecondaryClass)
  })
})