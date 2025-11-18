export function Interest({ data, setData, errors }) {
  const { interests } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      interests: e.target.checked
        ? [...prevData.interests, value]
        : prevData.interests.filter((interest) => interest !== value),
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="coding">Coding</label>
        <input
          type="checkbox"
          id="coding"
          name="coding"
          value="coding"
          onChange={handleChange}
          checked={interests?.includes("coding")}
        />
      </div>
      <div>
        <label htmlFor="music">Music</label>
        <input
          type="checkbox"
          id="music"
          name="music"
          value="music"
          onChange={handleChange}
          checked={interests?.includes("music")}
        />
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
}
