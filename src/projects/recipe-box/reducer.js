import { REHYDRATE } from 'redux-persist/constants';

import {
  CREATE,
  READ,
  UPDATE,
  DELETE,
} from './actions';

const DEFAULT_STATE = {
  recipes: [
    { title: 'victoria sponge',
      created_at: '2017-10-27T22:44:40.226Z',
      updated_at: '2017-10-27T22:44:40.226Z',
      desc: 'sponge with jam',
      image: 'http://www.bbcgoodfood.com/sites/bbcgoodfood.com/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg',
      ingredients: [
        '200g unsalted butter, softened, plus extra for greasing',
        '200g caster sugar',
        '1 tsp vanilla extract',
        '4 medium eggs',
        '200g self-raising flour, plus extra for dusting',
        'about 6 tbsp raspberry jam',
        '250ml double cream, whipped',
        'icing sugar, for dusting',
      ],
      preparation: 'Heat oven to 190C/170C fan/gas 5. Grease and flour 2 x 20cm sandwich tins. Place the butter, sugar and vanilla extract into a bowl and beat well to a creamy consistency. Slowly beat in the eggs, one by one, then fold in the flour and mix well.\nDivide the mix between the cake tins, place into the oven and bake for about 20 mins until risen and golden brown. The cakes should spring back when gently pushed in the middle. When ready, remove from the oven and allow to cool for 5 mins in the tin, before turning out onto a wire rack and cooling completely.\nSpread the jam onto one cake and top with the cream. Sandwich the cakes together and dust with icing sugar.' },
    { title: 'Neeps and tatties soup',
      created_at: '2017-10-27T22:47:02.297Z',
      updated_at: '2017-10-27T22:47:02.297Z',
      desc: 'Enjoy a taste of Scotland in our warming soup with swede, potato and haggis topping. It\'s Burns Night in a bowl',
      image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/01/neeps-and-tatties-soup.jpg',
      ingredients: [
        '25g butter',
        '1/4 tsp ground coriander',
        '1 onion, chopped',
        '1/2 medium-sized swede (about 200g), peeled and chopped into small pieces',
        '1 carrot, sliced',
        '1 celery stick, sliced into small pieces',
        '140g potatoes, chopped into small pieces',
        'good grating of nutmeg',
        '400ml milk',
        '140g cooked haggis or black pudding, chopped or crumbled into pieces',
        '2 tbsp double cream',
        'a few celery leaves, torn',
      ],
    },
  ],
  reading: -1,
  editting: false,
};

function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REHYDRATE: {
      const { recipes } = action.payload.recipeBox || state;
      return { ...state, recipes };
    }
    case READ: return {
      ...state,
      reading: action.payload,
    };
    case CREATE: return {
      ...state,
      editting: action.payload,
    };
    case UPDATE: {
      if (action.payload.index === -1) {
        return {
          ...state,
          recipes: [].concat(action.payload.values, state.recipes),
          editting: false,
        };
      }
      const recipes = state.recipes.slice(0);
      recipes.splice(action.payload.index, 1, action.payload.values);
      return { ...state, recipes, editting: false };
    }
    case DELETE: {
      const recipes = state.recipes.filter((d, i) => (i !== action.payload));
      return {
        ...state,
        recipes,
        reading: state.reading - 1,
        editting: false,
      };
    }
    default: return state;
  }
}

export default reducer;
