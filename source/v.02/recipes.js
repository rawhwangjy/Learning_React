/*
    객체 구조 분해를 사용하면 props의 각 필드를 로컬 영역 안에서 변수로 뽑아낼 수 있다.
    - Recipe의 props 를 {name, ingredients, steps}로 뽑아서 사용
    - Menu의 props를 {title, recipes}로 뽑아서 사용

    스프레드 연산자를 사용하여 recipe객체의 필드를 Recipe컴포넌트의 프로퍼티로 추가해준다.
*/

const data = [
    {
        "name": "구운 연어",
        "ingredients": [
            {"name": "연어", "amount": 500, "measurement": "그램"},
            {"name": "잣", "amount": 1, "measurement": "컵"},
            {"name": "버터", "amount": 2, "measurement": "조각"},
            {"name": "바질", "amount": 1, "measurement": "컵"},
            {"name": "올리브오일", "amount": 1, "measurement": "컵"},
            {"name": "마늘", "amount": 3, "measurement": "쪽"}
        ],
        "steps": [
            "오븐을 350도로 예열한다.",
            "유리 베이킹 그릇에 올리브 오일을 두른다.",
            "연어, 마늘, 잣을 그릇에 담는다.",
            "오븐에서 15분간 익힌다.",
            "버터를 추가하고 다시 30분간 오븐에서 익힌다.",
            "오븐에서 그릇을 꺼내서 15분간 식힌다."
        ]
    },
    {
        "name": "생선 타코",
        "ingredients": [
            {"name": "흰살 생선", "amount": 500, "measurement": "그램"},
            {"name": "치즈", "amount": 1, "measurement": "컵"},
            {"name": "상추", "amount": 2, "measurement": "컵"},
            {"name": "토마토", "amount": 2, "measurement": "개"},
            {"name": "또띠야", "amount": 3, "measurement": "개"}
        ],
        "steps": [
            "생선을 그릴에 익힌다.",
            "또띠야 3장 위에 생선을 얹는다.",
            "또띠야에 얹은 생선 위에 상추, 토마토, 치즈를 얹는다."
        ]
    }
]

const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <ul className="ingredients">
            {ingredients.map((ingredient, i) => 
                <li key={i}>{ingredient.name}</li>
            )}
        </ul>
        <section className="instructions">
            <h2>조리 절차</h2>
            {steps.map((step, i) => 
                <p key={i}>{step}</p>
            )}
        </section>
    </section>

const Menu = ({title, recipes}) => 
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) =>
                <Recipe key={i} {...recipe} />
            )}
        </div>
    </article>


ReactDOM.render(
    <Menu recipes={data} title="맛있는 조리법" />,
    document.getElementById("react-container")
)