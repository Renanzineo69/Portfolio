import axios from "axios";
import { useEffect, useState } from "react";

// Tipo para representar os dados do repositório
type Repository = {
  id: number;
  name: string;
  html_url: string;
};

export default function GitHubStats() {
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/Renanzineo69/repos") // Certifique-se de usar a rota correta
      .then((res) => setRepos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Meus Repositórios</h2>
      <ul>
        {repos.slice(0, 5).map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
