import { Link } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
const NotFound = () => {
  return (
    <>
      <div>NOT FOUND</div>
      <Link to={PAGE_NAMES.home}>Go to homepage</Link>
    </>
  );
};
export default NotFound;
