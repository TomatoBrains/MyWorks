export namespace UserInfoModel {
    export interface State {
      userData: Data,
      userAd: Ad,
      id: number,
    }
  }
  export class Data {
    id: number = 0;
    email: string = '';
    first_name: string = '';
    last_name: string = '';
    avatar: string = '';
  }
  export class Ad {
    company: string = '';
    url: string = '';
    text: string = '';
  }