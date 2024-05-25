import { CloseIcon,Box } from "@ya.praktikum/react-developer-burger-ui-components";

import Details from '../ingredients-details/ingredientsDetails.module.css';


export default function IngredientsDetails({ingredient}){
    return(
        <div className={Details.ingredients__info}>
                <img src={ingredient.image_large} alt="img" />
               
                <div className="name text text_type_main-medium pb-8 pt-4" >{ingredient.name}</div>
                {/* {activeIngredient.current.name} */}
                <div className={`${Details} text text_type_main-default text_color_inactive`}>
                    <div className="calories">
                        <p>Калории, ккал</p>
                        <p>{ingredient.calories}</p>
                    {/* {activeIngredient.current.calories} */}
                    </div>
                    <div className="Proteins">
                        <p>Белки, г</p>
                        <p>{ingredient.proteins}</p>
                        {/* {activeIngredient.current.proteins} */}
                    </div>
                    <div className="Fats">
                        <p>Жиры, г</p>
                        <p>{ingredient.fat}</p>
                        {/* {activeIngredient.current.fat} */}
                    </div>
                    <div className="Carbohydrates">
                        <p>Углеводы, г</p>
                        <p>{ingredient.carbohydrates}</p>
                        {/* {activeIngredient.current.carbohydrates} */}
                    </div>
                </div>
            </div>
    )
}