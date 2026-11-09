function Register() {
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md p-5 rounded-[20px] shadow-lg">
            <h1 className="text-2xl font-bold">Create an account</h1> 
            <form className="flex flex-col gap-4 mt-6">  

                <label htmlFor="Name">Name</label>
                <input className="border border-gray-500 rounded-[10px] p-2" type="text" id="Name" name="Name" required ></input>

                <label htmlFor="email">Email</label>
                <input className="border border-gray-500 rounded-[10px] p-2" type="email" id="email" name="email" required ></input>

                <label htmlFor="password">Password</label>
                <input className="border border-gray-500 rounded-[10px] p-2" type="password" id="password" name="password" required ></input>

              </form>
                <button className="block mx-auto bg-red-800 text-white py-2 px-4 rounded-[10px] hover:bg-green-600 w-full mt-6" type="submit">Register Now</button>
                <p className="text-center mt-4">Already have an account? <a href="/login" className="text-red-800">Login</a></p>


            </div>
           

        </div>

    );
}

export default Register