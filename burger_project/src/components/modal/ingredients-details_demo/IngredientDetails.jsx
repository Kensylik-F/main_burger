import React, { Children, forwardRef, useEffect } from "react";
import { CloseIcon,Box } from "@ya.praktikum/react-developer-burger-ui-components";
import './ingredientsDetails.css';
import modalinfo from './ingredientsDetails.module.css'
import PropTypes from "prop-types";
const  IngredientsDetails= forwardRef((props, activeIngredient) =>{

    const {isVisible = false, onClose, Children} = props;
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
            <div onClick={(e) => e.stopPropagation()} className={modalinfo.modal} >
                <div  onClick={onClose} className={modalinfo.modaloverlay}></div>
                    <div className={`${modalinfo.modal__wrapper} p-10 pb-15`}>
                        <div className={`${modalinfo.modal__header} text text_type_main-large`}>
                            <h1>Детали ингредиента</h1>
                            <button>
                                <CloseIcon type="primary"  onClick={onClose} />
                            </button>
                        </div>
                        <div className="ingredients__info">
                            <img src={activeIngredient.current.image_large} alt="img" />
                            <div className="name text text_type_main-medium pb-8 pt-4" >{activeIngredient.current.name}</div>
                            <div className={`${modalinfo.wrapper__info} text text_type_main-default text_color_inactive`}>
                                <div className="calories">
                                    <p>Калории, ккал</p>
                                    <p>{activeIngredient.current.calories}</p>
                                </div>
                                <div className="Proteins">
                                    <p>Белки, г</p>
                                    <p>{activeIngredient.current.proteins}</p>
                                </div>
                                <div className="Fats">
                                    <p>Жиры, г</p>
                                    <p>{activeIngredient.current.fat}</p>
                                </div>
                                <div className="Carbohydrates">
                                    <p>Углеводы, г</p>
                                    <p>{activeIngredient.current.carbohydrates}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            )}       
        </>
    )
})
IngredientsDetails.propTypes={
    

}

export default IngredientsDetails;