import React from  'react';



const Header = () => {

    return(
      
        <nav className="uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
                <li className="uk-active uk-button uk-button-default"  type="button" uk-toggle="target: #offcanvas-overlay"><a href="#"><i className="lni lni-menu"></i></a></li>
                <li>
                    <a href="#">Parent</a>
                    <div className="uk-navbar-dropdown">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active"><a href="#"><i class="lni lni-menu"></i></a></li>
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
    </nav>
    )
}






export default Header;