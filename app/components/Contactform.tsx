"use client"; // برای استفاده از هوک‌ها و state در کامپوننت

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    comments: '',
  });

  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.comments) {
      setError('لطفاً تمام فیلدها را پر کنید.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('لطفاً یک ایمیل معتبر وارد کنید.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (validateForm()) {
      // ارسال فرم (می‌توانید از fetch یا axios استفاده کنید)
      setSuccessMsg('پیام شما با موفقیت ارسال شد!');
      setFormData({ name: '', email: '', subject: '', comments: '' }); // پاک کردن فرم
    }
  };

  return (
    <div>
      <section className="relative md:py-24 py-16 bg-zinc-50 dark:bg-gray-800" id="contact">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">فرم تماس</h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">تماس بگیرید !</h3>
            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
            کارزار خود را راه‌اندازی کنید و از تخصص ما در طراحی و مدیریت صفحات خدمات طراحی سایت سید احمد متمرکز بر تبدیل، با استفاده از تیلویند بهره‌مند شوید.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow bg-white dark:bg-black">
                <form onSubmit={handleSubmit}>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="name"
                        type="text"
                        className="form-input"
                        placeholder="نام :"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="lg:col-span-6 mb-5">
                      <input
                        name="email"
                        type="email"
                        className="form-input"
                        placeholder="ایمیل :"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <input
                        name="subject"
                        className="form-input"
                        placeholder="موضوع :"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-5">
                      <textarea
                        name="comments"
                        className="form-input textarea h-28"
                        placeholder="پیام :"
                        value={formData.comments}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md h-11 justify-center flex items-center"
                  >
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:ml-8">
                <div className="flex">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-phone block rounded text-2xl dark:text-white mb-0"></i>
                  </div>
                  <div className="flex-1 ml-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">تلفن</h5>
                    <a href="tel:+152534-468-854" className="text-slate-400">
                      +989034260454
                    </a>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-envelope block rounded text-2xl dark:text-white mb-0"></i>
                  </div>
                  <div className="flex-1 ml-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">ایمیل</h5>
                    <a href="mailto:contact@example.com" className="text-slate-400">
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="flex mt-4">
                  <div className="icons text-center mx-auto">
                    <i className="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"></i>
                  </div>
                  <div className="flex-1 ml-6">
                    <h5 className="text-lg dark:text-white mb-2 font-medium">مکان</h5>
                    <p className="text-slate-400 mb-2">تهران، پاسداران</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}