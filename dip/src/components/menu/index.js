import styles from "./style.module.css"
const Menu = () => {

    return (
        <div className={styles.conteiner}>
    
            <div className={styles.row}>
                <div className={styles.card}>
                    
                    <img className={styles.img} src="https://www.obed.ru/images/suppliers/restaurants/food/666.1537351715.jpg"></img>
                    <div className={styles.description}>Пицца</div>
                    <div className={styles.price}>      
                    <a href="#" className={styles.button} tabindex="0">кнопка</a>
                    </div>       
                </div>

                <div className={styles.card}>
                <img className={styles.img} src="https://koronavirus-ncov.ru/wp-content/uploads/2021/04/3.jpeg"></img>
                    <div className={styles.description}>Суши и роллы</div>
                    <div className={styles.price}>
                       
                    <a href="#" className={styles.button} tabindex="0">кнопка</a>
                    </div>   
                </div>
            </div>  
            <div className={styles.row}>
                <div className={styles.card}>
                    <img className={styles.img} src="https://th.wallhaven.cc/lg/ox/ox3qw9.jpg"></img>
                    <div className={styles.description}>Горячее</div>
                    <div className={styles.price}>
                       
                    <a href="#" className={styles.button} tabindex="0">кнопка</a>
                    </div>       
                </div>

                <div className={styles.card}>
                <img className={styles.img} src="https://mgurman.ru/images/thumbs/0013263_salat-greeskij_415.jpeg"></img>
                    <div className={styles.description}>Салаты</div>
                    <div className={styles.price}>
                        
                    <a href="#" className={styles.button} tabindex="0">кнопка</a>
                    </div>   
                </div>
            </div>   
            <div className={styles.row}>
                <div className={styles.card}>
                    <img className={styles.img} src="https://wallbox.ru/resize/320x240/wallpapers/main2/201718/agody-desert-piroznoe-nacinka.jpg"></img>
                    <div className={styles.description}>Десерты</div>
                    <div className={styles.price}>
                        
                    <a href="#" className={styles.button} tabindex="0">кнопка</a>
                    </div>       
                </div>

                <div className={styles.card}>
                <img className={styles.img} src="https://s0.smartresize.com/wallpaper/584/982/HD-wallpaper-food-juice-drink-still-life-thumbnail.jpg"></img>
                    <div className={styles.description}>Напитки</div>
                    <div className={styles.price}>
                        
                    <a href="#" className={styles.button} tabindex="0">кнопка</a>
                    </div>   
                </div>
            </div>     
        
        </div>
    )
}
export default Menu