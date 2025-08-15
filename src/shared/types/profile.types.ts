export interface IProfile {
  img: string | null;
  firstName: string;
  lastName: string;
  email?: string;
}

export type TProfileDetails = Pick<IProfile, 'firstName' | 'lastName' | 'email'>

export type TProfileImg = IProfile['img']
