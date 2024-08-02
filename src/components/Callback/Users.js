import { memo } from "react";
import styled from "styled-components";

const SearchResults = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 0 20px;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  text-lign: center;
  justify-content: center;
  width: 220px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  text-lign: center;
  justify-content: center;
  width: 180px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin: 0;
  padding: 20px;
  color: #ccc;
`;
function Users({ users }) {
  console.log("Users loaded");
  const results = users
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((user) => (
    <SearchResults key={user.id}>
      <p>{user.name}</p>
    </SearchResults>
  ));
  return (
    <>
        {results.length < 1 && <NoResults>No results!</NoResults>}
        {results.length > 0 && <Results>{results}</Results>}
    </>
  );
}

export default memo(Users);
