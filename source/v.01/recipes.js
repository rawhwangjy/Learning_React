/*
    // 데이터는 조리법 객체의 배열이다.
    var data = [...]

    // 조리법 하나를 표현하는 상태가 없는 함수형 컴포넌트다.
    const Recipe = (props) => (
        ...
    )

    // 조리법으로 이러우진 메뉴를 표현하는 상태가 없는 함수형 컴포넌트다.
    const Menu = (props) => (
        ...
    )

    // ReactDOM.render를 호출해서 Menu를 현재의 DOM 안에 렌더링한다.
    ReactDOM.render(
        <Menu recipes={data} title="맛있는 조리법" />,
        document.getElementById("react-container")
    )
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

const Recipe = (props) =>
    <section id={props.name.toLowerCase().replace(/ /g, "-")}>
        <h1>{props.name}</h1>
        <ul className="ingredients">
            {props.ingredients.map((ingredient, i) => 
                <li key={i}>{ingredient.name}</li>
            )}
        </ul>
        <section className="instructions">
            <h2>조리 절차</h2>
            {props.steps.map((step, i) => 
                <p key={i}>{step}</p>
            )}
        </section>
    </section>

const Menu = (props) => 
    <article>
        <header>
            <h1>{props.title}</h1>
        </header>
        <div className="recipes">
            {props.recipes.map((recipe, i) =>
                <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
            )}
        </div>
    </article>


ReactDOM.render(
    <Menu recipes={data} title="맛있는 조리법" />,
    document.getElementById("react-container")
)