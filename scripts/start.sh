echo "Creating svelte-supabase..."
npm create svelte@latest svelte-supabase
cd svelte-supabase
echo "Installing deps for svelte-supabase..."
npm install
echo "Installing backend for svelte-supabase..."
npm install @supabase/supabase-js
touch .env
echo "Backend .env created for svelte-supabase..."
echo "Starting svelte-supabase development server..."
code .
