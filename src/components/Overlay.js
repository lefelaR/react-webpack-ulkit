import React from 'react';


const Overlay = ()=>{
    return(
<div>
            <div id="offcanvas-overlay" uk-offcanvas="overlay:true">
                <div className="uk-offcanvas-bar">
                    <button className="uk-offcanvas-close" type="button" uk-close><i class="lni lni-close"></i></button>
                    <ul className="uk-list uk-list-divider">
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                    </ul>
                   </div>
            </div>
        <div id="my-id" uk-offcanvas="overlay: true">...</div>
        </div>
    )
}


export default Overlay;