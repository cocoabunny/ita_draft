import React from 'react'
import './HomeStyles.css'

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="span">
                    <h1>ITA</h1>
                    <h1 className="offset-h1"><span>PANELS</span></h1>
                </div>
                <div className="content">
                    <div className="section">
                        <h2> SERVICES</h2>
                        <p><span> dolor sit amet, consectetur adipiscing elit. Integer placerat congue mauris sed imperdiet. Morbi a facilisis felis. Aenean ut venenatis odio. </span></p>
                    </div>
                    <div className="section"><h2>PANEL</h2> <h2 className="offset-h2"><span>BEATING</span></h2>
                        <p className="section-mid"> Vestibulum pharetra sapien nec eleifend eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed.
                        </p></div>
                    <div className="section"><h2>SPRAYING</h2>
                        <p><span> Nulla eget consequat dui. Integer egestas, metus eget iaculis porttitor, mauris tortor vestibulum nibh, eu lacinia erat mauris quis justo. Nulla facilisi.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home