import React from 'react';

const renderPicture = field => (<div
  className="recipe-box__picture"
>
  <img className="recipe-box__picture--preview" src={field.input.value} alt="" />

  <input
    className="recipe-box__picture--input"
    type="file"
    accept="image/*"
    onChange={(event) => {
      const reader = new FileReader();
      reader.onloadend = (d) => {
        field.input.onChange(d.target.result);
      };
      reader.readAsDataURL(event.files[0]);
    }}
  />
</div>);

export default renderPicture;
