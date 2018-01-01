import universal from 'react-universal-component';

export default universal(import('./Portfolio'), {
  onLoad: (module, info, props, context) => {
    context.store.replaceReducer(module.reducer);
  },
});
