import React from 'react';

const renderPicture = field => (<div
  style={field.input.value ? {
    backgroundImage: `url(${field.input.value})`,
  } : {}}
>
  {/* <img className={classnames('recipe-box__image-preview')} src={field.input.value} alt="" /> */}

  <input
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
