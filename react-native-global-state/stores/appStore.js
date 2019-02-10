import { observable } from 'mobx';

class ObservableListStore {
  @observable text: string = '';
}

const observableListStore = new ObservableListStore();
export default observableListStore;
