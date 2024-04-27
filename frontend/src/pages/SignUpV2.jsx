import { useFormik } from "formik"
import { validate, FormError, callUserApi } from "../helpers/signuphelper"
import { useEffect } from "react"

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
    })

    useEffect(() => {
        if(formik.values.username.length < 4 && formik.values.email.length < 4) return
        checkUsernameOrEmailAvailablity()
    }, [formik.values.username, formik.values.email])

    async function checkUsernameOrEmailAvailablity (){
        const payload = {
            username: formik.values.username,
            email: formik.values.email
        }

        const { data, status }= await callUserApi('/check-user-availability', payload);
        console.log(data.message); 
        if(status == 401){
            const unAvailableField = data.message.split(" ")[2];
            formik.setFieldError(unAvailableField, `${unAvailableField} is already in use`);
        }
    }

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
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <FormError errorMessage={formik.errors.name}/> : null}
                        <label>Email</label>
                        <input
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="johndoe@gmail.com" 
                            className="pl-1 placeholder:pl-2 py-1" 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <FormError errorMessage={formik.errors.email}/> : null}    
                        <label>Phone</label>
                        <input 
                            id="phone"
                            name="phone" 
                            type="tel" 
                            placeholder="+91XXXXXXXXXX" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone ? <FormError errorMessage={formik.errors.phone}/> : null}
                        <label>Address</label>
                        <input 
                            id="address"
                            name= "address" 
                            type="text" 
                            placeholder="Jane Street" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address ? <FormError errorMessage={formik.errors.address}/> : null}
                        <label>Username</label>
                        <input 
                            id="username"
                            name="username" 
                            type="text" 
                            placeholder="Create a username" 
                            className="pl-1 placeholder:pl-2 py-1" 
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username ? <FormError errorMessage={formik.errors.username}/> : null}
                        <label>Password</label>
                        <input 
                            id="password"
                            name="password" 
                            type="password" 
                            placeholder="Create your password" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? <FormError errorMessage={formik.errors.password}/> : null}
                        <label>Confirm Password</label>
                        <input 
                            id="confirmpassword"
                            name="confirmpassword" 
                            type="password" 
                            placeholder="Enter your password again" 
                            className="pl-1 placeholder:pl-2 py-1"
                            onChange={formik.handleChange}
                            value={formik.values.confirmpassword}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.confirmpassword && formik.errors.confirmpassword ? <FormError errorMessage={formik.errors.confirmpassword}/> : null}
                    </div>
                    <button 
                        type="submit"
                        className="w-[100%] rounded-md bg-text text-background py-2 mb-4"
                    >Sign Up
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default SignUpV2;