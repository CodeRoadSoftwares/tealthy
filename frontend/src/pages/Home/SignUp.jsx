const SignUp = () => {

    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="w-1/5 h-max">
                <div className="my-4 flex flex-col w-[100%] gap-2 [&>input]:border rounded-md [&>label]:font-medium">
                    <label>Name</label>
                    <input type="text" placeholder="John Doe" className="pl-1 placeholder:pl-2 py-1">
                    </input>
                    <label>Email</label>
                    <input type="email" placeholder="johndoe@gmail.com" className="pl-1 placeholder:pl-2 py-1">
                    </input>
                    <label>Phone</label>
                    <input type="text" placeholder="+91XXXXXXXXXX" className="pl-1 placeholder:pl-2 py-1">
                    </input>
                    <label>Address</label>
                    <input type="text" placeholder="Jane Street" className="pl-1 placeholder:pl-2 py-1">
                    </input>
                    <label>Username</label>
                    <input type="text" placeholder="Create a username" className="pl-1 placeholder:pl-2 py-1">
                    </input>
                    <label>Password</label>
                    <input type="password" placeholder="Create your password" className="pl-1 placeholder:pl-2 py-1">
                    </input>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Enter your password again" className="pl-1 placeholder:pl-2 py-1">
                    </input>
                </div>
                <button className="w-[100%] rounded-md bg-text text-background py-2 mb-4">Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp;