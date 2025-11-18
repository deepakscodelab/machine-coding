export function Settings({ data, setData }) {
  const { theme } = data;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevData) => ({ ...prevData, theme: e.target.value }));
  };

  return (
    <div>
      <div>
        <label htmlFor="dark">Dark</label>
        <input
          type="radio"
          id="dark"
          name="theme"
          value="dark"
          onChange={handleChange}
          checked={theme === "dark" ? true : false}
        />
      </div>
      <div>
        <label htmlFor="light">Light</label>
        <input
          type="radio"
          id="light"
          name="theme"
          value="light"
          onChange={handleChange}
          checked={theme === "light" ? true : false}
        />
      </div>
    </div>
  );
}
