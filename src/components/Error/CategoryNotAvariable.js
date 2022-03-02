import "../components.scss";

const CategoryNotAvariable = ({ category }) =>{

    return (
        <div>
            <h1>ERROR:</h1>
           <h2>The Category: </h2> 
           <p>{category}</p>
           <h2>is not Avariable</h2>
        </div>
    )
}

export default CategoryNotAvariable;