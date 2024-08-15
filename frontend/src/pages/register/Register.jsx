import { Link } from "react-router-dom"
import "./register.scss"

function Register() {
  return (
    <>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Name" />
              <input type="password" placeholder="Password" />
              <button>Register</button>
            </form>
          </div>
          <div className="right">
            <h1>Viv Connect</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates dignissimos eaque sed deserunt et rem maxime, tempora
              suscipit quaerat? Temporibus quod porro reprehenderit vero.
              Asperiores dignissimos quia animi excepturi in?
            </p>
            <span>Do you have an account ?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
