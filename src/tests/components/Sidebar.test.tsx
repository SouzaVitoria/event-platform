import { ApolloProvider } from "@apollo/client"
import { render, screen } from "@testing-library/react"
import { Sidebar } from "../../components/Sidebar"
import { client } from "../../lib/apollo"


describe("<Sidebar />", () => {
  it("should render correctly", () => {
    render(
      <ApolloProvider client={client}>
        <Sidebar />
      </ApolloProvider>
    )
    screen.logTestingPlaygroundURL()
  })
})