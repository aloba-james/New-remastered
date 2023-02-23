import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import Shop from "../shop/shop.component";
import SearchBox from '../../components/search-box/search-box.component';
import { selectCategories } from "../../store/categories/categories.selector";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import SearchPreview  from "../search-preview/search-preview.component";

const Search = (event) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [filteredCategories, setFilterCategories] = useState(categories);
  console.log('render');

  useEffect(  
    () => { 
      const newFilteredcategories = categories.filter((category) => {   
        return category.name.toLocaleLowerCase(searchField);
      });
      setFilterCategories(newFilteredcategories);
      console.log(newFilteredcategories);
    
    }, [categories, searchField]
  );
    
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return(
    <>
      <h1> Search </h1>
      <SearchBox placeholder = 'search categories' onChangeHandler = {onSearchChange} />
      <SearchPreview categories = {filteredCategories} />    
    </>
  );
};



export default Search;