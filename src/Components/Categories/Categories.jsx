const Catigories = ({value, onClickCatregori}) => {
    console.log('value:', value, 'onclick: ', onClickCatregori)
    const productNames = ['Все', 'Мясные', 'Вегетарианское', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {productNames.map((catigoryName, index) => {
                    return <li onClick={() => onClickCatregori(index)} className={value === index ? 'active' : ''} key={catigoryName}>{catigoryName}</li>
                })}
            </ul>
        </div>
    );
}
 
export default Catigories;