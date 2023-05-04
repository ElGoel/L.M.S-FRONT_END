import { useStore } from 'vuex';

export const mapActions = () => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store._actions).map(action => [
      action,
      (value: any) => store.dispatch(action, value),
    ])
  );
};
