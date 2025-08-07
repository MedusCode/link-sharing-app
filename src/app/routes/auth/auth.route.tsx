import { FC } from 'react';
import AuthLayout from '../../../features/auth/layouts/auth/auth.layout';
import AnimatedOutlet from '../../../shared/animations/outlet.animation';
import authOutletAnimationPreset from '../../../features/auth/presets/auth-outlet-animation.preset';

const AuthRoute: FC = () => {
  return (
    <AuthLayout>
      <AnimatedOutlet animation={authOutletAnimationPreset} />
    </AuthLayout>
  );
};

export default AuthRoute;
