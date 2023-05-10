import heroImg from './assets/hero.svg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusantium quos quis? Deserunt nostrum provident alias temporibus, 
                        magni nemo autem? Natus error beatae eveniet ratione rem impedit ullam minima debitis, quaerat itaque accusantium,
                        dolorem nam quo assumenda iste. Quia sequi libero quaerat porro eveniet autem, fuga saepe molestiae alias odit.               
                    </p>
                </div>

                <div className="img-container">
                    <img src={heroImg} alt="woman and the browser" className='img' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
