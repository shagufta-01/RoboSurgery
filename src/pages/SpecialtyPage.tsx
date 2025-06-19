import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Users, Award, Calendar, Phone } from 'lucide-react';

const SpecialtyPage = () => {
  const { specialtyId } = useParams();

  const specialtyData = {
    'head-neck': {
      name: 'Robotic Head & Neck Surgery',
      description: 'Advanced robotic surgery for head and neck conditions offers unprecedented precision in treating complex cases while preserving critical functions.',
      hero: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1200',
      procedures: [
        'Robotic Thyroidectomy',
        'Transoral Robotic Surgery (TORS)',
        'Robotic Neck Dissection',
        'Robotic Parotidectomy',
        'Robotic Tongue Base Resection'
      ],
      benefits: [
        'Minimal scarring with hidden incisions',
        'Reduced risk of nerve damage',
        'Faster recovery and healing',
        'Preserved voice and swallowing function',
        'Enhanced surgical precision'
      ],
      stats: [
        { number: '95%', label: 'Patient Satisfaction' },
        { number: '50%', label: 'Faster Recovery' },
        { number: '90%', label: 'Reduced Scarring' }
      ]
    },
    'urology': {
      name: 'Robotic Urology',
      description: 'Our robotic urology program offers minimally invasive treatments for prostate, kidney, and bladder conditions with superior outcomes.',
      hero: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
      procedures: [
        'Robotic Prostatectomy',
        'Robotic Partial Nephrectomy',
        'Robotic Pyeloplasty',
        'Robotic Cystectomy',
        'Robotic Ureteral Reimplantation'
      ],
      benefits: [
        'Minimal blood loss',
        'Reduced post-operative pain',
        'Shorter hospital stay',
        'Better functional outcomes',
        'Faster return to normal activities'
      ],
      stats: [
        { number: '98%', label: 'Cancer Control Rate' },
        { number: '85%', label: 'Continence Preservation' },
        { number: '2-3', label: 'Days Hospital Stay' }
      ]
    },
    'gi': {
      name: 'Robotic GI Surgery',
      description: 'Robotic gastrointestinal surgery provides precise treatment for digestive system disorders with minimal invasiveness.',
      hero: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200',
      procedures: [
        'Robotic Colectomy',
        'Robotic Fundoplication',
        'Robotic Whipple Procedure',
        'Robotic Hernia Repair',
        'Robotic Gastric Bypass'
      ],
      benefits: [
        'Smaller incisions',
        'Less post-operative pain',
        'Reduced scarring',
        'Faster bowel function recovery',
        'Lower infection rates'
      ],
      stats: [
        { number: '92%', label: 'Patient Satisfaction' },
        { number: '40%', label: 'Reduced Recovery Time' },
        { number: '75%', label: 'Less Pain Medication' }
      ]
    },
    'gynecology': {
      name: 'Robotic Gynecologic Surgery',
      description: 'Advanced robotic surgery for women\'s health conditions offers precise treatment with minimal disruption to daily life.',
      hero: 'https://images.pexels.com/photos/4173240/pexels-photo-4173240.jpeg?auto=compress&cs=tinysrgb&w=1200',
      procedures: [
        'Robotic Hysterectomy',
        'Robotic Myomectomy',
        'Robotic Endometriosis Treatment',
        'Robotic Ovarian Surgery',
        'Robotic Pelvic Reconstruction'
      ],
      benefits: [
        'Minimal scarring',
        'Preserved fertility when possible',
        'Reduced blood loss',
        'Shorter recovery time',
        'Better cosmetic results'
      ],
      stats: [
        { number: '96%', label: 'Patient Satisfaction' },
        { number: '60%', label: 'Faster Recovery' },
        { number: '90%', label: 'Minimal Scarring' }
      ]
    },
    'cardiology': {
      name: 'Robotic Cardiac Surgery',
      description: 'Robotic heart surgery combines precision technology with expert care for comprehensive cardiac treatment.',
      hero: 'https://images.pexels.com/photos/4173254/pexels-photo-4173254.jpeg?auto=compress&cs=tinysrgb&w=1200',
      procedures: [
        'Robotic Mitral Valve Repair',
        'Robotic CABG',
        'Robotic Atrial Septal Defect Repair',
        'Robotic Cardiac Tumor Removal',
        'Robotic Maze Procedure'
      ],
      benefits: [
        'Smaller chest incisions',
        'Reduced pain and trauma',
        'Lower infection risk',
        'Faster return to work',
        'Excellent cosmetic results'
      ],
      stats: [
        { number: '97%', label: 'Success Rate' },
        { number: '50%', label: 'Reduced Recovery Time' },
        { number: '95%', label: 'Patient Satisfaction' }
      ]
    },
    'orthopedics': {
      name: 'Robotic Orthopedic Surgery',
      description: 'Robotic-assisted joint replacement and orthopedic procedures for improved accuracy and outcomes.',
      hero: 'https://images.pexels.com/photos/4173254/pexels-photo-4173254.jpeg?auto=compress&cs=tinysrgb&w=1200',
      procedures: [
        'Robotic Knee Replacement',
        'Robotic Hip Replacement',
        'Robotic Spine Surgery',
        'Robotic Shoulder Surgery',
        'Robotic Foot & Ankle Surgery'
      ],
      benefits: [
        'Precise implant positioning',
        'Preserved healthy tissue',
        'Reduced pain',
        'Faster rehabilitation',
        'Improved joint function'
      ],
      stats: [
        { number: '98%', label: 'Implant Accuracy' },
        { number: '30%', label: 'Faster Recovery' },
        { number: '95%', label: 'Patient Satisfaction' }
      ]
    }
  };

  const currentSpecialty = specialtyData[specialtyId as keyof typeof specialtyData];

  if (!currentSpecialty) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Specialty Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${currentSpecialty.hero})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentSpecialty.name}
            </h1>
            <p className="text-xl text-blue-100">
              {currentSpecialty.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {currentSpecialty.stats.map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedures and Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Procedures */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Procedures</h2>
              <div className="space-y-4">
                {currentSpecialty.procedures.map((procedure, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{procedure}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
              <div className="space-y-4">
                {currentSpecialty.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for This Specialty */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us for {currentSpecialty.name}?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Board-certified specialists with extensive experience in robotic surgery.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art robotic systems for the most precise surgical care.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Recovery</h3>
              <p className="text-gray-600">Minimally invasive techniques mean quicker healing and return to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Learn More About {currentSpecialty.name}?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our specialists to discuss your options and learn how robotic surgery can benefit you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="h-5 w-5" />
              <span>Schedule Consultation</span>
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

export default SpecialtyPage;