// export default function validateForm({ name, email, password }) {
// 	if (!name.trim()) {
// 		return 'Username required';
// 	}
// 	const regex =
// 		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	if (!email) {
// 		return 'Email required';
// 	} else if (regex.test(email.toLocalLowerCase)) {
// 		return 'Email address is invalid';
// 	}
// 	if (!password) {
// 		return 'Password is required';
// 	} else if (password.length < 6) {
// 		return 'Password needs to be 6 characters or more';
// 	}

// 	return null;
// }