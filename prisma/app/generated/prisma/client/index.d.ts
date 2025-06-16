
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model MajorCabinet
 * 
 */
export type MajorCabinet = $Result.DefaultSelection<Prisma.$MajorCabinetPayload>
/**
 * Model SecondaryCabinet
 * 
 */
export type SecondaryCabinet = $Result.DefaultSelection<Prisma.$SecondaryCabinetPayload>
/**
 * Model MobileTower
 * 
 */
export type MobileTower = $Result.DefaultSelection<Prisma.$MobileTowerPayload>
/**
 * Model CopperLine
 * 
 */
export type CopperLine = $Result.DefaultSelection<Prisma.$CopperLinePayload>
/**
 * Model MsanCabinet
 * 
 */
export type MsanCabinet = $Result.DefaultSelection<Prisma.$MsanCabinetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Status: {
  ACTIVE: 'ACTIVE',
  PENDING_ADD: 'PENDING_ADD',
  PENDING_UPDATE: 'PENDING_UPDATE'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.majorCabinet`: Exposes CRUD operations for the **MajorCabinet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MajorCabinets
    * const majorCabinets = await prisma.majorCabinet.findMany()
    * ```
    */
  get majorCabinet(): Prisma.MajorCabinetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secondaryCabinet`: Exposes CRUD operations for the **SecondaryCabinet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecondaryCabinets
    * const secondaryCabinets = await prisma.secondaryCabinet.findMany()
    * ```
    */
  get secondaryCabinet(): Prisma.SecondaryCabinetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mobileTower`: Exposes CRUD operations for the **MobileTower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MobileTowers
    * const mobileTowers = await prisma.mobileTower.findMany()
    * ```
    */
  get mobileTower(): Prisma.MobileTowerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.copperLine`: Exposes CRUD operations for the **CopperLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CopperLines
    * const copperLines = await prisma.copperLine.findMany()
    * ```
    */
  get copperLine(): Prisma.CopperLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.msanCabinet`: Exposes CRUD operations for the **MsanCabinet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MsanCabinets
    * const msanCabinets = await prisma.msanCabinet.findMany()
    * ```
    */
  get msanCabinet(): Prisma.MsanCabinetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    MajorCabinet: 'MajorCabinet',
    SecondaryCabinet: 'SecondaryCabinet',
    MobileTower: 'MobileTower',
    CopperLine: 'CopperLine',
    MsanCabinet: 'MsanCabinet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "majorCabinet" | "secondaryCabinet" | "mobileTower" | "copperLine" | "msanCabinet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      MajorCabinet: {
        payload: Prisma.$MajorCabinetPayload<ExtArgs>
        fields: Prisma.MajorCabinetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorCabinetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorCabinetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>
          }
          findFirst: {
            args: Prisma.MajorCabinetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorCabinetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>
          }
          findMany: {
            args: Prisma.MajorCabinetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>[]
          }
          create: {
            args: Prisma.MajorCabinetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>
          }
          createMany: {
            args: Prisma.MajorCabinetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorCabinetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>[]
          }
          delete: {
            args: Prisma.MajorCabinetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>
          }
          update: {
            args: Prisma.MajorCabinetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>
          }
          deleteMany: {
            args: Prisma.MajorCabinetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorCabinetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorCabinetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>[]
          }
          upsert: {
            args: Prisma.MajorCabinetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorCabinetPayload>
          }
          aggregate: {
            args: Prisma.MajorCabinetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajorCabinet>
          }
          groupBy: {
            args: Prisma.MajorCabinetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorCabinetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCabinetCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCabinetCountAggregateOutputType> | number
          }
        }
      }
      SecondaryCabinet: {
        payload: Prisma.$SecondaryCabinetPayload<ExtArgs>
        fields: Prisma.SecondaryCabinetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecondaryCabinetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecondaryCabinetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>
          }
          findFirst: {
            args: Prisma.SecondaryCabinetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecondaryCabinetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>
          }
          findMany: {
            args: Prisma.SecondaryCabinetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>[]
          }
          create: {
            args: Prisma.SecondaryCabinetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>
          }
          createMany: {
            args: Prisma.SecondaryCabinetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecondaryCabinetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>[]
          }
          delete: {
            args: Prisma.SecondaryCabinetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>
          }
          update: {
            args: Prisma.SecondaryCabinetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>
          }
          deleteMany: {
            args: Prisma.SecondaryCabinetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecondaryCabinetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecondaryCabinetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>[]
          }
          upsert: {
            args: Prisma.SecondaryCabinetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecondaryCabinetPayload>
          }
          aggregate: {
            args: Prisma.SecondaryCabinetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecondaryCabinet>
          }
          groupBy: {
            args: Prisma.SecondaryCabinetGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecondaryCabinetGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecondaryCabinetCountArgs<ExtArgs>
            result: $Utils.Optional<SecondaryCabinetCountAggregateOutputType> | number
          }
        }
      }
      MobileTower: {
        payload: Prisma.$MobileTowerPayload<ExtArgs>
        fields: Prisma.MobileTowerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MobileTowerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MobileTowerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>
          }
          findFirst: {
            args: Prisma.MobileTowerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MobileTowerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>
          }
          findMany: {
            args: Prisma.MobileTowerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>[]
          }
          create: {
            args: Prisma.MobileTowerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>
          }
          createMany: {
            args: Prisma.MobileTowerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MobileTowerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>[]
          }
          delete: {
            args: Prisma.MobileTowerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>
          }
          update: {
            args: Prisma.MobileTowerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>
          }
          deleteMany: {
            args: Prisma.MobileTowerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MobileTowerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MobileTowerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>[]
          }
          upsert: {
            args: Prisma.MobileTowerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileTowerPayload>
          }
          aggregate: {
            args: Prisma.MobileTowerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMobileTower>
          }
          groupBy: {
            args: Prisma.MobileTowerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MobileTowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MobileTowerCountArgs<ExtArgs>
            result: $Utils.Optional<MobileTowerCountAggregateOutputType> | number
          }
        }
      }
      CopperLine: {
        payload: Prisma.$CopperLinePayload<ExtArgs>
        fields: Prisma.CopperLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CopperLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CopperLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>
          }
          findFirst: {
            args: Prisma.CopperLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CopperLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>
          }
          findMany: {
            args: Prisma.CopperLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>[]
          }
          create: {
            args: Prisma.CopperLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>
          }
          createMany: {
            args: Prisma.CopperLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CopperLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>[]
          }
          delete: {
            args: Prisma.CopperLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>
          }
          update: {
            args: Prisma.CopperLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>
          }
          deleteMany: {
            args: Prisma.CopperLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CopperLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CopperLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>[]
          }
          upsert: {
            args: Prisma.CopperLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CopperLinePayload>
          }
          aggregate: {
            args: Prisma.CopperLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCopperLine>
          }
          groupBy: {
            args: Prisma.CopperLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<CopperLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.CopperLineCountArgs<ExtArgs>
            result: $Utils.Optional<CopperLineCountAggregateOutputType> | number
          }
        }
      }
      MsanCabinet: {
        payload: Prisma.$MsanCabinetPayload<ExtArgs>
        fields: Prisma.MsanCabinetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MsanCabinetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MsanCabinetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>
          }
          findFirst: {
            args: Prisma.MsanCabinetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MsanCabinetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>
          }
          findMany: {
            args: Prisma.MsanCabinetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>[]
          }
          create: {
            args: Prisma.MsanCabinetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>
          }
          createMany: {
            args: Prisma.MsanCabinetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MsanCabinetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>[]
          }
          delete: {
            args: Prisma.MsanCabinetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>
          }
          update: {
            args: Prisma.MsanCabinetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>
          }
          deleteMany: {
            args: Prisma.MsanCabinetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MsanCabinetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MsanCabinetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>[]
          }
          upsert: {
            args: Prisma.MsanCabinetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MsanCabinetPayload>
          }
          aggregate: {
            args: Prisma.MsanCabinetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMsanCabinet>
          }
          groupBy: {
            args: Prisma.MsanCabinetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MsanCabinetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MsanCabinetCountArgs<ExtArgs>
            result: $Utils.Optional<MsanCabinetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    majorCabinet?: MajorCabinetOmit
    secondaryCabinet?: SecondaryCabinetOmit
    mobileTower?: MobileTowerOmit
    copperLine?: CopperLineOmit
    msanCabinet?: MsanCabinetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userName: string | null
    password: string | null
    name: string | null
    phoneNumber: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    password: string | null
    name: string | null
    phoneNumber: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    password: number
    name: number
    phoneNumber: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    name?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    name?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    name?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    password: string
    name: string | null
    phoneNumber: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    password?: boolean
    name?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userName" | "password" | "name" | "phoneNumber" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      password: string
      name: string | null
      phoneNumber: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sessionToken" | "userId" | "expires" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.updateManyAndReturn({
     *   select: { sessionToken: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model MajorCabinet
   */

  export type AggregateMajorCabinet = {
    _count: MajorCabinetCountAggregateOutputType | null
    _avg: MajorCabinetAvgAggregateOutputType | null
    _sum: MajorCabinetSumAggregateOutputType | null
    _min: MajorCabinetMinAggregateOutputType | null
    _max: MajorCabinetMaxAggregateOutputType | null
  }

  export type MajorCabinetAvgAggregateOutputType = {
    number_of_joints: number | null
  }

  export type MajorCabinetSumAggregateOutputType = {
    number_of_joints: number | null
  }

  export type MajorCabinetMinAggregateOutputType = {
    id: string | null
    central: string | null
    village: string | null
    cabinet: string | null
    central_to_cabinet_distance: string | null
    number_of_joints: number | null
    joint_location: string | null
    rooms: string | null
    room_location: string | null
    entitlement: string | null
    distance: string | null
    status: $Enums.Status | null
    responsible: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MajorCabinetMaxAggregateOutputType = {
    id: string | null
    central: string | null
    village: string | null
    cabinet: string | null
    central_to_cabinet_distance: string | null
    number_of_joints: number | null
    joint_location: string | null
    rooms: string | null
    room_location: string | null
    entitlement: string | null
    distance: string | null
    status: $Enums.Status | null
    responsible: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MajorCabinetCountAggregateOutputType = {
    id: number
    central: number
    village: number
    cabinet: number
    central_to_cabinet_distance: number
    number_of_joints: number
    joint_location: number
    rooms: number
    room_location: number
    entitlement: number
    distance: number
    status: number
    responsible: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MajorCabinetAvgAggregateInputType = {
    number_of_joints?: true
  }

  export type MajorCabinetSumAggregateInputType = {
    number_of_joints?: true
  }

  export type MajorCabinetMinAggregateInputType = {
    id?: true
    central?: true
    village?: true
    cabinet?: true
    central_to_cabinet_distance?: true
    number_of_joints?: true
    joint_location?: true
    rooms?: true
    room_location?: true
    entitlement?: true
    distance?: true
    status?: true
    responsible?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MajorCabinetMaxAggregateInputType = {
    id?: true
    central?: true
    village?: true
    cabinet?: true
    central_to_cabinet_distance?: true
    number_of_joints?: true
    joint_location?: true
    rooms?: true
    room_location?: true
    entitlement?: true
    distance?: true
    status?: true
    responsible?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MajorCabinetCountAggregateInputType = {
    id?: true
    central?: true
    village?: true
    cabinet?: true
    central_to_cabinet_distance?: true
    number_of_joints?: true
    joint_location?: true
    rooms?: true
    room_location?: true
    entitlement?: true
    distance?: true
    status?: true
    responsible?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MajorCabinetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorCabinet to aggregate.
     */
    where?: MajorCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCabinets to fetch.
     */
    orderBy?: MajorCabinetOrderByWithRelationInput | MajorCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MajorCabinets
    **/
    _count?: true | MajorCabinetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MajorCabinetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MajorCabinetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorCabinetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorCabinetMaxAggregateInputType
  }

  export type GetMajorCabinetAggregateType<T extends MajorCabinetAggregateArgs> = {
        [P in keyof T & keyof AggregateMajorCabinet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajorCabinet[P]>
      : GetScalarType<T[P], AggregateMajorCabinet[P]>
  }




  export type MajorCabinetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorCabinetWhereInput
    orderBy?: MajorCabinetOrderByWithAggregationInput | MajorCabinetOrderByWithAggregationInput[]
    by: MajorCabinetScalarFieldEnum[] | MajorCabinetScalarFieldEnum
    having?: MajorCabinetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCabinetCountAggregateInputType | true
    _avg?: MajorCabinetAvgAggregateInputType
    _sum?: MajorCabinetSumAggregateInputType
    _min?: MajorCabinetMinAggregateInputType
    _max?: MajorCabinetMaxAggregateInputType
  }

  export type MajorCabinetGroupByOutputType = {
    id: string
    central: string
    village: string
    cabinet: string
    central_to_cabinet_distance: string
    number_of_joints: number
    joint_location: string
    rooms: string
    room_location: string
    entitlement: string
    distance: string
    status: $Enums.Status
    responsible: string
    notes: string
    createdAt: Date
    updatedAt: Date
    _count: MajorCabinetCountAggregateOutputType | null
    _avg: MajorCabinetAvgAggregateOutputType | null
    _sum: MajorCabinetSumAggregateOutputType | null
    _min: MajorCabinetMinAggregateOutputType | null
    _max: MajorCabinetMaxAggregateOutputType | null
  }

  type GetMajorCabinetGroupByPayload<T extends MajorCabinetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorCabinetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorCabinetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorCabinetGroupByOutputType[P]>
            : GetScalarType<T[P], MajorCabinetGroupByOutputType[P]>
        }
      >
    >


  export type MajorCabinetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    village?: boolean
    cabinet?: boolean
    central_to_cabinet_distance?: boolean
    number_of_joints?: boolean
    joint_location?: boolean
    rooms?: boolean
    room_location?: boolean
    entitlement?: boolean
    distance?: boolean
    status?: boolean
    responsible?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["majorCabinet"]>

  export type MajorCabinetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    village?: boolean
    cabinet?: boolean
    central_to_cabinet_distance?: boolean
    number_of_joints?: boolean
    joint_location?: boolean
    rooms?: boolean
    room_location?: boolean
    entitlement?: boolean
    distance?: boolean
    status?: boolean
    responsible?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["majorCabinet"]>

  export type MajorCabinetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    village?: boolean
    cabinet?: boolean
    central_to_cabinet_distance?: boolean
    number_of_joints?: boolean
    joint_location?: boolean
    rooms?: boolean
    room_location?: boolean
    entitlement?: boolean
    distance?: boolean
    status?: boolean
    responsible?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["majorCabinet"]>

  export type MajorCabinetSelectScalar = {
    id?: boolean
    central?: boolean
    village?: boolean
    cabinet?: boolean
    central_to_cabinet_distance?: boolean
    number_of_joints?: boolean
    joint_location?: boolean
    rooms?: boolean
    room_location?: boolean
    entitlement?: boolean
    distance?: boolean
    status?: boolean
    responsible?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MajorCabinetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "central" | "village" | "cabinet" | "central_to_cabinet_distance" | "number_of_joints" | "joint_location" | "rooms" | "room_location" | "entitlement" | "distance" | "status" | "responsible" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["majorCabinet"]>

  export type $MajorCabinetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MajorCabinet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      central: string
      village: string
      cabinet: string
      central_to_cabinet_distance: string
      number_of_joints: number
      joint_location: string
      rooms: string
      room_location: string
      entitlement: string
      distance: string
      status: $Enums.Status
      responsible: string
      notes: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["majorCabinet"]>
    composites: {}
  }

  type MajorCabinetGetPayload<S extends boolean | null | undefined | MajorCabinetDefaultArgs> = $Result.GetResult<Prisma.$MajorCabinetPayload, S>

  type MajorCabinetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorCabinetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCabinetCountAggregateInputType | true
    }

  export interface MajorCabinetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MajorCabinet'], meta: { name: 'MajorCabinet' } }
    /**
     * Find zero or one MajorCabinet that matches the filter.
     * @param {MajorCabinetFindUniqueArgs} args - Arguments to find a MajorCabinet
     * @example
     * // Get one MajorCabinet
     * const majorCabinet = await prisma.majorCabinet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorCabinetFindUniqueArgs>(args: SelectSubset<T, MajorCabinetFindUniqueArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MajorCabinet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorCabinetFindUniqueOrThrowArgs} args - Arguments to find a MajorCabinet
     * @example
     * // Get one MajorCabinet
     * const majorCabinet = await prisma.majorCabinet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorCabinetFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorCabinetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorCabinet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCabinetFindFirstArgs} args - Arguments to find a MajorCabinet
     * @example
     * // Get one MajorCabinet
     * const majorCabinet = await prisma.majorCabinet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorCabinetFindFirstArgs>(args?: SelectSubset<T, MajorCabinetFindFirstArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorCabinet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCabinetFindFirstOrThrowArgs} args - Arguments to find a MajorCabinet
     * @example
     * // Get one MajorCabinet
     * const majorCabinet = await prisma.majorCabinet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorCabinetFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorCabinetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MajorCabinets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCabinetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MajorCabinets
     * const majorCabinets = await prisma.majorCabinet.findMany()
     * 
     * // Get first 10 MajorCabinets
     * const majorCabinets = await prisma.majorCabinet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorCabinetWithIdOnly = await prisma.majorCabinet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MajorCabinetFindManyArgs>(args?: SelectSubset<T, MajorCabinetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MajorCabinet.
     * @param {MajorCabinetCreateArgs} args - Arguments to create a MajorCabinet.
     * @example
     * // Create one MajorCabinet
     * const MajorCabinet = await prisma.majorCabinet.create({
     *   data: {
     *     // ... data to create a MajorCabinet
     *   }
     * })
     * 
     */
    create<T extends MajorCabinetCreateArgs>(args: SelectSubset<T, MajorCabinetCreateArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MajorCabinets.
     * @param {MajorCabinetCreateManyArgs} args - Arguments to create many MajorCabinets.
     * @example
     * // Create many MajorCabinets
     * const majorCabinet = await prisma.majorCabinet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCabinetCreateManyArgs>(args?: SelectSubset<T, MajorCabinetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MajorCabinets and returns the data saved in the database.
     * @param {MajorCabinetCreateManyAndReturnArgs} args - Arguments to create many MajorCabinets.
     * @example
     * // Create many MajorCabinets
     * const majorCabinet = await prisma.majorCabinet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MajorCabinets and only return the `id`
     * const majorCabinetWithIdOnly = await prisma.majorCabinet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorCabinetCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorCabinetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MajorCabinet.
     * @param {MajorCabinetDeleteArgs} args - Arguments to delete one MajorCabinet.
     * @example
     * // Delete one MajorCabinet
     * const MajorCabinet = await prisma.majorCabinet.delete({
     *   where: {
     *     // ... filter to delete one MajorCabinet
     *   }
     * })
     * 
     */
    delete<T extends MajorCabinetDeleteArgs>(args: SelectSubset<T, MajorCabinetDeleteArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MajorCabinet.
     * @param {MajorCabinetUpdateArgs} args - Arguments to update one MajorCabinet.
     * @example
     * // Update one MajorCabinet
     * const majorCabinet = await prisma.majorCabinet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorCabinetUpdateArgs>(args: SelectSubset<T, MajorCabinetUpdateArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MajorCabinets.
     * @param {MajorCabinetDeleteManyArgs} args - Arguments to filter MajorCabinets to delete.
     * @example
     * // Delete a few MajorCabinets
     * const { count } = await prisma.majorCabinet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorCabinetDeleteManyArgs>(args?: SelectSubset<T, MajorCabinetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorCabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCabinetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MajorCabinets
     * const majorCabinet = await prisma.majorCabinet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorCabinetUpdateManyArgs>(args: SelectSubset<T, MajorCabinetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorCabinets and returns the data updated in the database.
     * @param {MajorCabinetUpdateManyAndReturnArgs} args - Arguments to update many MajorCabinets.
     * @example
     * // Update many MajorCabinets
     * const majorCabinet = await prisma.majorCabinet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MajorCabinets and only return the `id`
     * const majorCabinetWithIdOnly = await prisma.majorCabinet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorCabinetUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorCabinetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MajorCabinet.
     * @param {MajorCabinetUpsertArgs} args - Arguments to update or create a MajorCabinet.
     * @example
     * // Update or create a MajorCabinet
     * const majorCabinet = await prisma.majorCabinet.upsert({
     *   create: {
     *     // ... data to create a MajorCabinet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MajorCabinet we want to update
     *   }
     * })
     */
    upsert<T extends MajorCabinetUpsertArgs>(args: SelectSubset<T, MajorCabinetUpsertArgs<ExtArgs>>): Prisma__MajorCabinetClient<$Result.GetResult<Prisma.$MajorCabinetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MajorCabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCabinetCountArgs} args - Arguments to filter MajorCabinets to count.
     * @example
     * // Count the number of MajorCabinets
     * const count = await prisma.majorCabinet.count({
     *   where: {
     *     // ... the filter for the MajorCabinets we want to count
     *   }
     * })
    **/
    count<T extends MajorCabinetCountArgs>(
      args?: Subset<T, MajorCabinetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCabinetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MajorCabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCabinetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MajorCabinetAggregateArgs>(args: Subset<T, MajorCabinetAggregateArgs>): Prisma.PrismaPromise<GetMajorCabinetAggregateType<T>>

    /**
     * Group by MajorCabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCabinetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MajorCabinetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorCabinetGroupByArgs['orderBy'] }
        : { orderBy?: MajorCabinetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MajorCabinetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorCabinetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MajorCabinet model
   */
  readonly fields: MajorCabinetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MajorCabinet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorCabinetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MajorCabinet model
   */
  interface MajorCabinetFieldRefs {
    readonly id: FieldRef<"MajorCabinet", 'String'>
    readonly central: FieldRef<"MajorCabinet", 'String'>
    readonly village: FieldRef<"MajorCabinet", 'String'>
    readonly cabinet: FieldRef<"MajorCabinet", 'String'>
    readonly central_to_cabinet_distance: FieldRef<"MajorCabinet", 'String'>
    readonly number_of_joints: FieldRef<"MajorCabinet", 'Int'>
    readonly joint_location: FieldRef<"MajorCabinet", 'String'>
    readonly rooms: FieldRef<"MajorCabinet", 'String'>
    readonly room_location: FieldRef<"MajorCabinet", 'String'>
    readonly entitlement: FieldRef<"MajorCabinet", 'String'>
    readonly distance: FieldRef<"MajorCabinet", 'String'>
    readonly status: FieldRef<"MajorCabinet", 'Status'>
    readonly responsible: FieldRef<"MajorCabinet", 'String'>
    readonly notes: FieldRef<"MajorCabinet", 'String'>
    readonly createdAt: FieldRef<"MajorCabinet", 'DateTime'>
    readonly updatedAt: FieldRef<"MajorCabinet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MajorCabinet findUnique
   */
  export type MajorCabinetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MajorCabinet to fetch.
     */
    where: MajorCabinetWhereUniqueInput
  }

  /**
   * MajorCabinet findUniqueOrThrow
   */
  export type MajorCabinetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MajorCabinet to fetch.
     */
    where: MajorCabinetWhereUniqueInput
  }

  /**
   * MajorCabinet findFirst
   */
  export type MajorCabinetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MajorCabinet to fetch.
     */
    where?: MajorCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCabinets to fetch.
     */
    orderBy?: MajorCabinetOrderByWithRelationInput | MajorCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorCabinets.
     */
    cursor?: MajorCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorCabinets.
     */
    distinct?: MajorCabinetScalarFieldEnum | MajorCabinetScalarFieldEnum[]
  }

  /**
   * MajorCabinet findFirstOrThrow
   */
  export type MajorCabinetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MajorCabinet to fetch.
     */
    where?: MajorCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCabinets to fetch.
     */
    orderBy?: MajorCabinetOrderByWithRelationInput | MajorCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorCabinets.
     */
    cursor?: MajorCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorCabinets.
     */
    distinct?: MajorCabinetScalarFieldEnum | MajorCabinetScalarFieldEnum[]
  }

  /**
   * MajorCabinet findMany
   */
  export type MajorCabinetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MajorCabinets to fetch.
     */
    where?: MajorCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorCabinets to fetch.
     */
    orderBy?: MajorCabinetOrderByWithRelationInput | MajorCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MajorCabinets.
     */
    cursor?: MajorCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorCabinets.
     */
    skip?: number
    distinct?: MajorCabinetScalarFieldEnum | MajorCabinetScalarFieldEnum[]
  }

  /**
   * MajorCabinet create
   */
  export type MajorCabinetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * The data needed to create a MajorCabinet.
     */
    data: XOR<MajorCabinetCreateInput, MajorCabinetUncheckedCreateInput>
  }

  /**
   * MajorCabinet createMany
   */
  export type MajorCabinetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MajorCabinets.
     */
    data: MajorCabinetCreateManyInput | MajorCabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MajorCabinet createManyAndReturn
   */
  export type MajorCabinetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * The data used to create many MajorCabinets.
     */
    data: MajorCabinetCreateManyInput | MajorCabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MajorCabinet update
   */
  export type MajorCabinetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * The data needed to update a MajorCabinet.
     */
    data: XOR<MajorCabinetUpdateInput, MajorCabinetUncheckedUpdateInput>
    /**
     * Choose, which MajorCabinet to update.
     */
    where: MajorCabinetWhereUniqueInput
  }

  /**
   * MajorCabinet updateMany
   */
  export type MajorCabinetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MajorCabinets.
     */
    data: XOR<MajorCabinetUpdateManyMutationInput, MajorCabinetUncheckedUpdateManyInput>
    /**
     * Filter which MajorCabinets to update
     */
    where?: MajorCabinetWhereInput
    /**
     * Limit how many MajorCabinets to update.
     */
    limit?: number
  }

  /**
   * MajorCabinet updateManyAndReturn
   */
  export type MajorCabinetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * The data used to update MajorCabinets.
     */
    data: XOR<MajorCabinetUpdateManyMutationInput, MajorCabinetUncheckedUpdateManyInput>
    /**
     * Filter which MajorCabinets to update
     */
    where?: MajorCabinetWhereInput
    /**
     * Limit how many MajorCabinets to update.
     */
    limit?: number
  }

  /**
   * MajorCabinet upsert
   */
  export type MajorCabinetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * The filter to search for the MajorCabinet to update in case it exists.
     */
    where: MajorCabinetWhereUniqueInput
    /**
     * In case the MajorCabinet found by the `where` argument doesn't exist, create a new MajorCabinet with this data.
     */
    create: XOR<MajorCabinetCreateInput, MajorCabinetUncheckedCreateInput>
    /**
     * In case the MajorCabinet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorCabinetUpdateInput, MajorCabinetUncheckedUpdateInput>
  }

  /**
   * MajorCabinet delete
   */
  export type MajorCabinetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
    /**
     * Filter which MajorCabinet to delete.
     */
    where: MajorCabinetWhereUniqueInput
  }

  /**
   * MajorCabinet deleteMany
   */
  export type MajorCabinetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorCabinets to delete
     */
    where?: MajorCabinetWhereInput
    /**
     * Limit how many MajorCabinets to delete.
     */
    limit?: number
  }

  /**
   * MajorCabinet without action
   */
  export type MajorCabinetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCabinet
     */
    select?: MajorCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorCabinet
     */
    omit?: MajorCabinetOmit<ExtArgs> | null
  }


  /**
   * Model SecondaryCabinet
   */

  export type AggregateSecondaryCabinet = {
    _count: SecondaryCabinetCountAggregateOutputType | null
    _min: SecondaryCabinetMinAggregateOutputType | null
    _max: SecondaryCabinetMaxAggregateOutputType | null
  }

  export type SecondaryCabinetMinAggregateOutputType = {
    id: string | null
    central: string | null
    village: string | null
    port_gbon: string | null
    cabinet: string | null
    splitter_number: string | null
    splitter_port: string | null
    distance: string | null
    box_number: string | null
    cabinet_location: string | null
    box_location: string | null
    cabinet_to_box_distance: string | null
    responsible: string | null
    status: $Enums.Status | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecondaryCabinetMaxAggregateOutputType = {
    id: string | null
    central: string | null
    village: string | null
    port_gbon: string | null
    cabinet: string | null
    splitter_number: string | null
    splitter_port: string | null
    distance: string | null
    box_number: string | null
    cabinet_location: string | null
    box_location: string | null
    cabinet_to_box_distance: string | null
    responsible: string | null
    status: $Enums.Status | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecondaryCabinetCountAggregateOutputType = {
    id: number
    central: number
    village: number
    port_gbon: number
    cabinet: number
    splitter_number: number
    splitter_port: number
    distance: number
    box_number: number
    cabinet_location: number
    box_location: number
    cabinet_to_box_distance: number
    responsible: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SecondaryCabinetMinAggregateInputType = {
    id?: true
    central?: true
    village?: true
    port_gbon?: true
    cabinet?: true
    splitter_number?: true
    splitter_port?: true
    distance?: true
    box_number?: true
    cabinet_location?: true
    box_location?: true
    cabinet_to_box_distance?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecondaryCabinetMaxAggregateInputType = {
    id?: true
    central?: true
    village?: true
    port_gbon?: true
    cabinet?: true
    splitter_number?: true
    splitter_port?: true
    distance?: true
    box_number?: true
    cabinet_location?: true
    box_location?: true
    cabinet_to_box_distance?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecondaryCabinetCountAggregateInputType = {
    id?: true
    central?: true
    village?: true
    port_gbon?: true
    cabinet?: true
    splitter_number?: true
    splitter_port?: true
    distance?: true
    box_number?: true
    cabinet_location?: true
    box_location?: true
    cabinet_to_box_distance?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SecondaryCabinetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryCabinet to aggregate.
     */
    where?: SecondaryCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryCabinets to fetch.
     */
    orderBy?: SecondaryCabinetOrderByWithRelationInput | SecondaryCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecondaryCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecondaryCabinets
    **/
    _count?: true | SecondaryCabinetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecondaryCabinetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecondaryCabinetMaxAggregateInputType
  }

  export type GetSecondaryCabinetAggregateType<T extends SecondaryCabinetAggregateArgs> = {
        [P in keyof T & keyof AggregateSecondaryCabinet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecondaryCabinet[P]>
      : GetScalarType<T[P], AggregateSecondaryCabinet[P]>
  }




  export type SecondaryCabinetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecondaryCabinetWhereInput
    orderBy?: SecondaryCabinetOrderByWithAggregationInput | SecondaryCabinetOrderByWithAggregationInput[]
    by: SecondaryCabinetScalarFieldEnum[] | SecondaryCabinetScalarFieldEnum
    having?: SecondaryCabinetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecondaryCabinetCountAggregateInputType | true
    _min?: SecondaryCabinetMinAggregateInputType
    _max?: SecondaryCabinetMaxAggregateInputType
  }

  export type SecondaryCabinetGroupByOutputType = {
    id: string
    central: string
    village: string
    port_gbon: string
    cabinet: string
    splitter_number: string
    splitter_port: string
    distance: string
    box_number: string
    cabinet_location: string
    box_location: string
    cabinet_to_box_distance: string
    responsible: string
    status: $Enums.Status
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SecondaryCabinetCountAggregateOutputType | null
    _min: SecondaryCabinetMinAggregateOutputType | null
    _max: SecondaryCabinetMaxAggregateOutputType | null
  }

  type GetSecondaryCabinetGroupByPayload<T extends SecondaryCabinetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecondaryCabinetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecondaryCabinetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecondaryCabinetGroupByOutputType[P]>
            : GetScalarType<T[P], SecondaryCabinetGroupByOutputType[P]>
        }
      >
    >


  export type SecondaryCabinetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    village?: boolean
    port_gbon?: boolean
    cabinet?: boolean
    splitter_number?: boolean
    splitter_port?: boolean
    distance?: boolean
    box_number?: boolean
    cabinet_location?: boolean
    box_location?: boolean
    cabinet_to_box_distance?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["secondaryCabinet"]>

  export type SecondaryCabinetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    village?: boolean
    port_gbon?: boolean
    cabinet?: boolean
    splitter_number?: boolean
    splitter_port?: boolean
    distance?: boolean
    box_number?: boolean
    cabinet_location?: boolean
    box_location?: boolean
    cabinet_to_box_distance?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["secondaryCabinet"]>

  export type SecondaryCabinetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    village?: boolean
    port_gbon?: boolean
    cabinet?: boolean
    splitter_number?: boolean
    splitter_port?: boolean
    distance?: boolean
    box_number?: boolean
    cabinet_location?: boolean
    box_location?: boolean
    cabinet_to_box_distance?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["secondaryCabinet"]>

  export type SecondaryCabinetSelectScalar = {
    id?: boolean
    central?: boolean
    village?: boolean
    port_gbon?: boolean
    cabinet?: boolean
    splitter_number?: boolean
    splitter_port?: boolean
    distance?: boolean
    box_number?: boolean
    cabinet_location?: boolean
    box_location?: boolean
    cabinet_to_box_distance?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SecondaryCabinetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "central" | "village" | "port_gbon" | "cabinet" | "splitter_number" | "splitter_port" | "distance" | "box_number" | "cabinet_location" | "box_location" | "cabinet_to_box_distance" | "responsible" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["secondaryCabinet"]>

  export type $SecondaryCabinetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecondaryCabinet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      central: string
      village: string
      port_gbon: string
      cabinet: string
      splitter_number: string
      splitter_port: string
      distance: string
      box_number: string
      cabinet_location: string
      box_location: string
      cabinet_to_box_distance: string
      responsible: string
      status: $Enums.Status
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["secondaryCabinet"]>
    composites: {}
  }

  type SecondaryCabinetGetPayload<S extends boolean | null | undefined | SecondaryCabinetDefaultArgs> = $Result.GetResult<Prisma.$SecondaryCabinetPayload, S>

  type SecondaryCabinetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecondaryCabinetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecondaryCabinetCountAggregateInputType | true
    }

  export interface SecondaryCabinetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecondaryCabinet'], meta: { name: 'SecondaryCabinet' } }
    /**
     * Find zero or one SecondaryCabinet that matches the filter.
     * @param {SecondaryCabinetFindUniqueArgs} args - Arguments to find a SecondaryCabinet
     * @example
     * // Get one SecondaryCabinet
     * const secondaryCabinet = await prisma.secondaryCabinet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecondaryCabinetFindUniqueArgs>(args: SelectSubset<T, SecondaryCabinetFindUniqueArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecondaryCabinet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecondaryCabinetFindUniqueOrThrowArgs} args - Arguments to find a SecondaryCabinet
     * @example
     * // Get one SecondaryCabinet
     * const secondaryCabinet = await prisma.secondaryCabinet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecondaryCabinetFindUniqueOrThrowArgs>(args: SelectSubset<T, SecondaryCabinetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecondaryCabinet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryCabinetFindFirstArgs} args - Arguments to find a SecondaryCabinet
     * @example
     * // Get one SecondaryCabinet
     * const secondaryCabinet = await prisma.secondaryCabinet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecondaryCabinetFindFirstArgs>(args?: SelectSubset<T, SecondaryCabinetFindFirstArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecondaryCabinet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryCabinetFindFirstOrThrowArgs} args - Arguments to find a SecondaryCabinet
     * @example
     * // Get one SecondaryCabinet
     * const secondaryCabinet = await prisma.secondaryCabinet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecondaryCabinetFindFirstOrThrowArgs>(args?: SelectSubset<T, SecondaryCabinetFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecondaryCabinets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryCabinetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecondaryCabinets
     * const secondaryCabinets = await prisma.secondaryCabinet.findMany()
     * 
     * // Get first 10 SecondaryCabinets
     * const secondaryCabinets = await prisma.secondaryCabinet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secondaryCabinetWithIdOnly = await prisma.secondaryCabinet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecondaryCabinetFindManyArgs>(args?: SelectSubset<T, SecondaryCabinetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecondaryCabinet.
     * @param {SecondaryCabinetCreateArgs} args - Arguments to create a SecondaryCabinet.
     * @example
     * // Create one SecondaryCabinet
     * const SecondaryCabinet = await prisma.secondaryCabinet.create({
     *   data: {
     *     // ... data to create a SecondaryCabinet
     *   }
     * })
     * 
     */
    create<T extends SecondaryCabinetCreateArgs>(args: SelectSubset<T, SecondaryCabinetCreateArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecondaryCabinets.
     * @param {SecondaryCabinetCreateManyArgs} args - Arguments to create many SecondaryCabinets.
     * @example
     * // Create many SecondaryCabinets
     * const secondaryCabinet = await prisma.secondaryCabinet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecondaryCabinetCreateManyArgs>(args?: SelectSubset<T, SecondaryCabinetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecondaryCabinets and returns the data saved in the database.
     * @param {SecondaryCabinetCreateManyAndReturnArgs} args - Arguments to create many SecondaryCabinets.
     * @example
     * // Create many SecondaryCabinets
     * const secondaryCabinet = await prisma.secondaryCabinet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecondaryCabinets and only return the `id`
     * const secondaryCabinetWithIdOnly = await prisma.secondaryCabinet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecondaryCabinetCreateManyAndReturnArgs>(args?: SelectSubset<T, SecondaryCabinetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecondaryCabinet.
     * @param {SecondaryCabinetDeleteArgs} args - Arguments to delete one SecondaryCabinet.
     * @example
     * // Delete one SecondaryCabinet
     * const SecondaryCabinet = await prisma.secondaryCabinet.delete({
     *   where: {
     *     // ... filter to delete one SecondaryCabinet
     *   }
     * })
     * 
     */
    delete<T extends SecondaryCabinetDeleteArgs>(args: SelectSubset<T, SecondaryCabinetDeleteArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecondaryCabinet.
     * @param {SecondaryCabinetUpdateArgs} args - Arguments to update one SecondaryCabinet.
     * @example
     * // Update one SecondaryCabinet
     * const secondaryCabinet = await prisma.secondaryCabinet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecondaryCabinetUpdateArgs>(args: SelectSubset<T, SecondaryCabinetUpdateArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecondaryCabinets.
     * @param {SecondaryCabinetDeleteManyArgs} args - Arguments to filter SecondaryCabinets to delete.
     * @example
     * // Delete a few SecondaryCabinets
     * const { count } = await prisma.secondaryCabinet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecondaryCabinetDeleteManyArgs>(args?: SelectSubset<T, SecondaryCabinetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecondaryCabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryCabinetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecondaryCabinets
     * const secondaryCabinet = await prisma.secondaryCabinet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecondaryCabinetUpdateManyArgs>(args: SelectSubset<T, SecondaryCabinetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecondaryCabinets and returns the data updated in the database.
     * @param {SecondaryCabinetUpdateManyAndReturnArgs} args - Arguments to update many SecondaryCabinets.
     * @example
     * // Update many SecondaryCabinets
     * const secondaryCabinet = await prisma.secondaryCabinet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecondaryCabinets and only return the `id`
     * const secondaryCabinetWithIdOnly = await prisma.secondaryCabinet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecondaryCabinetUpdateManyAndReturnArgs>(args: SelectSubset<T, SecondaryCabinetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecondaryCabinet.
     * @param {SecondaryCabinetUpsertArgs} args - Arguments to update or create a SecondaryCabinet.
     * @example
     * // Update or create a SecondaryCabinet
     * const secondaryCabinet = await prisma.secondaryCabinet.upsert({
     *   create: {
     *     // ... data to create a SecondaryCabinet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecondaryCabinet we want to update
     *   }
     * })
     */
    upsert<T extends SecondaryCabinetUpsertArgs>(args: SelectSubset<T, SecondaryCabinetUpsertArgs<ExtArgs>>): Prisma__SecondaryCabinetClient<$Result.GetResult<Prisma.$SecondaryCabinetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecondaryCabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryCabinetCountArgs} args - Arguments to filter SecondaryCabinets to count.
     * @example
     * // Count the number of SecondaryCabinets
     * const count = await prisma.secondaryCabinet.count({
     *   where: {
     *     // ... the filter for the SecondaryCabinets we want to count
     *   }
     * })
    **/
    count<T extends SecondaryCabinetCountArgs>(
      args?: Subset<T, SecondaryCabinetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecondaryCabinetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecondaryCabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryCabinetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecondaryCabinetAggregateArgs>(args: Subset<T, SecondaryCabinetAggregateArgs>): Prisma.PrismaPromise<GetSecondaryCabinetAggregateType<T>>

    /**
     * Group by SecondaryCabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecondaryCabinetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecondaryCabinetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecondaryCabinetGroupByArgs['orderBy'] }
        : { orderBy?: SecondaryCabinetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecondaryCabinetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecondaryCabinetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecondaryCabinet model
   */
  readonly fields: SecondaryCabinetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecondaryCabinet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecondaryCabinetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecondaryCabinet model
   */
  interface SecondaryCabinetFieldRefs {
    readonly id: FieldRef<"SecondaryCabinet", 'String'>
    readonly central: FieldRef<"SecondaryCabinet", 'String'>
    readonly village: FieldRef<"SecondaryCabinet", 'String'>
    readonly port_gbon: FieldRef<"SecondaryCabinet", 'String'>
    readonly cabinet: FieldRef<"SecondaryCabinet", 'String'>
    readonly splitter_number: FieldRef<"SecondaryCabinet", 'String'>
    readonly splitter_port: FieldRef<"SecondaryCabinet", 'String'>
    readonly distance: FieldRef<"SecondaryCabinet", 'String'>
    readonly box_number: FieldRef<"SecondaryCabinet", 'String'>
    readonly cabinet_location: FieldRef<"SecondaryCabinet", 'String'>
    readonly box_location: FieldRef<"SecondaryCabinet", 'String'>
    readonly cabinet_to_box_distance: FieldRef<"SecondaryCabinet", 'String'>
    readonly responsible: FieldRef<"SecondaryCabinet", 'String'>
    readonly status: FieldRef<"SecondaryCabinet", 'Status'>
    readonly notes: FieldRef<"SecondaryCabinet", 'String'>
    readonly createdAt: FieldRef<"SecondaryCabinet", 'DateTime'>
    readonly updatedAt: FieldRef<"SecondaryCabinet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecondaryCabinet findUnique
   */
  export type SecondaryCabinetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * Filter, which SecondaryCabinet to fetch.
     */
    where: SecondaryCabinetWhereUniqueInput
  }

  /**
   * SecondaryCabinet findUniqueOrThrow
   */
  export type SecondaryCabinetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * Filter, which SecondaryCabinet to fetch.
     */
    where: SecondaryCabinetWhereUniqueInput
  }

  /**
   * SecondaryCabinet findFirst
   */
  export type SecondaryCabinetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * Filter, which SecondaryCabinet to fetch.
     */
    where?: SecondaryCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryCabinets to fetch.
     */
    orderBy?: SecondaryCabinetOrderByWithRelationInput | SecondaryCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryCabinets.
     */
    cursor?: SecondaryCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryCabinets.
     */
    distinct?: SecondaryCabinetScalarFieldEnum | SecondaryCabinetScalarFieldEnum[]
  }

  /**
   * SecondaryCabinet findFirstOrThrow
   */
  export type SecondaryCabinetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * Filter, which SecondaryCabinet to fetch.
     */
    where?: SecondaryCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryCabinets to fetch.
     */
    orderBy?: SecondaryCabinetOrderByWithRelationInput | SecondaryCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecondaryCabinets.
     */
    cursor?: SecondaryCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecondaryCabinets.
     */
    distinct?: SecondaryCabinetScalarFieldEnum | SecondaryCabinetScalarFieldEnum[]
  }

  /**
   * SecondaryCabinet findMany
   */
  export type SecondaryCabinetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * Filter, which SecondaryCabinets to fetch.
     */
    where?: SecondaryCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecondaryCabinets to fetch.
     */
    orderBy?: SecondaryCabinetOrderByWithRelationInput | SecondaryCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecondaryCabinets.
     */
    cursor?: SecondaryCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecondaryCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecondaryCabinets.
     */
    skip?: number
    distinct?: SecondaryCabinetScalarFieldEnum | SecondaryCabinetScalarFieldEnum[]
  }

  /**
   * SecondaryCabinet create
   */
  export type SecondaryCabinetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * The data needed to create a SecondaryCabinet.
     */
    data: XOR<SecondaryCabinetCreateInput, SecondaryCabinetUncheckedCreateInput>
  }

  /**
   * SecondaryCabinet createMany
   */
  export type SecondaryCabinetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecondaryCabinets.
     */
    data: SecondaryCabinetCreateManyInput | SecondaryCabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecondaryCabinet createManyAndReturn
   */
  export type SecondaryCabinetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * The data used to create many SecondaryCabinets.
     */
    data: SecondaryCabinetCreateManyInput | SecondaryCabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecondaryCabinet update
   */
  export type SecondaryCabinetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * The data needed to update a SecondaryCabinet.
     */
    data: XOR<SecondaryCabinetUpdateInput, SecondaryCabinetUncheckedUpdateInput>
    /**
     * Choose, which SecondaryCabinet to update.
     */
    where: SecondaryCabinetWhereUniqueInput
  }

  /**
   * SecondaryCabinet updateMany
   */
  export type SecondaryCabinetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecondaryCabinets.
     */
    data: XOR<SecondaryCabinetUpdateManyMutationInput, SecondaryCabinetUncheckedUpdateManyInput>
    /**
     * Filter which SecondaryCabinets to update
     */
    where?: SecondaryCabinetWhereInput
    /**
     * Limit how many SecondaryCabinets to update.
     */
    limit?: number
  }

  /**
   * SecondaryCabinet updateManyAndReturn
   */
  export type SecondaryCabinetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * The data used to update SecondaryCabinets.
     */
    data: XOR<SecondaryCabinetUpdateManyMutationInput, SecondaryCabinetUncheckedUpdateManyInput>
    /**
     * Filter which SecondaryCabinets to update
     */
    where?: SecondaryCabinetWhereInput
    /**
     * Limit how many SecondaryCabinets to update.
     */
    limit?: number
  }

  /**
   * SecondaryCabinet upsert
   */
  export type SecondaryCabinetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * The filter to search for the SecondaryCabinet to update in case it exists.
     */
    where: SecondaryCabinetWhereUniqueInput
    /**
     * In case the SecondaryCabinet found by the `where` argument doesn't exist, create a new SecondaryCabinet with this data.
     */
    create: XOR<SecondaryCabinetCreateInput, SecondaryCabinetUncheckedCreateInput>
    /**
     * In case the SecondaryCabinet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecondaryCabinetUpdateInput, SecondaryCabinetUncheckedUpdateInput>
  }

  /**
   * SecondaryCabinet delete
   */
  export type SecondaryCabinetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
    /**
     * Filter which SecondaryCabinet to delete.
     */
    where: SecondaryCabinetWhereUniqueInput
  }

  /**
   * SecondaryCabinet deleteMany
   */
  export type SecondaryCabinetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecondaryCabinets to delete
     */
    where?: SecondaryCabinetWhereInput
    /**
     * Limit how many SecondaryCabinets to delete.
     */
    limit?: number
  }

  /**
   * SecondaryCabinet without action
   */
  export type SecondaryCabinetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecondaryCabinet
     */
    select?: SecondaryCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecondaryCabinet
     */
    omit?: SecondaryCabinetOmit<ExtArgs> | null
  }


  /**
   * Model MobileTower
   */

  export type AggregateMobileTower = {
    _count: MobileTowerCountAggregateOutputType | null
    _min: MobileTowerMinAggregateOutputType | null
    _max: MobileTowerMaxAggregateOutputType | null
  }

  export type MobileTowerMinAggregateOutputType = {
    id: string | null
    central: string | null
    cable_name: string | null
    tower_code: string | null
    company: string | null
    entitlement: string | null
    distance: string | null
    address: string | null
    location: string | null
    responsible: string | null
    status: $Enums.Status | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MobileTowerMaxAggregateOutputType = {
    id: string | null
    central: string | null
    cable_name: string | null
    tower_code: string | null
    company: string | null
    entitlement: string | null
    distance: string | null
    address: string | null
    location: string | null
    responsible: string | null
    status: $Enums.Status | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MobileTowerCountAggregateOutputType = {
    id: number
    central: number
    cable_name: number
    tower_code: number
    company: number
    entitlement: number
    distance: number
    address: number
    location: number
    responsible: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MobileTowerMinAggregateInputType = {
    id?: true
    central?: true
    cable_name?: true
    tower_code?: true
    company?: true
    entitlement?: true
    distance?: true
    address?: true
    location?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MobileTowerMaxAggregateInputType = {
    id?: true
    central?: true
    cable_name?: true
    tower_code?: true
    company?: true
    entitlement?: true
    distance?: true
    address?: true
    location?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MobileTowerCountAggregateInputType = {
    id?: true
    central?: true
    cable_name?: true
    tower_code?: true
    company?: true
    entitlement?: true
    distance?: true
    address?: true
    location?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MobileTowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobileTower to aggregate.
     */
    where?: MobileTowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileTowers to fetch.
     */
    orderBy?: MobileTowerOrderByWithRelationInput | MobileTowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MobileTowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileTowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileTowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MobileTowers
    **/
    _count?: true | MobileTowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MobileTowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MobileTowerMaxAggregateInputType
  }

  export type GetMobileTowerAggregateType<T extends MobileTowerAggregateArgs> = {
        [P in keyof T & keyof AggregateMobileTower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMobileTower[P]>
      : GetScalarType<T[P], AggregateMobileTower[P]>
  }




  export type MobileTowerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MobileTowerWhereInput
    orderBy?: MobileTowerOrderByWithAggregationInput | MobileTowerOrderByWithAggregationInput[]
    by: MobileTowerScalarFieldEnum[] | MobileTowerScalarFieldEnum
    having?: MobileTowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MobileTowerCountAggregateInputType | true
    _min?: MobileTowerMinAggregateInputType
    _max?: MobileTowerMaxAggregateInputType
  }

  export type MobileTowerGroupByOutputType = {
    id: string
    central: string
    cable_name: string
    tower_code: string
    company: string
    entitlement: string
    distance: string
    address: string
    location: string
    responsible: string
    status: $Enums.Status
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MobileTowerCountAggregateOutputType | null
    _min: MobileTowerMinAggregateOutputType | null
    _max: MobileTowerMaxAggregateOutputType | null
  }

  type GetMobileTowerGroupByPayload<T extends MobileTowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MobileTowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MobileTowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MobileTowerGroupByOutputType[P]>
            : GetScalarType<T[P], MobileTowerGroupByOutputType[P]>
        }
      >
    >


  export type MobileTowerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    cable_name?: boolean
    tower_code?: boolean
    company?: boolean
    entitlement?: boolean
    distance?: boolean
    address?: boolean
    location?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mobileTower"]>

  export type MobileTowerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    cable_name?: boolean
    tower_code?: boolean
    company?: boolean
    entitlement?: boolean
    distance?: boolean
    address?: boolean
    location?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mobileTower"]>

  export type MobileTowerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    cable_name?: boolean
    tower_code?: boolean
    company?: boolean
    entitlement?: boolean
    distance?: boolean
    address?: boolean
    location?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mobileTower"]>

  export type MobileTowerSelectScalar = {
    id?: boolean
    central?: boolean
    cable_name?: boolean
    tower_code?: boolean
    company?: boolean
    entitlement?: boolean
    distance?: boolean
    address?: boolean
    location?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MobileTowerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "central" | "cable_name" | "tower_code" | "company" | "entitlement" | "distance" | "address" | "location" | "responsible" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["mobileTower"]>

  export type $MobileTowerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MobileTower"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      central: string
      cable_name: string
      tower_code: string
      company: string
      entitlement: string
      distance: string
      address: string
      location: string
      responsible: string
      status: $Enums.Status
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mobileTower"]>
    composites: {}
  }

  type MobileTowerGetPayload<S extends boolean | null | undefined | MobileTowerDefaultArgs> = $Result.GetResult<Prisma.$MobileTowerPayload, S>

  type MobileTowerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MobileTowerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MobileTowerCountAggregateInputType | true
    }

  export interface MobileTowerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MobileTower'], meta: { name: 'MobileTower' } }
    /**
     * Find zero or one MobileTower that matches the filter.
     * @param {MobileTowerFindUniqueArgs} args - Arguments to find a MobileTower
     * @example
     * // Get one MobileTower
     * const mobileTower = await prisma.mobileTower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MobileTowerFindUniqueArgs>(args: SelectSubset<T, MobileTowerFindUniqueArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MobileTower that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MobileTowerFindUniqueOrThrowArgs} args - Arguments to find a MobileTower
     * @example
     * // Get one MobileTower
     * const mobileTower = await prisma.mobileTower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MobileTowerFindUniqueOrThrowArgs>(args: SelectSubset<T, MobileTowerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobileTower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileTowerFindFirstArgs} args - Arguments to find a MobileTower
     * @example
     * // Get one MobileTower
     * const mobileTower = await prisma.mobileTower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MobileTowerFindFirstArgs>(args?: SelectSubset<T, MobileTowerFindFirstArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobileTower that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileTowerFindFirstOrThrowArgs} args - Arguments to find a MobileTower
     * @example
     * // Get one MobileTower
     * const mobileTower = await prisma.mobileTower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MobileTowerFindFirstOrThrowArgs>(args?: SelectSubset<T, MobileTowerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MobileTowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileTowerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MobileTowers
     * const mobileTowers = await prisma.mobileTower.findMany()
     * 
     * // Get first 10 MobileTowers
     * const mobileTowers = await prisma.mobileTower.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mobileTowerWithIdOnly = await prisma.mobileTower.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MobileTowerFindManyArgs>(args?: SelectSubset<T, MobileTowerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MobileTower.
     * @param {MobileTowerCreateArgs} args - Arguments to create a MobileTower.
     * @example
     * // Create one MobileTower
     * const MobileTower = await prisma.mobileTower.create({
     *   data: {
     *     // ... data to create a MobileTower
     *   }
     * })
     * 
     */
    create<T extends MobileTowerCreateArgs>(args: SelectSubset<T, MobileTowerCreateArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MobileTowers.
     * @param {MobileTowerCreateManyArgs} args - Arguments to create many MobileTowers.
     * @example
     * // Create many MobileTowers
     * const mobileTower = await prisma.mobileTower.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MobileTowerCreateManyArgs>(args?: SelectSubset<T, MobileTowerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MobileTowers and returns the data saved in the database.
     * @param {MobileTowerCreateManyAndReturnArgs} args - Arguments to create many MobileTowers.
     * @example
     * // Create many MobileTowers
     * const mobileTower = await prisma.mobileTower.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MobileTowers and only return the `id`
     * const mobileTowerWithIdOnly = await prisma.mobileTower.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MobileTowerCreateManyAndReturnArgs>(args?: SelectSubset<T, MobileTowerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MobileTower.
     * @param {MobileTowerDeleteArgs} args - Arguments to delete one MobileTower.
     * @example
     * // Delete one MobileTower
     * const MobileTower = await prisma.mobileTower.delete({
     *   where: {
     *     // ... filter to delete one MobileTower
     *   }
     * })
     * 
     */
    delete<T extends MobileTowerDeleteArgs>(args: SelectSubset<T, MobileTowerDeleteArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MobileTower.
     * @param {MobileTowerUpdateArgs} args - Arguments to update one MobileTower.
     * @example
     * // Update one MobileTower
     * const mobileTower = await prisma.mobileTower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MobileTowerUpdateArgs>(args: SelectSubset<T, MobileTowerUpdateArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MobileTowers.
     * @param {MobileTowerDeleteManyArgs} args - Arguments to filter MobileTowers to delete.
     * @example
     * // Delete a few MobileTowers
     * const { count } = await prisma.mobileTower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MobileTowerDeleteManyArgs>(args?: SelectSubset<T, MobileTowerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobileTowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileTowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MobileTowers
     * const mobileTower = await prisma.mobileTower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MobileTowerUpdateManyArgs>(args: SelectSubset<T, MobileTowerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobileTowers and returns the data updated in the database.
     * @param {MobileTowerUpdateManyAndReturnArgs} args - Arguments to update many MobileTowers.
     * @example
     * // Update many MobileTowers
     * const mobileTower = await prisma.mobileTower.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MobileTowers and only return the `id`
     * const mobileTowerWithIdOnly = await prisma.mobileTower.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MobileTowerUpdateManyAndReturnArgs>(args: SelectSubset<T, MobileTowerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MobileTower.
     * @param {MobileTowerUpsertArgs} args - Arguments to update or create a MobileTower.
     * @example
     * // Update or create a MobileTower
     * const mobileTower = await prisma.mobileTower.upsert({
     *   create: {
     *     // ... data to create a MobileTower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MobileTower we want to update
     *   }
     * })
     */
    upsert<T extends MobileTowerUpsertArgs>(args: SelectSubset<T, MobileTowerUpsertArgs<ExtArgs>>): Prisma__MobileTowerClient<$Result.GetResult<Prisma.$MobileTowerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MobileTowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileTowerCountArgs} args - Arguments to filter MobileTowers to count.
     * @example
     * // Count the number of MobileTowers
     * const count = await prisma.mobileTower.count({
     *   where: {
     *     // ... the filter for the MobileTowers we want to count
     *   }
     * })
    **/
    count<T extends MobileTowerCountArgs>(
      args?: Subset<T, MobileTowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MobileTowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MobileTower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileTowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MobileTowerAggregateArgs>(args: Subset<T, MobileTowerAggregateArgs>): Prisma.PrismaPromise<GetMobileTowerAggregateType<T>>

    /**
     * Group by MobileTower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileTowerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MobileTowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MobileTowerGroupByArgs['orderBy'] }
        : { orderBy?: MobileTowerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MobileTowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMobileTowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MobileTower model
   */
  readonly fields: MobileTowerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MobileTower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MobileTowerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MobileTower model
   */
  interface MobileTowerFieldRefs {
    readonly id: FieldRef<"MobileTower", 'String'>
    readonly central: FieldRef<"MobileTower", 'String'>
    readonly cable_name: FieldRef<"MobileTower", 'String'>
    readonly tower_code: FieldRef<"MobileTower", 'String'>
    readonly company: FieldRef<"MobileTower", 'String'>
    readonly entitlement: FieldRef<"MobileTower", 'String'>
    readonly distance: FieldRef<"MobileTower", 'String'>
    readonly address: FieldRef<"MobileTower", 'String'>
    readonly location: FieldRef<"MobileTower", 'String'>
    readonly responsible: FieldRef<"MobileTower", 'String'>
    readonly status: FieldRef<"MobileTower", 'Status'>
    readonly notes: FieldRef<"MobileTower", 'String'>
    readonly createdAt: FieldRef<"MobileTower", 'DateTime'>
    readonly updatedAt: FieldRef<"MobileTower", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MobileTower findUnique
   */
  export type MobileTowerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * Filter, which MobileTower to fetch.
     */
    where: MobileTowerWhereUniqueInput
  }

  /**
   * MobileTower findUniqueOrThrow
   */
  export type MobileTowerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * Filter, which MobileTower to fetch.
     */
    where: MobileTowerWhereUniqueInput
  }

  /**
   * MobileTower findFirst
   */
  export type MobileTowerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * Filter, which MobileTower to fetch.
     */
    where?: MobileTowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileTowers to fetch.
     */
    orderBy?: MobileTowerOrderByWithRelationInput | MobileTowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileTowers.
     */
    cursor?: MobileTowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileTowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileTowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileTowers.
     */
    distinct?: MobileTowerScalarFieldEnum | MobileTowerScalarFieldEnum[]
  }

  /**
   * MobileTower findFirstOrThrow
   */
  export type MobileTowerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * Filter, which MobileTower to fetch.
     */
    where?: MobileTowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileTowers to fetch.
     */
    orderBy?: MobileTowerOrderByWithRelationInput | MobileTowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileTowers.
     */
    cursor?: MobileTowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileTowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileTowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileTowers.
     */
    distinct?: MobileTowerScalarFieldEnum | MobileTowerScalarFieldEnum[]
  }

  /**
   * MobileTower findMany
   */
  export type MobileTowerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * Filter, which MobileTowers to fetch.
     */
    where?: MobileTowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileTowers to fetch.
     */
    orderBy?: MobileTowerOrderByWithRelationInput | MobileTowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MobileTowers.
     */
    cursor?: MobileTowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileTowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileTowers.
     */
    skip?: number
    distinct?: MobileTowerScalarFieldEnum | MobileTowerScalarFieldEnum[]
  }

  /**
   * MobileTower create
   */
  export type MobileTowerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * The data needed to create a MobileTower.
     */
    data: XOR<MobileTowerCreateInput, MobileTowerUncheckedCreateInput>
  }

  /**
   * MobileTower createMany
   */
  export type MobileTowerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MobileTowers.
     */
    data: MobileTowerCreateManyInput | MobileTowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MobileTower createManyAndReturn
   */
  export type MobileTowerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * The data used to create many MobileTowers.
     */
    data: MobileTowerCreateManyInput | MobileTowerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MobileTower update
   */
  export type MobileTowerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * The data needed to update a MobileTower.
     */
    data: XOR<MobileTowerUpdateInput, MobileTowerUncheckedUpdateInput>
    /**
     * Choose, which MobileTower to update.
     */
    where: MobileTowerWhereUniqueInput
  }

  /**
   * MobileTower updateMany
   */
  export type MobileTowerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MobileTowers.
     */
    data: XOR<MobileTowerUpdateManyMutationInput, MobileTowerUncheckedUpdateManyInput>
    /**
     * Filter which MobileTowers to update
     */
    where?: MobileTowerWhereInput
    /**
     * Limit how many MobileTowers to update.
     */
    limit?: number
  }

  /**
   * MobileTower updateManyAndReturn
   */
  export type MobileTowerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * The data used to update MobileTowers.
     */
    data: XOR<MobileTowerUpdateManyMutationInput, MobileTowerUncheckedUpdateManyInput>
    /**
     * Filter which MobileTowers to update
     */
    where?: MobileTowerWhereInput
    /**
     * Limit how many MobileTowers to update.
     */
    limit?: number
  }

  /**
   * MobileTower upsert
   */
  export type MobileTowerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * The filter to search for the MobileTower to update in case it exists.
     */
    where: MobileTowerWhereUniqueInput
    /**
     * In case the MobileTower found by the `where` argument doesn't exist, create a new MobileTower with this data.
     */
    create: XOR<MobileTowerCreateInput, MobileTowerUncheckedCreateInput>
    /**
     * In case the MobileTower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MobileTowerUpdateInput, MobileTowerUncheckedUpdateInput>
  }

  /**
   * MobileTower delete
   */
  export type MobileTowerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
    /**
     * Filter which MobileTower to delete.
     */
    where: MobileTowerWhereUniqueInput
  }

  /**
   * MobileTower deleteMany
   */
  export type MobileTowerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobileTowers to delete
     */
    where?: MobileTowerWhereInput
    /**
     * Limit how many MobileTowers to delete.
     */
    limit?: number
  }

  /**
   * MobileTower without action
   */
  export type MobileTowerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileTower
     */
    select?: MobileTowerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileTower
     */
    omit?: MobileTowerOmit<ExtArgs> | null
  }


  /**
   * Model CopperLine
   */

  export type AggregateCopperLine = {
    _count: CopperLineCountAggregateOutputType | null
    _min: CopperLineMinAggregateOutputType | null
    _max: CopperLineMaxAggregateOutputType | null
  }

  export type CopperLineMinAggregateOutputType = {
    id: string | null
    landline_number: string | null
    central: string | null
    village: string | null
    cabinet_number: string | null
    port_number: string | null
    terminal_number: string | null
    cabinet_location: string | null
    box_number: string | null
    box_entitlement: string | null
    box_location: string | null
    joint_location: string | null
    joint_entitlement: string | null
    joint_depth: string | null
    room_location: string | null
    insulation_level: string | null
    responsible: string | null
    status: $Enums.Status | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CopperLineMaxAggregateOutputType = {
    id: string | null
    landline_number: string | null
    central: string | null
    village: string | null
    cabinet_number: string | null
    port_number: string | null
    terminal_number: string | null
    cabinet_location: string | null
    box_number: string | null
    box_entitlement: string | null
    box_location: string | null
    joint_location: string | null
    joint_entitlement: string | null
    joint_depth: string | null
    room_location: string | null
    insulation_level: string | null
    responsible: string | null
    status: $Enums.Status | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CopperLineCountAggregateOutputType = {
    id: number
    landline_number: number
    central: number
    village: number
    cabinet_number: number
    port_number: number
    terminal_number: number
    cabinet_location: number
    box_number: number
    box_entitlement: number
    box_location: number
    joint_location: number
    joint_entitlement: number
    joint_depth: number
    room_location: number
    insulation_level: number
    responsible: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CopperLineMinAggregateInputType = {
    id?: true
    landline_number?: true
    central?: true
    village?: true
    cabinet_number?: true
    port_number?: true
    terminal_number?: true
    cabinet_location?: true
    box_number?: true
    box_entitlement?: true
    box_location?: true
    joint_location?: true
    joint_entitlement?: true
    joint_depth?: true
    room_location?: true
    insulation_level?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CopperLineMaxAggregateInputType = {
    id?: true
    landline_number?: true
    central?: true
    village?: true
    cabinet_number?: true
    port_number?: true
    terminal_number?: true
    cabinet_location?: true
    box_number?: true
    box_entitlement?: true
    box_location?: true
    joint_location?: true
    joint_entitlement?: true
    joint_depth?: true
    room_location?: true
    insulation_level?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CopperLineCountAggregateInputType = {
    id?: true
    landline_number?: true
    central?: true
    village?: true
    cabinet_number?: true
    port_number?: true
    terminal_number?: true
    cabinet_location?: true
    box_number?: true
    box_entitlement?: true
    box_location?: true
    joint_location?: true
    joint_entitlement?: true
    joint_depth?: true
    room_location?: true
    insulation_level?: true
    responsible?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CopperLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CopperLine to aggregate.
     */
    where?: CopperLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopperLines to fetch.
     */
    orderBy?: CopperLineOrderByWithRelationInput | CopperLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CopperLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopperLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopperLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CopperLines
    **/
    _count?: true | CopperLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CopperLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CopperLineMaxAggregateInputType
  }

  export type GetCopperLineAggregateType<T extends CopperLineAggregateArgs> = {
        [P in keyof T & keyof AggregateCopperLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCopperLine[P]>
      : GetScalarType<T[P], AggregateCopperLine[P]>
  }




  export type CopperLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CopperLineWhereInput
    orderBy?: CopperLineOrderByWithAggregationInput | CopperLineOrderByWithAggregationInput[]
    by: CopperLineScalarFieldEnum[] | CopperLineScalarFieldEnum
    having?: CopperLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CopperLineCountAggregateInputType | true
    _min?: CopperLineMinAggregateInputType
    _max?: CopperLineMaxAggregateInputType
  }

  export type CopperLineGroupByOutputType = {
    id: string
    landline_number: string
    central: string
    village: string
    cabinet_number: string
    port_number: string
    terminal_number: string
    cabinet_location: string
    box_number: string
    box_entitlement: string
    box_location: string
    joint_location: string
    joint_entitlement: string
    joint_depth: string
    room_location: string
    insulation_level: string
    responsible: string
    status: $Enums.Status
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CopperLineCountAggregateOutputType | null
    _min: CopperLineMinAggregateOutputType | null
    _max: CopperLineMaxAggregateOutputType | null
  }

  type GetCopperLineGroupByPayload<T extends CopperLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CopperLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CopperLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CopperLineGroupByOutputType[P]>
            : GetScalarType<T[P], CopperLineGroupByOutputType[P]>
        }
      >
    >


  export type CopperLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landline_number?: boolean
    central?: boolean
    village?: boolean
    cabinet_number?: boolean
    port_number?: boolean
    terminal_number?: boolean
    cabinet_location?: boolean
    box_number?: boolean
    box_entitlement?: boolean
    box_location?: boolean
    joint_location?: boolean
    joint_entitlement?: boolean
    joint_depth?: boolean
    room_location?: boolean
    insulation_level?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["copperLine"]>

  export type CopperLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landline_number?: boolean
    central?: boolean
    village?: boolean
    cabinet_number?: boolean
    port_number?: boolean
    terminal_number?: boolean
    cabinet_location?: boolean
    box_number?: boolean
    box_entitlement?: boolean
    box_location?: boolean
    joint_location?: boolean
    joint_entitlement?: boolean
    joint_depth?: boolean
    room_location?: boolean
    insulation_level?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["copperLine"]>

  export type CopperLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landline_number?: boolean
    central?: boolean
    village?: boolean
    cabinet_number?: boolean
    port_number?: boolean
    terminal_number?: boolean
    cabinet_location?: boolean
    box_number?: boolean
    box_entitlement?: boolean
    box_location?: boolean
    joint_location?: boolean
    joint_entitlement?: boolean
    joint_depth?: boolean
    room_location?: boolean
    insulation_level?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["copperLine"]>

  export type CopperLineSelectScalar = {
    id?: boolean
    landline_number?: boolean
    central?: boolean
    village?: boolean
    cabinet_number?: boolean
    port_number?: boolean
    terminal_number?: boolean
    cabinet_location?: boolean
    box_number?: boolean
    box_entitlement?: boolean
    box_location?: boolean
    joint_location?: boolean
    joint_entitlement?: boolean
    joint_depth?: boolean
    room_location?: boolean
    insulation_level?: boolean
    responsible?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CopperLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "landline_number" | "central" | "village" | "cabinet_number" | "port_number" | "terminal_number" | "cabinet_location" | "box_number" | "box_entitlement" | "box_location" | "joint_location" | "joint_entitlement" | "joint_depth" | "room_location" | "insulation_level" | "responsible" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["copperLine"]>

  export type $CopperLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CopperLine"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      landline_number: string
      central: string
      village: string
      cabinet_number: string
      port_number: string
      terminal_number: string
      cabinet_location: string
      box_number: string
      box_entitlement: string
      box_location: string
      joint_location: string
      joint_entitlement: string
      joint_depth: string
      room_location: string
      insulation_level: string
      responsible: string
      status: $Enums.Status
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["copperLine"]>
    composites: {}
  }

  type CopperLineGetPayload<S extends boolean | null | undefined | CopperLineDefaultArgs> = $Result.GetResult<Prisma.$CopperLinePayload, S>

  type CopperLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CopperLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CopperLineCountAggregateInputType | true
    }

  export interface CopperLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CopperLine'], meta: { name: 'CopperLine' } }
    /**
     * Find zero or one CopperLine that matches the filter.
     * @param {CopperLineFindUniqueArgs} args - Arguments to find a CopperLine
     * @example
     * // Get one CopperLine
     * const copperLine = await prisma.copperLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CopperLineFindUniqueArgs>(args: SelectSubset<T, CopperLineFindUniqueArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CopperLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CopperLineFindUniqueOrThrowArgs} args - Arguments to find a CopperLine
     * @example
     * // Get one CopperLine
     * const copperLine = await prisma.copperLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CopperLineFindUniqueOrThrowArgs>(args: SelectSubset<T, CopperLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CopperLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopperLineFindFirstArgs} args - Arguments to find a CopperLine
     * @example
     * // Get one CopperLine
     * const copperLine = await prisma.copperLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CopperLineFindFirstArgs>(args?: SelectSubset<T, CopperLineFindFirstArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CopperLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopperLineFindFirstOrThrowArgs} args - Arguments to find a CopperLine
     * @example
     * // Get one CopperLine
     * const copperLine = await prisma.copperLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CopperLineFindFirstOrThrowArgs>(args?: SelectSubset<T, CopperLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CopperLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopperLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CopperLines
     * const copperLines = await prisma.copperLine.findMany()
     * 
     * // Get first 10 CopperLines
     * const copperLines = await prisma.copperLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const copperLineWithIdOnly = await prisma.copperLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CopperLineFindManyArgs>(args?: SelectSubset<T, CopperLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CopperLine.
     * @param {CopperLineCreateArgs} args - Arguments to create a CopperLine.
     * @example
     * // Create one CopperLine
     * const CopperLine = await prisma.copperLine.create({
     *   data: {
     *     // ... data to create a CopperLine
     *   }
     * })
     * 
     */
    create<T extends CopperLineCreateArgs>(args: SelectSubset<T, CopperLineCreateArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CopperLines.
     * @param {CopperLineCreateManyArgs} args - Arguments to create many CopperLines.
     * @example
     * // Create many CopperLines
     * const copperLine = await prisma.copperLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CopperLineCreateManyArgs>(args?: SelectSubset<T, CopperLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CopperLines and returns the data saved in the database.
     * @param {CopperLineCreateManyAndReturnArgs} args - Arguments to create many CopperLines.
     * @example
     * // Create many CopperLines
     * const copperLine = await prisma.copperLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CopperLines and only return the `id`
     * const copperLineWithIdOnly = await prisma.copperLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CopperLineCreateManyAndReturnArgs>(args?: SelectSubset<T, CopperLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CopperLine.
     * @param {CopperLineDeleteArgs} args - Arguments to delete one CopperLine.
     * @example
     * // Delete one CopperLine
     * const CopperLine = await prisma.copperLine.delete({
     *   where: {
     *     // ... filter to delete one CopperLine
     *   }
     * })
     * 
     */
    delete<T extends CopperLineDeleteArgs>(args: SelectSubset<T, CopperLineDeleteArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CopperLine.
     * @param {CopperLineUpdateArgs} args - Arguments to update one CopperLine.
     * @example
     * // Update one CopperLine
     * const copperLine = await prisma.copperLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CopperLineUpdateArgs>(args: SelectSubset<T, CopperLineUpdateArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CopperLines.
     * @param {CopperLineDeleteManyArgs} args - Arguments to filter CopperLines to delete.
     * @example
     * // Delete a few CopperLines
     * const { count } = await prisma.copperLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CopperLineDeleteManyArgs>(args?: SelectSubset<T, CopperLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CopperLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopperLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CopperLines
     * const copperLine = await prisma.copperLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CopperLineUpdateManyArgs>(args: SelectSubset<T, CopperLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CopperLines and returns the data updated in the database.
     * @param {CopperLineUpdateManyAndReturnArgs} args - Arguments to update many CopperLines.
     * @example
     * // Update many CopperLines
     * const copperLine = await prisma.copperLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CopperLines and only return the `id`
     * const copperLineWithIdOnly = await prisma.copperLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CopperLineUpdateManyAndReturnArgs>(args: SelectSubset<T, CopperLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CopperLine.
     * @param {CopperLineUpsertArgs} args - Arguments to update or create a CopperLine.
     * @example
     * // Update or create a CopperLine
     * const copperLine = await prisma.copperLine.upsert({
     *   create: {
     *     // ... data to create a CopperLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CopperLine we want to update
     *   }
     * })
     */
    upsert<T extends CopperLineUpsertArgs>(args: SelectSubset<T, CopperLineUpsertArgs<ExtArgs>>): Prisma__CopperLineClient<$Result.GetResult<Prisma.$CopperLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CopperLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopperLineCountArgs} args - Arguments to filter CopperLines to count.
     * @example
     * // Count the number of CopperLines
     * const count = await prisma.copperLine.count({
     *   where: {
     *     // ... the filter for the CopperLines we want to count
     *   }
     * })
    **/
    count<T extends CopperLineCountArgs>(
      args?: Subset<T, CopperLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CopperLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CopperLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopperLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CopperLineAggregateArgs>(args: Subset<T, CopperLineAggregateArgs>): Prisma.PrismaPromise<GetCopperLineAggregateType<T>>

    /**
     * Group by CopperLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CopperLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CopperLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CopperLineGroupByArgs['orderBy'] }
        : { orderBy?: CopperLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CopperLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCopperLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CopperLine model
   */
  readonly fields: CopperLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CopperLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CopperLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CopperLine model
   */
  interface CopperLineFieldRefs {
    readonly id: FieldRef<"CopperLine", 'String'>
    readonly landline_number: FieldRef<"CopperLine", 'String'>
    readonly central: FieldRef<"CopperLine", 'String'>
    readonly village: FieldRef<"CopperLine", 'String'>
    readonly cabinet_number: FieldRef<"CopperLine", 'String'>
    readonly port_number: FieldRef<"CopperLine", 'String'>
    readonly terminal_number: FieldRef<"CopperLine", 'String'>
    readonly cabinet_location: FieldRef<"CopperLine", 'String'>
    readonly box_number: FieldRef<"CopperLine", 'String'>
    readonly box_entitlement: FieldRef<"CopperLine", 'String'>
    readonly box_location: FieldRef<"CopperLine", 'String'>
    readonly joint_location: FieldRef<"CopperLine", 'String'>
    readonly joint_entitlement: FieldRef<"CopperLine", 'String'>
    readonly joint_depth: FieldRef<"CopperLine", 'String'>
    readonly room_location: FieldRef<"CopperLine", 'String'>
    readonly insulation_level: FieldRef<"CopperLine", 'String'>
    readonly responsible: FieldRef<"CopperLine", 'String'>
    readonly status: FieldRef<"CopperLine", 'Status'>
    readonly notes: FieldRef<"CopperLine", 'String'>
    readonly createdAt: FieldRef<"CopperLine", 'DateTime'>
    readonly updatedAt: FieldRef<"CopperLine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CopperLine findUnique
   */
  export type CopperLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * Filter, which CopperLine to fetch.
     */
    where: CopperLineWhereUniqueInput
  }

  /**
   * CopperLine findUniqueOrThrow
   */
  export type CopperLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * Filter, which CopperLine to fetch.
     */
    where: CopperLineWhereUniqueInput
  }

  /**
   * CopperLine findFirst
   */
  export type CopperLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * Filter, which CopperLine to fetch.
     */
    where?: CopperLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopperLines to fetch.
     */
    orderBy?: CopperLineOrderByWithRelationInput | CopperLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CopperLines.
     */
    cursor?: CopperLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopperLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopperLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CopperLines.
     */
    distinct?: CopperLineScalarFieldEnum | CopperLineScalarFieldEnum[]
  }

  /**
   * CopperLine findFirstOrThrow
   */
  export type CopperLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * Filter, which CopperLine to fetch.
     */
    where?: CopperLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopperLines to fetch.
     */
    orderBy?: CopperLineOrderByWithRelationInput | CopperLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CopperLines.
     */
    cursor?: CopperLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopperLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopperLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CopperLines.
     */
    distinct?: CopperLineScalarFieldEnum | CopperLineScalarFieldEnum[]
  }

  /**
   * CopperLine findMany
   */
  export type CopperLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * Filter, which CopperLines to fetch.
     */
    where?: CopperLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CopperLines to fetch.
     */
    orderBy?: CopperLineOrderByWithRelationInput | CopperLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CopperLines.
     */
    cursor?: CopperLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CopperLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CopperLines.
     */
    skip?: number
    distinct?: CopperLineScalarFieldEnum | CopperLineScalarFieldEnum[]
  }

  /**
   * CopperLine create
   */
  export type CopperLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * The data needed to create a CopperLine.
     */
    data: XOR<CopperLineCreateInput, CopperLineUncheckedCreateInput>
  }

  /**
   * CopperLine createMany
   */
  export type CopperLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CopperLines.
     */
    data: CopperLineCreateManyInput | CopperLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CopperLine createManyAndReturn
   */
  export type CopperLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * The data used to create many CopperLines.
     */
    data: CopperLineCreateManyInput | CopperLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CopperLine update
   */
  export type CopperLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * The data needed to update a CopperLine.
     */
    data: XOR<CopperLineUpdateInput, CopperLineUncheckedUpdateInput>
    /**
     * Choose, which CopperLine to update.
     */
    where: CopperLineWhereUniqueInput
  }

  /**
   * CopperLine updateMany
   */
  export type CopperLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CopperLines.
     */
    data: XOR<CopperLineUpdateManyMutationInput, CopperLineUncheckedUpdateManyInput>
    /**
     * Filter which CopperLines to update
     */
    where?: CopperLineWhereInput
    /**
     * Limit how many CopperLines to update.
     */
    limit?: number
  }

  /**
   * CopperLine updateManyAndReturn
   */
  export type CopperLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * The data used to update CopperLines.
     */
    data: XOR<CopperLineUpdateManyMutationInput, CopperLineUncheckedUpdateManyInput>
    /**
     * Filter which CopperLines to update
     */
    where?: CopperLineWhereInput
    /**
     * Limit how many CopperLines to update.
     */
    limit?: number
  }

  /**
   * CopperLine upsert
   */
  export type CopperLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * The filter to search for the CopperLine to update in case it exists.
     */
    where: CopperLineWhereUniqueInput
    /**
     * In case the CopperLine found by the `where` argument doesn't exist, create a new CopperLine with this data.
     */
    create: XOR<CopperLineCreateInput, CopperLineUncheckedCreateInput>
    /**
     * In case the CopperLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CopperLineUpdateInput, CopperLineUncheckedUpdateInput>
  }

  /**
   * CopperLine delete
   */
  export type CopperLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
    /**
     * Filter which CopperLine to delete.
     */
    where: CopperLineWhereUniqueInput
  }

  /**
   * CopperLine deleteMany
   */
  export type CopperLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CopperLines to delete
     */
    where?: CopperLineWhereInput
    /**
     * Limit how many CopperLines to delete.
     */
    limit?: number
  }

  /**
   * CopperLine without action
   */
  export type CopperLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CopperLine
     */
    select?: CopperLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CopperLine
     */
    omit?: CopperLineOmit<ExtArgs> | null
  }


  /**
   * Model MsanCabinet
   */

  export type AggregateMsanCabinet = {
    _count: MsanCabinetCountAggregateOutputType | null
    _min: MsanCabinetMinAggregateOutputType | null
    _max: MsanCabinetMaxAggregateOutputType | null
  }

  export type MsanCabinetMinAggregateOutputType = {
    id: string | null
    central: string | null
    msan_number: string | null
    cabinet_name: string | null
    cable_number: string | null
    cable_capacity: string | null
    distance_from_central: string | null
    odf_name: string | null
    cassette_number: string | null
    branches: string | null
    spares: string | null
    cabinet_location: string | null
    notes: string | null
    responsible: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MsanCabinetMaxAggregateOutputType = {
    id: string | null
    central: string | null
    msan_number: string | null
    cabinet_name: string | null
    cable_number: string | null
    cable_capacity: string | null
    distance_from_central: string | null
    odf_name: string | null
    cassette_number: string | null
    branches: string | null
    spares: string | null
    cabinet_location: string | null
    notes: string | null
    responsible: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MsanCabinetCountAggregateOutputType = {
    id: number
    central: number
    msan_number: number
    cabinet_name: number
    cable_number: number
    cable_capacity: number
    distance_from_central: number
    odf_name: number
    cassette_number: number
    branches: number
    spares: number
    cabinet_location: number
    notes: number
    responsible: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MsanCabinetMinAggregateInputType = {
    id?: true
    central?: true
    msan_number?: true
    cabinet_name?: true
    cable_number?: true
    cable_capacity?: true
    distance_from_central?: true
    odf_name?: true
    cassette_number?: true
    branches?: true
    spares?: true
    cabinet_location?: true
    notes?: true
    responsible?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MsanCabinetMaxAggregateInputType = {
    id?: true
    central?: true
    msan_number?: true
    cabinet_name?: true
    cable_number?: true
    cable_capacity?: true
    distance_from_central?: true
    odf_name?: true
    cassette_number?: true
    branches?: true
    spares?: true
    cabinet_location?: true
    notes?: true
    responsible?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MsanCabinetCountAggregateInputType = {
    id?: true
    central?: true
    msan_number?: true
    cabinet_name?: true
    cable_number?: true
    cable_capacity?: true
    distance_from_central?: true
    odf_name?: true
    cassette_number?: true
    branches?: true
    spares?: true
    cabinet_location?: true
    notes?: true
    responsible?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MsanCabinetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsanCabinet to aggregate.
     */
    where?: MsanCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsanCabinets to fetch.
     */
    orderBy?: MsanCabinetOrderByWithRelationInput | MsanCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MsanCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsanCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsanCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MsanCabinets
    **/
    _count?: true | MsanCabinetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MsanCabinetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MsanCabinetMaxAggregateInputType
  }

  export type GetMsanCabinetAggregateType<T extends MsanCabinetAggregateArgs> = {
        [P in keyof T & keyof AggregateMsanCabinet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMsanCabinet[P]>
      : GetScalarType<T[P], AggregateMsanCabinet[P]>
  }




  export type MsanCabinetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MsanCabinetWhereInput
    orderBy?: MsanCabinetOrderByWithAggregationInput | MsanCabinetOrderByWithAggregationInput[]
    by: MsanCabinetScalarFieldEnum[] | MsanCabinetScalarFieldEnum
    having?: MsanCabinetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MsanCabinetCountAggregateInputType | true
    _min?: MsanCabinetMinAggregateInputType
    _max?: MsanCabinetMaxAggregateInputType
  }

  export type MsanCabinetGroupByOutputType = {
    id: string
    central: string
    msan_number: string
    cabinet_name: string
    cable_number: string
    cable_capacity: string
    distance_from_central: string
    odf_name: string
    cassette_number: string
    branches: string
    spares: string
    cabinet_location: string
    notes: string | null
    responsible: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: MsanCabinetCountAggregateOutputType | null
    _min: MsanCabinetMinAggregateOutputType | null
    _max: MsanCabinetMaxAggregateOutputType | null
  }

  type GetMsanCabinetGroupByPayload<T extends MsanCabinetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MsanCabinetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MsanCabinetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MsanCabinetGroupByOutputType[P]>
            : GetScalarType<T[P], MsanCabinetGroupByOutputType[P]>
        }
      >
    >


  export type MsanCabinetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    msan_number?: boolean
    cabinet_name?: boolean
    cable_number?: boolean
    cable_capacity?: boolean
    distance_from_central?: boolean
    odf_name?: boolean
    cassette_number?: boolean
    branches?: boolean
    spares?: boolean
    cabinet_location?: boolean
    notes?: boolean
    responsible?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["msanCabinet"]>

  export type MsanCabinetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    msan_number?: boolean
    cabinet_name?: boolean
    cable_number?: boolean
    cable_capacity?: boolean
    distance_from_central?: boolean
    odf_name?: boolean
    cassette_number?: boolean
    branches?: boolean
    spares?: boolean
    cabinet_location?: boolean
    notes?: boolean
    responsible?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["msanCabinet"]>

  export type MsanCabinetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    central?: boolean
    msan_number?: boolean
    cabinet_name?: boolean
    cable_number?: boolean
    cable_capacity?: boolean
    distance_from_central?: boolean
    odf_name?: boolean
    cassette_number?: boolean
    branches?: boolean
    spares?: boolean
    cabinet_location?: boolean
    notes?: boolean
    responsible?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["msanCabinet"]>

  export type MsanCabinetSelectScalar = {
    id?: boolean
    central?: boolean
    msan_number?: boolean
    cabinet_name?: boolean
    cable_number?: boolean
    cable_capacity?: boolean
    distance_from_central?: boolean
    odf_name?: boolean
    cassette_number?: boolean
    branches?: boolean
    spares?: boolean
    cabinet_location?: boolean
    notes?: boolean
    responsible?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MsanCabinetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "central" | "msan_number" | "cabinet_name" | "cable_number" | "cable_capacity" | "distance_from_central" | "odf_name" | "cassette_number" | "branches" | "spares" | "cabinet_location" | "notes" | "responsible" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["msanCabinet"]>

  export type $MsanCabinetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MsanCabinet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      central: string
      msan_number: string
      cabinet_name: string
      cable_number: string
      cable_capacity: string
      distance_from_central: string
      odf_name: string
      cassette_number: string
      branches: string
      spares: string
      cabinet_location: string
      notes: string | null
      responsible: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["msanCabinet"]>
    composites: {}
  }

  type MsanCabinetGetPayload<S extends boolean | null | undefined | MsanCabinetDefaultArgs> = $Result.GetResult<Prisma.$MsanCabinetPayload, S>

  type MsanCabinetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MsanCabinetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MsanCabinetCountAggregateInputType | true
    }

  export interface MsanCabinetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MsanCabinet'], meta: { name: 'MsanCabinet' } }
    /**
     * Find zero or one MsanCabinet that matches the filter.
     * @param {MsanCabinetFindUniqueArgs} args - Arguments to find a MsanCabinet
     * @example
     * // Get one MsanCabinet
     * const msanCabinet = await prisma.msanCabinet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MsanCabinetFindUniqueArgs>(args: SelectSubset<T, MsanCabinetFindUniqueArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MsanCabinet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MsanCabinetFindUniqueOrThrowArgs} args - Arguments to find a MsanCabinet
     * @example
     * // Get one MsanCabinet
     * const msanCabinet = await prisma.msanCabinet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MsanCabinetFindUniqueOrThrowArgs>(args: SelectSubset<T, MsanCabinetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsanCabinet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsanCabinetFindFirstArgs} args - Arguments to find a MsanCabinet
     * @example
     * // Get one MsanCabinet
     * const msanCabinet = await prisma.msanCabinet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MsanCabinetFindFirstArgs>(args?: SelectSubset<T, MsanCabinetFindFirstArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MsanCabinet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsanCabinetFindFirstOrThrowArgs} args - Arguments to find a MsanCabinet
     * @example
     * // Get one MsanCabinet
     * const msanCabinet = await prisma.msanCabinet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MsanCabinetFindFirstOrThrowArgs>(args?: SelectSubset<T, MsanCabinetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MsanCabinets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsanCabinetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MsanCabinets
     * const msanCabinets = await prisma.msanCabinet.findMany()
     * 
     * // Get first 10 MsanCabinets
     * const msanCabinets = await prisma.msanCabinet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const msanCabinetWithIdOnly = await prisma.msanCabinet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MsanCabinetFindManyArgs>(args?: SelectSubset<T, MsanCabinetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MsanCabinet.
     * @param {MsanCabinetCreateArgs} args - Arguments to create a MsanCabinet.
     * @example
     * // Create one MsanCabinet
     * const MsanCabinet = await prisma.msanCabinet.create({
     *   data: {
     *     // ... data to create a MsanCabinet
     *   }
     * })
     * 
     */
    create<T extends MsanCabinetCreateArgs>(args: SelectSubset<T, MsanCabinetCreateArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MsanCabinets.
     * @param {MsanCabinetCreateManyArgs} args - Arguments to create many MsanCabinets.
     * @example
     * // Create many MsanCabinets
     * const msanCabinet = await prisma.msanCabinet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MsanCabinetCreateManyArgs>(args?: SelectSubset<T, MsanCabinetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MsanCabinets and returns the data saved in the database.
     * @param {MsanCabinetCreateManyAndReturnArgs} args - Arguments to create many MsanCabinets.
     * @example
     * // Create many MsanCabinets
     * const msanCabinet = await prisma.msanCabinet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MsanCabinets and only return the `id`
     * const msanCabinetWithIdOnly = await prisma.msanCabinet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MsanCabinetCreateManyAndReturnArgs>(args?: SelectSubset<T, MsanCabinetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MsanCabinet.
     * @param {MsanCabinetDeleteArgs} args - Arguments to delete one MsanCabinet.
     * @example
     * // Delete one MsanCabinet
     * const MsanCabinet = await prisma.msanCabinet.delete({
     *   where: {
     *     // ... filter to delete one MsanCabinet
     *   }
     * })
     * 
     */
    delete<T extends MsanCabinetDeleteArgs>(args: SelectSubset<T, MsanCabinetDeleteArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MsanCabinet.
     * @param {MsanCabinetUpdateArgs} args - Arguments to update one MsanCabinet.
     * @example
     * // Update one MsanCabinet
     * const msanCabinet = await prisma.msanCabinet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MsanCabinetUpdateArgs>(args: SelectSubset<T, MsanCabinetUpdateArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MsanCabinets.
     * @param {MsanCabinetDeleteManyArgs} args - Arguments to filter MsanCabinets to delete.
     * @example
     * // Delete a few MsanCabinets
     * const { count } = await prisma.msanCabinet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MsanCabinetDeleteManyArgs>(args?: SelectSubset<T, MsanCabinetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsanCabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsanCabinetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MsanCabinets
     * const msanCabinet = await prisma.msanCabinet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MsanCabinetUpdateManyArgs>(args: SelectSubset<T, MsanCabinetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MsanCabinets and returns the data updated in the database.
     * @param {MsanCabinetUpdateManyAndReturnArgs} args - Arguments to update many MsanCabinets.
     * @example
     * // Update many MsanCabinets
     * const msanCabinet = await prisma.msanCabinet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MsanCabinets and only return the `id`
     * const msanCabinetWithIdOnly = await prisma.msanCabinet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MsanCabinetUpdateManyAndReturnArgs>(args: SelectSubset<T, MsanCabinetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MsanCabinet.
     * @param {MsanCabinetUpsertArgs} args - Arguments to update or create a MsanCabinet.
     * @example
     * // Update or create a MsanCabinet
     * const msanCabinet = await prisma.msanCabinet.upsert({
     *   create: {
     *     // ... data to create a MsanCabinet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MsanCabinet we want to update
     *   }
     * })
     */
    upsert<T extends MsanCabinetUpsertArgs>(args: SelectSubset<T, MsanCabinetUpsertArgs<ExtArgs>>): Prisma__MsanCabinetClient<$Result.GetResult<Prisma.$MsanCabinetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MsanCabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsanCabinetCountArgs} args - Arguments to filter MsanCabinets to count.
     * @example
     * // Count the number of MsanCabinets
     * const count = await prisma.msanCabinet.count({
     *   where: {
     *     // ... the filter for the MsanCabinets we want to count
     *   }
     * })
    **/
    count<T extends MsanCabinetCountArgs>(
      args?: Subset<T, MsanCabinetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MsanCabinetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MsanCabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsanCabinetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MsanCabinetAggregateArgs>(args: Subset<T, MsanCabinetAggregateArgs>): Prisma.PrismaPromise<GetMsanCabinetAggregateType<T>>

    /**
     * Group by MsanCabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MsanCabinetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MsanCabinetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MsanCabinetGroupByArgs['orderBy'] }
        : { orderBy?: MsanCabinetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MsanCabinetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMsanCabinetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MsanCabinet model
   */
  readonly fields: MsanCabinetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MsanCabinet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MsanCabinetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MsanCabinet model
   */
  interface MsanCabinetFieldRefs {
    readonly id: FieldRef<"MsanCabinet", 'String'>
    readonly central: FieldRef<"MsanCabinet", 'String'>
    readonly msan_number: FieldRef<"MsanCabinet", 'String'>
    readonly cabinet_name: FieldRef<"MsanCabinet", 'String'>
    readonly cable_number: FieldRef<"MsanCabinet", 'String'>
    readonly cable_capacity: FieldRef<"MsanCabinet", 'String'>
    readonly distance_from_central: FieldRef<"MsanCabinet", 'String'>
    readonly odf_name: FieldRef<"MsanCabinet", 'String'>
    readonly cassette_number: FieldRef<"MsanCabinet", 'String'>
    readonly branches: FieldRef<"MsanCabinet", 'String'>
    readonly spares: FieldRef<"MsanCabinet", 'String'>
    readonly cabinet_location: FieldRef<"MsanCabinet", 'String'>
    readonly notes: FieldRef<"MsanCabinet", 'String'>
    readonly responsible: FieldRef<"MsanCabinet", 'String'>
    readonly status: FieldRef<"MsanCabinet", 'Status'>
    readonly createdAt: FieldRef<"MsanCabinet", 'DateTime'>
    readonly updatedAt: FieldRef<"MsanCabinet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MsanCabinet findUnique
   */
  export type MsanCabinetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MsanCabinet to fetch.
     */
    where: MsanCabinetWhereUniqueInput
  }

  /**
   * MsanCabinet findUniqueOrThrow
   */
  export type MsanCabinetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MsanCabinet to fetch.
     */
    where: MsanCabinetWhereUniqueInput
  }

  /**
   * MsanCabinet findFirst
   */
  export type MsanCabinetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MsanCabinet to fetch.
     */
    where?: MsanCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsanCabinets to fetch.
     */
    orderBy?: MsanCabinetOrderByWithRelationInput | MsanCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsanCabinets.
     */
    cursor?: MsanCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsanCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsanCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsanCabinets.
     */
    distinct?: MsanCabinetScalarFieldEnum | MsanCabinetScalarFieldEnum[]
  }

  /**
   * MsanCabinet findFirstOrThrow
   */
  export type MsanCabinetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MsanCabinet to fetch.
     */
    where?: MsanCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsanCabinets to fetch.
     */
    orderBy?: MsanCabinetOrderByWithRelationInput | MsanCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MsanCabinets.
     */
    cursor?: MsanCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsanCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsanCabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MsanCabinets.
     */
    distinct?: MsanCabinetScalarFieldEnum | MsanCabinetScalarFieldEnum[]
  }

  /**
   * MsanCabinet findMany
   */
  export type MsanCabinetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * Filter, which MsanCabinets to fetch.
     */
    where?: MsanCabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MsanCabinets to fetch.
     */
    orderBy?: MsanCabinetOrderByWithRelationInput | MsanCabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MsanCabinets.
     */
    cursor?: MsanCabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MsanCabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MsanCabinets.
     */
    skip?: number
    distinct?: MsanCabinetScalarFieldEnum | MsanCabinetScalarFieldEnum[]
  }

  /**
   * MsanCabinet create
   */
  export type MsanCabinetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * The data needed to create a MsanCabinet.
     */
    data: XOR<MsanCabinetCreateInput, MsanCabinetUncheckedCreateInput>
  }

  /**
   * MsanCabinet createMany
   */
  export type MsanCabinetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MsanCabinets.
     */
    data: MsanCabinetCreateManyInput | MsanCabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MsanCabinet createManyAndReturn
   */
  export type MsanCabinetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * The data used to create many MsanCabinets.
     */
    data: MsanCabinetCreateManyInput | MsanCabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MsanCabinet update
   */
  export type MsanCabinetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * The data needed to update a MsanCabinet.
     */
    data: XOR<MsanCabinetUpdateInput, MsanCabinetUncheckedUpdateInput>
    /**
     * Choose, which MsanCabinet to update.
     */
    where: MsanCabinetWhereUniqueInput
  }

  /**
   * MsanCabinet updateMany
   */
  export type MsanCabinetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MsanCabinets.
     */
    data: XOR<MsanCabinetUpdateManyMutationInput, MsanCabinetUncheckedUpdateManyInput>
    /**
     * Filter which MsanCabinets to update
     */
    where?: MsanCabinetWhereInput
    /**
     * Limit how many MsanCabinets to update.
     */
    limit?: number
  }

  /**
   * MsanCabinet updateManyAndReturn
   */
  export type MsanCabinetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * The data used to update MsanCabinets.
     */
    data: XOR<MsanCabinetUpdateManyMutationInput, MsanCabinetUncheckedUpdateManyInput>
    /**
     * Filter which MsanCabinets to update
     */
    where?: MsanCabinetWhereInput
    /**
     * Limit how many MsanCabinets to update.
     */
    limit?: number
  }

  /**
   * MsanCabinet upsert
   */
  export type MsanCabinetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * The filter to search for the MsanCabinet to update in case it exists.
     */
    where: MsanCabinetWhereUniqueInput
    /**
     * In case the MsanCabinet found by the `where` argument doesn't exist, create a new MsanCabinet with this data.
     */
    create: XOR<MsanCabinetCreateInput, MsanCabinetUncheckedCreateInput>
    /**
     * In case the MsanCabinet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MsanCabinetUpdateInput, MsanCabinetUncheckedUpdateInput>
  }

  /**
   * MsanCabinet delete
   */
  export type MsanCabinetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
    /**
     * Filter which MsanCabinet to delete.
     */
    where: MsanCabinetWhereUniqueInput
  }

  /**
   * MsanCabinet deleteMany
   */
  export type MsanCabinetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MsanCabinets to delete
     */
    where?: MsanCabinetWhereInput
    /**
     * Limit how many MsanCabinets to delete.
     */
    limit?: number
  }

  /**
   * MsanCabinet without action
   */
  export type MsanCabinetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MsanCabinet
     */
    select?: MsanCabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MsanCabinet
     */
    omit?: MsanCabinetOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    password: 'password',
    name: 'name',
    phoneNumber: 'phoneNumber',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const MajorCabinetScalarFieldEnum: {
    id: 'id',
    central: 'central',
    village: 'village',
    cabinet: 'cabinet',
    central_to_cabinet_distance: 'central_to_cabinet_distance',
    number_of_joints: 'number_of_joints',
    joint_location: 'joint_location',
    rooms: 'rooms',
    room_location: 'room_location',
    entitlement: 'entitlement',
    distance: 'distance',
    status: 'status',
    responsible: 'responsible',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MajorCabinetScalarFieldEnum = (typeof MajorCabinetScalarFieldEnum)[keyof typeof MajorCabinetScalarFieldEnum]


  export const SecondaryCabinetScalarFieldEnum: {
    id: 'id',
    central: 'central',
    village: 'village',
    port_gbon: 'port_gbon',
    cabinet: 'cabinet',
    splitter_number: 'splitter_number',
    splitter_port: 'splitter_port',
    distance: 'distance',
    box_number: 'box_number',
    cabinet_location: 'cabinet_location',
    box_location: 'box_location',
    cabinet_to_box_distance: 'cabinet_to_box_distance',
    responsible: 'responsible',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SecondaryCabinetScalarFieldEnum = (typeof SecondaryCabinetScalarFieldEnum)[keyof typeof SecondaryCabinetScalarFieldEnum]


  export const MobileTowerScalarFieldEnum: {
    id: 'id',
    central: 'central',
    cable_name: 'cable_name',
    tower_code: 'tower_code',
    company: 'company',
    entitlement: 'entitlement',
    distance: 'distance',
    address: 'address',
    location: 'location',
    responsible: 'responsible',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MobileTowerScalarFieldEnum = (typeof MobileTowerScalarFieldEnum)[keyof typeof MobileTowerScalarFieldEnum]


  export const CopperLineScalarFieldEnum: {
    id: 'id',
    landline_number: 'landline_number',
    central: 'central',
    village: 'village',
    cabinet_number: 'cabinet_number',
    port_number: 'port_number',
    terminal_number: 'terminal_number',
    cabinet_location: 'cabinet_location',
    box_number: 'box_number',
    box_entitlement: 'box_entitlement',
    box_location: 'box_location',
    joint_location: 'joint_location',
    joint_entitlement: 'joint_entitlement',
    joint_depth: 'joint_depth',
    room_location: 'room_location',
    insulation_level: 'insulation_level',
    responsible: 'responsible',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CopperLineScalarFieldEnum = (typeof CopperLineScalarFieldEnum)[keyof typeof CopperLineScalarFieldEnum]


  export const MsanCabinetScalarFieldEnum: {
    id: 'id',
    central: 'central',
    msan_number: 'msan_number',
    cabinet_name: 'cabinet_name',
    cable_number: 'cable_number',
    cable_capacity: 'cable_capacity',
    distance_from_central: 'distance_from_central',
    odf_name: 'odf_name',
    cassette_number: 'cassette_number',
    branches: 'branches',
    spares: 'spares',
    cabinet_location: 'cabinet_location',
    notes: 'notes',
    responsible: 'responsible',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MsanCabinetScalarFieldEnum = (typeof MsanCabinetScalarFieldEnum)[keyof typeof MsanCabinetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "userName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type MajorCabinetWhereInput = {
    AND?: MajorCabinetWhereInput | MajorCabinetWhereInput[]
    OR?: MajorCabinetWhereInput[]
    NOT?: MajorCabinetWhereInput | MajorCabinetWhereInput[]
    id?: StringFilter<"MajorCabinet"> | string
    central?: StringFilter<"MajorCabinet"> | string
    village?: StringFilter<"MajorCabinet"> | string
    cabinet?: StringFilter<"MajorCabinet"> | string
    central_to_cabinet_distance?: StringFilter<"MajorCabinet"> | string
    number_of_joints?: IntFilter<"MajorCabinet"> | number
    joint_location?: StringFilter<"MajorCabinet"> | string
    rooms?: StringFilter<"MajorCabinet"> | string
    room_location?: StringFilter<"MajorCabinet"> | string
    entitlement?: StringFilter<"MajorCabinet"> | string
    distance?: StringFilter<"MajorCabinet"> | string
    status?: EnumStatusFilter<"MajorCabinet"> | $Enums.Status
    responsible?: StringFilter<"MajorCabinet"> | string
    notes?: StringFilter<"MajorCabinet"> | string
    createdAt?: DateTimeFilter<"MajorCabinet"> | Date | string
    updatedAt?: DateTimeFilter<"MajorCabinet"> | Date | string
  }

  export type MajorCabinetOrderByWithRelationInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet?: SortOrder
    central_to_cabinet_distance?: SortOrder
    number_of_joints?: SortOrder
    joint_location?: SortOrder
    rooms?: SortOrder
    room_location?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MajorCabinetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MajorCabinetWhereInput | MajorCabinetWhereInput[]
    OR?: MajorCabinetWhereInput[]
    NOT?: MajorCabinetWhereInput | MajorCabinetWhereInput[]
    central?: StringFilter<"MajorCabinet"> | string
    village?: StringFilter<"MajorCabinet"> | string
    cabinet?: StringFilter<"MajorCabinet"> | string
    central_to_cabinet_distance?: StringFilter<"MajorCabinet"> | string
    number_of_joints?: IntFilter<"MajorCabinet"> | number
    joint_location?: StringFilter<"MajorCabinet"> | string
    rooms?: StringFilter<"MajorCabinet"> | string
    room_location?: StringFilter<"MajorCabinet"> | string
    entitlement?: StringFilter<"MajorCabinet"> | string
    distance?: StringFilter<"MajorCabinet"> | string
    status?: EnumStatusFilter<"MajorCabinet"> | $Enums.Status
    responsible?: StringFilter<"MajorCabinet"> | string
    notes?: StringFilter<"MajorCabinet"> | string
    createdAt?: DateTimeFilter<"MajorCabinet"> | Date | string
    updatedAt?: DateTimeFilter<"MajorCabinet"> | Date | string
  }, "id">

  export type MajorCabinetOrderByWithAggregationInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet?: SortOrder
    central_to_cabinet_distance?: SortOrder
    number_of_joints?: SortOrder
    joint_location?: SortOrder
    rooms?: SortOrder
    room_location?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MajorCabinetCountOrderByAggregateInput
    _avg?: MajorCabinetAvgOrderByAggregateInput
    _max?: MajorCabinetMaxOrderByAggregateInput
    _min?: MajorCabinetMinOrderByAggregateInput
    _sum?: MajorCabinetSumOrderByAggregateInput
  }

  export type MajorCabinetScalarWhereWithAggregatesInput = {
    AND?: MajorCabinetScalarWhereWithAggregatesInput | MajorCabinetScalarWhereWithAggregatesInput[]
    OR?: MajorCabinetScalarWhereWithAggregatesInput[]
    NOT?: MajorCabinetScalarWhereWithAggregatesInput | MajorCabinetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MajorCabinet"> | string
    central?: StringWithAggregatesFilter<"MajorCabinet"> | string
    village?: StringWithAggregatesFilter<"MajorCabinet"> | string
    cabinet?: StringWithAggregatesFilter<"MajorCabinet"> | string
    central_to_cabinet_distance?: StringWithAggregatesFilter<"MajorCabinet"> | string
    number_of_joints?: IntWithAggregatesFilter<"MajorCabinet"> | number
    joint_location?: StringWithAggregatesFilter<"MajorCabinet"> | string
    rooms?: StringWithAggregatesFilter<"MajorCabinet"> | string
    room_location?: StringWithAggregatesFilter<"MajorCabinet"> | string
    entitlement?: StringWithAggregatesFilter<"MajorCabinet"> | string
    distance?: StringWithAggregatesFilter<"MajorCabinet"> | string
    status?: EnumStatusWithAggregatesFilter<"MajorCabinet"> | $Enums.Status
    responsible?: StringWithAggregatesFilter<"MajorCabinet"> | string
    notes?: StringWithAggregatesFilter<"MajorCabinet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MajorCabinet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MajorCabinet"> | Date | string
  }

  export type SecondaryCabinetWhereInput = {
    AND?: SecondaryCabinetWhereInput | SecondaryCabinetWhereInput[]
    OR?: SecondaryCabinetWhereInput[]
    NOT?: SecondaryCabinetWhereInput | SecondaryCabinetWhereInput[]
    id?: StringFilter<"SecondaryCabinet"> | string
    central?: StringFilter<"SecondaryCabinet"> | string
    village?: StringFilter<"SecondaryCabinet"> | string
    port_gbon?: StringFilter<"SecondaryCabinet"> | string
    cabinet?: StringFilter<"SecondaryCabinet"> | string
    splitter_number?: StringFilter<"SecondaryCabinet"> | string
    splitter_port?: StringFilter<"SecondaryCabinet"> | string
    distance?: StringFilter<"SecondaryCabinet"> | string
    box_number?: StringFilter<"SecondaryCabinet"> | string
    cabinet_location?: StringFilter<"SecondaryCabinet"> | string
    box_location?: StringFilter<"SecondaryCabinet"> | string
    cabinet_to_box_distance?: StringFilter<"SecondaryCabinet"> | string
    responsible?: StringFilter<"SecondaryCabinet"> | string
    status?: EnumStatusFilter<"SecondaryCabinet"> | $Enums.Status
    notes?: StringNullableFilter<"SecondaryCabinet"> | string | null
    createdAt?: DateTimeFilter<"SecondaryCabinet"> | Date | string
    updatedAt?: DateTimeFilter<"SecondaryCabinet"> | Date | string
  }

  export type SecondaryCabinetOrderByWithRelationInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    port_gbon?: SortOrder
    cabinet?: SortOrder
    splitter_number?: SortOrder
    splitter_port?: SortOrder
    distance?: SortOrder
    box_number?: SortOrder
    cabinet_location?: SortOrder
    box_location?: SortOrder
    cabinet_to_box_distance?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecondaryCabinetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecondaryCabinetWhereInput | SecondaryCabinetWhereInput[]
    OR?: SecondaryCabinetWhereInput[]
    NOT?: SecondaryCabinetWhereInput | SecondaryCabinetWhereInput[]
    central?: StringFilter<"SecondaryCabinet"> | string
    village?: StringFilter<"SecondaryCabinet"> | string
    port_gbon?: StringFilter<"SecondaryCabinet"> | string
    cabinet?: StringFilter<"SecondaryCabinet"> | string
    splitter_number?: StringFilter<"SecondaryCabinet"> | string
    splitter_port?: StringFilter<"SecondaryCabinet"> | string
    distance?: StringFilter<"SecondaryCabinet"> | string
    box_number?: StringFilter<"SecondaryCabinet"> | string
    cabinet_location?: StringFilter<"SecondaryCabinet"> | string
    box_location?: StringFilter<"SecondaryCabinet"> | string
    cabinet_to_box_distance?: StringFilter<"SecondaryCabinet"> | string
    responsible?: StringFilter<"SecondaryCabinet"> | string
    status?: EnumStatusFilter<"SecondaryCabinet"> | $Enums.Status
    notes?: StringNullableFilter<"SecondaryCabinet"> | string | null
    createdAt?: DateTimeFilter<"SecondaryCabinet"> | Date | string
    updatedAt?: DateTimeFilter<"SecondaryCabinet"> | Date | string
  }, "id">

  export type SecondaryCabinetOrderByWithAggregationInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    port_gbon?: SortOrder
    cabinet?: SortOrder
    splitter_number?: SortOrder
    splitter_port?: SortOrder
    distance?: SortOrder
    box_number?: SortOrder
    cabinet_location?: SortOrder
    box_location?: SortOrder
    cabinet_to_box_distance?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SecondaryCabinetCountOrderByAggregateInput
    _max?: SecondaryCabinetMaxOrderByAggregateInput
    _min?: SecondaryCabinetMinOrderByAggregateInput
  }

  export type SecondaryCabinetScalarWhereWithAggregatesInput = {
    AND?: SecondaryCabinetScalarWhereWithAggregatesInput | SecondaryCabinetScalarWhereWithAggregatesInput[]
    OR?: SecondaryCabinetScalarWhereWithAggregatesInput[]
    NOT?: SecondaryCabinetScalarWhereWithAggregatesInput | SecondaryCabinetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    central?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    village?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    port_gbon?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    cabinet?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    splitter_number?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    splitter_port?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    distance?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    box_number?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    cabinet_location?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    box_location?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    cabinet_to_box_distance?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    responsible?: StringWithAggregatesFilter<"SecondaryCabinet"> | string
    status?: EnumStatusWithAggregatesFilter<"SecondaryCabinet"> | $Enums.Status
    notes?: StringNullableWithAggregatesFilter<"SecondaryCabinet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SecondaryCabinet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SecondaryCabinet"> | Date | string
  }

  export type MobileTowerWhereInput = {
    AND?: MobileTowerWhereInput | MobileTowerWhereInput[]
    OR?: MobileTowerWhereInput[]
    NOT?: MobileTowerWhereInput | MobileTowerWhereInput[]
    id?: StringFilter<"MobileTower"> | string
    central?: StringFilter<"MobileTower"> | string
    cable_name?: StringFilter<"MobileTower"> | string
    tower_code?: StringFilter<"MobileTower"> | string
    company?: StringFilter<"MobileTower"> | string
    entitlement?: StringFilter<"MobileTower"> | string
    distance?: StringFilter<"MobileTower"> | string
    address?: StringFilter<"MobileTower"> | string
    location?: StringFilter<"MobileTower"> | string
    responsible?: StringFilter<"MobileTower"> | string
    status?: EnumStatusFilter<"MobileTower"> | $Enums.Status
    notes?: StringNullableFilter<"MobileTower"> | string | null
    createdAt?: DateTimeFilter<"MobileTower"> | Date | string
    updatedAt?: DateTimeFilter<"MobileTower"> | Date | string
  }

  export type MobileTowerOrderByWithRelationInput = {
    id?: SortOrder
    central?: SortOrder
    cable_name?: SortOrder
    tower_code?: SortOrder
    company?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    address?: SortOrder
    location?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MobileTowerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MobileTowerWhereInput | MobileTowerWhereInput[]
    OR?: MobileTowerWhereInput[]
    NOT?: MobileTowerWhereInput | MobileTowerWhereInput[]
    central?: StringFilter<"MobileTower"> | string
    cable_name?: StringFilter<"MobileTower"> | string
    tower_code?: StringFilter<"MobileTower"> | string
    company?: StringFilter<"MobileTower"> | string
    entitlement?: StringFilter<"MobileTower"> | string
    distance?: StringFilter<"MobileTower"> | string
    address?: StringFilter<"MobileTower"> | string
    location?: StringFilter<"MobileTower"> | string
    responsible?: StringFilter<"MobileTower"> | string
    status?: EnumStatusFilter<"MobileTower"> | $Enums.Status
    notes?: StringNullableFilter<"MobileTower"> | string | null
    createdAt?: DateTimeFilter<"MobileTower"> | Date | string
    updatedAt?: DateTimeFilter<"MobileTower"> | Date | string
  }, "id">

  export type MobileTowerOrderByWithAggregationInput = {
    id?: SortOrder
    central?: SortOrder
    cable_name?: SortOrder
    tower_code?: SortOrder
    company?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    address?: SortOrder
    location?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MobileTowerCountOrderByAggregateInput
    _max?: MobileTowerMaxOrderByAggregateInput
    _min?: MobileTowerMinOrderByAggregateInput
  }

  export type MobileTowerScalarWhereWithAggregatesInput = {
    AND?: MobileTowerScalarWhereWithAggregatesInput | MobileTowerScalarWhereWithAggregatesInput[]
    OR?: MobileTowerScalarWhereWithAggregatesInput[]
    NOT?: MobileTowerScalarWhereWithAggregatesInput | MobileTowerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MobileTower"> | string
    central?: StringWithAggregatesFilter<"MobileTower"> | string
    cable_name?: StringWithAggregatesFilter<"MobileTower"> | string
    tower_code?: StringWithAggregatesFilter<"MobileTower"> | string
    company?: StringWithAggregatesFilter<"MobileTower"> | string
    entitlement?: StringWithAggregatesFilter<"MobileTower"> | string
    distance?: StringWithAggregatesFilter<"MobileTower"> | string
    address?: StringWithAggregatesFilter<"MobileTower"> | string
    location?: StringWithAggregatesFilter<"MobileTower"> | string
    responsible?: StringWithAggregatesFilter<"MobileTower"> | string
    status?: EnumStatusWithAggregatesFilter<"MobileTower"> | $Enums.Status
    notes?: StringNullableWithAggregatesFilter<"MobileTower"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MobileTower"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MobileTower"> | Date | string
  }

  export type CopperLineWhereInput = {
    AND?: CopperLineWhereInput | CopperLineWhereInput[]
    OR?: CopperLineWhereInput[]
    NOT?: CopperLineWhereInput | CopperLineWhereInput[]
    id?: StringFilter<"CopperLine"> | string
    landline_number?: StringFilter<"CopperLine"> | string
    central?: StringFilter<"CopperLine"> | string
    village?: StringFilter<"CopperLine"> | string
    cabinet_number?: StringFilter<"CopperLine"> | string
    port_number?: StringFilter<"CopperLine"> | string
    terminal_number?: StringFilter<"CopperLine"> | string
    cabinet_location?: StringFilter<"CopperLine"> | string
    box_number?: StringFilter<"CopperLine"> | string
    box_entitlement?: StringFilter<"CopperLine"> | string
    box_location?: StringFilter<"CopperLine"> | string
    joint_location?: StringFilter<"CopperLine"> | string
    joint_entitlement?: StringFilter<"CopperLine"> | string
    joint_depth?: StringFilter<"CopperLine"> | string
    room_location?: StringFilter<"CopperLine"> | string
    insulation_level?: StringFilter<"CopperLine"> | string
    responsible?: StringFilter<"CopperLine"> | string
    status?: EnumStatusFilter<"CopperLine"> | $Enums.Status
    notes?: StringNullableFilter<"CopperLine"> | string | null
    createdAt?: DateTimeFilter<"CopperLine"> | Date | string
    updatedAt?: DateTimeFilter<"CopperLine"> | Date | string
  }

  export type CopperLineOrderByWithRelationInput = {
    id?: SortOrder
    landline_number?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet_number?: SortOrder
    port_number?: SortOrder
    terminal_number?: SortOrder
    cabinet_location?: SortOrder
    box_number?: SortOrder
    box_entitlement?: SortOrder
    box_location?: SortOrder
    joint_location?: SortOrder
    joint_entitlement?: SortOrder
    joint_depth?: SortOrder
    room_location?: SortOrder
    insulation_level?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CopperLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CopperLineWhereInput | CopperLineWhereInput[]
    OR?: CopperLineWhereInput[]
    NOT?: CopperLineWhereInput | CopperLineWhereInput[]
    landline_number?: StringFilter<"CopperLine"> | string
    central?: StringFilter<"CopperLine"> | string
    village?: StringFilter<"CopperLine"> | string
    cabinet_number?: StringFilter<"CopperLine"> | string
    port_number?: StringFilter<"CopperLine"> | string
    terminal_number?: StringFilter<"CopperLine"> | string
    cabinet_location?: StringFilter<"CopperLine"> | string
    box_number?: StringFilter<"CopperLine"> | string
    box_entitlement?: StringFilter<"CopperLine"> | string
    box_location?: StringFilter<"CopperLine"> | string
    joint_location?: StringFilter<"CopperLine"> | string
    joint_entitlement?: StringFilter<"CopperLine"> | string
    joint_depth?: StringFilter<"CopperLine"> | string
    room_location?: StringFilter<"CopperLine"> | string
    insulation_level?: StringFilter<"CopperLine"> | string
    responsible?: StringFilter<"CopperLine"> | string
    status?: EnumStatusFilter<"CopperLine"> | $Enums.Status
    notes?: StringNullableFilter<"CopperLine"> | string | null
    createdAt?: DateTimeFilter<"CopperLine"> | Date | string
    updatedAt?: DateTimeFilter<"CopperLine"> | Date | string
  }, "id">

  export type CopperLineOrderByWithAggregationInput = {
    id?: SortOrder
    landline_number?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet_number?: SortOrder
    port_number?: SortOrder
    terminal_number?: SortOrder
    cabinet_location?: SortOrder
    box_number?: SortOrder
    box_entitlement?: SortOrder
    box_location?: SortOrder
    joint_location?: SortOrder
    joint_entitlement?: SortOrder
    joint_depth?: SortOrder
    room_location?: SortOrder
    insulation_level?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CopperLineCountOrderByAggregateInput
    _max?: CopperLineMaxOrderByAggregateInput
    _min?: CopperLineMinOrderByAggregateInput
  }

  export type CopperLineScalarWhereWithAggregatesInput = {
    AND?: CopperLineScalarWhereWithAggregatesInput | CopperLineScalarWhereWithAggregatesInput[]
    OR?: CopperLineScalarWhereWithAggregatesInput[]
    NOT?: CopperLineScalarWhereWithAggregatesInput | CopperLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CopperLine"> | string
    landline_number?: StringWithAggregatesFilter<"CopperLine"> | string
    central?: StringWithAggregatesFilter<"CopperLine"> | string
    village?: StringWithAggregatesFilter<"CopperLine"> | string
    cabinet_number?: StringWithAggregatesFilter<"CopperLine"> | string
    port_number?: StringWithAggregatesFilter<"CopperLine"> | string
    terminal_number?: StringWithAggregatesFilter<"CopperLine"> | string
    cabinet_location?: StringWithAggregatesFilter<"CopperLine"> | string
    box_number?: StringWithAggregatesFilter<"CopperLine"> | string
    box_entitlement?: StringWithAggregatesFilter<"CopperLine"> | string
    box_location?: StringWithAggregatesFilter<"CopperLine"> | string
    joint_location?: StringWithAggregatesFilter<"CopperLine"> | string
    joint_entitlement?: StringWithAggregatesFilter<"CopperLine"> | string
    joint_depth?: StringWithAggregatesFilter<"CopperLine"> | string
    room_location?: StringWithAggregatesFilter<"CopperLine"> | string
    insulation_level?: StringWithAggregatesFilter<"CopperLine"> | string
    responsible?: StringWithAggregatesFilter<"CopperLine"> | string
    status?: EnumStatusWithAggregatesFilter<"CopperLine"> | $Enums.Status
    notes?: StringNullableWithAggregatesFilter<"CopperLine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CopperLine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CopperLine"> | Date | string
  }

  export type MsanCabinetWhereInput = {
    AND?: MsanCabinetWhereInput | MsanCabinetWhereInput[]
    OR?: MsanCabinetWhereInput[]
    NOT?: MsanCabinetWhereInput | MsanCabinetWhereInput[]
    id?: StringFilter<"MsanCabinet"> | string
    central?: StringFilter<"MsanCabinet"> | string
    msan_number?: StringFilter<"MsanCabinet"> | string
    cabinet_name?: StringFilter<"MsanCabinet"> | string
    cable_number?: StringFilter<"MsanCabinet"> | string
    cable_capacity?: StringFilter<"MsanCabinet"> | string
    distance_from_central?: StringFilter<"MsanCabinet"> | string
    odf_name?: StringFilter<"MsanCabinet"> | string
    cassette_number?: StringFilter<"MsanCabinet"> | string
    branches?: StringFilter<"MsanCabinet"> | string
    spares?: StringFilter<"MsanCabinet"> | string
    cabinet_location?: StringFilter<"MsanCabinet"> | string
    notes?: StringNullableFilter<"MsanCabinet"> | string | null
    responsible?: StringFilter<"MsanCabinet"> | string
    status?: EnumStatusFilter<"MsanCabinet"> | $Enums.Status
    createdAt?: DateTimeFilter<"MsanCabinet"> | Date | string
    updatedAt?: DateTimeFilter<"MsanCabinet"> | Date | string
  }

  export type MsanCabinetOrderByWithRelationInput = {
    id?: SortOrder
    central?: SortOrder
    msan_number?: SortOrder
    cabinet_name?: SortOrder
    cable_number?: SortOrder
    cable_capacity?: SortOrder
    distance_from_central?: SortOrder
    odf_name?: SortOrder
    cassette_number?: SortOrder
    branches?: SortOrder
    spares?: SortOrder
    cabinet_location?: SortOrder
    notes?: SortOrderInput | SortOrder
    responsible?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MsanCabinetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MsanCabinetWhereInput | MsanCabinetWhereInput[]
    OR?: MsanCabinetWhereInput[]
    NOT?: MsanCabinetWhereInput | MsanCabinetWhereInput[]
    central?: StringFilter<"MsanCabinet"> | string
    msan_number?: StringFilter<"MsanCabinet"> | string
    cabinet_name?: StringFilter<"MsanCabinet"> | string
    cable_number?: StringFilter<"MsanCabinet"> | string
    cable_capacity?: StringFilter<"MsanCabinet"> | string
    distance_from_central?: StringFilter<"MsanCabinet"> | string
    odf_name?: StringFilter<"MsanCabinet"> | string
    cassette_number?: StringFilter<"MsanCabinet"> | string
    branches?: StringFilter<"MsanCabinet"> | string
    spares?: StringFilter<"MsanCabinet"> | string
    cabinet_location?: StringFilter<"MsanCabinet"> | string
    notes?: StringNullableFilter<"MsanCabinet"> | string | null
    responsible?: StringFilter<"MsanCabinet"> | string
    status?: EnumStatusFilter<"MsanCabinet"> | $Enums.Status
    createdAt?: DateTimeFilter<"MsanCabinet"> | Date | string
    updatedAt?: DateTimeFilter<"MsanCabinet"> | Date | string
  }, "id">

  export type MsanCabinetOrderByWithAggregationInput = {
    id?: SortOrder
    central?: SortOrder
    msan_number?: SortOrder
    cabinet_name?: SortOrder
    cable_number?: SortOrder
    cable_capacity?: SortOrder
    distance_from_central?: SortOrder
    odf_name?: SortOrder
    cassette_number?: SortOrder
    branches?: SortOrder
    spares?: SortOrder
    cabinet_location?: SortOrder
    notes?: SortOrderInput | SortOrder
    responsible?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MsanCabinetCountOrderByAggregateInput
    _max?: MsanCabinetMaxOrderByAggregateInput
    _min?: MsanCabinetMinOrderByAggregateInput
  }

  export type MsanCabinetScalarWhereWithAggregatesInput = {
    AND?: MsanCabinetScalarWhereWithAggregatesInput | MsanCabinetScalarWhereWithAggregatesInput[]
    OR?: MsanCabinetScalarWhereWithAggregatesInput[]
    NOT?: MsanCabinetScalarWhereWithAggregatesInput | MsanCabinetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MsanCabinet"> | string
    central?: StringWithAggregatesFilter<"MsanCabinet"> | string
    msan_number?: StringWithAggregatesFilter<"MsanCabinet"> | string
    cabinet_name?: StringWithAggregatesFilter<"MsanCabinet"> | string
    cable_number?: StringWithAggregatesFilter<"MsanCabinet"> | string
    cable_capacity?: StringWithAggregatesFilter<"MsanCabinet"> | string
    distance_from_central?: StringWithAggregatesFilter<"MsanCabinet"> | string
    odf_name?: StringWithAggregatesFilter<"MsanCabinet"> | string
    cassette_number?: StringWithAggregatesFilter<"MsanCabinet"> | string
    branches?: StringWithAggregatesFilter<"MsanCabinet"> | string
    spares?: StringWithAggregatesFilter<"MsanCabinet"> | string
    cabinet_location?: StringWithAggregatesFilter<"MsanCabinet"> | string
    notes?: StringNullableWithAggregatesFilter<"MsanCabinet"> | string | null
    responsible?: StringWithAggregatesFilter<"MsanCabinet"> | string
    status?: EnumStatusWithAggregatesFilter<"MsanCabinet"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"MsanCabinet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MsanCabinet"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userName: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userName: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userName: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorCabinetCreateInput = {
    id?: string
    central: string
    village: string
    cabinet: string
    central_to_cabinet_distance: string
    number_of_joints: number
    joint_location: string
    rooms: string
    room_location: string
    entitlement: string
    distance: string
    status: $Enums.Status
    responsible: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MajorCabinetUncheckedCreateInput = {
    id?: string
    central: string
    village: string
    cabinet: string
    central_to_cabinet_distance: string
    number_of_joints: number
    joint_location: string
    rooms: string
    room_location: string
    entitlement: string
    distance: string
    status: $Enums.Status
    responsible: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MajorCabinetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    central_to_cabinet_distance?: StringFieldUpdateOperationsInput | string
    number_of_joints?: IntFieldUpdateOperationsInput | number
    joint_location?: StringFieldUpdateOperationsInput | string
    rooms?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    responsible?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorCabinetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    central_to_cabinet_distance?: StringFieldUpdateOperationsInput | string
    number_of_joints?: IntFieldUpdateOperationsInput | number
    joint_location?: StringFieldUpdateOperationsInput | string
    rooms?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    responsible?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorCabinetCreateManyInput = {
    id?: string
    central: string
    village: string
    cabinet: string
    central_to_cabinet_distance: string
    number_of_joints: number
    joint_location: string
    rooms: string
    room_location: string
    entitlement: string
    distance: string
    status: $Enums.Status
    responsible: string
    notes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MajorCabinetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    central_to_cabinet_distance?: StringFieldUpdateOperationsInput | string
    number_of_joints?: IntFieldUpdateOperationsInput | number
    joint_location?: StringFieldUpdateOperationsInput | string
    rooms?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    responsible?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MajorCabinetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    central_to_cabinet_distance?: StringFieldUpdateOperationsInput | string
    number_of_joints?: IntFieldUpdateOperationsInput | number
    joint_location?: StringFieldUpdateOperationsInput | string
    rooms?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    responsible?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecondaryCabinetCreateInput = {
    id?: string
    central: string
    village: string
    port_gbon: string
    cabinet: string
    splitter_number: string
    splitter_port: string
    distance: string
    box_number: string
    cabinet_location: string
    box_location: string
    cabinet_to_box_distance: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecondaryCabinetUncheckedCreateInput = {
    id?: string
    central: string
    village: string
    port_gbon: string
    cabinet: string
    splitter_number: string
    splitter_port: string
    distance: string
    box_number: string
    cabinet_location: string
    box_location: string
    cabinet_to_box_distance: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecondaryCabinetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    port_gbon?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    splitter_number?: StringFieldUpdateOperationsInput | string
    splitter_port?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    cabinet_to_box_distance?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecondaryCabinetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    port_gbon?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    splitter_number?: StringFieldUpdateOperationsInput | string
    splitter_port?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    cabinet_to_box_distance?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecondaryCabinetCreateManyInput = {
    id?: string
    central: string
    village: string
    port_gbon: string
    cabinet: string
    splitter_number: string
    splitter_port: string
    distance: string
    box_number: string
    cabinet_location: string
    box_location: string
    cabinet_to_box_distance: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecondaryCabinetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    port_gbon?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    splitter_number?: StringFieldUpdateOperationsInput | string
    splitter_port?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    cabinet_to_box_distance?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecondaryCabinetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    port_gbon?: StringFieldUpdateOperationsInput | string
    cabinet?: StringFieldUpdateOperationsInput | string
    splitter_number?: StringFieldUpdateOperationsInput | string
    splitter_port?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    cabinet_to_box_distance?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileTowerCreateInput = {
    id?: string
    central: string
    cable_name: string
    tower_code: string
    company: string
    entitlement: string
    distance: string
    address: string
    location: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MobileTowerUncheckedCreateInput = {
    id?: string
    central: string
    cable_name: string
    tower_code: string
    company: string
    entitlement: string
    distance: string
    address: string
    location: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MobileTowerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    cable_name?: StringFieldUpdateOperationsInput | string
    tower_code?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileTowerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    cable_name?: StringFieldUpdateOperationsInput | string
    tower_code?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileTowerCreateManyInput = {
    id?: string
    central: string
    cable_name: string
    tower_code: string
    company: string
    entitlement: string
    distance: string
    address: string
    location: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MobileTowerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    cable_name?: StringFieldUpdateOperationsInput | string
    tower_code?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileTowerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    cable_name?: StringFieldUpdateOperationsInput | string
    tower_code?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    entitlement?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopperLineCreateInput = {
    id?: string
    landline_number: string
    central: string
    village: string
    cabinet_number: string
    port_number: string
    terminal_number: string
    cabinet_location: string
    box_number: string
    box_entitlement: string
    box_location: string
    joint_location: string
    joint_entitlement: string
    joint_depth: string
    room_location: string
    insulation_level: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CopperLineUncheckedCreateInput = {
    id?: string
    landline_number: string
    central: string
    village: string
    cabinet_number: string
    port_number: string
    terminal_number: string
    cabinet_location: string
    box_number: string
    box_entitlement: string
    box_location: string
    joint_location: string
    joint_entitlement: string
    joint_depth: string
    room_location: string
    insulation_level: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CopperLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    landline_number?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet_number?: StringFieldUpdateOperationsInput | string
    port_number?: StringFieldUpdateOperationsInput | string
    terminal_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    box_entitlement?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    joint_location?: StringFieldUpdateOperationsInput | string
    joint_entitlement?: StringFieldUpdateOperationsInput | string
    joint_depth?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    insulation_level?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopperLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    landline_number?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet_number?: StringFieldUpdateOperationsInput | string
    port_number?: StringFieldUpdateOperationsInput | string
    terminal_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    box_entitlement?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    joint_location?: StringFieldUpdateOperationsInput | string
    joint_entitlement?: StringFieldUpdateOperationsInput | string
    joint_depth?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    insulation_level?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopperLineCreateManyInput = {
    id?: string
    landline_number: string
    central: string
    village: string
    cabinet_number: string
    port_number: string
    terminal_number: string
    cabinet_location: string
    box_number: string
    box_entitlement: string
    box_location: string
    joint_location: string
    joint_entitlement: string
    joint_depth: string
    room_location: string
    insulation_level: string
    responsible: string
    status: $Enums.Status
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CopperLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    landline_number?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet_number?: StringFieldUpdateOperationsInput | string
    port_number?: StringFieldUpdateOperationsInput | string
    terminal_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    box_entitlement?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    joint_location?: StringFieldUpdateOperationsInput | string
    joint_entitlement?: StringFieldUpdateOperationsInput | string
    joint_depth?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    insulation_level?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CopperLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    landline_number?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    cabinet_number?: StringFieldUpdateOperationsInput | string
    port_number?: StringFieldUpdateOperationsInput | string
    terminal_number?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    box_number?: StringFieldUpdateOperationsInput | string
    box_entitlement?: StringFieldUpdateOperationsInput | string
    box_location?: StringFieldUpdateOperationsInput | string
    joint_location?: StringFieldUpdateOperationsInput | string
    joint_entitlement?: StringFieldUpdateOperationsInput | string
    joint_depth?: StringFieldUpdateOperationsInput | string
    room_location?: StringFieldUpdateOperationsInput | string
    insulation_level?: StringFieldUpdateOperationsInput | string
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsanCabinetCreateInput = {
    id?: string
    central: string
    msan_number: string
    cabinet_name: string
    cable_number: string
    cable_capacity: string
    distance_from_central: string
    odf_name: string
    cassette_number: string
    branches: string
    spares: string
    cabinet_location: string
    notes?: string | null
    responsible: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsanCabinetUncheckedCreateInput = {
    id?: string
    central: string
    msan_number: string
    cabinet_name: string
    cable_number: string
    cable_capacity: string
    distance_from_central: string
    odf_name: string
    cassette_number: string
    branches: string
    spares: string
    cabinet_location: string
    notes?: string | null
    responsible: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsanCabinetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    msan_number?: StringFieldUpdateOperationsInput | string
    cabinet_name?: StringFieldUpdateOperationsInput | string
    cable_number?: StringFieldUpdateOperationsInput | string
    cable_capacity?: StringFieldUpdateOperationsInput | string
    distance_from_central?: StringFieldUpdateOperationsInput | string
    odf_name?: StringFieldUpdateOperationsInput | string
    cassette_number?: StringFieldUpdateOperationsInput | string
    branches?: StringFieldUpdateOperationsInput | string
    spares?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsanCabinetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    msan_number?: StringFieldUpdateOperationsInput | string
    cabinet_name?: StringFieldUpdateOperationsInput | string
    cable_number?: StringFieldUpdateOperationsInput | string
    cable_capacity?: StringFieldUpdateOperationsInput | string
    distance_from_central?: StringFieldUpdateOperationsInput | string
    odf_name?: StringFieldUpdateOperationsInput | string
    cassette_number?: StringFieldUpdateOperationsInput | string
    branches?: StringFieldUpdateOperationsInput | string
    spares?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsanCabinetCreateManyInput = {
    id?: string
    central: string
    msan_number: string
    cabinet_name: string
    cable_number: string
    cable_capacity: string
    distance_from_central: string
    odf_name: string
    cassette_number: string
    branches: string
    spares: string
    cabinet_location: string
    notes?: string | null
    responsible: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MsanCabinetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    msan_number?: StringFieldUpdateOperationsInput | string
    cabinet_name?: StringFieldUpdateOperationsInput | string
    cable_number?: StringFieldUpdateOperationsInput | string
    cable_capacity?: StringFieldUpdateOperationsInput | string
    distance_from_central?: StringFieldUpdateOperationsInput | string
    odf_name?: StringFieldUpdateOperationsInput | string
    cassette_number?: StringFieldUpdateOperationsInput | string
    branches?: StringFieldUpdateOperationsInput | string
    spares?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MsanCabinetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    central?: StringFieldUpdateOperationsInput | string
    msan_number?: StringFieldUpdateOperationsInput | string
    cabinet_name?: StringFieldUpdateOperationsInput | string
    cable_number?: StringFieldUpdateOperationsInput | string
    cable_capacity?: StringFieldUpdateOperationsInput | string
    distance_from_central?: StringFieldUpdateOperationsInput | string
    odf_name?: StringFieldUpdateOperationsInput | string
    cassette_number?: StringFieldUpdateOperationsInput | string
    branches?: StringFieldUpdateOperationsInput | string
    spares?: StringFieldUpdateOperationsInput | string
    cabinet_location?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    responsible?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type MajorCabinetCountOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet?: SortOrder
    central_to_cabinet_distance?: SortOrder
    number_of_joints?: SortOrder
    joint_location?: SortOrder
    rooms?: SortOrder
    room_location?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MajorCabinetAvgOrderByAggregateInput = {
    number_of_joints?: SortOrder
  }

  export type MajorCabinetMaxOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet?: SortOrder
    central_to_cabinet_distance?: SortOrder
    number_of_joints?: SortOrder
    joint_location?: SortOrder
    rooms?: SortOrder
    room_location?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MajorCabinetMinOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet?: SortOrder
    central_to_cabinet_distance?: SortOrder
    number_of_joints?: SortOrder
    joint_location?: SortOrder
    rooms?: SortOrder
    room_location?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    responsible?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MajorCabinetSumOrderByAggregateInput = {
    number_of_joints?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type SecondaryCabinetCountOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    port_gbon?: SortOrder
    cabinet?: SortOrder
    splitter_number?: SortOrder
    splitter_port?: SortOrder
    distance?: SortOrder
    box_number?: SortOrder
    cabinet_location?: SortOrder
    box_location?: SortOrder
    cabinet_to_box_distance?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecondaryCabinetMaxOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    port_gbon?: SortOrder
    cabinet?: SortOrder
    splitter_number?: SortOrder
    splitter_port?: SortOrder
    distance?: SortOrder
    box_number?: SortOrder
    cabinet_location?: SortOrder
    box_location?: SortOrder
    cabinet_to_box_distance?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecondaryCabinetMinOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    village?: SortOrder
    port_gbon?: SortOrder
    cabinet?: SortOrder
    splitter_number?: SortOrder
    splitter_port?: SortOrder
    distance?: SortOrder
    box_number?: SortOrder
    cabinet_location?: SortOrder
    box_location?: SortOrder
    cabinet_to_box_distance?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MobileTowerCountOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    cable_name?: SortOrder
    tower_code?: SortOrder
    company?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    address?: SortOrder
    location?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MobileTowerMaxOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    cable_name?: SortOrder
    tower_code?: SortOrder
    company?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    address?: SortOrder
    location?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MobileTowerMinOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    cable_name?: SortOrder
    tower_code?: SortOrder
    company?: SortOrder
    entitlement?: SortOrder
    distance?: SortOrder
    address?: SortOrder
    location?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CopperLineCountOrderByAggregateInput = {
    id?: SortOrder
    landline_number?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet_number?: SortOrder
    port_number?: SortOrder
    terminal_number?: SortOrder
    cabinet_location?: SortOrder
    box_number?: SortOrder
    box_entitlement?: SortOrder
    box_location?: SortOrder
    joint_location?: SortOrder
    joint_entitlement?: SortOrder
    joint_depth?: SortOrder
    room_location?: SortOrder
    insulation_level?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CopperLineMaxOrderByAggregateInput = {
    id?: SortOrder
    landline_number?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet_number?: SortOrder
    port_number?: SortOrder
    terminal_number?: SortOrder
    cabinet_location?: SortOrder
    box_number?: SortOrder
    box_entitlement?: SortOrder
    box_location?: SortOrder
    joint_location?: SortOrder
    joint_entitlement?: SortOrder
    joint_depth?: SortOrder
    room_location?: SortOrder
    insulation_level?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CopperLineMinOrderByAggregateInput = {
    id?: SortOrder
    landline_number?: SortOrder
    central?: SortOrder
    village?: SortOrder
    cabinet_number?: SortOrder
    port_number?: SortOrder
    terminal_number?: SortOrder
    cabinet_location?: SortOrder
    box_number?: SortOrder
    box_entitlement?: SortOrder
    box_location?: SortOrder
    joint_location?: SortOrder
    joint_entitlement?: SortOrder
    joint_depth?: SortOrder
    room_location?: SortOrder
    insulation_level?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MsanCabinetCountOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    msan_number?: SortOrder
    cabinet_name?: SortOrder
    cable_number?: SortOrder
    cable_capacity?: SortOrder
    distance_from_central?: SortOrder
    odf_name?: SortOrder
    cassette_number?: SortOrder
    branches?: SortOrder
    spares?: SortOrder
    cabinet_location?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MsanCabinetMaxOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    msan_number?: SortOrder
    cabinet_name?: SortOrder
    cable_number?: SortOrder
    cable_capacity?: SortOrder
    distance_from_central?: SortOrder
    odf_name?: SortOrder
    cassette_number?: SortOrder
    branches?: SortOrder
    spares?: SortOrder
    cabinet_location?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MsanCabinetMinOrderByAggregateInput = {
    id?: SortOrder
    central?: SortOrder
    msan_number?: SortOrder
    cabinet_name?: SortOrder
    cable_number?: SortOrder
    cable_capacity?: SortOrder
    distance_from_central?: SortOrder
    odf_name?: SortOrder
    cassette_number?: SortOrder
    branches?: SortOrder
    spares?: SortOrder
    cabinet_location?: SortOrder
    notes?: SortOrder
    responsible?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    userName: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    userName: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    userName: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    userName: string
    password: string
    name?: string | null
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}