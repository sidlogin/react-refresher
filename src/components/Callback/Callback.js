import { useState } from "react";
import Search from "./Search";
import { Button } from "@mui/material";
import Users from "./Users";

const usersData = [
  { id: "a001", name: "John", state: "NY" },
  { id: "a0012", name: "David", state: "TX" },
  { id: "a0013", name: "Eric", state: "NJ" },
  { id: "a0014", name: "Matt", state: "CA" },
  { id: "a0015", name: "Ram", state: "DE" },
  { id: "a0016", name: "Madan", state: "DE" },
  { id: "a0017", name: "Jacob", state: "DE" },
  { id: "a0018", name: "Jordan", state: "DE" },
];

export default function Callback() {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    const userData = users?.length > 0 ? users : usersData;
    const filteredUsers =
      value?.length > 1
        ? userData.filter((user) =>
            user?.name
              ?.toLowerCase()
              .includes(value?.toLowerCase())
          )
        : usersData;
    setUsers(filteredUsers);
  };

  const handleRefresh = () => {
    // setUsers(usersData);
    setSearchTerm("");
  };
  return (
    <div className="App">
        <br />
      <Search onSearch={handleSearch} style={{"margin-top": "120px"}} />
      <div style={{ display: "inline-block", marginLeft: "1rem" }}>
        <Button
          variant="contained"
          onClick={handleRefresh}
          style={{
            maxWidth: "230px",
            minHeight: "54px",
          }}
        >
          Reset
        </Button>
      </div>
    <Users users={users} />
    </div>
  );
}
