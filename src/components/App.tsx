import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

// Redux
import { RESET_ARTICLE } from '../modules/article';

// Components
import Header from './base/Header';
import {
  Article,
  ArticleSearch,
  ArticleFavorite
} from '../pages';

// Css
import './App.css';

const App: React.FC = ({ history }: any) => {
  const dispatch = useDispatch();

  history.listen((location: any, action: any) => {
    dispatch({ type: RESET_ARTICLE });
  });

  return (
    <>
      <Header />
      <div style={{ marginLeft: 10, marginRight: 10 }}>
        <Switch>
          <Route exact path="/" component={Article} />
          <Route exact path="/search" component={ArticleSearch} />
          <Route exact path="/favorite" component={ArticleFavorite} />
        </Switch>
      </div>
    </>
  );
}

export default withRouter(App);
