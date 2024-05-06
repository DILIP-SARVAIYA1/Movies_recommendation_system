import React, { useEffect } from "react";
import { APP_LOGO, SUPPORTED_LANGUAGE } from "../Utils/constants";
import { langLogoSvg } from "../Utils/svg";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser, removeUser } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";
import { setShowHideGptSearch } from "../Store/gptSlice";
import { changeLanguage } from "../Store/configSlice";
import languageConfig from "../Utils/languageConfig";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config?.lang);
  const showHideGptSearch = useSelector((store) => store.gpt.showHideGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleGptSearch = () => {
    dispatch(setShowHideGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="bg-gradient-to-b from-black flex justify-between items-center py-2 md:px-24 z-50 pr-2">
      <div>
        <img className="w-28 md:w-48" src={APP_LOGO} alt="Background Img" />
      </div>
      <div className="flex items-center gap-2">
        {user && (
          <button
            className="bg-red-700 hover:bg-red-800 py-1 px-1 md:px-4 rounded-md text-white shadow-md shadow-gray-800 text-xs md:text-base"
            onClick={() => {
              handleGptSearch();
              navigate("/browse");
            }}
          >
            {showHideGptSearch
              ? languageConfig[langKey].gptSearchBarSearchBtnString2
              : languageConfig[langKey].gptSearchBarSearchBtnString}
          </button>
        )}
        <span className="text-gray-200 md:scale-125">{langLogoSvg}</span>
        <select
          className="py-1 px-1 bg-gray-600 bg-opacity-60 text-gray-200 text-xs md:text-base rounded-md border border-gray-500 outline-none"
          onChange={handleLanguageChange}
        >
          {SUPPORTED_LANGUAGE?.map((lang) => (
            <option key={lang?.identifier} value={lang?.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
        {user && (
          <div className="flex items-center gap-2">
            <img
              className="w-6 md:w-8 rounded-full "
              src={user.photoURL}
              alt="User Img"
            />
            <button
              className="bg-red-700 hover:bg-red-800 py-1 px-1 md:px-4 rounded-md text-white shadow-md shadow-gray-800 text-xs md:text-base"
              onClick={handleSignOut}
            >
              {languageConfig[langKey].signOut}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
