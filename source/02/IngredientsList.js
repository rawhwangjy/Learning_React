// 재료 컴포넌트를 활용한 재료 목록 컴포넌트
import Ingredient from './Ingredient'

const IngredientsList = ({ list }) =>
<ul className="ingredients">
    {
        list.map((ingredient, i) =>
            <Ingredient key={i} {...ingredient} />
        )
    }
</ul>

export default IngredientsList