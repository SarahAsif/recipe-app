import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import * as ReactBootStrap from "react-bootstrap";
import Spinner from "../Spinner";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://json.nitroxis.com/recipes?name_like=${params.search}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes);
    setIsLoading(false);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <Link to={`/recipe/${recipe.id}`}>
            {isLoading ? (
              <Spinner />
            ) : (
              <Card key={recipe.id}>
                <img src={recipe.imageURL} alt={recipe.name} />
                <h4>{recipe.name}</h4>
              </Card>
            )}
          </Link>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem;
  justify-content: space-around;
  align-items: center;
`;

const Card = styled.div`
  img {
    border-radius: 2rem;
    width: 300px;
    border-radius: 1rem;
    height: 300px;
  }
  h4 {
    margin: 1rem;
    color: white;
  }
`;
export default Searched;
