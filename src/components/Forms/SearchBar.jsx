import React, { useRef } from 'react'
import {useContext, useEffect,useState} from 'react';
import { useLocation,Link } from "react-router-dom";
import UserContext from "../../auth/AuthContext";
import OutsideClickDetector from '../OutsideClickDetector';
import { SearchBarWrapper } from './SearchBar.styled';

function SearchBar() {
    //contexts
    const {user} =useContext(UserContext);

    //useStates
    const [searchArray,setSearchArray] = useState([]);
    const [searchResults,setSearchResults] = useState([]);
    const [showCategories,setShowCategories] = useState(false);
    
    //refs
    const searchBarElement = useRef();
    const {pathname} = useLocation();


    function searchInputHandler({target}){

        if(target.value.length>2){
            const queryRegex=new RegExp(`${target.value}`,'mi');
            const searchMatch = searchArray.filter((recipe)=>{
                return queryRegex.test(recipe.strMeal)
            })
            setSearchResults(searchMatch);
            return
        };
        setSearchResults([])
    }
    useEffect(()=>{
        //used to make the searchArray have unique recipes only
        const uniqueRecipes = [];
        const allRecipes = user.likedRecipes.concat(user.savedRecipes);
        allRecipes.forEach((recipe)=>{
            const isInUniqueArr=uniqueRecipes.filter((item)=>item.idMeal===recipe.idMeal);
            if(!isInUniqueArr.length){
                uniqueRecipes.push(recipe)
            }
        })
        setSearchArray(uniqueRecipes);
    },[user])
    //create the search results elements
     const searchResultsElements = searchResults.map((recipe)=>{
        return <Link to={`/recipe?id=${recipe.idMeal}`}><p>{recipe.strMeal}</p></Link>
    }) 

  return (
    <SearchBarWrapper className='search-bar-wrapper' ref={searchBarElement}>
        <div className='search-bar'>
            <button 
                className="search-categories" 
                onClick={()=>{
                        setShowCategories((prev)=>!prev);
                        //clear the results elements
                        setSearchResults([])
                    }
                }
            >
                <span>Categories</span> 
                <i class={`fa-solid fa-caret-${showCategories?"up":"down"} icon`}></i>
            </button>       
            <input type='text' name="search" placeholder='Search Your Recipes' onInput={searchInputHandler} onClick={()=>setShowCategories(false)}/>
            <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div className={`categories-dropdown ${showCategories?'dropdown-active':''}`}>
            <p className="dropdown-heading">Categories</p>
            <div className="categories-options">
                <button>Beef</button>
                <button>Beef</button>
                <button>Beef</button>
                <button>Beef</button>
                <button>Beef</button>
                <button>Beef</button>
                <button>Beef</button>
            </div>
        </div>
        <div class="search-results">
             {searchResultsElements}
        </div>
        <OutsideClickDetector
            callback={()=>{setShowCategories(false)}}
            targets={[searchBarElement.current]}
            showing={showCategories}
        />
  </SearchBarWrapper>
  )
}

export default SearchBar