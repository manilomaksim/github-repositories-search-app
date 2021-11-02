import { IRepository } from './repository-interface';

export interface IExtendedRepository extends IRepository {
  owner:{
    login: string,
    avatar_url: string
  },
  watchers: number,
  forks: number
}
