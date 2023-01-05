import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="bg-base-200">
        <footer className="footer p-10 mx-auto w-4/5 text-base-content">
          <div>
            <h4 className='text-2xl font-bold'>Admin Panel</h4>
            <p>Here you can control your site</p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
            <Link className="link link-hover">Press kit</Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
          </div>
        </footer>
      </div>
    );
};

export default Footer;