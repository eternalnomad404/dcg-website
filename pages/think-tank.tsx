import { useSession } from 'next-auth/react';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ThinkTank = () => {
  const { data: session } = useSession();
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data, error } = await supabase
        .from('ideas')
        .select('*');

      if (error) console.error('Error fetching ideas:', error);
      else setIdeas(data);
    };

    fetchIdeas();
  }, []);

  return (
    <div>
      <h1>Think Tank</h1>
      {session ? (
        <div>
          <h2>Welcome, {session.user.name}</h2>
          <ul>
            {ideas.map((idea) => (
              <li key={idea.id}>{idea.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Please log in to view ideas.</p>
      )}
    </div>
  );
};

export default ThinkTank;
