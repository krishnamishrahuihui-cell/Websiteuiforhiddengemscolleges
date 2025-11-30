import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Page } from '../App';
import { MapPin, Wifi, Home, Bus, FlaskConical, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

interface CollegeDetailProps {
  onNavigate: (page: Page) => void;
  collegeId: number;
}

const collegeData = {
  name: "Shree Samarth Institute of Technology",
  city: "Nashik",
  state: "Maharashtra",
  tagline: "Building careers through quality education since 2012",
  overview: "Shree Samarth Institute of Technology is a private engineering college affiliated with Savitribai Phule Pune University. We focus on providing affordable, quality technical education with a strong emphasis on practical learning and industry exposure. Our small class sizes ensure individual attention to every student.",
  highlights: [
    "AICTE Approved",
    "Affiliated to SPPU",
    "98% Pass Rate",
    "Placement Cell Active",
  ],
  courses: [
    { name: "B.Tech Computer Science", duration: "4 Years", fees: "₹45,000/year", seats: "60" },
    { name: "B.Tech Mechanical Engineering", duration: "4 Years", fees: "₹42,000/year", seats: "60" },
    { name: "B.Tech Electronics & Communication", duration: "4 Years", fees: "₹43,000/year", seats: "30" },
    { name: "MBA", duration: "2 Years", fees: "₹55,000/year", seats: "30" },
  ],
  facilities: [
    { icon: Home, name: "Hostel", available: true },
    { icon: Wifi, name: "WiFi Campus", available: true },
    { icon: Bus, name: "Transport", available: true },
    { icon: FlaskConical, name: "Modern Labs", available: true },
    { icon: BookOpen, name: "Library", available: true },
    { icon: Briefcase, name: "Placement Cell", available: true },
  ],
  placements: {
    percentage: "65%",
    averagePackage: "₹2.8 LPA",
    companies: ["TCS", "Infosys", "Wipro", "Tech Mahindra", "Capgemini", "Local Industries"],
  }
};

export function CollegeDetail({ onNavigate, collegeId }: CollegeDetailProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'facilities' | 'placements'>('overview');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    percentage: '',
    course: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        percentage: '',
        course: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} currentPage="search" />

      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-2">{collegeData.name}</h1>
          <div className="flex items-center text-blue-100 mb-3">
            <MapPin size={18} className="mr-2" />
            <span>{collegeData.city}, {collegeData.state}</span>
          </div>
          <p className="text-blue-100">{collegeData.tagline}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
              <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-4 whitespace-nowrap transition-colors ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('courses')}
                    className={`px-6 py-4 whitespace-nowrap transition-colors ${
                      activeTab === 'courses'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Courses & Fees
                  </button>
                  <button
                    onClick={() => setActiveTab('facilities')}
                    className={`px-6 py-4 whitespace-nowrap transition-colors ${
                      activeTab === 'facilities'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Facilities
                  </button>
                  <button
                    onClick={() => setActiveTab('placements')}
                    className={`px-6 py-4 whitespace-nowrap transition-colors ${
                      activeTab === 'placements'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Placements
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-gray-900 mb-4">About College</h2>
                      <p className="text-gray-700 leading-relaxed">
                        {collegeData.overview}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-gray-900 mb-4">Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {collegeData.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Courses Tab */}
                {activeTab === 'courses' && (
                  <div>
                    <h2 className="text-gray-900 mb-6">Available Courses</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-gray-700">Course Name</th>
                            <th className="px-4 py-3 text-left text-gray-700">Duration</th>
                            <th className="px-4 py-3 text-left text-gray-700">Annual Fees</th>
                            <th className="px-4 py-3 text-left text-gray-700">Seats</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {collegeData.courses.map((course, index) => (
                            <tr key={index}>
                              <td className="px-4 py-4 text-gray-900">{course.name}</td>
                              <td className="px-4 py-4 text-gray-700">{course.duration}</td>
                              <td className="px-4 py-4 text-blue-600">{course.fees}</td>
                              <td className="px-4 py-4 text-gray-700">{course.seats}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Facilities Tab */}
                {activeTab === 'facilities' && (
                  <div>
                    <h2 className="text-gray-900 mb-6">Campus Facilities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {collegeData.facilities.map((facility, index) => {
                        const Icon = facility.icon;
                        return (
                          <div key={index} className="text-center">
                            <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                              facility.available ? 'bg-green-100' : 'bg-gray-100'
                            }`}>
                              <Icon size={28} className={facility.available ? 'text-green-600' : 'text-gray-400'} />
                            </div>
                            <div className="text-gray-900 text-sm">{facility.name}</div>
                            <div className={`text-xs mt-1 ${facility.available ? 'text-green-600' : 'text-gray-500'}`}>
                              {facility.available ? 'Available' : 'Not Available'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Placements Tab */}
                {activeTab === 'placements' && (
                  <div className="space-y-6">
                    <h2 className="text-gray-900 mb-6">Placement Statistics</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <div className="text-gray-600 mb-2">Placement Percentage</div>
                        <div className="text-blue-600">{collegeData.placements.percentage}</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-6">
                        <div className="text-gray-600 mb-2">Average Package</div>
                        <div className="text-green-600">{collegeData.placements.averagePackage}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-gray-900 mb-4">Recruiting Companies</h3>
                      <div className="flex flex-wrap gap-3">
                        {collegeData.placements.companies.map((company, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sticky Enquiry Form */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <GraduationCap className="text-blue-600" size={24} />
                <h2 className="text-gray-900">Request Information</h2>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-4xl mb-3">✓</div>
                  <h3 className="text-green-900 mb-2">Thank you!</h3>
                  <p className="text-green-700 text-sm">
                    Your enquiry has been submitted. Our team will connect you with the college within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+91"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Class 12 Percentage</label>
                    <input
                      type="text"
                      value={formData.percentage}
                      onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. 65%"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-sm">Interested Course *</label>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a course</option>
                      {collegeData.courses.map((course, index) => (
                        <option key={index} value={course.name}>{course.name}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Request Info
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    Leads will be manually connected by our team within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
