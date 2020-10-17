import React from 'react';
import frame from '../../../images/Frame.png'

const HeaderMain = () => {
    return (
        <section>
            <div className="row p-4 justify-content-center ">
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <h2>Change your imagination into reality with Us ! </h2>
                        <p>lets change together, share your idea with everyone.Here we are to help you</p>
                        <button className="btn btn-dark">Hire me</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className = 'w-100'  src= {frame} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;