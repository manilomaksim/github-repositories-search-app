import { IRepository } from '../../interfaces/repository-interface';
import { IParams } from '../../interfaces/params-inrerface';

export interface IRepositoryState {
  params: IParams
  items: IRepository[],
  language: string,
  isActiveLoader: boolean,
}

export const initialRepositoryState: IRepositoryState = {
  params: { q: '' },
  items: [],
  language: '',
  isActiveLoader: false
}
