import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { Key, Code2 } from 'lucide-react';
import { useState } from 'react';
import images from '../constants/images';

export function AuthPage() {
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState('saas');
  const [isLoading, setIsLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleLogin = async (provider) => {
    setIsLoading(true);
    try {
      await login(provider);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="relative h-8 w-8 mr-2">
            {!logoError ? (
              <img 
                src={images.codeant}
                alt="CodeAnt AI Logo" 
                className="h-8 w-8 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-8 w-8 bg-white/10 rounded-md flex items-center justify-center">
                <Code2 className="h-5 w-5" />
              </div>
            )}
          </div>
          CodeAnt AI
        </div>
        <div className="relative z-20 mt-auto flex items-center justify-center h-full">
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4 max-w-md">
              <h3 className="text-lg font-semibold text-center mb-4">AI to Detect & Autofix Bad Code</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-gray-600">Language Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-gray-600">Developers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">100K+</div>
                  <div className="text-sm text-gray-600">Hours Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <div className="mx-auto mb-4">
              {!logoError ? (
                <img 
                  src={images.codeant}
                  alt="CodeAnt AI Logo" 
                  className="h-12 w-12 object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-12 w-12 bg-primary/10 rounded-md flex items-center justify-center">
                  <Code2 className="h-8 w-8" />
                </div>
              )}
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome to CodeAnt AI</h1>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <Button
              variant={activeTab === 'saas' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('saas')}
              className="w-full"
            >
              SAAS
            </Button>
            <Button
              variant={activeTab === 'self-hosted' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('self-hosted')}
              className="w-full"
            >
              Self Hosted
            </Button>
          </div>
          {activeTab === 'saas' ? (
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg" 
                onClick={() => handleLogin('github')}
                isLoading={isLoading}
              >
                <img 
                  src={images.github}
                  alt="GitHub" 
                  className="mr-2 h-5 w-5 object-contain dark:invert" 
                />
                Sign in with Github
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg" 
                onClick={() => handleLogin('bitbucket')}
                isLoading={isLoading}
              >
                <img 
                  src={images.bitbucket}
                  alt="Bitbucket" 
                  className="mr-2 h-5 w-5 object-contain" 
                />
                Sign in with Bitbucket
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg" 
                onClick={() => handleLogin('azure')}
                isLoading={isLoading}
              >
                <img 
                  src={images.azure}
                  alt="Azure DevOps" 
                  className="mr-2 h-5 w-5 object-contain" 
                />
                Sign in with Azure DevOps
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg" 
                onClick={() => handleLogin('gitlab')}
                isLoading={isLoading}
              >
                <img 
                  src={images.gitlab}
                  alt="GitLab" 
                  className="mr-2 h-5 w-5 object-contain" 
                />
                Sign in with GitLab
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg" 
                onClick={() => handleLogin('gitlab-self')}
                isLoading={isLoading}
              >
                <img 
                  src={images.gitlab}
                  alt="GitLab" 
                  className="mr-2 h-5 w-5 object-contain" 
                />
                Self Hosted GitLab
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                size="lg" 
                onClick={() => handleLogin('sso')}
                isLoading={isLoading}
              >
                <Key className="mr-2 h-5 w-5" />
                Sign in with SSO
              </Button>
            </div>
          )}
          <p className="px-8 text-center text-sm text-gray-800">
            By signing up you agree to the{" "}
            <a href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

