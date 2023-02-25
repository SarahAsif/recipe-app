import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://json.nitroxis.com/recipes?cuisine=${params.type}`
    );
    const recipes = await data.json();
    setCuisine(recipes);
    setIsLoading(false);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Spin>
      {" "}
      {isLoading ? (
        <Spinner />
      ) : (
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cuisine.map((recipe) => {
            return (
              <Card key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <img src={recipe.imageURL} alt={recipe.name} />
                  <h4>{recipe.name}</h4>
                </Link>
              </Card>
            );
          })}
        </Grid>
      )}
    </Spin>
  );
}

const Grid = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 3rem;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 865px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
`;
const Spin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Card = styled.div`
  img {
    width: 300px;
    border-radius: 1rem;
    height: 300px;
    margin: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    margin: 1rem;
  }
`;

export default Cuisine;
