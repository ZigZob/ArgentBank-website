import { handleSubmit } from "../../features/logIn/logIn"
import './_index.scss'

export default function Form() {
    return (
        <>
            <h1>Edit user info</h1>
            <form onSubmit={() => dispatch(handleSubmit())}>
                <div className="inputWrapper">
                    <label htmlFor="username">User name : </label>
                    <input type="text" id="username" name="username" placeholder="bobby" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="firstname">First name : </label>
                    <input type="text" id="firstname" disabled placeholder="ross" />
                </div>
                <div className="inputWrapper">
                    <label htmlFor="lastname">Last name : </label>
                    <input type="text" id="lastname" disabled placeholder="ross" />
                </div>
                <div className="buttonWrapper">
                    <button className="save-button" type="submit" >Save</button>
                    <button className="cancel-button" type="button" onClick={() => { dispatch(toggleForm()) }}>Cancel</button>
                </div>
            </form>
        </>
    )
}