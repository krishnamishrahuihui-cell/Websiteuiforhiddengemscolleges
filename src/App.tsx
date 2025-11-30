import { useState } from 'react';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults';
import { CollegeDetail } from './components/CollegeDetail';
import { ForColleges } from './components/ForColleges';
import { Contact } from './components/Contact';

export type Page = 'home' | 'search' | 'college-detail' | 'for-colleges' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCollege, setSelectedCollege] = useState<number | null>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'search':
        return <SearchResults onNavigate={setCurrentPage} onSelectCollege={(id) => {
          setSelectedCollege(id);
          setCurrentPage('college-detail');
        }} />;
      case 'college-detail':
        return <CollegeDetail onNavigate={setCurrentPage} collegeId={selectedCollege || 1} />;
      case 'for-colleges':
        return <ForColleges onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderPage()}
    </div>
  );
}
