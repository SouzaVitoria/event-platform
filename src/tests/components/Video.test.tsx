import { render, screen } from "@testing-library/react"
import { Video } from "../../components/Video"
// import { DefaultUi, Player, Youtube } from "@vime/react";
// import { Button } from "../../components/Button";
// import { Wallpaper } from "../../components/Wallpaper";

const lessonSlug = "Lesson Slug Test"

jest.mock("../../graphql/generated", () => {
  return {
    useGetLessonBySlugQuery() {
      return {
        variables: {
          slug: lessonSlug
        }
      }
    }
  }
})

describe("<Video />", () => {
  // it("should render correctly", () => {
  //   render(<Video lessonSlug={lessonSlug} />)
  //   screen.logTestingPlaygroundURL()
  // })

  it("should get lesson by slug query", () => {
    const { debug } = render(<Video lessonSlug={lessonSlug} />)
    debug()
  })
})