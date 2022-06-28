import { render, screen } from "@testing-library/react"
import { Button } from "../../components/Button"

describe("<Button />", () => {
  it("renders correctly", () => {
    render(<Button text="button-text" variant="primary" />)

    expect(screen.getByText("button-text")).toBeInTheDocument()
  })
})