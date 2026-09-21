import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-heading font-bold uppercase text-center mb-2">Reset Password</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Enter your email to receive a reset link</p>
        
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
          
          <Button variant="primary" className="w-full">Send Reset Link</Button>
        </form>

        <div className="mt-8 text-center text-sm">
          <Link href="/login" className="font-bold border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
