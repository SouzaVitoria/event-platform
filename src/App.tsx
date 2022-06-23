import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      slug
      title
      teacher {
        name
        bio
        avatarURL
      }
    }
 }
`

function App() {

  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY
    }).then(response => console.log(response.data))
  }, [])

  return (
    <div>
      <h1 className="title">Initial</h1>
    </div>
  )
}

export default App