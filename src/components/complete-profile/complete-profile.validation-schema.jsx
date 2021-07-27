import * as Yup from 'yup';

const CompleteProfileSchema = Yup.object().shape({
	name: Yup.string()
		.min(1, 'Too Short!')
		.max(20, 'Too Long!')
		.required('Required'),
	companyName: Yup.string()
		.min(1, 'Too Short!')
		.max(20, 'Too Long!')
		.required('Required'),
	phoneNumber: Yup.string()
		.min(8, 'Too Short!')
		.required('Required'),
});

export default CompleteProfileSchema;