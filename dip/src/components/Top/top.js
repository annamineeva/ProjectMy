import { Link } from "react-router-dom"
import styles from "./style.module.css"

const Top = () => {

    return (
        
            <div className={styles.case}>
                <div>
                    <h2>Доставка готовой еды из фермерских продуктов</h2>
                    <img className={styles.headerImgBg} src="https://img.alicdn.com/imgextra/i3/6000000000874/O1CN01PHdxCH1IKKkSeI4DH_!!6000000000874-0-tbvideo.jpg"></img>
                    <h3 className={styles.headerTel}>+7 (999) 768-56-23</h3>
                </div>
                <div><img className={styles.headerImg} src="https://avatars.mds.yandex.net/get-altay/6221595/2a000001807f67653d679a36606b0c2b465a/XXL_height"></img></div>
            </div>
        
    )
}

export default Top