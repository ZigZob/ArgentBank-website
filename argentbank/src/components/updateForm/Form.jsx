import { useDispatch, useSelector } from "react-redux"
import './_index.scss'
import { selectUserData } from "../../selectors"
import { useState } from "react"
import { updateUserName } from "../../store/slices/userSlice"

export default function Form({ isHeaderHidden, toggle }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)
    const [newUserName, setNewUserName] = useState(user.userName);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUserName({ userName: newUserName }));
        toggle();
    }

    return (
        <form className={isHeaderHidden === false ? "hidden" : ""} onSubmit={handleSubmit}>
            <div className="inputWrapper">
                <label htmlFor="username">User name : </label>
                <input onChange={(e) => { setNewUserName(e.target.value.trim()); console.log(e.target.value); }} type="text" id="username" name="username" placeholder={user.userName} />
            </div>
            <div className="inputWrapper">
                <label htmlFor="firstname">First name : </label>
                <input type="text" id="firstname" disabled placeholder={user.firstName} />
            </div>
            <div className="inputWrapper">
                <label htmlFor="lastname">Last name : </label>
                <input type="text" id="lastname" disabled placeholder={user.lastName} />
            </div>
            <div className="buttonWrapper">
                <button className="save-button" type="submit" >Save</button>
                <button className="cancel-button" type="button" onClick={() => { toggle(); setNewUserName(user.userName) }}>Cancel</button>
            </div>
        </form>
    )
}