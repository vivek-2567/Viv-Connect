import { Posts } from "../../components/posts/posts"
import { Stories } from "../../components/stories/stories"
import "./home.scss"

function Home() {
  return (
    <>
      <div className="home">
        <Stories />
        <Posts />
      </div>
    </>
  )
}

export default Home
