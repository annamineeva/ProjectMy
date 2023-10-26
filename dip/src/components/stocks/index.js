import styles from "./style.module.css"
const Stocks = () => {

    return (
        <div className={styles.conteiner}>
            <div className={styles.row}>
                <div className={styles.card}>
                    <img className={styles.img} src="https://www.obed.ru/images/suppliers/restaurants/food/666.1537351715.jpg"></img>
                    <div className={styles.description}>Ассорти 40см</div>
                    <div className={styles.price}>
                        <div>580 руб.</div>
                        <button className={styles.button}>ЗАКАЗАТЬ</button>
                    </div>       
                </div>

                <div className={styles.card}>
                <img className={styles.img} src="https://yandex-images.clstorage.net/eP4pT9198/220160-K/evGw5Q_SS43fYHo0tSPbU4lSSOrTt8To19_W2EBVyvrNHJZp_1wx_k1oBbg0iaWxCWoJIvb3BZgjipmiQq4_ThuVJFCeI_7JulEvMAFHbqa4cz2IEKcE6cNPt8r3V6i5qj51ii0_N-qYDaBtYEmxsE-c-Ceg8VEcFjgetDceP8u68pDDibRKji1h6LXkRFgimjW5-jPHF_jTvQQblkX6assedkn8LeRZGz2DfmFs0ZOPfjwXsHEBTaYq_8YX7r4rieDAktnEyV3vImp3NTZYo2lGWCpRpMUrEY2nGKfX2espPiS7rb61eftfsb0CXMKjrMwdVaLSgE0HqM_ERr7PSZkgIrIZ9Kmu7kPaxycEK-Gb9Glb0NU22QGeJFpm5epJWPymaG8th7n5XREsUJ9BA-6vXtZwopNdtar-R6V-jqlrwELQmlR6_q-yC3TURXmzWUYrSFLU9ikiTDeZRbQ5qNu-dQrMLfQqKX_hLkH9c5PcjJ4HkeOTjxRa7KR1jB_bS1PwUtsWWzyu0BhXVnR5Uqn0SuoAZfc5QW1nq6e02hqZX4bLjH_XSokME68Sb_EzDR-dFaLRUG4Fqq7nZ19ti9jCoOM6F6itnfKqhrSWmbEY9OtooFX1u_O-Fusnx2hKuZ6kCm3f9JtY_xLOcw5Cc04sbLdBguJPFvo-NVQfDgho8PBwaLepzi0QKFcFFStxGDYaejI3NNsSrdWplFWo-Ts_pgoPrKSaaT4RDGH-ABGszZ4G04CynYW4TsdmXU9pKSJwgAkGWT3sYBsmNZf6INomSkihxgap8V2maIUlC4gp3Lc7ve30aqjcYx-wXfJDbB_epPDDs18lyQ5ltx_9Gxtx8XKatqjOjuJYxje0CaEohYvpwedEemPPpdvXJwga655GKK0NRhiZDlC9Y1xxk3zOjTczADGfNPoupiQeDFsL07BAWqTr3I_DiEQXFHsS2kaZqAE0hhszDwZahLUJM"></img>
                    <div className={styles.description}>Мясная 30см</div>
                    <div className={styles.price}>
                        <div>680 руб.</div>
                        <button className={styles.button}>ЗАКАЗАТЬ</button>
                    </div>   
                </div>
            </div>  
            <div className={styles.row}>
                <div className={styles.card}>
                    <img className={styles.img} src="https://avatars.mds.yandex.net/get-sprav-products/5373629/2a000001802dfd707f4f45887a4867fb0c34/M_height"></img>
                    <div className={styles.description}>Вегетарианская 30см</div>
                    <div className={styles.price}>
                        <div>700 руб.</div>
                        <button className={styles.button}>ЗАКАЗАТЬ</button>
                    </div>       
                </div>

                <div className={styles.card}>
                <img className={styles.img} src="https://avatars.mds.yandex.net/get-eda/3491582/28262278128c8a48bbf8fd77df7f8b97/M_height"></img>
                    <div className={styles.description}>Жульен 45см</div>
                    <div className={styles.price}>
                        <div>450 руб.</div>
                        <button className={styles.button}>ЗАКАЗАТЬ</button>
                    </div>   
                </div>
            </div>   
            <div className={styles.row}>
                <div className={styles.card}>
                    <img className={styles.img} src="https://sun9-72.userapi.com/HoVEH-mhM9EvwpFEWJ72cME4NdtUooHV6c40fQ/wrf2OjanJ8g.jpg"></img>
                    <div className={styles.description}>Ветчина и сыр 50см</div>
                    <div className={styles.price}>
                        <div>580 руб.</div>
                        <button className={styles.button}>ЗАКАЗАТЬ</button>
                    </div>       
                </div>

                <div className={styles.card}>
                <img className={styles.img} src="https://uvarovo.online/upload/000/u1/8/4/84beedc6.jpg"></img>
                    <div className={styles.description}>Куриная 60см</div>
                    <div className={styles.price}>
                        <div>790 руб.</div>
                        <button className={styles.button}>ЗАКАЗАТЬ</button>
                    </div>   
                </div>
            </div>     
        </div>
    )
}

export default Stocks