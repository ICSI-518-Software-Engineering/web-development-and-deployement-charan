import { useState } from "react";
import axios from "axios";

const baseURL = "";

const Item = ({ item, onUpdate, onDelete }) => {
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async () => {
    try {
      await axios.patch(baseURL + `/update/${item._id}`, { name, quantity });
      onUpdate();
      console.log("Item updated successfully");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(baseURL + `/delete/${item._id}`);
      onDelete();
      console.log("Item deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <tr>
      <td className="pr-3">
        <img
          src={baseURL + `/uploads/${item.image}`}
          alt={item.name}
          style={{ width: "150px", height: "150px" }}
        />
      </td>
      <td className="pr-3">{item.name}</td>
      <td className="pr-3">{item.quantity}</td>
      <td className="pr-3">
        <button
          className="bg-green-500 p-1 px-2 rounded text-white mr-2"
          onClick={() => setIsEditing(true)}
        >
          Update
        </button>
        <button
          className="bg-red-500 p-1 px-2 rounded text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
        {isEditing && (
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              className="outline rounded mr-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              className="outline rounded"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-500 p-1 px-2 rounded text-white mr-2"
            >
              Submit
            </button>
            <button
              className="bg-red-500 p-1 px-2 rounded text-white"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </form>
        )}
      </td>
    </tr>
  );
};

export default Item;
