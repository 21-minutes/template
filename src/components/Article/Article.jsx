function article(props) {
  return (
    <div className="template-container">
      <div className="container-content">
        <div className="title">{props.title}</div>
        <div className="article-title">Article title</div>
        <div className="article-text">{props.content}</div>
      </div>
      <div className="ad-container">advertisment</div>
    </div>
  );
}
export default article;
