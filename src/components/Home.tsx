import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Page } from '../App';
import { Search, DollarSign, Building2, Users, Heart, ChevronRight, ChevronLeft } from 'lucide-react';
import { CollegeCard } from './CollegeCard';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const featuredColleges = [
  {
    id: 1,
    name: "Shree Samarth Institute of Technology",
    city: "Nashik",
    state: "Maharashtra",
    badge: "Hidden Gem",
    courses: ["B.Tech CSE", "B.Tech Mech", "MBA"],
    startingFees: "₹45,000/year",
  },
  {
    id: 2,
    name: "St. Anthony's College of Engineering",
    city: "Nellore",
    state: "Andhra Pradesh",
    badge: "Seats Available",
    courses: ["B.Tech ECE", "B.Tech Civil", "BBA"],
    startingFees: "₹52,000/year",
  },
  {
    id: 3,
    name: "Green Valley College of Commerce",
    city: "Indore",
    state: "Madhya Pradesh",
    badge: "New",
    courses: ["B.Com", "BCA", "BA Economics"],
    startingFees: "₹35,000/year",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    course: "B.Tech CSE, 2nd Year",
    college: "Nashik, Maharashtra",
    text: "I didn't get into the big colleges, but HiddenGems helped me find a place where teachers actually care. My college may not be famous, but I'm learning well.",
  },
  {
    name: "Rahul Patel",
    course: "BCA, 3rd Year",
    college: "Indore, MP",
    text: "Affordable fees, decent labs, and real support. This platform showed me colleges I never knew existed. No regrets!",
  },
  {
    name: "Anjali Singh",
    course: "B.Com, 1st Year",
    college: "Nellore, AP",
    text: "My parents were worried about fees. HiddenGems helped us find a good college within our budget. Thank you!",
  },
];

export function Home({ onNavigate }: HomeProps) {
  const [searchFilters, setSearchFilters] = useState({
    state: '',
    city: '',
    course: '',
    budget: '',
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSearch = () => {
    onNavigate('search');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={onNavigate} currentPage="home" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-white/90 text-sm font-medium">🎓 Discover Your Perfect College Match</span>
            </div>
            
            <h1 className="text-white mb-8 leading-tight">
              Find colleges that believe in you, not just your rank.
            </h1>
            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              We list only underrated private colleges. No IIT. No NIT. No big names overshadowing real opportunities.
            </p>

            {/* Enhanced Search Bar */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 backdrop-blur-xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <select
                  value={searchFilters.state}
                  onChange={(e) => setSearchFilters({ ...searchFilters, state: e.target.value })}
                  className="px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 font-medium transition-all hover:border-gray-300"
                >
                  <option value="">Select State</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="madhya-pradesh">Madhya Pradesh</option>
                </select>

                <select
                  value={searchFilters.city}
                  onChange={(e) => setSearchFilters({ ...searchFilters, city: e.target.value })}
                  className="px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 font-medium transition-all hover:border-gray-300"
                >
                  <option value="">Select City</option>
                  <option value="nashik">Nashik</option>
                  <option value="indore">Indore</option>
                  <option value="nellore">Nellore</option>
                  <option value="nagpur">Nagpur</option>
                </select>

                <select
                  value={searchFilters.course}
                  onChange={(e) => setSearchFilters({ ...searchFilters, course: e.target.value })}
                  className="px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 font-medium transition-all hover:border-gray-300"
                >
                  <option value="">Select Course</option>
                  <option value="btech">B.Tech</option>
                  <option value="bca">BCA</option>
                  <option value="bcom">B.Com</option>
                  <option value="bba">BBA</option>
                  <option value="mba">MBA</option>
                </select>

                <select
                  value={searchFilters.budget}
                  onChange={(e) => setSearchFilters({ ...searchFilters, budget: e.target.value })}
                  className="px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 font-medium transition-all hover:border-gray-300"
                >
                  <option value="">Budget Range</option>
                  <option value="0-50000">₹0 - ₹50,000</option>
                  <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                  <option value="100000-150000">₹1,00,000 - ₹1,50,000</option>
                </select>

                <button 
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center space-x-2 shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 font-semibold"
                >
                  <Search size={22} />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Only Underrated Colleges */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </div>
            <h2 className="text-gray-900 mb-6">Why only underrated colleges?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Not everyone gets into top-tier colleges. But that doesn't mean you should settle for less than you deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <DollarSign size={36} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 font-bold">Affordable Fees</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Quality education without breaking your family's budget.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30 group-hover:scale-110 transition-transform">
                <Building2 size={36} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 font-bold">Decent Facilities</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Modern labs, libraries, and infrastructure that support learning.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-amber-50 to-yellow-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-200">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/30 group-hover:scale-110 transition-transform">
                <Users size={36} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 font-bold">Less Competition</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Better chances of admission and more individual attention.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-violet-100 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <Heart size={36} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-3 font-bold">Genuine Support</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Colleges that truly care about student success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Top underrated picks of the week</h2>
            <p className="text-gray-600">
              Hand-picked colleges that deserve your attention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredColleges.map((college) => (
              <CollegeCard 
                key={college.id} 
                college={college} 
                onViewDetails={() => onNavigate('college-detail')}
                onEnquire={() => onNavigate('college-detail')}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={handleSearch}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Colleges</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Simple Process
            </div>
            <h2 className="text-gray-900 mb-6">How It Works</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Simple, transparent, and student-first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line - Desktop Only */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200"></div>
            
            <div className="relative text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/30 relative z-10">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-gray-900 mb-4 font-bold">Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse colleges by location, course, and budget. All verified listings.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30 relative z-10">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-gray-900 mb-4 font-bold">Shortlist</h3>
              <p className="text-gray-600 leading-relaxed">
                Compare facilities, fees, and courses. Find colleges that match your needs.
              </p>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/30 relative z-10">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-gray-900 mb-4 font-bold">Enquire</h3>
              <p className="text-gray-600 leading-relaxed">
                Submit your details. We'll connect you with the college within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Student Success
            </div>
            <h2 className="text-gray-900 mb-6">What students say</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Real stories from students who found their path
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg mb-8 italic leading-relaxed">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600 font-medium">{testimonials[currentTestimonial].course}</div>
                  <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].college}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 border border-gray-100"
            >
              <ChevronLeft size={24} className="text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 border border-gray-100"
            >
              <ChevronRight size={24} className="text-gray-700" />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white mb-6 leading-tight">
            Ready to find your college?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Start exploring colleges that value you for who you are, not just your marks.
          </p>
          <button 
            onClick={handleSearch}
            className="bg-white text-blue-600 px-10 py-4 rounded-2xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 font-bold text-lg inline-flex items-center space-x-2"
          >
            <span>Find Colleges Now</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}