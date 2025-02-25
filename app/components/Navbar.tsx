import React from 'react'
import Link from 'next/link'
import '../../styles/icon-style.css'
export default function Navbar() {
    return (
      <div className="navbar" id="navbar">
      <div className="container flex flex-wrap items-center justify-end">
          <Link className="navbar-brand" href="index.html">
              <span className="inline-block dark:hidden">
                  <img src="/images/logo-dark.png" className="l-dark" alt=""/>
                  <img src="/images/logo-light.png" className="l-light" alt=""/>
              </span>
              <img src="assets/images/logo-light.png" className="hidden dark:inline-block" alt=""/>
          </Link>

          <div className="nav-icons flex items-center lg_992:order-2 ml-auto">
              
              <ul className="list-none menu-social mb-0 ps-lg-4 ms-2">
                  <li className="inline">
                      <Link href="https://github.com/seyedahmaddv" target='_blank'>
                          <span className="login-btn-primary"><span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"><i className="uil uil-github"></i></span></span>
                          <span className="login-btn-light"><span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i className="uil uil-github"></i></span></span>
                      </Link>
                  </li>
                  <li className="inline">
                      <Link href="https://twitter.com/seyedahmaddv" target='_blank'>
                          <span className="login-btn-primary"><span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"><i className="uil uil-twitter"></i></span></span>
                          <span className="login-btn-light"><span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i className="uil uil-twitter"></i></span></span>
                      </Link>
                  </li>
                  <li className="inline">
                      <Link href="https://instagram.com/seyedahmaddv" target='_blank'>
                          <span className="login-btn-primary"><span className="btn btn-sm btn-icon rounded-full bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white"><i className="uil uil-instagram"></i></span></span>
                          <span className="login-btn-light"><span className="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"><i className="uil uil-instagram"></i></span></span>
                      </Link>
                  </li>
              </ul>
              
              <button data-collapse="menu-collapse" type="button" className="collapse-btn inline-flex items-center ml-3 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false">
                  <span className="sr-only">منوی ناوبری</span>
                  <i className="mdi mdi-menu mdi-24px"></i>
              </button>
          </div>

          
          <div className="navigation lg_992:order-1 lg_992:flex hidden" id="menu-collapse">
              <ul className="navbar-nav nav-light" id="navbar-navlist">
                  <li className="nav-item">
                      <Link className="nav-link active" href="#home">خانه</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" href="#about">درباره ما</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" href="#features">خدمات</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" href="#portfolio">نمونه کار</Link>
                  </li>
                  
                  <li className="nav-item">
                      <Link className="nav-link" href="#team">اعضا تیم</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" href="#blog">وبلاگ</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" href="#contact">تماس با ما</Link>
                  </li>                       
              </ul>
          </div>
      </div>
  </div>
    )
}
