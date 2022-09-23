import React from 'react';

import { color } from "theme";
import Loader from "./Loader";


interface ButtonLoaderProps {
   isSubmitting : string;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ isSubmitting }) => (
    <>{isSubmitting && <Loader color={color.white} />}</>
  );

export default ButtonLoader;
