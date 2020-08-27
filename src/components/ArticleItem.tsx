import React from 'react'
import { Docs, ADD_FAVORITE, DEL_FAVORITE } from '../modules/article';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';

const { REACT_APP_IMAGE_SERVER_URL } = process.env;

interface ArticleItemType {
  article: Docs;
}

const ArticleItem: React.FC<ArticleItemType> = ({ article }) => {
  // Redux
  const dispatch = useDispatch();
  const store: RootState = useSelector((state: any) => state);
  const favoriteArticles = store.article.favorites;

  // Favorite Image
  let heartImg = '/heart.png';
  let isFavorited = false;
  for(const item of favoriteArticles.response.docs) {
    if(item._id === article._id) {
      heartImg = '/heart_on.png';
      isFavorited = true;
      break;
    }
  }

  // Aritcle Image
  let imageUrl = article.multimedia[0] && `${REACT_APP_IMAGE_SERVER_URL}/${article.multimedia[0].url}`;
  if(!imageUrl) imageUrl = '/x.png';

  // Functions
  const goDetail = (): void => {
    window.open(article.web_url);
  }

  const handleClickFavoriteIcon = (): void => {
    if(isFavorited) {
      if(window.confirm('Are you sure you want to delete it from Favorites?')) {
        dispatch({ type: DEL_FAVORITE, payload: article });
      }
      return;
    }
    dispatch({ type: ADD_FAVORITE, payload: article });
  }

  const printArticleContent = () => {
    if(!article.abstract.length) {
      return <p style={{ flexDirection: 'row', margin: 0 }}>There is no content...</p>
    }

    return (
      <>
        <p style={{ flexDirection: 'row', margin: 0 }}>
          {article.abstract.substring(0, 30)}
          {article.abstract.length > 30  ? <span onClick={goDetail} style={{ cursor: 'pointer' }}> ...more</span> : null}
        </p>
      </>
    )
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}>
        <div onClick={goDetail} style={{ cursor: 'pointer' }}>
          <img src={imageUrl} style={{ width: 100 }} alt="article_image" />
        </div>
        <div className="Container">
          <h4 style={{ margin: 0 }}>{article.headline.main}</h4>
          {printArticleContent()}
        </div>
        <div>
          <img className="favoriteImg" src={heartImg} alt="favorite_image" width={30} onClick={handleClickFavoriteIcon} />
        </div>
      </div>
    </>
  )
}

export default ArticleItem;
