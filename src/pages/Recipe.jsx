import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  const fetchDetails = async () => {
    const data = await fetch(
      `https://json.nitroxis.com/recipes/${params.name}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Spin>
          <Spinner />
        </Spin>
      ) : (
        <DetailWrapper>
          <div className="imageWrapper">
            <h2>{details?.name}</h2>
            <img src={details?.imageURL} alt="" />
          </div>
          <Info>
            <div style={{ display: "flex" }}>
              <Button
                className={activeTab === "instructions" ? "active" : ""}
                onClick={() => setActiveTab("instructions")}
              >
                Instructions
              </Button>
              <Button
                className={activeTab === "ingredients" ? "active" : ""}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </Button>
            </div>
            {activeTab === "instructions" && (
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: details?.steps.join("<br>"),
                  }}
                ></p>
              </div>
            )}
            {activeTab === "ingredients" && (
              <ul>
                {details?.ingredients.map((ingredient) => {
                  return (
                    <li key={ingredient.name}>
                      {ingredient.quantity} {ingredient.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </Info>
        </DetailWrapper>
      )}
    </>
  );
}

const DetailWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: var(--gray-800);
  overflow: hidden;
  .active {
    color: white;
  }

  p {
    color: white;
    line-height: 1.25rem;
    margin: 1rem;
  }

  h2 {
    margin-bottom: 2rem;
    color: white;
    overflow: hidden;
  }
  a {
    color: gray;
    text-decoration: none;
  }

  ul {
    margin-top: 2rem;
    color: var(--gray-800);
  }

  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;
  }
  .imageWrapper {
    width: 50%;
  }
  img {
    border-radius: 0.5rem;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.27);
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 1120px) {
    img {
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 865px) {
    flex-direction: column;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 300px) {
    img {
      margin-right: 1rem;
      width: 100%;
      height: auto;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: #313131;
  background: black;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: gray;
    color: var(--gray-50);
  }
`;
const Spin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Info = styled.div`
  align-items: center;
  width: 50%;
  justifycontent: space-evenly;
  flex-direction: column;
  color: white;

  @media (max-width: 865px) {
    button {
      width: 100%;
    }
    margin-top: 2rem;
    margin-left: 0;
  }
`;

export default Recipe;
