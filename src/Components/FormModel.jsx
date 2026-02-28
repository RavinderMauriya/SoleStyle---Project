import React, { useRef, useEffect } from "react";

const Form = ({ onClose }) => {
    const boxRef = useRef();

    useEffect(() => {
        function handleClick(e) {
            if (boxRef.current && !boxRef.current.contains(e.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4">
            <div
                ref={boxRef}
                className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl relative shadow-gray-400"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center">
                    SoleStyle <span className="text-green-400">Sign Up</span>
                </h2>

                <form
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="Enter Email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <label htmlFor="password" className="font-medium">
                                Password
                            </label>
                            <button
                                type="button"
                                className="text-xs text-gray-500 hover:text-black"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder="Enter Password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition"
                    >
                        Submit
                    </button>

                    {/* Divider */}
                    <div className="my-4 flex justify-center items-center">
                        <hr />
                        <p>Or continue with</p>
                        <hr />
                    </div>

                    {/* Social Buttons */}
                    <div className="flex gap-3">
                        <button
                            type="button"
                            className="flex-1 border py-2 rounded-lg hover:bg-gray-100"
                        >
                            Google
                        </button>
                        <button
                            type="button"
                            className="flex-1 border py-2 rounded-lg hover:bg-gray-100"
                        >
                            Apple
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="text-sm text-center mt-4">
                        Not a member?{" "}
                        <button
                            type="button"
                            className="font-semibold hover:underline"
                        >
                            Join us
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Form;