import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { Home, Code2, Cloud, HelpCircle, Settings, Phone, LogOut } from 'lucide-react';
import images from '../../constants/images';
import { useState } from 'react';

export function Sidebar({ className }) {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [imageError, setImageError] = useState(false);

  return (
    <div className="pb-12 min-h-screen border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center h-12 mb-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                {!imageError ? (
                  <img 
                    src={images.codeant}
                    alt="CodeAnt AI Logo" 
                    className="h-8 w-8 object-contain"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="h-8 w-8 bg-primary/10 rounded-md flex items-center justify-center">
                    <Code2 className="h-5 w-5" />
                  </div>
                )}
              </div>
              <span className="text-xl font-bold">CodeAnt AI</span>
            </Link>
          </div>
          <div className="mb-4">
            <Button variant="ghost" className="w-full justify-start font-normal">
              {user?.name}
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              variant={location.pathname === "/" ? "secondary" : "ghost"}
              className="w-full justify-start"
              as={Link}
              to="/"
            >
              <Home className="mr-2 h-4 w-4" />
              Repositories
            </Button>
            <Button
              variant={location.pathname === "/code-review" ? "secondary" : "ghost"}
              className="w-full justify-start"
              as={Link}
              to="/code-review"
            >
              <Code2 className="mr-2 h-4 w-4" />
              AI Code Review
            </Button>
            <Button
              variant={location.pathname === "/security" ? "secondary" : "ghost"}
              className="w-full justify-start"
              as={Link}
              to="/security"
            >
              <Cloud className="mr-2 h-4 w-4" />
              Cloud Security
            </Button>
            <Button
              variant={location.pathname === "/help" ? "secondary" : "ghost"}
              className="w-full justify-start"
              as={Link}
              to="/help"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              How to Use
            </Button>
            <Button
              variant={location.pathname === "/settings" ? "secondary" : "ghost"}
              className="w-full justify-start"
              as={Link}
              to="/settings"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
          <div className="fixed bottom-4 space-y-1 w-[calc(280px-24px)]">
            <Button
              variant="ghost"
              className="w-full justify-start"
              as={Link}
              to="/support"
            >
              <Phone className="mr-2 h-4 w-4" />
              Support
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-500"
              onClick={() => logout()}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

