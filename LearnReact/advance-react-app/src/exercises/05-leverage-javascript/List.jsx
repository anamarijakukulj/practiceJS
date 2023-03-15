import { Person } from "./Person";
import { people } from "../../data";

const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person />;
      })}
    </div>
  );
};

export default List;
