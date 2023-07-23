import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss"

function Directory(props) {
  return (
    <div className="categories-container">
      {props.categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        );
      })}
    </div>
  );
}

export default Directory;
