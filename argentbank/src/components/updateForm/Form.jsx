import { useDispatch, useSelector } from "react-redux"
import './_index.scss'
import { selectUserData } from "../../store/selectors"
import { useState } from "react"
import { updateUserName } from "../../store/slices/userSlice"

export default function Form({ toggle }) {
    const dispatch = useDispatch()
    const user = useSelector(selectUserData)
    const [newUserName, setNewUserName] = useState(user.userName);

    async function handleSubmit(e) {
        e.preventDefault()
        const resultAction = await dispatch(updateUserName({ userName: newUserName }));
        if (updateUserName.fulfilled.match(resultAction)) {
            //toggle switches between the default display and the form display
            toggle();
        }
        else {
            alert(resultAction.payload || 'Failed to update username');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
                <label htmlFor="username">User name : </label>
                <input onChange={(e) => setNewUserName(e.target.value.trim())} type="text" id="username" name="username" placeholder={user.userName} />
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
                <button className="cancel-button" type="button" onClick={() => toggle()}>Cancel</button>
            </div>
        </form>
    )
}