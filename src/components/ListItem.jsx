import React, { useState } from "react";

function ListItem(props) {
  const [active, changeStatus] = useState(true);

  return <li>{props.content}</li>;
}

export default ListItem;
