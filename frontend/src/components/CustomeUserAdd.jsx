import { useState } from "react";
import axios from 'axios';
import { styled } from "@mui/material";

const Input = styled('input')({
    border: 'none',
    borderBottom: '2px solid black',
    marginBottom: '25px',
    fontSize: '22px',
});

const Button = styled('button')({
    marginTop: '20px',
    borderRadius: '5px',
    background: 'black',
    color: 'white',
    textAlign: 'center',
    fontSize: "25px",
    height: "50px",
    cursor: "pointer"
})

const ButtonA = styled('button')({
    border: 'none',
    marginLeft: '27%',
    color: '-webkit-link',
    background: 'none',
    fontSize: '15px',
    textDecoration: 'underline',
    cursor: 'pointer'
})


const CustomUserAdd = () => {
    const [full_name, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [position, setposition] = useState('');
    const [job, setjob] = useState('');
    const [department, setdepartment] = useState('');
    const [login_signup, setloginsignup] = useState('login');

    const setdata = (e) => {
        if (e.target.id === 'full_name') {
            setfullname(e.target.value);
            console.log(full_name);
        }
        if (e.target.id === 'email') {
            setemail(e.target.value);
            console.log(email);
        }
        if (e.target.id === 'position') {
            setposition(e.target.value);
            console.log(position);
        }
        if (e.target.id === 'job') {
            setjob(e.target.value);
            console.log(job);
        }
        if (e.target.id === 'department') {
            setdepartment(e.target.value);
            console.log(department);
        }
    };

    const add_User = async (e) => {
        e.preventDefault();
        const customuserdata = {
            full_name: full_name,
            email: email,
            position: position,
            job: job,
            department: department
        }
        for (let each in customuserdata) {
            if (customuserdata[each] === '') {
                alert('Please fill out all fields!');
                return;
            }
        }
        console.log(customuserdata);

        try {
            const response = await axios.post('http://127.0.0.1:8000/app/customuseradd/', customuserdata);

            if (response.status === 200) {
                alert(response.data.message);
                window.location.reload();
            } else {
                alert(response.data.message);
            }
        }
        catch (error) {
            console.log(error);
            if (error.response && error.response.data.message) {
                alert(error.response.data.message);
            } else {
                alert(error.message);
            }
        }
    };

    const login_user = () => {

    };

    return (<>
        {login_signup === 'login' ? (
            <div>
                <h1 style={{ padding: '10px' }}>Login Custom User</h1>
                <form onSubmit={login_user} style={{ display: 'flex', flexDirection: 'column', width: '20%', padding: '5px' }}>
                    <Input placeholder="Full Name" type="text" id="full_name" required onChange={setdata} />
                    <Input placeholder="Email" type="email" id="email" required onChange={setdata} />
                    <Input placeholder="Position" type="text" id="position" required onChange={setdata} />
                    <Input placeholder="Job Title" type="text" id="job" required onChange={setdata} />
                    <Input placeholder="Department" type="text" id="department" required onChange={setdata} />
                    <ButtonA onClick={() => setloginsignup('signup')}>Sign Up</ButtonA>
                    <Button>Login</Button>
                </form>
            </div>
        ) : (
            <div>
                <h1 style={{ padding: '10px' }}>Add Custom User</h1>
                <form onSubmit={add_User} style={{ display: 'flex', flexDirection: 'column', width: '20%', padding: '5px' }}>
                    <Input placeholder="Full Name" type="text" id="full_name" required onChange={setdata} />
                    <Input placeholder="Email" type="email" id="email" required onChange={setdata} />
                    <Input placeholder="Position" type="text" id="position" required onChange={setdata} />
                    <Input placeholder="Job Title" type="text" id="job" required onChange={setdata} />
                    <Input placeholder="Department" type="text" id="department" required onChange={setdata} />
                    <ButtonA onClick={() => setloginsignup('login')}>Login</ButtonA>
                    <Button>Sign Up</Button>
                </form>
            </div>
        )}
    </>
    );
};

export default CustomUserAdd;