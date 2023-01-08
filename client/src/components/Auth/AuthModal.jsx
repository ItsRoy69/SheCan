import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "../../styles/Authmodal.css";
import formImg from "../../images/login-img.png";
import { useSheModal } from "../../context/sheContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateForm } from "../../utils/validation";
import { ProfLogin, ProfRegister, CustomerRegister, CustomerLogin } from "../../api/Auth";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../utils/toastmessage";

const AuthModal = () => {
  const navigate = useNavigate();
  const {
    isuserreg,
    setisuserreg,
    setopenauthmodal,
    isuser,
    isprofreg,
    setisprofreg,
  } = useSheModal();

  const [creds, setcreds] = useState({
    email: "",
    password: "",
    address: "",
    phone: "",
    name: "",
    profession: "",
  });

  useEffect(() => {
    if (isuser) {
      document.getElementById("userauthsub").style.flexDirection = "row";
    } else {
      document.getElementById("userauthsub").style.flexDirection =
        "row-reverse";
    }
  });

  const changeauthtype = () => {
    setisuserreg((prev) => !prev);
    setisprofreg((prev) => !prev);
  };

  const handleChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors, isValid } = validateForm(creds, isuserreg, isprofreg);
    if (!isValid) {
      setcreds({ ...creds, errors });
      Object.values(errors).forEach((error) => {
        showErrorToast(error);
      });
    } else {
      if (!isuser) {
        if (isprofreg) {
          const response = await ProfRegister(creds);
          if (response.status === 201) {
            toast.success(response.data.message);
            changeauthtype();
          }
        } else {
          const response = await ProfLogin(creds);
          if (response.status === 201) {
            showSuccessToast(
              response.data.message,
              setopenauthmodal,
              setisprofreg,
              setisuserreg,
              navigate
            );
          }
        }
      } else {
        if (isuserreg) {
          // user register
          const response = await CustomerRegister(creds);
          if (response.status === 201) {
            toast.success(response.data.message);
            changeauthtype();
          }
        } else {
          // user login
          const response = await CustomerLogin(creds);
          if (response.status === 201) {
            showSuccessToast(
              response.data.message,
              setopenauthmodal,
              setisprofreg,
              setisuserreg,
              navigate
            );
          }
        }
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover={false}
        closeButton={false}
      />

      <div className="userauth_main slide-in-from-right">
        <button
          className="userauth_crossbtn"
          onClick={() => {
            setopenauthmodal(false);
            setisprofreg(true);
            setisuserreg(true);
            document.body.classList.remove("fixed");
          }}
        >
          X
        </button>

        <div className="userauth_sub  " id="userauthsub">
          <div className="userauth_imgdiv">
            <img src={formImg} alt="" />
          </div>

          <div className="userauth_textdiv">
            {isuser ? (
              isuserreg ? (
                <h1>Register as an User</h1>
              ) : (
                <h1>Login as an User</h1>
              )
            ) : isprofreg ? (
              <h1>Register as a Professional</h1>
            ) : (
              <h1>Login as a Professional</h1>
            )}

            <div className="userauth_formdiv">
              {isuserreg ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={creds.name}
                  name="name"
                />
              ) : null}
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                value={creds.email}
                name="email"
              />
              {isuserreg ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone no"
                  onChange={handleChange}
                  value={creds.phone}
                  name="phone"
                />
              ) : null}
              {!isuser
                ? isprofreg && (
                  <select
                    className="form-select"
                    name="profession"
                    placeholder="Select profession"
                    id=""
                    required
                    value={creds.profession}
                    onChange={handleChange}
                  >
                    <option value="" disabled defaultValue>
                      Select profession
                    </option>
                    <option value="instructor">Instructor</option>
                    <option value="gynaecologist">Gynaecologist</option>
                    <option value="pharmacist">Pharmacist</option>
                  </select>
                )
                : null}
              {isuserreg ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                  onChange={handleChange}
                  value={creds.address}
                  name="address"
                />
              ) : null}
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                onChange={handleChange}
                value={creds.password}
                name="password"
              />
            </div>

            <div className="userauth_btndiv">
              <button
                className="btn "
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
              </button>
              {isuser ? (
                isuserreg ? (
                  <p>
                    Already an user ?{" "}
                    <span
                      onClick={() => {
                        changeauthtype();
                      }}
                    >
                      Login
                    </span>
                  </p>
                ) : (
                  <p>
                    Not an user ?{" "}
                    <span
                      onClick={() => {
                        changeauthtype();
                      }}
                    >
                      Register
                    </span>
                  </p>
                )
              ) : isprofreg ? (
                <p>
                  Already a Professional ?
                  <span
                    onClick={() => {
                      changeauthtype();
                    }}
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Not a Professional ?
                  <span
                    onClick={() => {
                      changeauthtype();
                    }}
                  >
                    Register
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
