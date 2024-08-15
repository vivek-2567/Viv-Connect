import { Link } from "react-router-dom"
import "./login.scss"

function Login() {
  return (
    <>
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello World.</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates dignissimos eaque sed deserunt et rem maxime, tempora
              suscipit quaerat? Temporibus quod porro reprehenderit vero.
              Asperiores dignissimos quia animi excepturi in?
            </p>
            <span>Don't have an account ?</span>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
