import Logo from './logo/logo';
import Menus from './menus/menus';

function Header(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '1rem'
      }}>
      <Logo applicationName={props.applicationName} />
      <Menus />
    </div>
  );
}

export default Header;
