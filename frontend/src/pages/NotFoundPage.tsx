import { Link } from 'react-router-dom';
import './styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <main>
      <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-home-link">
          Go Back to Homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;