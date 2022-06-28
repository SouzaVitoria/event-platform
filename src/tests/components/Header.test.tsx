import { render } from "@testing-library/react"
import { Header } from "../../components/Header"
import { Logo } from "../../components/Logo"

describe("<Header />", () => {
  it("should render correctly Header", () => {
    render(<Header />)
    expect(document.querySelector("header")).toBeInTheDocument()
  })

  it("should render correctly Logo", () => {
    render(<Logo />)
    expect(document.querySelector("svg")).toBeInTheDocument()
  })
})