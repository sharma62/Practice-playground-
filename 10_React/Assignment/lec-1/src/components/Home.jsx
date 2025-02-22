import React from 'react';
import style from './home.module.css';

const Home = () => {

    return (
        <>
            <div className={`${style.p5} ${style.mb4} ${style.bgLight} ${style.rounded3}}`}>
                <div className={`${style.p5}`} style={{width:"80%", margin:"auto"}}>
                    <h1 className={`${style.display5} ${style.fwbold}`} >Custom jumbotron</h1>
                    <p className={`${style.fs4}`} >
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                    <button className={`${style.btnPrimary} ${style.bgLight}`} type="button">
                        Example button
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home