import React from "react";
import css from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div>
      <h1 className={css.error}>Sorry, this page does not exist...</h1>
    </div>
  );
};
