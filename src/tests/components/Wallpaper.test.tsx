import { render, screen } from "@testing-library/react"
import { Wallpaper } from "../../components/Wallpaper"

describe("<Wallpaper />", () => {
  it("should render link correctly", () => {
    render(<Wallpaper title="Title Wallpaper" text="Text Wallpaper" />)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })
  
  it("should render title and text correctly", () => {
    render(<Wallpaper title="Title Wallpaper" text="Text Wallpaper" />)
    
    expect(screen.getByText('Title Wallpaper')).toBeInTheDocument()
    expect(screen.getByText('Text Wallpaper')).toBeInTheDocument()
  })

  it("should render icons correctly", () => {
    render(<Wallpaper title="Title Wallpaper" text="Text Wallpaper" />)

    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})