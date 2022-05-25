import { useState } from "react";

const RegistrationForm = () => {
	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPassword] = useState("");
	const [confirmPasswordValue, setConfirmPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleEmailChange = ({ target: { value } }) => {
		setEmailValue(value);
	};

	const handlePasswordChange = ({ target: { value } }) => {
		setPassword(value);
	};

	const handleConfirmPasswordChange = ({ target: { value } }) => {
		setConfirmPassword(value);
	};

	const handleReset = () => {
		setEmailValue("");
		setPassword("");
		setConfirmPassword("");
	};

  function handleFocus () {
    if (errorMessage) {
      setErrorMessage("")
    }
    return;
  };
    
	const handleSubmit = (evennt) => {
		evennt.preventDefault();
		setErrorMessage("");

		if (emailValue.trim().length === 0) {
			setErrorMessage("Email is a required field");
      return;
		};

		if (passwordValue.trim().length === 0) {
			setErrorMessage("Password is a required field");
			return;
		};

		if (confirmPasswordValue.trim().length === 0) {
			setErrorMessage("ConfirmPassword is a required field");
			return;
		};

    if (confirmPasswordValue !== passwordValue) {
      setErrorMessage("Passwords must match");
      return;
    };

		console.log(emailValue);
		console.log(passwordValue);
		console.log(confirmPasswordValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Email: 
				<input type="email" 
				name="email" 
				value={emailValue} 
				onChange={handleEmailChange} 
        onFocus={handleFocus}
				/>
			</label>
			<label>
				Password: 
				<input type="password" 
				name="password" 
				value={passwordValue} 
				onChange={handlePasswordChange} 
        onFocus={handleFocus}
				/>
			</label>
			<label>
        Confirm password: 
				<input type="password" 
				name="confirm-password" 
				value={confirmPasswordValue} 
        onChange={handleConfirmPasswordChange}
				onFocus={handleFocus} 
				/>
			</label>
      {errorMessage && <div className="error">{errorMessage}</div>}
			
      <div className="btn">
        <button type="submit">submit</button>
			  <button type="button" onClick={handleReset}>reset</button>
      </div>

		</form>
	)
};

export default RegistrationForm;