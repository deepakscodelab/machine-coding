import "./index.css";
import { Profile } from "./Profile";
import { Interest } from "./Interest";
import { Settings } from "./Settings";
import { useState } from "react";

type DataTypes = {
  name: string;
  age: number;
  email: string;
  theme: string;
  interests: string[];
};

export default function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<DataTypes>({
    name: "Deepak",
    age: 35,
    email: "deepak@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });
  const [errors, setErrors] = useState({});

  type ErrorData = {
    name?: string;
    age?: string;
    email?: string;
    interests?: string;
  };

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {} as ErrorData;
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 10) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 5) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {} as ErrorData;
        if (data.interests.length < 1) {
          err.interests = "Select atleast one Interest";
        }

        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrevious = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div>
      <h1>Tab form component</h1>
      <div className="tab-container">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className="tab"
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevious}>Previous</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
}
