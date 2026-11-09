

import { type ReactNode } from "react";

function Card({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-md p-5 rounded-[20px] shadow-lg flex flex-col justify-content bg-red-800">{children}</div>;
}

export default Card;

