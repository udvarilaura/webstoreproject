import "./category-item.styles.scss";

const CategoryItem = ({categories}) => {

  const {title, imageURL} = categories;

    return (
        <div className = "category-container">
        <div className = "category-image-div" style={{
          backgroundImage: `url(${imageURL})`
          }} />
          <div className = "category-body-container">
            <h2> {title} </h2>
            <p>Shop now</p>
          </div>
      </div>
    );
}

export default CategoryItem;