import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://YOUR_SUPABASE_URL.supabase.co",
  "YOUR_SUPABASE_ANON_KEY"
);

const ContentManager = () => {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else setUser(data.user);
  };

  if (!user) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-slate-800 p-8 rounded shadow-lg text-center">
          <h2 className="text-xl font-bold mb-4">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border px-4 py-2 rounded mb-2 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border px-4 py-2 rounded mb-4 w-full"
          />
          <button
            onClick={signIn}
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ...rest of your content manager code...
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Content Manager</h1>
      {/* Your content management UI here */}
    </div>
  );
};

export default ContentManager;