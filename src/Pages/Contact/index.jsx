import React, { useRef, useState } from 'react';
import './contact.css';
import { SERVICE_ID, PRIVATE_KEY, TEMPLATE_ID } from '../../Content/constants';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';
import Loader from '../../Components/Loader';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { enqueueSnackbar } = useSnackbar();
    const form = useRef();
    const [sendEmail, setEmailSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PRIVATE_KEY,
        }).then(() => {
            enqueueSnackbar('Message sent succesfully!', { variant: 'success', autoHideDuration: 3000, });
            setEmailSent(true);
            setLoading(false)
        },
            (error) => {
                console.log('FAILED...', error.text);
                enqueueSnackbar('Please try again!', { variant: 'error', autoHideDuration: 3000, });
                setLoading(false)
            },
        );
    };

    return (
        <div className='div-container contact-main'>
            {loading && <Loader />}
            <section id='contact'>
                <div className='contact-content'>
                    <span className='intro-name'>Let's Connect</span>
                    <div className='contact-box'>
                        {!sendEmail ? <form ref={form} onSubmit={handleSubmit(onSubmit)} className='form-main'>
                            <div className='form-div'>
                                <label className='form-label'>Name</label>
                                <input
                                    className="input-element"
                                    placeholder='Enter Your Full Name'
                                    {...register("full_name", { required: "Name is required", maxLength: { value: 20, message: "Max length is 20" } })}
                                />
                                {errors.full_name && <p style={{ color: 'red', fontSize: 12 }}>{errors.full_name.message}</p>}
                            </div>
                            <div className='form-div'>
                                <label className='form-label'>Phone</label>
                                <input
                                    className="input-element"
                                    placeholder='Enter Phone Number'
                                    {...register("phone_number", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^[+]?[0-9]{10,15}$/,
                                            message: "Enter a valid phone number (10-15 digits)"
                                        }
                                    })}
                                />
                                {errors.phone_number && <p style={{ color: 'red', fontSize: 12 }}>{errors.phone_number.message}</p>}
                            </div>
                            <div className='form-div'>
                                <label className='form-label'>Company Name</label>
                                <input
                                    className="input-element"
                                    placeholder='Enter Company Name'
                                    {...register("company_name", { required: "Company Name is required", maxLength: { value: 50, message: "Max length is 50" } })}
                                />
                                {errors.company_name && <p style={{ color: 'red', fontSize: 12 }}>{errors.company_name.message}</p>}
                            </div>
                            <div className='form-div'>
                                <label className='form-label'>Email</label>
                                <input
                                    className="input-element"
                                    placeholder='Enter Email Address'
                                    {...register("reply_to", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                                />
                                {errors.reply_to && <p style={{ color: 'red', fontSize: 12 }}>{errors.reply_to.message}</p>}
                            </div>
                            <div className='form-div-full'>
                                <label className='form-label'>Message</label>
                                <textarea
                                    className="textarea-element"
                                    placeholder='Send me your message here'
                                    {...register("message", { required: "Message is required" })}
                                ></textarea>
                                {errors.message && <p style={{ color: 'red', fontSize: 12 }}>{errors?.message?.message}</p>}
                            </div>
                            <div className='form-div-full'>
                                <input type="submit" className='form-submit' />
                            </div>
                        </form> : <p className='response-text'>Thanks for reaching out! I'll be in touch as soon as possible.</p>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

