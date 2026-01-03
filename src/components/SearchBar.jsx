import { Form, FormControl } from "react-bootstrap";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Form className="mb-4">
      <FormControl
        type="text"
        placeholder="Search events by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
