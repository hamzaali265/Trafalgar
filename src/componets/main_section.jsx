import dots from '../assets/dots.svg';
import illustration from '../assets/illustration.svg';
import '../styles/main_section.css';

function MainSection() {
    return (
        <main >
            <div className="content-container" >
                <img src={dots} alt="logo" />
                <div className="content">
                    <h1>Virtual healthcare<br />for you</h1>
                    <p>Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and<br />online
                        for everyone</p>
                    <button>Consult today</button>
                </div>

            </div>

            <div className="image-container"  >
                <img src={illustration} />
            </div>
        </main>
    )
}

export default MainSection;