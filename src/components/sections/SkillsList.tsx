import { Skill } from '@/types';

interface SkillsListProps {
  skills: Skill[];
}

interface CategorySectionProps {
  title: string;
  skillsList: Skill[];
}

function CategorySection({ title, skillsList }: CategorySectionProps) {
  if (skillsList.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skillsList.map((skill) => (
          <span
            key={skill.name}
            className="px-4 py-2 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-700 font-medium text-sm hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsList({ skills }: SkillsListProps) {
  const categories = {
    frontend: skills.filter((skill) => skill.category === 'frontend'),
    backend: skills.filter((skill) => skill.category === 'backend'),
    tools: skills.filter((skill) => skill.category === 'tools'),
    other: skills.filter((skill) => skill.category === 'other'),
  };

  return (
    <div className="space-y-8">
      <CategorySection title="Frontend" skillsList={categories.frontend} />
      <CategorySection title="Backend" skillsList={categories.backend} />
      <CategorySection title="Tools & Technologies" skillsList={categories.tools} />
      {categories.other.length > 0 && (
        <CategorySection title="Other" skillsList={categories.other} />
      )}
    </div>
  );
}
