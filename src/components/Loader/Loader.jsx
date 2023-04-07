import { Circles } from 'react-loader-spinner';

export function Loader() {
  return (
    <Circles
    height="80"
    width="80"
    color="red"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  );
}