import "./categories.styles.scss";
import CategoryItem from '../category-component/category-item.component';

const CategoryDirectory = () => {
    const category = [
    {
      categoryID : 1,
      title: "Hats",
      imageURL: 'https://c.pxhere.com/photos/26/8b/fashion_girl_woman_female_model_hair_sexy_hat-714164.jpg!d'
    }, 
    {
      categoryID : 2,
      title: "Bags",
      imageURL: 'https://c.pxhere.com/photos/a1/c9/handbag_fashion_woman_purse_burberry-21604.jpg!d'
    }, 
    {
      categoryID : 3,
      title: "Ducks",
      imageURL: 'https://c.pxhere.com/photos/6c/ca/duckling_bird_cute_baby_fuffly_publicdomaindedicationcc0-575912.jpg!d'
    }, 
    {
      categoryID : 4,
      title: "Accessories",
      imageURL: 'https://c.pxhere.com/photos/e9/d6/glasess_mack_up_purse_flower_fashion_lifestyle_girl_female-599509.jpg!d'
    }]


    return (
        <div className = "categories-container" >
      {category.map((category) => {
        return (
          < CategoryItem key = {category.id} categories = {category}/>
        )
      })}
      
    </div>
    );
}

export default CategoryDirectory;