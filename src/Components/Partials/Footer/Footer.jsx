import style from '../Footer/Footer.module.scss'

export const Footer = () => {
	return (
        <footer>
            <div>
        <h2>bageriet</h2>
        <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer</p>
        </div>
        <div className={style.copyright}>
            <p>copyright &copy; 2017 bager app</p>
        </div>
    </footer>
	)
}