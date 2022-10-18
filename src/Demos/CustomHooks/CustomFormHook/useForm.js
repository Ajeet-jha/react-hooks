import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			callback();
		}
	}, [errors]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChange = (event) => {
		event.persist(); // https://www.folkstalk.com/2022/09/event-persist-with-code-examples.html
		setValues((_values) => ({
			..._values,
			[event.target.name]: event.target.value,
		}));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useForm;
