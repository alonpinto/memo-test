import React from "react";

function Item({ item, selectItem, group, subgroup }) {
  return (
    <div
      className={`item${item.selected ? " item--selected" : ""}`}
      onClick={() => selectItem(group, subgroup, item.id)}
    >
      <div className="item-img">
        <img src="https://placehold.it/64x64" />
      </div>
      <span>{item.name}</span>
    </div>
  );
}

const MemoItem = React.memo(Item, (prevProps, nextProps) => {
  if (prevProps.item.selected === nextProps.item.selected) {
    return true;
  }
  return false;
});

export default MemoItem;
