import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import { useNavigate } from "react-router-dom"; */

export const showSuccessToast = (
  message,
  setopenauthmodal,
  setisprofreg,
  setisuserreg,
  navigate
) => {
  toast.success(message);
  setTimeout(() => {
    setopenauthmodal(false);
    setisprofreg(true);
    setisuserreg(true);
    document.body.classList.remove("fixed");
    navigate("/dashboard");
  }, 1700);
};
export const showErrorToast = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 900,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    closeButton: false,
  });
};
