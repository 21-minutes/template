import "./Admin.scss";

function Admin() {
  function sendIt() {
    console.log("send it");
  }
  return (
    <div className="admin-container">
      <h1>Admin</h1>
      <input type="text" placeholder="Authorname" className="test" />
      <textarea type="text" placeholder="Author description" className="test" />
      <input type="file" placeholder="Avatar" />

      <input type="number" placeholder="Readingtime" className="test" />
      <input type="text" placeholder="Title" className="test" />
      <input type="text" placeholder="Subtitle" className="test" />
      <textarea type="text" placeholder="Content" className="test" />
      <input type="Date" placeholder="Date" className="test" />
      <button onClick={sendIt} type="submit">
        Submit
      </button>
    </div>
  );
}
export default Admin;
