import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header/Header';

// const pageOne = () => {
//   return (
//     <div>
//       pageOne <br />
//       <Link to="/pagetwo">Navigate to page two</Link>
//     </div>
//   );
// };

// const pageTwo = () => {
//   return (
//     <div>
//       pageTwo <br />
//       <Link to="/">Navigate to page one</Link>
//     </div>
//   );
// };

const App: React.FunctionComponent<any> = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          {/* <Route path="/" exact component={pageOne} />
          <Route path="/pagetwo" component={pageTwo} /> */}
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
