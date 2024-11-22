import projects from '../data/projects.json';

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.title} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p>{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Veja mais
          </a>
          <ul className="flex gap-2 mt-2">
            {project.techs.map((tech) => (
              <li key={tech} className="px-2 py-1 bg-gray-200 rounded">{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
