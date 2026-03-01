import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)"
      }}
    >
      <div className="card shadow-lg p-4 rounded-4 bg-white" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Bootstrap UI Demo</h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter your name"
          />
        </div>

        <button className="btn btn-primary btn-lg w-100">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;