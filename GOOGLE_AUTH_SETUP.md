# Google OAuth Setup with Supabase

This project now includes Google OAuth authentication using Supabase. Follow these steps to set it up:

## 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Authentication** → **Providers** in your Supabase dashboard
3. Enable **Google** provider
4. Copy your **Supabase URL** and **anon key** from **Settings** → **API**

## 2. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google+ API**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client IDs**
5. Set **Application type** to **Web application**
6. Add your Supabase callback URL to **Authorized redirect URIs**:
   ```
   https://your-project-ref.supabase.co/auth/v1/callback
   ```
7. Copy the **Client ID** and **Client Secret**

## 3. Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## 4. Supabase Google Provider Configuration

1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. Enable **Google** and add your:
   - **Client ID** (from Google Cloud Console)
   - **Client Secret** (from Google Cloud Console)

## 5. Database Setup (Optional - for user tracking)

Run this SQL in your Supabase SQL editor to create a user activity tracking table:

```sql
CREATE TABLE user_activity (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  last_sign_in_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_activity ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read their own data
CREATE POLICY "Users can view their own activity" ON user_activity
  FOR SELECT USING (auth.uid() = id);

-- Create policy for service role to insert/update
CREATE POLICY "Service role can manage user activity" ON user_activity
  FOR ALL USING (auth.role() = 'service_role');
```

## 6. Features Included

- **Google OAuth Login**: Users can sign in with their Google account
- **User Tracking**: Track which Gmail addresses have logged in
- **Responsive Design**: Login page matches your current design theme
- **Protected Routes**: Easy to extend for protecting specific pages
- **User Session Management**: Automatic session handling and persistence

## Usage

1. Click the "Log In" button in the navbar
2. Users are redirected to the login page
3. Click "Continue with Google" to authenticate
4. After successful login, users are redirected back to the home page
5. User info is displayed in the navbar with a sign-out option

The user tracking data can be viewed in the admin panel component (`UserTracker.tsx`) or directly in your Supabase dashboard.
