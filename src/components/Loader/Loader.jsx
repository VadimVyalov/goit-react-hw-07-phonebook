import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.stiled';
const Loader = () => (
  <LoaderWrapper>
    <RotatingLines
      strokeColor="#d61d1d"
      strokeWidth="4"
      animationDuration="1"
      width="100"
      visible={true}
    />
  </LoaderWrapper>
);

export default Loader;
