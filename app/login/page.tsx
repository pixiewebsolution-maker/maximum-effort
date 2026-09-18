import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-heading font-bold uppercase text-center mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Sign in to your account</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required 
              className="w-full p-4 bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-700">Password</label>
              <Link href="/forgot-password" className="text-xs font-bold text-gray-500 hover:text-black transition-colors">
                Forgot Password?
              </Link>
            </div>
            <input 
              type="password" 
              required 
              className="w-full p-4 bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <Button variant="primary" className="w-full">Sign In</Button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-500">Don't have an account? </span>
          <Link href="/register" className="font-bold border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
