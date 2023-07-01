import { LoadingData } from "../constants";
export const yourActionCreator = (data) => {
  return {
    type: LoadingData,
    data: data,
  };
};
