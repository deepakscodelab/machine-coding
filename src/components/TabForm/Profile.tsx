type DataProps = {
  name: string;
  age: number;
  email: string;
};

export function Profile({
  data,
  setData,
  errors,
}: {
  data: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps>>;
}) {
  const { name, email, age } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData: DataProps) => ({
      ...prevData,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>
    </div>
  );
}
