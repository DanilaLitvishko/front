import React, { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import IndustrieItem from '../industrie-item/industrie-item.component';
import { AddPosition, Input, Label, SaveButton, UpdateText, UploadPhotoButton, useStyles, Window } from './complete-profile.styles';
import CompleteProfileSchema from './complete-profile.validation-schema';
import DialogPopup from '../dialog/dialog.component';
import { sendUserInfo } from '../../redux/user/user.actions';
import { OptionalInformation } from '../../interfaces/optional-information.interface';
import { CompleteProfileProps } from '../../interfaces/complete-profile-props.interface';
import { CompleteProfileValues } from '../../interfaces/complete-profile-values.interface';
import { Link } from 'react-router-dom';

const CompleteProfile = ({industries, specialities} : CompleteProfileProps) => {

	const classes = useStyles();
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(null);
	const [userSpecialities, setUserSpecialities] = useState<OptionalInformation[]>([]);
	const [specialitiesForAdd, setSpecialitiesForAdd] = useState<OptionalInformation[]>(specialities);
	const [industriesForAdd, setIndustriesForAdd] = useState<OptionalInformation[]>(industries);
	const [userIndustries, setUserIndustries] = useState<OptionalInformation[]>([]);

	const [image, setImage] = useState<string>('');

	const onImageChange = (event:any) => {
		if (event.target.files && event.target.files[0]) {
			setImage(event.target.files[0].name);
		}
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
  
	const handleClose = (value:OptionalInformation | null) => {
		setOpen(false);
		if(value){
			setUserSpecialities([...userSpecialities, value]);
		}
	};
    
	const handleClearClick = (value:OptionalInformation) =>{
		const arr = userIndustries.filter((item: OptionalInformation) => item.id !== value.id);
		setUserIndustries(arr);
	};

	const {handleSubmit, handleChange, values:{name, companyName, phoneNumber}, errors, getFieldProps, isSubmitting} = useFormik({
		initialValues:{
			name: '',
			companyName: '',
			phoneNumber: '',
		},
		onSubmit: ({name, companyName, phoneNumber}: CompleteProfileValues) => {
			const data = {
				name,
				companyName,
				phoneNumber,
				specialities: userSpecialities,
				industries: userIndustries,
				image
			};
			dispatch(sendUserInfo({data}));
		},
		validationSchema: CompleteProfileSchema,
	});

	useEffect(() => {
		setSpecialitiesForAdd(specialities);
	}, [specialities]);

	useEffect(() => {
		setIndustriesForAdd(specialities);
	}, [industries]);


	useEffect(() => {
		if(specialities){
			const arr = specialities.filter((item:OptionalInformation) => 
				userSpecialities.findIndex((spec) => spec.id === item.id) < 0
			);
			setSpecialitiesForAdd(arr);
		}
	}, [userSpecialities]);

	useEffect(() => {
		if(industries){
			const arr = industries.filter((item:OptionalInformation) => 
				userIndustries.findIndex((spec) => spec.id === item.id) < 0
			);
			setIndustriesForAdd(arr);
		}
	}, [userIndustries]);
    
	return (
		<Window>
			<form onSubmit={handleSubmit} className={classes.form}>
				<UpdateText>Update  your profile</UpdateText>
				<div className={classes.mainContainer}>
					<div className={classes.leftColumn}>
						<Input
							{...getFieldProps('name')}
							id="name"
							name="name"
							type="text"
							onChange={handleChange}
							value={name}
							placeholder="Your name"
							variant="outlined"
							error={Boolean(errors.name)}
							helperText={errors.name}
						/>
						<Input
							{...getFieldProps('companyName')}
							id="companyName"
							name="companyName"
							type="text"
							onChange={handleChange}
							value={companyName}
							placeholder="Company name"
							variant="outlined"
							error={Boolean(errors.companyName)}
							helperText={errors.companyName}
						/>
						<Input
							{...getFieldProps('phoneNumber')}
							id="phoneNumber"
							name="phoneNumber"
							type="text"
							onChange={handleChange}
							value={phoneNumber}
							placeholder="Phone number"
							variant="outlined"
							error={Boolean(errors.phoneNumber)}
							helperText={errors.companyName}
						/>
						<Label>Specialities</Label>
					</div>
					<div className={classes.rightColumn}>
						{
							image?<img src={require(`../../assets/${image}`).default} className={classes.image} alt="Doesn't load"/>
								:
								<div className={classes.image}>
									<input
										accept="image/*"
										className={classes.input}
										id="raised-button-file"
										multiple
										type="file"
										onChange={onImageChange}
									/>
									<label htmlFor="raised-button-file">
										<UploadPhotoButton component="span">
                                        Upload you photo
										</UploadPhotoButton>
									</label> 
								</div>
						}
					</div>
				</div>
				{
					userSpecialities.map((specialitiy:OptionalInformation)=> (
						<Input
							key={specialitiy.id}
							type="text"
							variant="outlined"
							defaultValue={specialitiy.name}
							className={classes.root}
							InputProps={{
								readOnly: true,
							}}
						/>
					))
				}
				<AddPosition onClick={handleClickOpen}>
                    + Add position
				</AddPosition>
				<Label>Industries</Label>
				{                    
					industriesForAdd &&
                        <Autocomplete
                        	freeSolo
                        	id="autocompleteIndustries"
                        	disableClearable
                        	options={industriesForAdd.map((industrie:OptionalInformation) => industrie.name)}
                        	onChange={(event: React.ChangeEvent<{}>, newValue:string) => { 
                        		const value = industriesForAdd.find((industrie:OptionalInformation) => industrie.name===newValue);
                        		if(value){
                        			setUserIndustries([...userIndustries, value]);
                        		}
                        	}}
                        	renderInput={(params) => 
                        		<Input
                        			{...params}
                        			placeholder="Start typing..."
                        			variant="outlined"
                        			InputProps={{ ...params.InputProps, type: 'text' }}
                        		/>
                        	}
                        />
				}
				<div>
					{
						userIndustries.map((item:OptionalInformation) => 
							<IndustrieItem key={item.id} item={item} onDelete={handleClearClick}/>
						)
					}
				</div>
				<DialogPopup selectedValue={selectedValue} open={open} onClose={handleClose} specialities={specialitiesForAdd} title='Choose speciality'/>
				<SaveButton type="submit" disabled={isSubmitting}>Save</SaveButton>
			</form>
			<Link to='/profile'>Profile</Link>
			<Link to='/products'>Products</Link>
		</Window>
	);
};

export default CompleteProfile;