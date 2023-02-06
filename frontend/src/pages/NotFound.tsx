import { Link, useRouteError } from 'react-router-dom';

interface NotFoundMsg {
  statusText: string;
  status: number;
  data: string;
}

const NotFound = () => {
  //TODO tipar bien any
  const error: any = useRouteError();

  return (
    <div>
      <h2>{error.statusText}</h2>
      <h3>{error.status}</h3>
      <h4>{error.data}</h4>
      <Link to="/">Ir al Home</Link>
    </div>
  );
};

export default NotFound;
