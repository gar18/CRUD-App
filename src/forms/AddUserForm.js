import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", Completed: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.Completed) return;

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Completed</label>
      <input
        type="text"
        name="Completed"
        value={user.Completed}
        onChange={handleInputChange}
      />
      <button>Add New Project</button>
    </form>
  );
};

export default AddUserForm;
