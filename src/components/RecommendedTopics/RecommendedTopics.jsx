import "./RecommendedTopics.scss";

function RecommendedTopics() {
  let topics = [
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];
  return (
    <div className="recommended-topics__container">
      <div className="recommended-topics__title">Recommended Topics</div>
      <div className="recommended-topics__content">
        {topics.map((topic) => (
          <div className="topic-item">{topic}</div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedTopics;
