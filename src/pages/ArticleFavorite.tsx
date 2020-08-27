import React from 'react'
import { useSelector } from 'react-redux';

// Redux
import { RootState } from '../modules';

// Components
import ArticleItem from '../components/ArticleItem';

const ArticleFavorite = () => {
  // Redux
  const store: RootState = useSelector((state: any) => state);
  const articles = store.article.favorites;

  // Functions
  const printArticleList = () => {
    if(!articles.response.docs.length) {
      return (
        <div className="Container">
          Nothing has been added to your favorites list.
        </div>
      )
    }
  
    return articles.response.docs.map((article, index) => {
      return (
      <ArticleItem key={index} article={article} />
      )
    });
  }

  return (
    <div>
      {printArticleList()}
    </div>
  )
}

export default ArticleFavorite;
