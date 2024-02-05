import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FormComp = () => {
  const data = {
    fname: "",
    lname: "",
    email: "",
    number: "",
    type: "",
    companyName: "",
    message: "",
  };

  const [FormData, setFormData] = useState(data);
  const [FormError, setFormError] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(FormData));
    setSubmit(true);

  const res = await fetch('https://portfolio-5000-default-rtdb.firebaseio.com/data.json',{
    method:"POST",
  headers:{
    "content-Type":"application/json",
  },
  body: JSON.stringify({
    fname:FormData.fname,
      lname: FormData.lname,
      email: FormData.email,
      number: FormData.number,
      type: FormData.type,
      companyName: FormData.companyName,
      message:FormData.message,
  }),
  });
  

    if(res.ok){
        console.log('data sent successfully');
        toast.success('Data Sent Successfully')
        setFormData(data);
    } else {
        console.error('Error Submitting form',res.statusText);
        toast.error('Error in sending data')
    }
  };

  useEffect(() => {
    if (Object.keys(FormError).length === 0 && isSubmit) {
      console.log(FormData);
      
    }
  }, [FormError, FormData, isSubmit]);

  const validate = (values) => {
    const errors = {};

    if (!/^[a-zA-Z -]{3,15}$/.test(values.fname)) {
      errors.fname =
        "First Name is Required and should be more then 3 and less then 15 characters";
    }

    if (!/^[a-zA-Z -]{3,15}$/.test(values.lname)) {
      errors.lname =
        "Last Name is Required and should be more then 3 and less then 15 characters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Email is Required & should be valid";
    }
    if (!/^[0-9]{10,10}$/.test(values.number)) {
      errors.number = "Number is Required  should of 10 numbers";
    }
    if (!values.type) {
      errors.type = "Company Type is Required";
    }
    if (
      !/^[a-zA-Z0-9\s-]{3,100}$/.test(values.companyName) &&
      values.type === "company"
    ) {
      errors.companyName =
        "Company Name is Required and should be between 3 and 100 words";
    }

    if (!/^[a-zA-Z0-9\s-]{3,100}$/.test(values.message)) {
      errors.message = "Message is Required should be between 3 and 100 words";
    }
    return errors;
  };

  return (
    <form method="post"
      className="flex flex-col gap-6 justify-center"
      action=""
      onSubmit={handleSubmit}
    >
     {isSubmit && <ToastContainer position="top-center" autoClose={1000} />}
      {/* name */}
      <div className="flex-col flex sm:flex-row w-full gap-3 sm:gap-6">
        <div className="flex flex-col w-full sm:w-1/2 gap-2">
          <label
            className="font-accent text-xs sm:text-sm font-semibold"
            htmlFor="fname"
          >
            First Name
          </label>
          <input
            className="text-dark-100 p-1 sm:p-2 font-primary font-medium rounded-sm text-xs sm:text-sm"
            type="text"
            name="fname"
            id="fname"
            value={FormData.fname}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{FormError.fname}</p>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 gap-2">
          <label
            className="font-accent text-xs sm:text-sm font-semibold"
            htmlFor="lname"
          >
            Last Name
          </label>
          <input
            className="text-dark-100 p-1 sm:p-2 font-primary font-medium rounded-sm text-xs sm:text-sm"
            type="text"
            name="lname"
            id="lname"
            value={FormData.lname}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{FormError.lname}</p>
        </div>
      </div>

      {/* mobile number and address */}
      <div className="flex-col flex sm:flex-row w-full gap-3 sm:gap-6">
        <div className="flex flex-col w-full sm:w-1/2 gap-2">
          <label
            className="font-accent text-xs sm:text-sm font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="text-dark-100 p-1 sm:p-2 font-primary font-medium rounded-sm text-xs sm:text-sm"
            type="email"
            name="email"
            id="email"
            value={FormData.email}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{FormError.email}</p>
        </div>

        <div className="flex flex-col w-full sm:w-1/2 gap-2">
          <label
            className="font-accent text-xs sm:text-sm font-semibold"
            htmlFor="number"
          >
            Mobile Number
          </label>
          <input
            className="text-dark-100 p-1 sm:p-2 font-primary font-medium rounded-sm text-xs sm:text-sm"
            type="number"
            name="number"
            id="number"
            value={FormData.number}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{FormError.number}</p>
        </div>
      </div>

      {/* radio */}
      <div className="flex flex-col gap-1">
        <label
          className="font-accent text-xs sm:text-sm font-semibold"
          htmlFor="companyType"
        >
          Are You Company or Individual?
        </label>
        <div className="flex text-xs sm:text-sm font-primary font-normal gap-2 sm:gap-4">
          <div className="flex items-center justify-center gap-1">
            <label
              className="text-xs sm:text-sm font-primary"
              htmlFor="Company"
            >
              Company
            </label>{" "}
            <input
              type="radio"
              name="type"
              value="company"
              checked={FormData.type === "company"}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center gap-1">
            <label
              className="text-xs sm:text-sm font-primary"
              htmlFor="individual"
            >
              Individual
            </label>{" "}
            <input
              type="radio"
              name="type"
              value="individual"
              checked={FormData.type === "individual"}
              onChange={handleChange}
            />
          </div>
          <p className="text-red-500 text-xs">{FormError.type}</p>
        </div>
      </div>

      {/* company Name */}
      <div className="flex flex-col gap-2">
        <label
          className="font-accent text-xs sm:text-sm font-semibold"
          htmlFor="companyName"
        >
          If you are company please mention your organization name?
        </label>
        <input
          className="w-full text-dark-100 p-1 sm:p-2 font-primary font-medium rounded-sm text-xs sm:text-sm"
          type="text"
          name="companyName"
          id="companyName"
          value={FormData.companyName}
          onChange={handleChange}
          disabled={FormData.type !== "company"}
        />
        <p className="text-red-500 text-xs">{FormError.companyName}</p>
      </div>

      {/* Opportunity */}
      {/* <div className="flex flex-col gap-1">
           <label className="font-accent text-xs sm:text-sm font-semibold" htmlFor="opportunity">Is This Part-Time Or Full-Time Opportunity?</label>
           <div className="flex text-xs sm:text-sm font-primary font-normal gap-4">
           <div className="flex items-center justify-center gap-1"><label className="text-xs sm:text-sm font-primary" htmlFor="parttime">Part Time</label> <input type="radio" name="opportunity" id="parttime" value='parttime' /></div>
            <div className="flex items-center justify-center gap-1"><label className="text-xs sm:text-sm font-primary" htmlFor="fulltime">Full Time</label> <input type="radio" name="opportunity" id="fulltime" value='fulltime' /></div>
           </div>
           </div> */}

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          className="font-accent text-xs sm:text-sm font-semibold"
          htmlFor="message"
        >
          Enter Your Message Here
        </label>
        <textarea
          className="text-dark-100 p-1 sm:p-2 font-primary max-h-[10rem] font-medium rounded-sm text-xs sm:text-sm"
          name="message"
          id="message"
          value={FormData.message}
          onChange={handleChange}
          rows="5"
        ></textarea>
        <p className="text-red-500 text-xs">{FormError.message}</p>
      </div>

      <button
        className={clsx(
          "bg-accent-100 font-primary px-2 py-1 sm:py-2 text-neutral-900 text-xs sm:text-base transition-all font-medium leading-7 self-center rounded-lg",
          //hover
          "hover:bg-accent-200",
          //focus
          "outline-none",
          "ring-accent-200/70 ring-offset-2",
          "focus-visible:ring-2 focus:scale-[0.98]"
        )}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComp;
