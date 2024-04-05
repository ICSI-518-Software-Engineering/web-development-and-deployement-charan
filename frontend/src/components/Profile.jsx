import React, { useState, useEffect } from 'react';
import image from '../assets/image.jpg'

function Profile() {
  const [name, setName] = useState(localStorage.getItem('name') || "Sai Charan Panthulu");
  const [description, setDescription] = useState(localStorage.getItem('description') || "Hi there, This is Sai Charan Panthulu, a current computer science graduate at University at Albany, SUNY. Growing up, I was always fascinated by Animation and UI. Apart from academics, I have always been active in sports, sketching and very much passionate to learn new skills. My education and extracurricular experiences are laying the groundwork for achieving my goals, and I'm eager to continue this journey.");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('description', description);
  }, [name, description]);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-md-3">
          {/* Profile Picture Container */}
          <div className="profile-picture-container" style={{ width: '300px', height: '500px' }}>
            <img
              src={image}
              alt="Profile"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md">
          {/* Information Container */}
          <div className="information-container">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control border border-primary mt-3"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
                style={{ maxWidth: '200px', width: '100%' }}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control border border-danger border-double"
                id="description"
                rows="10"
                placeholder="Enter description"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;