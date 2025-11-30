import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Page } from '../App';
import { CollegeCard } from './CollegeCard';
import { SlidersHorizontal, X } from 'lucide-react';

interface SearchResultsProps {
  onNavigate: (page: Page) => void;
  onSelectCollege: (id: number) => void;
}

const allColleges = [
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
  {
    id: 4,
    name: "Bright Future Institute of Management",
    city: "Nagpur",
    state: "Maharashtra",
    badge: "Seats Available",
    courses: ["MBA", "BBA", "B.Com"],
    startingFees: "₹48,000/year",
  },
  {
    id: 5,
    name: "Sunrise College of Engineering & Technology",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    badge: "Hidden Gem",
    courses: ["B.Tech CSE", "B.Tech IT", "MCA"],
    startingFees: "₹42,000/year",
  },
  {
    id: 6,
    name: "Royal Institute of Science & Commerce",
    city: "Bhopal",
    state: "Madhya Pradesh",
    badge: "New",
    courses: ["B.Sc", "B.Com", "BCA"],
    startingFees: "₹38,000/year",
  },
];

export function SearchResults({ onNavigate, onSelectCollege }: SearchResultsProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    state: '',
    city: '',
    minFees: 0,
    maxFees: 200000,
    courses: [] as string[],
    hostel: '',
    placement: '',
  });

  const toggleCourse = (course: string) => {
    setFilters(prev => ({
      ...prev,
      courses: prev.courses.includes(course)
        ? prev.courses.filter(c => c !== course)
        : [...prev.courses, course]
    }));
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-gray-900 mb-3">Location</h3>
        <select
          value={filters.state}
          onChange={(e) => setFilters({ ...filters, state: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        >
          <option value="">All States</option>
          <option value="maharashtra">Maharashtra</option>
          <option value="karnataka">Karnataka</option>
          <option value="tamil-nadu">Tamil Nadu</option>
          <option value="andhra-pradesh">Andhra Pradesh</option>
          <option value="madhya-pradesh">Madhya Pradesh</option>
        </select>
        <select
          value={filters.city}
          onChange={(e) => setFilters({ ...filters, city: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Cities</option>
          <option value="nashik">Nashik</option>
          <option value="indore">Indore</option>
          <option value="nellore">Nellore</option>
          <option value="nagpur">Nagpur</option>
          <option value="vijayawada">Vijayawada</option>
          <option value="bhopal">Bhopal</option>
        </select>
      </div>

      <div>
        <h3 className="text-gray-900 mb-3">Fees Range</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="200000"
            step="10000"
            value={filters.maxFees}
            onChange={(e) => setFilters({ ...filters, maxFees: Number(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹0</span>
            <span>₹{filters.maxFees.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-3">Courses</h3>
        <div className="space-y-2">
          {['B.Tech', 'BCA', 'B.Com', 'BBA', 'MBA', 'B.Sc'].map((course) => (
            <label key={course} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.courses.includes(course)}
                onChange={() => toggleCourse(course)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">{course}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-3">Hostel Available</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="hostel"
              value="yes"
              checked={filters.hostel === 'yes'}
              onChange={(e) => setFilters({ ...filters, hostel: e.target.value })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">Yes</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="hostel"
              value="no"
              checked={filters.hostel === 'no'}
              onChange={(e) => setFilters({ ...filters, hostel: e.target.value })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">No</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="hostel"
              value=""
              checked={filters.hostel === ''}
              onChange={(e) => setFilters({ ...filters, hostel: e.target.value })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">Any</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-gray-900 mb-3">Placement Assistance</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="placement"
              value="yes"
              checked={filters.placement === 'yes'}
              onChange={(e) => setFilters({ ...filters, placement: e.target.value })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">Yes</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="placement"
              value="no"
              checked={filters.placement === 'no'}
              onChange={(e) => setFilters({ ...filters, placement: e.target.value })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">No</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="placement"
              value=""
              checked={filters.placement === ''}
              onChange={(e) => setFilters({ ...filters, placement: e.target.value })}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">Any</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigate={onNavigate} currentPage="search" />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-gray-900 mb-2">Find Your College</h1>
          <p className="text-gray-600">
            {allColleges.length} underrated colleges waiting to welcome you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900">Filters</h2>
                <button 
                  onClick={() => setFilters({
                    state: '',
                    city: '',
                    minFees: 0,
                    maxFees: 200000,
                    courses: [],
                    hostel: '',
                    placement: '',
                  })}
                  className="text-blue-600 text-sm hover:text-blue-700"
                >
                  Clear All
                </button>
              </div>
              <FilterSection />
            </div>
          </div>

          {/* Mobile Filters Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="w-full bg-white rounded-lg shadow-md px-4 py-3 flex items-center justify-center space-x-2 text-gray-700"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Mobile Filters Modal */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
              <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-gray-900">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X size={24} className="text-gray-700" />
                  </button>
                </div>
                <FilterSection />
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-6"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allColleges.map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  onViewDetails={() => onSelectCollege(college.id)}
                  onEnquire={() => onSelectCollege(college.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
