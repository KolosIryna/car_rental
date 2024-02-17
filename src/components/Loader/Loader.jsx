import { Circles } from "react-loader-spinner";
import { StyledLoader } from "./StyledLoader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <Circles
        height="80"
        width="80"
        color="#3470FF"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoader>
  );
};

export default Loader;
