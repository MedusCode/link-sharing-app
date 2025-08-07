import { ROUTES } from '../constants/routes';

type TRoutes = typeof ROUTES;

type TRoutePath = {
  [K in keyof TRoutes]: TRoutes[K][keyof TRoutes[K]];
}[keyof TRoutes];

export default TRoutePath;
