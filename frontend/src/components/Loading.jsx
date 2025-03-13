import Spinner from "react-bootstrap/Spinner";
import Stack from "react-bootstrap/Stack";

const Loading = ({ loading, children }) => {
  return loading ? (
    <Stack
      className="align-items-center justify-content-center"
      direction="horizontal"
      gap="4"
    >
      <Spinner />
      <h3>Loading...</h3>
    </Stack>
  ) : (
    children
  );
};

export default Loading;
