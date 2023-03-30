declare namespace Api {
  export namespace Game {
    export namespace Req {
      export interface Get {
        difficulty: number[];
      }
    }
  }
  export namespace Res {
    export interface Game {
      id: number;
      image: string;
    }
  }
}
