import "./app-info.css";

const AppInfo = ({name, count, countRise}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании {name}</h1>
            <h2>Общее число сотрудников: {count}</h2>
            <h2>Премию получат: {countRise}</h2>
        </div>
    )
}

export default AppInfo;