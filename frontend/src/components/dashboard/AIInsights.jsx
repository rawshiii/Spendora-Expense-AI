import { Sparkles } from 'lucide-react';
import useInsights from '../../hooks/useInsights';

export default function AIInsights() {
  const insights = useInsights();

  return (
    <div
      className="
      bg-white
      border
      border-[#E5E7EB]
      rounded-3xl
      p-6
      shadow-sm
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-[#4F6F52]" />

        <h2 className="text-2xl font-bold text-[#1F2937]">
          AI Insights
        </h2>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="
            bg-[#EEF2EA]
            border
            border-[#E5E7EB]
            rounded-2xl
            p-4
            "
          >
            <p className="leading-relaxed">
  {insight}
</p>
          </div>
        ))}
      </div>
    </div>
  );
}