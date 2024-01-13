import { useState } from "react";

export default function Form() {
    let [formData, setformData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        // setformData((currData) => {
        //     currData[fieldName] = newValue;
        //     return { ...currData };
        // });
        setformData((currData) => {
            return { ...currData, [fieldName]: newValue };
        });

    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setformData({
            fullName: "",
            userName: "",
            password: "",
        });
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">FullName</label><br />
            <input type="text" placeholder="Enter Full Name" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" />
            <br /><br />
            <label htmlFor="userName"> UserName</label><br />
            <input type="text" placeholder="Enter Full Name" value={formData.userName} onChange={handleInputChange} id="userName" name="userName" />
            {/* name attribute of form should be equal to state Variable name */}
            <br /><br />

            <label htmlFor="password"> Password</label><br />
            <input type="password" placeholder="Enter password" value={formData.password} onChange={handleInputChange} id="password" name="password" />
            <br />
            <br />
            <button>Submit</button>

        </form>
    );

}