import "./navbar.scss"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" className="navbar-left-link">
            <span>VivConnect</span>
          </Link>
          <HomeOutlinedIcon />
          <DarkModeOutlinedIcon />
          <GridViewOutlinedIcon />

          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="right">
          <PersonOutlineOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
          <div className="user">
            <img
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Profile Picture"
            />
            <span>Vivek Goel</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
