import type Competition from '../models/Competition';

interface CompetitionCardProps {
  competition: Competition;
}

export default function CompetitionCard({ competition }: CompetitionCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{competition.title}</h3>
      <p className="text-sm text-gray-600 mb-2">Platform: {competition.platform}</p>
      <p className="mb-4">{competition.description}</p>
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500">
          Deadline: {new Date(competition.deadline).toLocaleDateString()}
        </div>
        <div className="text-sm text-gray-500">
          Posted by: {competition.createdBy.name}
        </div>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => window.location.href = `mailto:${competition.createdBy.email}?subject=Regarding ${competition.title}`}
        >
          Contact Team
        </button>
      </div>
    </div>
  );
}