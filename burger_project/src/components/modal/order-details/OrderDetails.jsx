import orderModal from './OrderDetails.module.css';
import './OrderDetails.css';
import { CloseIcon,Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from 'react';

export default function OrderDetails(props){

    const {isVisible = false, onClose} = props;
    const keyClose =({key}) =>{
        switch(key){
            case 'Escape':
                onClose();
                break;
                default:
        }
    };

    useEffect((e)=>{

        document.addEventListener('keydown', keyClose);
        return()=> document.removeEventListener('keydown', keyClose);
    },[]);
    

    return(
        <>{ !isVisible ? null : (
        <div onClick={(e) => e.stopPropagation()} className={orderModal.orderModal}>
            <div onClick={onClose} className={orderModal.overlay__OrderModal}></div>
            <div className={`${orderModal.OrderModal__wrapper} pt-30 pb-30`}>
                
                <button className={`${orderModal.OrderModal__close}`}>
                    <CloseIcon type="primary" onClick={onClose}/>
                </button>
                
                 
                <h1 className={`${orderModal.OrderModal__namber}text text_type_digits-large`}>123213</h1>
                <p className="text text_type_main-medium pt-8 ">идентификатор заказа</p>
            
                <div className={`${orderModal.OrderModal__icon} pt-15 pb-15`}>
                    <img src="../images/graphics.png" alt="" />
                </div>
                <div className={orderModal.OrderModal__footer}>
                    <p className="text text_type_main-default">Ваш заказ начали готовить</p>
                    <p className="text text_type_main-default pt-2" style={{color:'#8585AD'}}>Дождитесь готовности на орбитальной станции</p>
                </div>
            </div>
        </div>
        )}
        </>
    )
}
