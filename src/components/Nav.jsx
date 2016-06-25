var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search captureInput={props.captureInput} captureSearch={props.captureSearch}/>
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
