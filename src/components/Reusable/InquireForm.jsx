import React, { Fragment, useRef } from 'react'
// import emailjs from '@emailjs/browser'
import '../../style/Reusable/inquireForm.css'

function InquireForm() {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_v11grzq', 'template_z7uamif', form.current, {
        //     publicKey: 'IYMs49anrOo3_wKcb'
        // }).then(() => {
        //     console.log("Success");
        //     form.current.name.value = '';
        //     form.current.email.value = '';
        //     form.current.company_name.value = '';
        //     form.current.contact_details.value = '';
        //     form.current.message.value = '';
        // }, (error) => {
        //     console.log('Failed', error.text)
        // });
    };


    return (
        <Fragment>
            <div className='inquire'>
                <h4 className='mb-4 text-danger'>INQUIRE HERE:</h4>
                <form action="" ref={form} onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" placeholder='Name' />
                    <input type="email" name="email" id="email" placeholder='Email' />
                    <input type="text" name="company_name" id="company_name" placeholder='Company Name' />
                    <input type="text" name="contact_details" id="contact_details" placeholder='Contact Details' />
                    <textarea name="message" id="message" rows="5" placeholder='Message' />
                    <button type='submit'>SUBMIT MESSAGE</button>
                </form>
            </div>
        </Fragment>
    )
}

export default InquireForm