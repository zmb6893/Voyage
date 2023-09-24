declare module 'uuid' {
    export function v1(options?: any, buffer?: any, offset?: number): string;
    export function v3(options?: any, buffer?: any, offset?: number): string;
    export function v4(options?: any, buffer?: any, offset?: number): string;
    export function v5(options?: any, buffer?: any, offset?: number): string;
  }  