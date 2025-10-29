import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkWithMePage from './pages/WorkWithMePage';
import CoursesPage from './pages/CoursesPage';
import FreeResourcePage from './pages/FreeResourcePage';

type Page = 'home' | 'work-with-me' | 'courses' | 'free-resource';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'work-with-me':
        return <WorkWithMePage />;
      case 'courses':
        return <CoursesPage />;
      case 'free-resource':
        return <FreeResourcePage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
