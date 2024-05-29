import { handleSubmit } from "../../features/logIn/logIn"

export default function Form() {
    <form onSubmit={() => dispatch(handleSubmit())}>
        <div className="input-wrapper">
            <label htmlFor="username">User name : </label>
            <input type="text" id="username" name="username" placeholder={userName} />
        </div>
        <div className="input-wrapper">
            <label htmlFor="firstname">First name : </label>
            <input type="text" id="firstname" disabled placeholder={firstName} />
        </div>
        <div className="input-wrapper">
            <label htmlFor="lastname">Last name : </label>
            <input type="text" id="lastname" disabled placeholder={lastName} />
        </div>
        <div className="edit-submit">
            <button className="save-button" type="submit" value="Save" />
            <button className="cancel-button" type="button" value="Cancel" onClick={() => { dispatch(toggleForm()) }} />
        </div>
    </form>
}