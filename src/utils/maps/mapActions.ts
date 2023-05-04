import { useStore, Store } from 'vuex';
import { ICattleState } from '@/interfaces/cattleState.interface';

export const mapActions = () => {
  const store: Store<ICattleState> = useStore();
  return Object.fromEntries(
    Object.keys(store._actions).map(action => [
      action,
      (value: unknown) => store.dispatch(action, value),
    ])
  );
};
