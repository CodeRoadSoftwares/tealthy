import { useRef } from "react";

const SignUp = () => {
    const formRef = useRef(null);
    function handleFormSubmit(e){
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const formValues = Object.fromEntries(formData.entries());
        if(validateInputFields(formValues)){
            //when inputs are valid, check for username availabilty
            checkUserExists(formValues);
            // console.log("user exists: ", userExists);
        }
    }

    function validateInputFields(formValues){
        if(checkEmptyInputs(formValues)){
            alert("One or more input is empty")
            return false;
        }
        if(formValues?.phone.length > 10){
            alert("Invalid number")
            return false;
        }
        if(formValues?.password != formValues?.confirmpassword){
            alert("passwords dont match")
            return false;
        }
        return true;
    }

    function checkEmptyInputs(formValues){
        const hasEmptyValue = Object.values(formValues).some(value => {
            if (typeof value === 'string') {
              return value.length === 0;
            }
            return false;
        });
        return hasEmptyValue;
    }

    function checkUserExists(formValues){
        console.log(formValues);
        const fetchPromise = fetch('http://localhost:3000/user/api/v1/checkuser', {
            headers: {
                username: formValues.username,
                email: formValues.email
            },
            method: "POST"
        }) 
        
        fetchPromise.then(response => {
            console.log("first promise")
            return response.json();
        }).then(data => {
            console.log("second promise")
            console.log("api result: ", data);
        });
    }

    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-1/5 h-max">
                <form ref={formRef} id="signup-form" onSubmit={handleFormSubmit}>
                    <div className="my-4 flex flex-col w-[100%] gap-2 [&>input]:border rounded-md [&>label]:font-medium">
                        <label>Name</label>
                        <input name="firstname" type="text" placeholder="John Doe" className="pl-1 placeholder:pl-2 py-1">
                        </input>
                        <label>Email</label>
                        <input name="email" type="email" placeholder="johndoe@gmail.com" className="pl-1 placeholder:pl-2 py-1">
                        </input>
                        <label>Phone</label>
                        <input name="phone" type="tel" placeholder="+91XXXXXXXXXX" className="pl-1 placeholder:pl-2 py-1">
                        </input>
                        <label>Address</label>
                        <input name= "address" type="text" placeholder="Jane Street" className="pl-1 placeholder:pl-2 py-1">
                        </input>
                        <label>Username</label>
                        <input name="username" type="text" placeholder="Create a username" className="pl-1 placeholder:pl-2 py-1">
                        </input>
                        <label>Password</label>
                        <input name="password" type="password" placeholder="Create your password" className="pl-1 placeholder:pl-2 py-1">
                        </input>
                        <label>Confirm Password</label>
                        <input name="confirmpassword" type="password" placeholder="Enter your password again" className="pl-1 placeholder:pl-2 py-1">
                        </input>
                    </div>
                    <button className="w-[100%] rounded-md bg-text text-background py-2 mb-4">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;