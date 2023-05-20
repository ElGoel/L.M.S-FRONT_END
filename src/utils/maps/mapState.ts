import { computed } from 'vue';
import { useStore } from 'vuex';

export const mapState = () => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store.state).map(key => {
      return [key, computed(() => store.state[key])];
    })
  );
};
