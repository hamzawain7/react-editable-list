import React from "react";

export interface ListItemProps {
    label: string;
}

const ListItem = (props: ListItemProps) => {
    return <button>{props.label}</button>;
};

export default ListItem;
