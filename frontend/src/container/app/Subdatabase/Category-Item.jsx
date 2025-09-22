import React, { useState } from 'react';
import './Category-Item.scss';

const CategoryItems = () => {
  const [categoryName, setCategoryName] = useState('');
  const [existedCategory, setExistedCategory] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [file, setFile] = useState(null);
  const [isCategoryCreated, setIsCategoryCreated] = useState(true);

  const handleSaveCategoryItem = () => {
    if (isCategoryCreated) {
      console.log('Category Created:', categoryName, 'Item Description:', itemDescription);
    } else {
      console.log('Existed Category:', existedCategory, 'Item Description:', itemDescription);
    }
  };

  const handleAssignItem = () => {
    console.log('Assigned Item:', itemDescription, 'to Category:', selectedCategory);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    console.log('File uploaded:', e.target.files[0].name);
  };

  return (
    <div className="category-items-container">
      <header className="page-header">
        <h1>Category Item Management</h1>
      </header>

      {/* Category Creation Section */}
      <section className="section account-creation">
        <h2>1. Create Category</h2>
        <p>Choose whether to create a new category or use an existing one.</p>
        {isCategoryCreated ? (
          <div className="form-group">
            <label htmlFor="categoryName">Create Category:</label>
            <input
              id="categoryName"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter Category Name"
            />
          </div>
        ) : (
          <div className="form-group">
            <label htmlFor="existedCategory">Existed Category:</label>
            <input
              id="existedCategory"
              type="text"
              value={existedCategory}
              onChange={(e) => setExistedCategory(e.target.value)}
              placeholder="Enter Existed Category Name"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="itemDescription">Item Description:</label>
          <input
            id="itemDescription"
            type="text"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            placeholder="Enter Item Description"
          />
        </div>

        <button onClick={handleSaveCategoryItem}>Save Category</button>
      </section>

      {/* Assign Item to Category Section */}
      <section className="section assign-item">
        <h2>2. Assign Item to Category</h2>
        <div className="form-group">
          <label htmlFor="selectedCategory">Category:</label>
          <input
            id="selectedCategory"
            type="text"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            placeholder="Enter Category Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="assignItemDescription">Item Description:</label>
          <input
            id="assignItemDescription"
            type="text"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            placeholder="Enter Item Description"
          />
        </div>

        <button onClick={handleAssignItem}>Save Item</button>
      </section>

      {/* Massive Creation Section */}
      <section className="section massive-creation">
        <h2>3. Massive Creation</h2>
        <p>Download a template for bulk creation, then upload the file to process multiple categories and items.</p>

        <button className="btn-template-download">Download Template</button>

        <div className="file-upload-group">
          <input type="file" onChange={handleFileUpload} />
          {file && <div>File: {file.name}</div>}
        </div>

        <button className="btn-upload-file">Upload File</button>
      </section>

      {/* Toggle Category Creation */}
      <div className="toggle-category">
        <button onClick={() => setIsCategoryCreated(!isCategoryCreated)}>
          {isCategoryCreated ? 'Switch to Existed Category' : 'Switch to Create Category'}
        </button>
      </div>
    </div>
  );
};

export default CategoryItems;
