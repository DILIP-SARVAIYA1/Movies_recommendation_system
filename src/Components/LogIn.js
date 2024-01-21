import React, { useRef, useState } from "react";
import { APP_BG_IMG, USER_PROFILE_URL } from "../Utils/constants";
import { validation } from "../Utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/userSlice";

const LogIn = () => {
  const [errMassage, setErrMassage] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const dispatch = useDispatch();
  const emailValue = useRef(null);
  const passwordValue = useRef(null);
  const nameValue = useRef(null);

  const handleValidation = () => {
    const massage = validation(
      emailValue.current.value,
      passwordValue.current.value
    );
    setErrMassage(massage);
    if (massage) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        emailValue.current.value,
        passwordValue.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue.current.value,
            photoURL: USER_PROFILE_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              console.log(user);
            })
            .catch((error) => {
              // An error occurred
              const errorMessage = error.message;
              setErrMassage(errorMessage);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrMassage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailValue.current.value,
        passwordValue.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrMassage(errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="">
      <div className="">
        <img
          className="h-screen w-full absolute top-0 -z-50 object-cover"
          src={APP_BG_IMG}
          alt="App Background"
        />
      </div>
      <div className="w-4/5 md:w-1/4 mx-auto mt-[10%] md:mt-[1%] bg-black bg-opacity-80 shadow-2xl shadow-gray-600 rounded-lg">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col p-4">
            <h1 className="text-3xl text-white mx-4 my-5">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                ref={nameValue}
                className="p-4 m-4 text-white bg-gray-500 bg-opacity-20 outline-none rounded-lg border border-gray-700"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            )}
            <input
              ref={emailValue}
              className="p-4 m-4 text-white bg-gray-500 bg-opacity-20 outline-none rounded-lg border border-gray-700"
              placeholder="Enter Your Email"
              type="text"
              required
            />
            <input
              ref={passwordValue}
              className="p-4 m-4 text-white bg-gray-500 bg-opacity-20 outline-none rounded-lg border border-gray-700"
              placeholder="Enter Your Password"
              type="password"
              required
            />
            {isSignIn ? (
              <button
                className="bg-green-700 hover:bg-green-800 text-white font-bold p-4 m-4 rounded-md"
                onClick={handleValidation}
              >
                Sign In
              </button>
            ) : (
              <button
                className="bg-red-700 hover:bg-red-800 text-white font-bold p-4 m-4 rounded-md"
                onClick={handleValidation}
              >
                Sign Up
              </button>
            )}

            <p className="text-red-600 mx-4">{errMassage}</p>

            <p
              className="m-4 text-lg text-gray-100 hover:text-gray-400 hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {!isSignIn
                ? "Already user? Sign In "
                : "New to Netflix? Sign Up "}
              now.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
