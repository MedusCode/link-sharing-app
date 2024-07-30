import { FC, useEffect } from 'react';
import styles from './root.module.css';
import { useNavigate } from 'react-router-dom';

const Root: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate])

  return (
    <></>
  );
}

export default Root;
