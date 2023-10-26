import styles from "./style.module.css"
import React, { useRef } from "react";

const Contacts= () => {
   
    const chatMessagesRef = useRef(null);
    const inputRef = useRef(null);

    function handleFormSubmit(e) {
        e.preventDefault();
        const message = inputRef.current.value;
        inputRef.current.value = '';
        send(message);
    }

    function send(message) {
        const messageItem = document.createElement('p');
        messageItem.textContent = message;
        messageItem.classList.add('message');


        chatMessagesRef.current.appendChild(messageItem);

        setTimeout(() => {
            chatMessagesRef.current.removeChild(messageItem)
        }, 16000)
    }
    return (
    <div>
        <div className={styles.conteiner}>
            <div>
                <h1>Обратная связь</h1>
                <div className={styles.conteinerImgChat}>
                    <div className='chat'>
                        <div className='mainChat'>
                            <div ref={chatMessagesRef} className="messages"></div>
                        </div>
                        <div className="divinput">
                            <form className="form" onSubmit={handleFormSubmit}>
                                <input ref={inputRef} className="input" type="text" placeholder="Введите сообщение" maxlength='50'></input>
                                <button className="button" type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                    <div className={styles.conteinerImg}>
                        <div><img className={styles.img} src="https://mkshop.com.kz/wp-content/uploads/2023/01/Molekulyarnaya-kuhnya.jpg"></img></div>
                        <div><img src="https://i.pinimg.com/236x/3c/3c/e2/3c3ce2e8381ac42e54edacbd4444a402--restaurants.jpg?nii=t"></img></div>
                    </div>
                
                </div>
            </div>
            <div className={styles.footerContact}>             
                <div>
                    <a href="#" className={styles.button5} data-twitter>twitter</a>
                    <a href="#" className={styles.button5} data-vk>vkontakte</a>
                    <a href="#" className={styles.button5} data-facebook>facebook</a>
                </div>
                <div>+7 (999) 768-56-23   deliveri@midas.res</div>
            </div>
            <div className={styles.footerLink}>
                <div>© 2009–2023, ООО «MIDAS», официальный сайт</div>
                <div><a href="#" className={styles.link}>Политика конфиденциальности и оферта</a></div>
                <div><a href="#" className={styles.link}>Пользовательское соглашение</a></div>
            </div>
            
        </div>
    </div>
    
    )
}

export default Contacts

