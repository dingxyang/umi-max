import { proxy } from 'umi';

interface IState {
  copyDatas: any[][];
}
export const state = proxy<IState>({
  copyDatas: [],
});

export const actions = {
  update(copyDatas: any[][]) {
    state.copyDatas = [...copyDatas];
  },
};
