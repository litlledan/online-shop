import React, {useState, useEffect} from "react"; 
import "./Account.css"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { clearUser, setUser } from "../../redux/user/userSlice";
import axios from "axios";
 
function Account() { 
    const user = useSelector((state) => state.user.user)
    const token = useSelector((state) => state.user.token)

    const [userData, setUserData] = useState({
      email: user?.email,
      name: user?.name
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loGout = () => {
      dispatch(clearUser())
      navigate("/")
    }

    const handleChange = (event) => {
      const {name, value} = event.target;
      setUserData({
        ...userData,
        [name]: value,
      })
    }

    const updateUser = async (event) => {
      event.preventDefault();
      try{
        const res = await axios.put(` https://api.escuelajs.co/api/v1/users/${user.id}`, userData)

        await dispatch(setUser(res.data))

      }catch (error) {
        console.log(error)
      }
    }

    const getUserInfo = async () => {
      try {
        const res = await axios.get(" https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
              Authorization: `Bearer ${token}`
          }
      });
      dispatch(setUser(res.data))
      }catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getUserInfo()
    }, [])

  return ( 
    <section className="container"> 
      <div className="block__1"> 
        <div className="child__1"> 
          <Link to="/home">Home /</Link> 
          <span>My Account</span> 
        </div> 
        <div className="child__2"> 
          <p onClick={loGout}>Lo Gout</p> 
        </div> 
      </div> 
      <div className="block__2"> 
        <div className="desc-label"> 
          <div> 
            <h5>Manage My Account</h5> 
            <div className="option__account"> 
              <p>My Profile</p> 
              <p>Address Book</p> 
              <p>My Payment Options</p> 
            </div> 
          </div> 
          <div> 
            <h5>My Orders</h5> 
            <div className="option__account"> 
              <p>My Returns</p> 
              <p>My Cancellations</p> 
            </div> 
          </div> 
          <div> 
            <h5>My WishList</h5> 
            <div className="option__account"></div> 
          </div> 
        </div> 
          <form className="form_inputs"> 
            <h4 className="edit_account">Edit Your Profile</h4> 
            <div className="about_label"> 
              <div className="name_email"> 
                <p>First Name</p> 
                <input 
                type="text" 
                value={userData.name}
                onChange={handleChange}
                name="name" 
                placeholder="MD" /> 
                <p>Email</p> 
                <input 
                  type="email" 
                  value={user?.email}
                  name="email" 
                  placeholder="rimelll@gmail.com" 
                /> 
              </div> 
              <div className="name_address"> 
                <p>Last Name</p> 
                <input 
                type="text" 
                name="last-name" 
                value={user?.password}
                placeholder="Password" /> 
                <p>Address</p> 
                <input 
                type="text" 
                value={user?.role}
                name="address" 
                placeholder="Kingstan" /> 
              </div> 
            </div> 
            <p>Password Changes</p> 
            <input 
              type="text" 
              name="current-password" 
              placeholder="Current Password" 
            /> 
            <input 
            type="text" 
            name="new-password" 
            placeholder="New Password" /> 
            <input 
              type="text" 
              name="confirm-new-password" 
              placeholder="Confirm New Password" 
            /> 
            <div className="btn-save"> 
              <button className="cancel">Cancel</button> 
              <button onClick={() => updateUser()} className="save_change">Save Changes</button> 
            </div> 
          </form> 
      </div> 
    </section> 
  ); 
} 
 
export default Account;