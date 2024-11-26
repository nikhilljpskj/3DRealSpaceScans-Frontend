declare module "jsonwebtoken" {
    export function decode(token: string, options?: { json?: boolean }): any;
    export function verify(token: string, secretOrPublicKey: string | Buffer, options?: any): any;
    // Add other functions as needed
  }
  