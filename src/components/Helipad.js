import React, { Component }  from 'react';


class Helipad extends Component{
    render(){

        return(
       <div className="uk-container">
       
            <div className="">

                    <p className="uk-text-large uk-text-bold uk-padding">
             headers
                    </p>
                    <p className="uk-text-light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa, voluptatem dignissimos sit reprehenderit suscipit. Tenetur vel aliquid temporibus in ex consequuntur nesciunt! Autem praesentium magni adipisci velit sint nostrum!</p>
            </div>


       <div className="uk-grid uk-child-width-1-2" uk-grid>
            <div className="uk-padding">
            <div className="uk-card uk-card-default uk-card-body ">
    <h3 className="uk-card-title">card1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa, voluptatem dignissimos sit reprehenderit suscipit. Tenetur vel aliquid temporibus in ex consequuntur nesciunt! Autem praesentium magni adipisci velit sint nostrum!</p>
</div>
            </div>

            <div className="uk-padding ">
            <div className="uk-card uk-card-default uk-card-body ">
    <h3 className="uk-card-title">card2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa, voluptatem dignissimos sit reprehenderit suscipit. Tenetur vel aliquid temporibus in ex consequuntur nesciunt! Autem praesentium magni adipisci velit sint nostrum!</p>
</div>
            </div>
        </div>

         </div>
        )
    }
}



export default Helipad;