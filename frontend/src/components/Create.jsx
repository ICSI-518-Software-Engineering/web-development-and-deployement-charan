import { useState } from "react";
import axios from "axios";
// const baseURL = process.env.BASE_URL || "";
const baseURL = "http://localhost:3500";

const Create = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("quantity", quantity);
      formData.append("image", image);

      await axios.post(baseURL + "/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(formData);
      console.log();
      ("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setName("");
    setQuantity("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-green-700 font-bold pb-2">Inventory</h1>
      <div className="pb-2">
        <input
          type="text"
          className="outline rounded"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="pb-2">
        <input
          type="number"
          className="outline rounded"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="pb-2">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button
        type="submit"
        className="bg-green-700 p-1 px-2 rounded text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default Create;
