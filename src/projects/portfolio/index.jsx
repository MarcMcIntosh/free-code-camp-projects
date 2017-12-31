import universal from 'react-universal-component';

export default universal(import('./Portfolio'), {
  onLoad: (module, info, props, context) => {
    context.store.replaceReducer(module.reducer);
    context.store.dispatch(undefined, {});
  },
});
// example reducer init function f(s = 'hello', a = {}) { switch (a.type) { default: return s } }; f();
