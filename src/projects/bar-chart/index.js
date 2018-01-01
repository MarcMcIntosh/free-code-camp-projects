import universal from 'react-universal-component';

export default universal(import('./BarChart'), {
  onLoad: (module, info, props, context) => {
    context.store.replaceReducer(module.reducer);
  },
});
