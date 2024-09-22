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
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import WbSunnyOutlined from "@mui/icons-material/WbSunnyOutlined"
import { AuthContext } from "../../context/authContext"

function Navbar() {
	const { darkMode, toggle } = useContext(DarkModeContext)
	const { currentUser } = useContext(AuthContext)

	return (
		<>
			<div className="navbar">
				<div className="left">
					<Link to="/" className="navbar-left-link">
						<span>VivConnect</span>
					</Link>
					<HomeOutlinedIcon />
					{darkMode ? (
						<WbSunnyOutlined onClick={toggle} />
					) : (
						<DarkModeOutlinedIcon onClick={toggle} />
					)}
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
							src={currentUser.profilePic}
							alt="Profile Picture"
						/>
						<span>{currentUser.name}</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
