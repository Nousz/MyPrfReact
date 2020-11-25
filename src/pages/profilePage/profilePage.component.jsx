import React from 'react';
import profilePic from '../../assets/índice.jpg';

import './profilePage.styles.scss';

class profilePage extends React.Component {
    constructor() {
        super();
    }

    state = {
        name: '',
        bio: '',
        contact: [],
        skills: [],
        socialNetwork: [],

    }


    render() {
        return (
            <div className="container">
                <div className="background">
                    <div className="searchbar">
                        <form action="">
                            <input type="text"/>
                            <button>Search</button>
                        </form>
                    </div>
                    <div className="edit">Edit Profile</div>
                    <img src={profilePic} alt="" />
                </div>
                <div className="main">
                    <div className="bio">
                        <p>Morbi ultricies dui quis lorem rutrum, ac tempor elit aliquam. Aenean tincidunt commodo est sit amet varius. Quisque mollis pharetra tortor, vel pharetra ipsum efficitur vel. Etiam nec ligula justo. Mauris vitae ligula tortor. Nam varius ex in feugiat tempor. Integer convallis ex dictum pretium eleifend. In ac leo non tellus suscipit blandit a in odio. Sed id leo non elit luctus volutpat. Proin bibendum arcu nec augue ullamcorper hendrerit. Pellentesque gravida venenatis odio sed blandit. Fusce ac ornare leo, ac ultricies elit. Mauris rhoncus sapien non libero porttitor, in egestas risus maximus. In nec sodales ipsum. </p>
                    </div>
                    <div className="sections">
                        <div className="section">
                            <ul>
                                <li>Twitter</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                            </ul>
                        </div>
                        <div className="section">
                            <ul>
                                <li>Telefone</li>
                                <li>Email</li>
                            </ul>
                        </div>
                        <div className="section">
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Js</li>
                                <li>Physics</li>
                                <li>Math</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default profilePage;