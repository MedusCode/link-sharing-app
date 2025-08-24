export interface Profile {
  img?: string | null;
  firstName: string;
  lastName: string;
  email?: string;
}

export type ProfileDetails = Pick<Profile, 'firstName' | 'lastName' | 'email'>

export type ProfileImg = Profile['img']
