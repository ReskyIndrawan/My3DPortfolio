import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const formRef = useRef();
  const { t } = useTranslation();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Resky Indrawan",
          from_email: form.email,
          to_email: "indrawanresky.tlg@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: t("alert.200"),
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: t("alert.400"),
            type: "danger",
          });
        }
      );
  };

  return (
    <section className='c-space my-20' id='contact'>
      {alert.show && <Alert {...alert} />}

      <div className='relative min-h-screen flex items-center justify-center flex-col border border-black-300 bg-black-200 rounded-lg'>
        {/* <img
          src='/assets/terminal.png'
          alt='terminal-bg'
          className='absolute inset-0 min-h-screen'
        /> */}

        <div className='contact-container'>
          <h3 className='head-text'>{t("contact.title")}</h3>
          <p className='text-lg text-white-600 mt-3'>
            {t("contact.subTitle")}
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>
                {t("contact.content.fullName")}
              </span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='ex., John Doe'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>
                {t("contact.content.email")}
              </span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='ex., johndoe@gmail.com'
              />
            </label>

            <label className='space-y-3'>
              <span className='field-label'>
                {t("contact.content.message")}
              </span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='field-input'
                placeholder='Share your thoughts or inquiries...'
              />
            </label>

            <button
              className='field-btn'
              type='submit'
              disabled={loading}>
              {loading
                ? t("contact.content.button.sending")
                : t("contact.content.button.idle")}

              <img
                src='/assets/arrow-up.png'
                alt='arrow-up'
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
