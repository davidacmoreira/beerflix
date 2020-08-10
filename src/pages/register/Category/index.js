import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  function handleSubmit(eventInfo) {
    eventInfo.preventDefault();
    setCategories([
      ...categories,
      values,
    ]);

    setValues(initValues);
  }

  return (
    <PageDefault>
      <h1>
        Register Category:
        {' '}
        {values.name}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          Tag="input"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <FormField
          label="Description"
          Tag="textarea"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Color"
          Tag="input"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <Button>
          Register
        </Button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
