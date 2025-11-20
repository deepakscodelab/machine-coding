import { useCallback, useEffect, useState } from "react";
import "./index.css";

type Recipe = {
  id: number;
  name: string;
};

export default function Autocomplete() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState<Recipe[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState<Map<string, Recipe[]>>(new Map());

  const fetchData = useCallback(
    async (term: string) => {
      if (!term) return;

      if (cache.has(term)) {
        console.log("----cache found----");
        setResults(cache.get(term) || []);
        return;
      }
      console.log("----no cache found----");
      try {
        const data = await fetch(
          `https://dummyjson.com/recipes/search?q=${term}`
        );
        const result = await data.json();
        setResults(result?.recipes || []);
        setCache((prevCache) =>
          new Map(prevCache).set(term, result?.recipes || [])
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [cache]
  );

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchData(value);
    }, 300);
    return () => clearTimeout(timerId);
  }, [fetchData, value]);

  console.log("Rendered with results:", results);

  return (
    <div className="autocomplete">
      <h1>Autocomplete search input</h1>
      <div>
        <input
          type="text"
          name="autosearch"
          value={value}
          className="search-input"
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />
      </div>
      {showResult && (
        <div className="result-container">
          {results.map((item) => (
            <span className="result" key={item.id}>
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
