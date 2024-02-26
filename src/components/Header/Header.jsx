import './Header.css';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  const navClk = (event, navAction) => {
    if (navAction === 'search') {
      history.push('/page/1');
    } else if (navAction === 'favorites') {
      history.push('/favorites');
    } else if (navAction === 'manage') {
      history.push('/manage');
    }
  };

  return (
    <div className="header-view-div">
      <div className="header-img"></div>
      <div className="header-title">
        <h1>GIPHY Saga Project</h1>
        <h3>A Team Thursday Titanite (T3) Product</h3>
      </div>
      <div className="nav-div">
        <ul>
          <li
            onClick={() => {
              navClk(event, 'search');
            }}>
            SEARCH
          </li>
          <li
            onClick={() => {
              navClk(event, 'favorites');
            }}>
            FAVORITES
          </li>
          <li
            onClick={() => {
              navClk(event, 'manage');
            }}>
            MANAGE
          </li>
        </ul>
      </div>
    </div>
  );
}
