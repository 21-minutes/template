import "./RecommendedTopics.scss";
import React, { useEffect, useState } from "react";
import { getTopics } from "../../Model/Topic";

// TODO: Replace content with api variables
// article?.attributes.topics?.data[0].attributes.name
function RecommendedTopics() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    async function retrieveData() {
      const topicData = await getTopics();
      setTopic(topicData);
    }
    retrieveData();
  }, []);

  return (
    <div className="recommended-topics__container">
      <div className="recommended-topics__title">Recommended Topics</div>
      <div className="recommended-topics__content">
        {topic.map((topic) => (
          <div className="topic-item" key={topic.id}>
            {topic?.attributes.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedTopics;
