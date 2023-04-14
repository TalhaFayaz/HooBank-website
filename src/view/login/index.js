import React from "react";

export default function Login() {
  return (
    <>
      <div className="md:w-full bg-[#201c29] ">
        <div className="container mx-auto px-14 py-16">
          <div className="grid grid-cols-1">
            <form className="mx-auto">
            <p className="text-white text-2xl font-semibold text-center py-6">
              Login
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" w-96 rounded bg-[#201c29] text-white border border-1 border-teal  my-2 px-5 py-3"
            />
            <br />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-96 rounded bg-[#201c29] text-white border border-1 border-teal  my-2 px-5 py-3"
            />
            <br />
            <button className="w-96 py-4 bg-[#47cdda] rounded text-gray text-md">
              Submit
            </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
