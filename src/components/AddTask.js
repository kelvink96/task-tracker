import {useState} from "react";

const AddTask = ({onAdd}) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (evt) => {
		evt.preventDefault();

		if (!text){
			alert('Please add a task');
			return;
		}

		onAdd({text, day, reminder});

		setText('');
		setDay('');
		setReminder(false);
	}

	return (
		<form action="" className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label htmlFor="">Task</label>
				<input type="text" placeholder="Add task" value={text} onChange={(evt) => {
					setText(evt.target.value)
				}}/>
			</div>
			<div className="form-control">
				<label htmlFor="">Day & Time</label>
				<input type="date" placeholder="Add day & time" value={day} onChange={(evt) => {
					setDay(evt.target.value)
				}}/>
			</div>
			<div className="form-control form-control-check">
				<label htmlFor="">Set Reminder</label>
				<input type="checkbox" checked={reminder} value={reminder} onChange={(evt) => {
					setReminder(evt.currentTarget.checked)
				}}/>
			</div>

			<input type="submit" value="Save Task" className="btn btn-block"/>
		</form>
	)
};

export default AddTask;
