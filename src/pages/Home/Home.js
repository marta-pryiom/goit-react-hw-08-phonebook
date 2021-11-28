import s from './Home.module.css';
function Home() {
    return (
        <>
            {/* <h1>WELCOME</h1> */}
            <img
                className={s.image}
                src="https://thumbs.dreamstime.com/b/wellcome-22218814.jpg"
                alt="pnone"
            />
        </>
    );
}
export default Home;
