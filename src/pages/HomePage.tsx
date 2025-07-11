import React, { useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  Star,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Phone,
  Heart,
  Brain,
  Eye,
  Stethoscope,
  Activity,
  Zap,
  Target,
  Microscope,
  Baby,
  Scale,
  ArrowUpRight
} from 'lucide-react';
// import aims from '../assets/aims.png'
import aims2 from '../assets/aims2.png'
import aims3 from '../assets/aims3.png'
import aims1 from '../assets/aims1.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
// import p3 from '../assets/p3.jpg'
const diseases = [
  "Head & Neck Surgery",
  "Robotic Urology",
  "GI Surgery",
  "Gynecology Surgery",
  "Cardiac Surgery",
  "Orthopedic Surgery",
  "Thoracic Surgery",
  "Robotic Oncology",
  "Neurosurgery",
  "Pediatric Surgery",
  "Bariatric Surgery",
  "Vascular Surgery",
  // "Plastic Surgery"
];
 const colors = [
    'bg-red-600 hover:bg-red-100',
    'bg-blue-600 hover:bg-blue-100', 
    'bg-green-600 hover:bg-green-100',
    'bg-yellow-600 hover:bg-yellow-100',
    'bg-purple-600 hover:bg-purple-100',
    'bg-pink-600 hover:bg-pink-100',
    'bg-indigo-600 hover:bg-indigo-100',
    'bg-orange-600 hover:bg-orange-100',
    'bg-teal-600 hover:bg-teal-100',
    'bg-cyan-600 hover:bg-cyan-100',
    'bg-lime-600 hover:bg-lime-100',
    'bg-emerald-600 hover:bg-emerald-100'
  ];

import hari from '../assets/Dr_Harit_Chaturvedi_new_0_5f2633c1ed.jpg'
import subash from '../assets/Dr_SG_da91d515bc.jpg';
import skm from '../assets/sks_marya_6b4c17da24.png';
import surender from '../assets/surender.jpeg';
import pradeep from '../assets/pradeep.jpg';
import anant from '../assets/Dr_Anant_Kumar_new_picture_8602360343.jpg';
import abhideep from '../assets/Dr_Abhideep_Chaudhary_9f61965dec.jpg';
import ranjeesh from '../assets/ranjeesh.jpg';
const HomePage = () => {
  
 const [selectedVisa, setSelectedVisa] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const visaOptions = [
    { value: 'tourist', label: 'Tourist Visa', icon: '🏖️' },
    { value: 'business', label: 'Business Visa', icon: '💼' },
    { value: 'student', label: 'Student Visa', icon: '🎓' },
    { value: 'work', label: 'Work Visa', icon: '💼' },
    { value: 'family', label: 'Family Visa', icon: '👨‍👩‍👧‍👦' },
    { value: 'transit', label: 'Transit Visa', icon: '✈️' },
    { value: 'medical', label: 'Medical Visa', icon: '🏥' },
    { value: 'investor', label: 'Investor Visa', icon: '💰' }
  ];
  
   const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Visa Processing",
      description: "Expert handling of visa applications for over 50 countries worldwide with high success rates."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Personalized Consultation",
      description: "One-on-one guidance from certified immigration consultants tailored to your specific needs."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Fast Track Processing",
      description: "Expedited visa processing services to meet your urgent travel and immigration deadlines."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Document Preparation",
      description: "Complete assistance with document collection, verification, and preparation for your application."
    }
  ];


const images =[aims2,aims1,aims3]
const [current,setCurrent] = useState(0)

