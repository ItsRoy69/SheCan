export const validateForm = (creds, isuserreg, isprofreg) => {
  const errors = {};
  const { email, phone, name, address, pincode, password, profession } = creds;

  // Email validation
  if (!email) {
    errors.email = "Email is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    errors.email = "Email is invalid";
  }

  // Password validation
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  // Phone validation
  if (isuserreg || isprofreg) {
    if (!phone) {
      errors.phone = "Phone is required";
    } else if (
      !/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(phone)
    ) {
      errors.phone = "Phone is invalid";
    }

    // Name validation
    if (!name) {
      errors.name = "Name is required";
    }

    // Address validation
    if (!address) {
      errors.address = "Address is required";
    }

    // if (!profession) errors.profession = "Profession is required";
  }

  if (!isuserreg && isprofreg) {
    if (!profession) errors.profession = "Profession is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
