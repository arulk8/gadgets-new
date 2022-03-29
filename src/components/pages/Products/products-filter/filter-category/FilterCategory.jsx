const FilterCategory = ({
  categoryName,
  categoryKey,
  setCategory,
  selectedCategories,
}) => {
  const checked = selectedCategories.indexOf(categoryKey) >= 0;
  return (
    <div className="my-5">
      <input
        type="checkbox"
        id={categoryKey}
        name={categoryKey}
        checked={checked}
        onChange={(e) => setCategory(categoryKey, e.target.checked)}
      />
      <label htmlFor={categoryKey}>{categoryName}</label>
    </div>
  );
};

export default FilterCategory;
