import { useState } from "react";
import "./index.css";

type AccordionItem = {
  key: string;
  title: string;
  content: string;
};

export default function Accordion() {
  const items = [
    {
      key: "javasript",
      title: "Javascript Basics",
      content: "Learn javascript basic. Variable, function and objects",
    },
    {
      key: "react",
      title: "React Basics",
      content: "Understand component, state and props",
    },
    {
      key: "nodejs",
      title: "Node.js basic",
      content: "Basic of service side development using Node.js",
    },
    {
      key: "nextjs",
      title: "Next.js",
      content: "Fullstack meta framework based on react",
    },
  ];
  return <AccordionComponent items={items} />;
}

function AccordionComponent({ items }: { items: AccordionItem[] }) {
  const [currentIndex, setCurrentIndex] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setCurrentIndex(key === currentIndex ? null : key);
  };

  return (
    <div className="according">
      {items.map((item) => (
        <div key={item.key} className="accordion-list">
          <div
            className="accordion-title"
            onClick={() => handleToggle(item.key)}
          >
            {item.title}
            {currentIndex === item.key ? <span>-</span> : <span>+</span>}
          </div>
          {currentIndex === item.key && (
            <div className="accordion-content"> {item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
