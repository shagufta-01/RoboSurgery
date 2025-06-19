import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">RoboSurgery</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Leading the future of minimally invasive surgery with state-of-the-art robotic technology and expert surgical care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#specialties" className="text-gray-300 hover:text-white transition-colors">Our Specialties</a></li>
              <li><a href="#surgeons" className="text-gray-300 hover:text-white transition-colors">Our Surgeons</a></li>
              <li><Link to="/appointment" className="text-gray-300 hover:text-white transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/specialty/urology" className="text-gray-300 hover:text-white transition-colors">Robotic Urology</Link></li>
              <li><Link to="/specialty/gi" className="text-gray-300 hover:text-white transition-colors">Robotic GI Surgery</Link></li>
              <li><Link to="/specialty/gynecology" className="text-gray-300 hover:text-white transition-colors">Robotic Gynecology</Link></li>
              <li><Link to="/specialty/cardiology" className="text-gray-300 hover:text-white transition-colors">Robotic Cardiology</Link></li>
              <li><Link to="/specialty/orthopedics" className="text-gray-300 hover:text-white transition-colors">Robotic Orthopedics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">123 Medical Center Dr, Suite 100, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">info@robosurgery.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 RoboSurgery Medical Center. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;