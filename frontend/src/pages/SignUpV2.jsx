import { useFormik } from "formik"
import { validate, FormError } from "../helpers/signuphelper"

const SignUpV2 = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            username: '',
            phone: '',
            password: '',
            confirmpassword: '',
            address: ''
    },
    validate,
    onSubmit: values => {
        console.log(values)
    },
    });
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-1/5 h-max">
                <form onSubmit={formik.handleSubmit}>
                    <div className="my-4 flex flex-col w-[100%] gap-2 [&>input]:border rounded-md [&>label]:font-medium">
                        <label>Name</label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            placeholder="John Doe" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.errors.name ? <FormError errorMessage={formik.errors.name}/> : null}
                        <label>Email</label>
                        <input
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="johndoe@gmail.com" 
                            className="pl-1 placeholder:pl-2 py-1" 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ? <FormError errorMessage={formik.errors.email}/> : null}    
                        <label>Phone</label>
                        <input 
                            id="phone"
                            name="phone" 
                            type="tel" 
                            placeholder="+91XXXXXXXXXX" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.errors.phone ? <FormError errorMessage={formik.errors.phone}/> : null}
                        <label>Address</label>
                        <input 
                            id="address"
                            name= "address" 
                            type="text" 
                            placeholder="Jane Street" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                        {formik.errors.address ? <FormError errorMessage={formik.errors.address}/> : null}
                        <label>Username</label>
                        <input 
                            id="username"
                            name="username" 
                            type="text" 
                            placeholder="Create a username" 
                            className="pl-1 placeholder:pl-2 py-1" 
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                        {formik.errors.username ? <FormError errorMessage={formik.errors.username}/> : null}
                        <label>Password</label>
                        <input 
                            id="password"
                            name="password" 
                            type="password" 
                            placeholder="Create your password" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? <FormError errorMessage={formik.errors.password}/> : null}
                        <label>Confirm Password</label>
                        <input 
                            id="confirmpassword"
                            name="confirmpassword" 
                            type="password" 
                            placeholder="Enter your password again" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.confirmpassword}
                        />
                        {formik.errors.confirmpassword ? <FormError errorMessage={formik.errors.confirmpassword}/> : null}
                    </div>
                    <button 
                        type="submit"
                        className="w-[100%] rounded-md bg-text text-background py-2 mb-4"
                    >Sign Up
                    </button>
                </form>
            </div>
        </div>
        
    );
}

export default SignUpV2;