import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';

const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3500/find');
        setItems(response.data);
        if (response.data.length === 0) {
          alert('No items in inventory');
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.get('http://localhost:3500/find');
      setItems(response.data);
    } catch (error) {
      console.error('Error updating items:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.get('http://localhost:3500/find');
      setItems(response.data);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2 className="text-green-700 font-bold">Cars Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(items) && items.map((item) => (
            <Item key={item._id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
