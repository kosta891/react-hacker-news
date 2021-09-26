import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
import { Fragment } from 'react';
function App() {
  return (
    <Fragment>
      <SearchForm />
      <Buttons />
      <Stories />
    </Fragment>
  );
}

export default App;
