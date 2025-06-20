import NavbarHomePage from "@/components/Navbar";

export default function LoginPage() {
  return (
    <>
      <NavbarHomePage />
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-white text-black">
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <div className="w-full max-w-md space-y-6">
          {/* Guest Login */}
          <form className="bg-gray-50 border p-6 rounded shadow space-y-4">
            <label htmlFor="email" className="block font-medium">Guest Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              Login as Guest
            </button>
          </form>

          {/* Microsoft Login */}
          <div className="text-center">
            <p className="mb-2 text-gray-500">or</p>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-medium"
              onClick={() => alert("Microsoft Login ยังไม่เชื่อมจริง")}
            >
              Sign in with Microsoft
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
