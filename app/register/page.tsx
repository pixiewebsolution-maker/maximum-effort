import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-heading font-bold uppercase text-center mb-2">Create Account</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Join the community</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">First Name</label>
              <input 
                type="text" 
                required 
                className="w-full p-4 bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Last Name</label>
              <input 
                type="text" 
                required 
                className="w-full p-4 bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-colors"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required 
              className="w-full p-4 bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              required 
              className="w-full p-4 bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-colors"
            />
          </div>
          
          <Button variant="primary" className="w-full">Create Account</Button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-gray-500">Already have an account? </span>
          <Link href="/login" className="font-bold border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
