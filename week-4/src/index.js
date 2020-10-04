import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

class Nav extends React.Component {
    render() {
        return <nav className="navbar">
            <span className="web-name"><a href="">Gallery</a></span>
            <a className="nav-logo" href=""><img className="web-logo" src="./image/logo-icon.svg" alt="web logo" /></a>
            <ul className="nav-list">
                <li><a href="">About Us</a></li>
                <li><a href="">Collections</a></li>
                <li><a href="">Price List</a></li>
                <li><a href="">Connect Us</a></li>
            </ul>
            <a onClick={this.openHandler.bind(this)}
                className="nav-btn"
                href=""><img className="nav-btn-img" src="./image/menu-icon.svg" alt="nav button" /></a>
        </nav>
    }
    openHandler(e) {
        let v_navbar = document.getElementsByClassName('vertical-navbar')[0];
        e.preventDefault();
        v_navbar.style.display = 'block';
        console.log('open');
    }
}
class Aside extends React.Component {
    render() {
        return <aside className="vertical-navbar">
            <div className="vertical-menu">
                <ul className="vertical-list">
                    <li><a href="">About Us</a></li>
                    <li><a href="">Collections</a></li>
                    <li><a href="">Price List</a></li>
                    <li><a href="">Connect Us</a></li>
                </ul>
                <a onClick={this.closeHandler.bind(this)}
                    className="close-btn" href=""><img src="./image/x-icon.svg"
                        className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                        alt="close button" /></a>
            </div>
        </aside>
    }
    closeHandler(e) {
        let v_navbar = document.getElementsByClassName('vertical-navbar')[0];
        e.preventDefault();
        v_navbar.style.display = "none";
        console.log('close');
    }
}
class Header extends React.Component {
    render() {
        return <header onClick={this.textChangeHandler.bind(this)}
            className="main-header">
            <h1 className="header-title">Welcome Gallery</h1>
        </header>
    }
    textChangeHandler(e) {
        let header_title = document.getElementsByClassName('header-title')[0];
        header_title.textContent = "Have a Good Time!";
    }
}
class Section extends React.Component {
    render() {
        return <section className="main-section">
            <h2 className="section-title">Collections</h2>
            <div className="photos">
                <div className="row">
                    <figure>
                        <img className="photo-1 photo" src="./image/photo1-The Starry Night.jpg" alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">The Starry Night</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                    <figure>
                        <img className="photo-2 photo" src="./image/photo2-The Harvest.jpg" alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">The Harvest</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                </div>
                <div className="row">
                    <figure>
                        <img className="photo-3 photo" src="./image/photo3-Peach Blossom in the Crau.jpg" alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">Peach Blossom in the Crau</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                    <figure>
                        <img className="photo-4 photo" src="./image/photo4-The Seine with the Pont de la Grande Jatte.jpg"
                            alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">The Seine with the Pont de la Grande Jatte</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    }
}
class Footer extends React.Component {
    render() {
        return <footer>
            <button onClick={this.actionHandler.bind(this)}
                onclick="window.location.href='#hide-section'"
                className="footer-btn"
                type="submit">Call to Action</button>
        </footer>
    }
    actionHandler(e) {
        let hidden_section = document.getElementsByClassName('hidden-section')[0];
        hidden_section.style.display = "block";
        window.location.hash = "#hide";
        console.log(window.location.hash);
    }
}
class Section_2 extends React.Component {
    render() {
        return <section className="hidden-section" id="hide">
            <div className="photos">
                <div className="row">
                    <figure>
                        <img className="photo-5 photo" src="./image/photo5-Starry Night Over the Rhone.jpg" alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">Starry Night Over the Rhone</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                    <figure>
                        <img className="photo-6 photo" src="./image/photo6-Wheat Field with Cypresses.jpg" alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">Wheat Field with Cypresses</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                </div>
                <div className="row">
                    <figure>
                        <img className="photo-7 photo" src="./image/photo7-Grapes Lemons Pears and Apples.jpg" alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">Grapes Lemons Pears and Apples</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                    <figure>
                        <img className="photo-8 photo" src="./image/photo8-Vincent ’s Bedroom in Arles.jpg" alt="Painting" />
                        <div className="figcaption">
                            <p className="photo-name">Vincent ’s Bedroom in Arles</p>
                            <p className="author"><small>by Vincent van Gogh</small></p>
                        </div>
                    </figure>
                </div>
            </div>
        </section>

    }
}
class App extends React.Component {
    render() {
        return <div>
            <Nav />
            <Aside />
            <Header />
            <Section />
            <Footer />
            <Section_2 />
        </div>
    }
}
window.addEventListener('load', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});