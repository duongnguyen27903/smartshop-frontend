import { useEffect, useRef, useState } from "react";
import { api, auth_api, getProfile } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { errorform } from "../../authen/SignIn";

const update_user = {};
const update_profile = {};

const Profile = () => {
  const navigate = useNavigate();
  const user_info = localStorage.getItem("user");
  var info;
  if (user_info) info = JSON.parse(user_info);

  const profile_data = useRef();

  const [profile, setProfile] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    birthday: "",
    address: "",
  });
  useEffect(() => {
    getProfile(info?.user.id)
      .then((res) => {
        setProfile((prev) => {
          const add = res.data[0];
          return {
            ...prev,
            ...add,
          };
        });
        profile_data.current = res.data[0];
      })
      .catch((err) => {
        localStorage.removeItem("user");
        alert(errorform(err));
        navigate("/");
      });
  }, []);

  const [user, setUser] = useState({
    email: info?.user.email || "",
    password: info?.user.password || "",
    username: info?.user.username || "",
    phone_number: info?.user.phone_number || "",
  });

  function handleUserChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.value && e.target.value !== info.user[e.target.name])
      update_user[e.target.name] = e.target.value;
    else {
      delete update_user[e.target.name];
    }
  }

  function handleProfileChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    if (
      e.target.value &&
      e.target.value !== profile_data.current[e.target.name]
    )
      update_profile[e.target.name] = e.target.value;
    else {
      delete update_profile[e.target.name];
    }
  }

  function handleUpdate(e) {
    e.preventDefault();
    if (Object.keys(update_profile).length !== 0) {
      auth_api
        .post("api/user-profile/save-profile", {
          ...profile,
          userId: info?.user.id,
        })
        .then((res) => {
          window.location.reload();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no update profile");
    }
    if (Object.keys(update_user).length !== 0) {
      console.log(user.phone_number);
      auth_api
        .post("api/user-profile/update_user", {
          password: user.password,
          username: user.username,
          phone_number: user.phone_number || null,
          id: info.user.id,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("no update user");
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="max-w-md mx-auto">
      <div className="my-2 uppercase">Profile</div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={user.email}
          onChange={handleUserChange}
        />
        <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Email address
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <div className="w-full flex flex-row">
          <input
            type={showPassword === false ? "password" : "text"}
            name="password"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={user.password}
            onChange={handleUserChange}
          />
          <button
            className="hover:animate-[shake_1s_infinite] "
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword);
            }}
          >
            show
          </button>
        </div>
        <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Password
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          name="username"
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={user.username}
          onChange={handleUserChange}
        />
        <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Username
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          name="phone_number"
          className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={user.phone_number}
          onChange={handleUserChange}
        />
        <label className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Phone number (1234567890)
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            name="first_name"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={profile.first_name || ""}
            onChange={handleProfileChange}
          />
          <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            name="last_name"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={profile.last_name || ""}
            onChange={handleProfileChange}
          />
          <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Last name
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="birthday"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={profile.birthday || ""}
            onChange={handleProfileChange}
          />
          <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Birthday
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            name="address"
            className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={profile.address || ""}
            onChange={handleProfileChange}
          />
          <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Address
          </label>
        </div>
      </div>
      <div className="relative  z-0 w-full mb-5 group">
        <div className="text-gray-500 text-lg">Gender</div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="gender"
              value="male"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleProfileChange}
              checked={"male" === profile.gender}
            />
            <label className="block ms-2 font-medium text-gray-900 dark:text-gray-300">
              Male
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="gender"
              value="female"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleProfileChange}
              checked={"female" === profile.gender}
            />
            <label className="block ms-2 font-medium text-gray-900 dark:text-gray-300">
              Female
            </label>
          </div>
        </div>
      </div>
      <button
        onClick={handleUpdate}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Update
      </button>
    </form>
  );
};

export default Profile;
