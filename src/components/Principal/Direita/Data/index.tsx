// components/Data/index.tsx
import React from "react";

interface DataProps {
  data: string;
}

const Data: React.FC<DataProps> = ({ data }) => {
  return <div className="mega-data-concurso">{data}</div>;
};

export default Data;