useEffect(()=>{
const interval = setInterval(()=>{
setCurrent((prev)=> (prev+1)%images.length)
},4000)
return ()=>clearInterval(interval)

},[])

  const specialties = [
    {
      id: 'head-neck',
      name: 'Head & Neck Surgery',
      description: 'Advanced robotic procedures for head and neck conditions',
      icon: Eye,
      image: p1
    },
    {
      id: 'urology',
      name: 'Robotic Urology',
      description: 'Minimally invasive urological procedures with precision',
      icon: Target,
      image: p2
    },
    {
      id: 'gi',
      name: 'GI Surgery',
      description: 'Robotic gastrointestinal surgery for better outcomes',
      icon: Activity,
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'gynecology',
      name: 'Gynecologic Surgery',
      description: 'Women\'s health procedures with robotic precision',
      icon: Heart,
      image: 'https://images.pexels.com/photos/4173240/pexels-photo-4173240.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'cardiology',
      name: 'Cardiac Surgery',
      description: 'Heart procedures using advanced robotic technology',
      icon: Heart,
      image: 'https://images.pexels.com/photos/4173254/pexels-photo-4173254.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    // {
    //   id: 'orthopedics',
    //   name: 'c',
    //   description: 'Joint and bone procedures with robotic assistance',
    //   icon: Shield,
    //   image: 'https://images.pexels.com/photos/4173252/pexels-photo-4173252.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    {
      id: 'orthopedics',
      name: 'Orthopedic Surgery',
      description: 'Joint and bone procedures with robotic assistanc',
      icon: Activity,
      image: 'https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
       {
      id: 'thoracic',
      name: 'Thoracic Surgery',
      description: 'Chest and lung procedures with minimal invasion',
      icon: Activity,
      image: 'https://images.pexels.com/photos/4173250/pexels-photo-4173250.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'oncology',
      name: 'Robotic Oncology',
      description: 'Cancer treatment with precision robotic surgery',
      icon: Zap,
      image: 'https://images.pexels.com/photos/4173253/pexels-photo-4173253.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'neurosurgery',
      name: 'Neurosurgery',
      description: 'Brain and spine surgery with robotic precision',
      icon: Brain,
      image: 'https://images.pexels.com/photos/4173248/pexels-photo-4173248.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'pediatric',
      name: 'Pediatric Surgery',
      description: 'Specialized robotic surgery for children',
      icon: Baby,
      image: 'https://images.pexels.com/photos/4173249/pexels-photo-4173249.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'bariatric',
      name: 'Bariatric Surgery',
      description: 'Weight loss surgery with robotic technology',
      icon: Scale,
      image: 'https://images.pexels.com/photos/4173245/pexels-photo-4173245.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'vascular',
      name: 'Vascular Surgery',
      description: 'Blood vessel procedures with robotic precision',
      icon: Activity,
      image: 'https://images.pexels.com/photos/4173246/pexels-photo-4173246.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'plastic',
      name: 'Plastic Surgery',
      description: 'Reconstructive procedures with robotic assistance',
      icon: Microscope,
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400'
    }

  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      procedure: 'Robotic Hysterectomy',
      rating: 5,
      text: 'The robotic surgery was life-changing. Minimal scarring, quick recovery, and the surgical team was exceptional. I was back to my normal activities in just two weeks.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      procedure: 'Robotic Prostatectomy',
      rating: 5,
      text: 'Dr. Williams and his team provided outstanding care. The precision of robotic surgery gave me confidence, and the results exceeded my expectations.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      procedure: 'Robotic Gallbladder Surgery',
      rating: 5,
      text: 'Amazing experience from consultation to recovery. The tiny incisions healed beautifully, and I experienced minimal pain. Highly recommend this facility.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const surgeons = [
    // {
    //   name: 'Dr. Harit Chaturvedi ',
    //   specialty: 'Cancer Care / Oncology, Thoracic Oncology, Surgical Oncology, Robotic Surgery, Head & Neck Oncology Breast Cancer',
    //   experience: '35+ Years',
    //   education: 'M. Ch. (Surgical Oncology) – Dr. M.G.R Medical University, Chennai, India, M.B.B.S & M.S – G.S.V.M Medical College, Kanpur, India',
    //   image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=300'
    // },
    {
      name: 'Dr. Harit Chaturvedi',
      specialty: 'Head & Neck Oncology, Breast Cancer',
      experience: '35+ Years',
      education: 'M.B.B.S & M.S – G.S.V.M Medical College, Kanpur, India',
      image: hari
    },
    {
      name: 'Prof (Dr.) Subhash Gupta',
      specialty: 'Liver Transplant and Biliary Sciences, Robotic Surgery',
      experience: '36+ Years',
      education: 'All India Institute of Medical Sciences, New Delhic',
      image: subash
    },
    {
      name: 'Dr. S.K.M. Marya',
      specialty: 'Orthopaedics & Joint Replacement, Arthroscopy & Sports Injury, Robotic Surgery',
      experience: '40+ Years',
      education: 'MCh (Orth) University of Liverpool, UK',
      image: skm
    },   {
      name: 'Dr. Surender Kumar Dabas',
      specialty: 'Robotic Scarless Head & Neck Cancer Surgery',
      experience: '15+ Years',
      education: 'MBBS, MS (General Surgery), DNB (Surgical Oncology)',
      image:surender
    },
    {
      name: 'Dr. Pradeep Chowbey',
      specialty: 'Institute of Laparoscopic,Endoscopic & Bariatric Surgery, Robotic Surgery',
      experience: '49+ Years',
      education: 'FMAS, FALS, FIAGES, FACS, FICS, FAIS, FIMSA, FRCS (London), MNAMS, MBBS, MS (Jabalpur Medical College',
      image: pradeep
    },
    {
      name: 'Dr. Anant Kumar',
      specialty: 'Urology Renal Transplant and Robotics of Max Saket Complex and Uro-Oncology of MSSH Saket Urology, Kidney Transplant, Robotic Surgery',
      experience: '38+ Years',
      education: 'M.B.B.S DNB.MS.MCH.',
      image: anant
    },
    {
      name: 'Dr. Abhideep Chaudhary',
      specialty: 'Liver Transplant and Biliary Sciences, Robotic Surgery',
      experience: '20+ Years',
      education: 'MBBS.MS.FACS.FAIS.FRCS .(Glasgow)',
      image: abhideep
    },
      {
      name: 'Dr. Rajneesh Malhotra',
      specialty: 'M.B.B.S. & M.S (General Surgery), King George’s Medical College, Lucknow',
      experience: '33+ Years',
      education: 'MBBS.MS.FACS.FAIS.FRCS .(Glasgow)',
      image: ranjeesh
    }
  ];

    const handleVisaSelect = (visa) => {
    setSelectedVisa(visa);
    setIsDropdownOpen(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${images[current]})`,
            // backgroundImage: 'url(aims)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The Future of
              <span className="block text-blue-300">Minimally Invasive Surgery</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Experience the precision of robotic surgery with faster recovery, minimal scarring, 
              and exceptional outcomes. Our world-class surgeons utilize state-of-the-art technology 
              to provide the best possible care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/appointment"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Robotic Surgery */}
      {/* <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Robotic Surgery?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Robotic surgery represents the pinnacle of surgical innovation, combining the precision 
                of advanced robotics with the expertise of our skilled surgeons to deliver superior 
                patient outcomes.
              </p>
              <div className="space-y-4">
                {[
                  'Smaller incisions and minimal scarring',
                  'Reduced pain and faster recovery times',
                  'Enhanced precision with 3D visualization',
                  'Lower risk of complications and infections',
                  'Shorter hospital stays',
                  'Quicker return to normal activities'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/4386334/pexels-photo-4386334.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Robotic Surgery"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section> */}
 <div className="bg-white py-12 px-6 md:px-20">
      {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Common Diseases We Help Manage
      </h2> */}


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {diseases.map((disease, index) => (
          <div
            key={index}
           className={`${colors[index % colors.length]} text-white hover:text-black font-medium text-center py-4 px-2 rounded-xl shadow-md transition-all duration-300 cursor-pointer`}
          >
            {disease}
          </div>
        ))}
      </div>
    </div>


      {/* Our Specialties */}
      <section id="specialties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
             About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive robotic surgery services across multiple specialties, 
              each backed by years of experience and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const IconComponent = specialty.icon;
              return (
                <Link
                  key={specialty.id}
                  to={`/specialty/${specialty.id}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={specialty.image}
                      alt={specialty.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {specialty.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

  

      {/* Patient Testimonials */}
       <section  id='service' className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive visa and immigration services designed to make your journey smooth and successful.
          </p>
          
          {/* Visa Dropdown */}
          <div className="max-w-md mx-auto relative">
            <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Select Your Visa Type
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <span className="flex items-center">
                  {selectedVisa ? (
                    <>
                      <span className="mr-2 text-lg">
                        {visaOptions.find(v => v.value === selectedVisa)?.icon}
                      </span>
                      <span className="text-gray-900">
                        {visaOptions.find(v => v.value === selectedVisa)?.label}
                      </span>
                    </>
                  ) : (
                    <span className="text-gray-500">Choose your visa type...</span>
                  )}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {visaOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleVisaSelect(option.value)}
                      className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span className="mr-3 text-lg">{option.icon}</span>
                      <span className="text-gray-900">{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center group hover:scale-105 transform "
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-50 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Visa Info */}
        {selectedVisa && (
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-blue-600">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">
                  {visaOptions.find(v => v.value === selectedVisa)?.icon}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {visaOptions.find(v => v.value === selectedVisa)?.label} Selected
                </h3>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Great choice! Our expert team will guide you through the entire {' '}
                {visaOptions.find(v => v.value === selectedVisa)?.label.toLowerCase()} application process.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-800">Expert Consultation</span>
                </div>
                <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-800">Document Review</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-50 px-4 py-2 rounded-full">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-purple-800">Quick Processing</span>
                </div>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started Now
              </button>
            </div>
          </div>
        )}
      </div>
    </section>



      {/* Meet Our Surgeons */}
      <section id="surgeons" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Surgeons
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team consists of board-certified surgeons who are leaders in robotic surgery 
              and committed to providing exceptional patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {surgeons.map((surgeon, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={surgeon.image}
                    alt={surgeon.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{surgeon.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{surgeon.specialty}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Experience:</strong> {surgeon.experience}</p>
                    <p><strong>Education:</strong> {surgeon.education}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards better health with a consultation. 
            Our team is here to answer your questions and guide you through your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </Link>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <Phone className="h-5 w-5" />
              <span>Call (123) 456-7890</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;