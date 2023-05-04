import { useStore } from 'vuex';

export const mapMutations = () => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store._mutations).map(mutation => [
      mutation,
      (value: any) => store.commit(mutation, value),
    ])
  );
};
