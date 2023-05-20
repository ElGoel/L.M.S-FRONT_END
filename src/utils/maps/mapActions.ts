import { useStore } from 'vuex';

export const mapActions = () => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store._actions).map(action => {
      const actionName = action.split('/').pop();
      return [actionName, (value: unknown) => store.dispatch(action, value)];
    })
  );
};
