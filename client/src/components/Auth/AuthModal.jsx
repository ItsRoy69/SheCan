import React, { useEffect } from "react";
import { useRef } from "react";
import "../../styles/Authmodal.css";
import formImg from "../../images/login-img.png";
import { useSheModal } from "../../context/sheContext";

const AuthModal = () => {
  const {
    isuserreg,
    setisuserreg,
    setopenauthmodal,
    isuser,
    setisuser,
    isprofreg,
    setisprofreg,
  } = useSheModal();

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

  return (
    <>
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
                />
              ) : null}
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
              />
              {isuserreg ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your phone no"
                />
              ) : null}
              {isuserreg ? (
                <select
                  className="form-select"
                  name="select-profession"
                  placeholder="Select profession"
                  id=""
                  required
                >
                  <option value="" disabled defaultValue>
                    Select profession
                  </option>
                  <option value="instructor">Instructor</option>
                  <option value="gynaecologist">Gynaecologist</option>
                  <option value="pharmacist">Pharmacist</option>
                </select>
              ) : null}
              {isuserreg ? (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your address"
                />
              ) : null}
              <input
                type="text"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            <div className="userauth_btndiv">
              <button className="btn ">Submit</button>
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
