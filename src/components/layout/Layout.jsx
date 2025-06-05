import './Layout.scss';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

function Layout(props){
  return(
    <div className="layout">
      <Header loggedInUser={props.loggedInUser}/>
      <Nav/>

      <main>
        {
          props.children
        }
      </main>

      <Footer/>
    </div>
  );
}

export default Layout;