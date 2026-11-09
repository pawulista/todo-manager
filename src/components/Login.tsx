function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-5 rounded-[20px] shadow-lg">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <form className="flex flex-col gap-4 mt-6">
          <label htmlFor="email">Email</label>
          <input
            className="border border-gray-500 rounded-[10px] p-2"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-500 rounded-[10px] p-2"
            type="password"
            id="password"
            name="password"
            required
          />

          <button
            className="block mx-auto bg-green-500 text-white py-2 px-4 rounded-[10px] hover:bg-green-600 w-full mt-6"
            type="submit"
          >
            Login
          </button>

          <p className="text-center mt-4">
            Don't have an account? <a href="/register" className="text-green-500">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

 export default Login