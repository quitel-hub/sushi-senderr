
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model MessageSubscription
 * 
 */
export type MessageSubscription = $Result.DefaultSelection<Prisma.$MessageSubscriptionPayload>
/**
 * Model BroadcastMessage
 * 
 */
export type BroadcastMessage = $Result.DefaultSelection<Prisma.$BroadcastMessagePayload>
/**
 * Model MessageDelivery
 * 
 */
export type MessageDelivery = $Result.DefaultSelection<Prisma.$MessageDeliveryPayload>
/**
 * Model OwnerLoginSession
 * 
 */
export type OwnerLoginSession = $Result.DefaultSelection<Prisma.$OwnerLoginSessionPayload>
/**
 * Model FormDraft
 * 
 */
export type FormDraft = $Result.DefaultSelection<Prisma.$FormDraftPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeliveryStatus: {
  PENDING: 'PENDING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]

}

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageSubscription`: Exposes CRUD operations for the **MessageSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageSubscriptions
    * const messageSubscriptions = await prisma.messageSubscription.findMany()
    * ```
    */
  get messageSubscription(): Prisma.MessageSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broadcastMessage`: Exposes CRUD operations for the **BroadcastMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BroadcastMessages
    * const broadcastMessages = await prisma.broadcastMessage.findMany()
    * ```
    */
  get broadcastMessage(): Prisma.BroadcastMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageDelivery`: Exposes CRUD operations for the **MessageDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageDeliveries
    * const messageDeliveries = await prisma.messageDelivery.findMany()
    * ```
    */
  get messageDelivery(): Prisma.MessageDeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ownerLoginSession`: Exposes CRUD operations for the **OwnerLoginSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OwnerLoginSessions
    * const ownerLoginSessions = await prisma.ownerLoginSession.findMany()
    * ```
    */
  get ownerLoginSession(): Prisma.OwnerLoginSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formDraft`: Exposes CRUD operations for the **FormDraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormDrafts
    * const formDrafts = await prisma.formDraft.findMany()
    * ```
    */
  get formDraft(): Prisma.FormDraftDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Customer: 'Customer',
    Owner: 'Owner',
    MessageSubscription: 'MessageSubscription',
    BroadcastMessage: 'BroadcastMessage',
    MessageDelivery: 'MessageDelivery',
    OwnerLoginSession: 'OwnerLoginSession',
    FormDraft: 'FormDraft'
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
      modelProps: "customer" | "owner" | "messageSubscription" | "broadcastMessage" | "messageDelivery" | "ownerLoginSession" | "formDraft"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      MessageSubscription: {
        payload: Prisma.$MessageSubscriptionPayload<ExtArgs>
        fields: Prisma.MessageSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.MessageSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          findMany: {
            args: Prisma.MessageSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>[]
          }
          create: {
            args: Prisma.MessageSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          createMany: {
            args: Prisma.MessageSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.MessageSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          update: {
            args: Prisma.MessageSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.MessageSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.MessageSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.MessageSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageSubscription>
          }
          groupBy: {
            args: Prisma.MessageSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<MessageSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      BroadcastMessage: {
        payload: Prisma.$BroadcastMessagePayload<ExtArgs>
        fields: Prisma.BroadcastMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BroadcastMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BroadcastMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          findFirst: {
            args: Prisma.BroadcastMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BroadcastMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          findMany: {
            args: Prisma.BroadcastMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          create: {
            args: Prisma.BroadcastMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          createMany: {
            args: Prisma.BroadcastMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BroadcastMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          delete: {
            args: Prisma.BroadcastMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          update: {
            args: Prisma.BroadcastMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          deleteMany: {
            args: Prisma.BroadcastMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BroadcastMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BroadcastMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>[]
          }
          upsert: {
            args: Prisma.BroadcastMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BroadcastMessagePayload>
          }
          aggregate: {
            args: Prisma.BroadcastMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroadcastMessage>
          }
          groupBy: {
            args: Prisma.BroadcastMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BroadcastMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BroadcastMessageCountArgs<ExtArgs>
            result: $Utils.Optional<BroadcastMessageCountAggregateOutputType> | number
          }
        }
      }
      MessageDelivery: {
        payload: Prisma.$MessageDeliveryPayload<ExtArgs>
        fields: Prisma.MessageDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          findFirst: {
            args: Prisma.MessageDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          findMany: {
            args: Prisma.MessageDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>[]
          }
          create: {
            args: Prisma.MessageDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          createMany: {
            args: Prisma.MessageDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>[]
          }
          delete: {
            args: Prisma.MessageDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          update: {
            args: Prisma.MessageDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.MessageDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.MessageDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageDeliveryPayload>
          }
          aggregate: {
            args: Prisma.MessageDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageDelivery>
          }
          groupBy: {
            args: Prisma.MessageDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<MessageDeliveryCountAggregateOutputType> | number
          }
        }
      }
      OwnerLoginSession: {
        payload: Prisma.$OwnerLoginSessionPayload<ExtArgs>
        fields: Prisma.OwnerLoginSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerLoginSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerLoginSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          findFirst: {
            args: Prisma.OwnerLoginSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerLoginSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          findMany: {
            args: Prisma.OwnerLoginSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>[]
          }
          create: {
            args: Prisma.OwnerLoginSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          createMany: {
            args: Prisma.OwnerLoginSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerLoginSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>[]
          }
          delete: {
            args: Prisma.OwnerLoginSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          update: {
            args: Prisma.OwnerLoginSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          deleteMany: {
            args: Prisma.OwnerLoginSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerLoginSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerLoginSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>[]
          }
          upsert: {
            args: Prisma.OwnerLoginSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerLoginSessionPayload>
          }
          aggregate: {
            args: Prisma.OwnerLoginSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwnerLoginSession>
          }
          groupBy: {
            args: Prisma.OwnerLoginSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerLoginSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerLoginSessionCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerLoginSessionCountAggregateOutputType> | number
          }
        }
      }
      FormDraft: {
        payload: Prisma.$FormDraftPayload<ExtArgs>
        fields: Prisma.FormDraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormDraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormDraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          findFirst: {
            args: Prisma.FormDraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormDraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          findMany: {
            args: Prisma.FormDraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>[]
          }
          create: {
            args: Prisma.FormDraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          createMany: {
            args: Prisma.FormDraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormDraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>[]
          }
          delete: {
            args: Prisma.FormDraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          update: {
            args: Prisma.FormDraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          deleteMany: {
            args: Prisma.FormDraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormDraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormDraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>[]
          }
          upsert: {
            args: Prisma.FormDraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormDraftPayload>
          }
          aggregate: {
            args: Prisma.FormDraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormDraft>
          }
          groupBy: {
            args: Prisma.FormDraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormDraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormDraftCountArgs<ExtArgs>
            result: $Utils.Optional<FormDraftCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    customer?: CustomerOmit
    owner?: OwnerOmit
    messageSubscription?: MessageSubscriptionOmit
    broadcastMessage?: BroadcastMessageOmit
    messageDelivery?: MessageDeliveryOmit
    ownerLoginSession?: OwnerLoginSessionOmit
    formDraft?: FormDraftOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    subscriptions: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | CustomerCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageSubscriptionWhereInput
  }


  /**
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    loginSessions: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loginSessions?: boolean | OwnerCountOutputTypeCountLoginSessionsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountLoginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerLoginSessionWhereInput
  }


  /**
   * Count Type MessageSubscriptionCountOutputType
   */

  export type MessageSubscriptionCountOutputType = {
    deliveries: number
  }

  export type MessageSubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | MessageSubscriptionCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * MessageSubscriptionCountOutputType without action
   */
  export type MessageSubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscriptionCountOutputType
     */
    select?: MessageSubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageSubscriptionCountOutputType without action
   */
  export type MessageSubscriptionCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageDeliveryWhereInput
  }


  /**
   * Count Type BroadcastMessageCountOutputType
   */

  export type BroadcastMessageCountOutputType = {
    deliveries: number
  }

  export type BroadcastMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | BroadcastMessageCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * BroadcastMessageCountOutputType without action
   */
  export type BroadcastMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessageCountOutputType
     */
    select?: BroadcastMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BroadcastMessageCountOutputType without action
   */
  export type BroadcastMessageCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageDeliveryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    birthDate: Date | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    preferredFood: string | null
    feedback: string | null
    country: string | null
    discountCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerificationCode: string | null
    isEmailVerified: boolean | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    birthDate: Date | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    preferredFood: string | null
    feedback: string | null
    country: string | null
    discountCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerificationCode: string | null
    isEmailVerified: boolean | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phoneNumber: number
    email: number
    birthDate: number
    city: number
    street: number
    postalCode: number
    houseNumber: number
    preferredFood: number
    feedback: number
    country: number
    discountCode: number
    createdAt: number
    updatedAt: number
    emailVerificationCode: number
    isEmailVerified: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    birthDate?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    preferredFood?: true
    feedback?: true
    country?: true
    discountCode?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    birthDate?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    preferredFood?: true
    feedback?: true
    country?: true
    discountCode?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    birthDate?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    preferredFood?: true
    feedback?: true
    country?: true
    discountCode?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate: Date | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    preferredFood: string | null
    feedback: string | null
    country: string | null
    discountCode: string
    createdAt: Date
    updatedAt: Date
    emailVerificationCode: string | null
    isEmailVerified: boolean
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    country?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    country?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    country?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    birthDate?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    preferredFood?: boolean
    feedback?: boolean
    country?: boolean
    discountCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phoneNumber" | "email" | "birthDate" | "city" | "street" | "postalCode" | "houseNumber" | "preferredFood" | "feedback" | "country" | "discountCode" | "createdAt" | "updatedAt" | "emailVerificationCode" | "isEmailVerified", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Customer$subscriptionsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      subscriptions: Prisma.$MessageSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      phoneNumber: string
      email: string
      birthDate: Date | null
      city: string | null
      street: string | null
      postalCode: string | null
      houseNumber: string | null
      preferredFood: string | null
      feedback: string | null
      country: string | null
      discountCode: string
      createdAt: Date
      updatedAt: Date
      emailVerificationCode: string | null
      isEmailVerified: boolean
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Customer$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly phoneNumber: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly birthDate: FieldRef<"Customer", 'DateTime'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly street: FieldRef<"Customer", 'String'>
    readonly postalCode: FieldRef<"Customer", 'String'>
    readonly houseNumber: FieldRef<"Customer", 'String'>
    readonly preferredFood: FieldRef<"Customer", 'String'>
    readonly feedback: FieldRef<"Customer", 'String'>
    readonly country: FieldRef<"Customer", 'String'>
    readonly discountCode: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly emailVerificationCode: FieldRef<"Customer", 'String'>
    readonly isEmailVerified: FieldRef<"Customer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.subscriptions
   */
  export type Customer$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    where?: MessageSubscriptionWhereInput
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    cursor?: MessageSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageSubscriptionScalarFieldEnum | MessageSubscriptionScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    accessCode: string | null
    password: string | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerificationCode: string | null
    isEmailVerified: boolean | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    accessCode: string | null
    password: string | null
    isActive: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerificationCode: string | null
    isEmailVerified: boolean | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    email: number
    name: number
    accessCode: number
    password: number
    isActive: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    emailVerificationCode: number
    isEmailVerified: number
    _all: number
  }


  export type OwnerMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    accessCode?: true
    password?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    accessCode?: true
    password?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    accessCode?: true
    password?: true
    isActive?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    emailVerificationCode?: true
    isEmailVerified?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    emailVerificationCode: string | null
    isEmailVerified: boolean
    _count: OwnerCountAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
    loginSessions?: boolean | Owner$loginSessionsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    accessCode?: boolean
    password?: boolean
    isActive?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerificationCode?: boolean
    isEmailVerified?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "accessCode" | "password" | "isActive" | "lastLogin" | "createdAt" | "updatedAt" | "emailVerificationCode" | "isEmailVerified", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loginSessions?: boolean | Owner$loginSessionsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      loginSessions: Prisma.$OwnerLoginSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      accessCode: string
      password: string
      isActive: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
      emailVerificationCode: string | null
      isEmailVerified: boolean
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
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
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loginSessions<T extends Owner$loginSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$loginSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly name: FieldRef<"Owner", 'String'>
    readonly accessCode: FieldRef<"Owner", 'String'>
    readonly password: FieldRef<"Owner", 'String'>
    readonly isActive: FieldRef<"Owner", 'Boolean'>
    readonly lastLogin: FieldRef<"Owner", 'DateTime'>
    readonly createdAt: FieldRef<"Owner", 'DateTime'>
    readonly updatedAt: FieldRef<"Owner", 'DateTime'>
    readonly emailVerificationCode: FieldRef<"Owner", 'String'>
    readonly isEmailVerified: FieldRef<"Owner", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.loginSessions
   */
  export type Owner$loginSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    where?: OwnerLoginSessionWhereInput
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    cursor?: OwnerLoginSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model MessageSubscription
   */

  export type AggregateMessageSubscription = {
    _count: MessageSubscriptionCountAggregateOutputType | null
    _min: MessageSubscriptionMinAggregateOutputType | null
    _max: MessageSubscriptionMaxAggregateOutputType | null
  }

  export type MessageSubscriptionMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageSubscriptionMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    subscribed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageSubscriptionCountAggregateOutputType = {
    id: number
    customerId: number
    subscribed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageSubscriptionMinAggregateInputType = {
    id?: true
    customerId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageSubscriptionMaxAggregateInputType = {
    id?: true
    customerId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageSubscriptionCountAggregateInputType = {
    id?: true
    customerId?: true
    subscribed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageSubscription to aggregate.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageSubscriptions
    **/
    _count?: true | MessageSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageSubscriptionMaxAggregateInputType
  }

  export type GetMessageSubscriptionAggregateType<T extends MessageSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageSubscription[P]>
      : GetScalarType<T[P], AggregateMessageSubscription[P]>
  }




  export type MessageSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageSubscriptionWhereInput
    orderBy?: MessageSubscriptionOrderByWithAggregationInput | MessageSubscriptionOrderByWithAggregationInput[]
    by: MessageSubscriptionScalarFieldEnum[] | MessageSubscriptionScalarFieldEnum
    having?: MessageSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageSubscriptionCountAggregateInputType | true
    _min?: MessageSubscriptionMinAggregateInputType
    _max?: MessageSubscriptionMaxAggregateInputType
  }

  export type MessageSubscriptionGroupByOutputType = {
    id: string
    customerId: string
    subscribed: boolean
    createdAt: Date
    updatedAt: Date
    _count: MessageSubscriptionCountAggregateOutputType | null
    _min: MessageSubscriptionMinAggregateOutputType | null
    _max: MessageSubscriptionMaxAggregateOutputType | null
  }

  type GetMessageSubscriptionGroupByPayload<T extends MessageSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], MessageSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type MessageSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    deliveries?: boolean | MessageSubscription$deliveriesArgs<ExtArgs>
    _count?: boolean | MessageSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageSubscription"]>

  export type MessageSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageSubscription"]>

  export type MessageSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageSubscription"]>

  export type MessageSubscriptionSelectScalar = {
    id?: boolean
    customerId?: boolean
    subscribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "subscribed" | "createdAt" | "updatedAt", ExtArgs["result"]["messageSubscription"]>
  export type MessageSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    deliveries?: boolean | MessageSubscription$deliveriesArgs<ExtArgs>
    _count?: boolean | MessageSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type MessageSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $MessageSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageSubscription"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      deliveries: Prisma.$MessageDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      subscribed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messageSubscription"]>
    composites: {}
  }

  type MessageSubscriptionGetPayload<S extends boolean | null | undefined | MessageSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$MessageSubscriptionPayload, S>

  type MessageSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageSubscriptionCountAggregateInputType | true
    }

  export interface MessageSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageSubscription'], meta: { name: 'MessageSubscription' } }
    /**
     * Find zero or one MessageSubscription that matches the filter.
     * @param {MessageSubscriptionFindUniqueArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageSubscriptionFindUniqueArgs>(args: SelectSubset<T, MessageSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionFindFirstArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageSubscriptionFindFirstArgs>(args?: SelectSubset<T, MessageSubscriptionFindFirstArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionFindFirstOrThrowArgs} args - Arguments to find a MessageSubscription
     * @example
     * // Get one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageSubscriptions
     * const messageSubscriptions = await prisma.messageSubscription.findMany()
     * 
     * // Get first 10 MessageSubscriptions
     * const messageSubscriptions = await prisma.messageSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageSubscriptionWithIdOnly = await prisma.messageSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageSubscriptionFindManyArgs>(args?: SelectSubset<T, MessageSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageSubscription.
     * @param {MessageSubscriptionCreateArgs} args - Arguments to create a MessageSubscription.
     * @example
     * // Create one MessageSubscription
     * const MessageSubscription = await prisma.messageSubscription.create({
     *   data: {
     *     // ... data to create a MessageSubscription
     *   }
     * })
     * 
     */
    create<T extends MessageSubscriptionCreateArgs>(args: SelectSubset<T, MessageSubscriptionCreateArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageSubscriptions.
     * @param {MessageSubscriptionCreateManyArgs} args - Arguments to create many MessageSubscriptions.
     * @example
     * // Create many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageSubscriptionCreateManyArgs>(args?: SelectSubset<T, MessageSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageSubscriptions and returns the data saved in the database.
     * @param {MessageSubscriptionCreateManyAndReturnArgs} args - Arguments to create many MessageSubscriptions.
     * @example
     * // Create many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageSubscriptions and only return the `id`
     * const messageSubscriptionWithIdOnly = await prisma.messageSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageSubscription.
     * @param {MessageSubscriptionDeleteArgs} args - Arguments to delete one MessageSubscription.
     * @example
     * // Delete one MessageSubscription
     * const MessageSubscription = await prisma.messageSubscription.delete({
     *   where: {
     *     // ... filter to delete one MessageSubscription
     *   }
     * })
     * 
     */
    delete<T extends MessageSubscriptionDeleteArgs>(args: SelectSubset<T, MessageSubscriptionDeleteArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageSubscription.
     * @param {MessageSubscriptionUpdateArgs} args - Arguments to update one MessageSubscription.
     * @example
     * // Update one MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageSubscriptionUpdateArgs>(args: SelectSubset<T, MessageSubscriptionUpdateArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageSubscriptions.
     * @param {MessageSubscriptionDeleteManyArgs} args - Arguments to filter MessageSubscriptions to delete.
     * @example
     * // Delete a few MessageSubscriptions
     * const { count } = await prisma.messageSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageSubscriptionDeleteManyArgs>(args?: SelectSubset<T, MessageSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageSubscriptionUpdateManyArgs>(args: SelectSubset<T, MessageSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageSubscriptions and returns the data updated in the database.
     * @param {MessageSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many MessageSubscriptions.
     * @example
     * // Update many MessageSubscriptions
     * const messageSubscription = await prisma.messageSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageSubscriptions and only return the `id`
     * const messageSubscriptionWithIdOnly = await prisma.messageSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageSubscription.
     * @param {MessageSubscriptionUpsertArgs} args - Arguments to update or create a MessageSubscription.
     * @example
     * // Update or create a MessageSubscription
     * const messageSubscription = await prisma.messageSubscription.upsert({
     *   create: {
     *     // ... data to create a MessageSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageSubscription we want to update
     *   }
     * })
     */
    upsert<T extends MessageSubscriptionUpsertArgs>(args: SelectSubset<T, MessageSubscriptionUpsertArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionCountArgs} args - Arguments to filter MessageSubscriptions to count.
     * @example
     * // Count the number of MessageSubscriptions
     * const count = await prisma.messageSubscription.count({
     *   where: {
     *     // ... the filter for the MessageSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends MessageSubscriptionCountArgs>(
      args?: Subset<T, MessageSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageSubscriptionAggregateArgs>(args: Subset<T, MessageSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetMessageSubscriptionAggregateType<T>>

    /**
     * Group by MessageSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends MessageSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: MessageSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageSubscription model
   */
  readonly fields: MessageSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveries<T extends MessageSubscription$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, MessageSubscription$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MessageSubscription model
   */
  interface MessageSubscriptionFieldRefs {
    readonly id: FieldRef<"MessageSubscription", 'String'>
    readonly customerId: FieldRef<"MessageSubscription", 'String'>
    readonly subscribed: FieldRef<"MessageSubscription", 'Boolean'>
    readonly createdAt: FieldRef<"MessageSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageSubscription findUnique
   */
  export type MessageSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription findUniqueOrThrow
   */
  export type MessageSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription findFirst
   */
  export type MessageSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSubscriptions.
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSubscriptions.
     */
    distinct?: MessageSubscriptionScalarFieldEnum | MessageSubscriptionScalarFieldEnum[]
  }

  /**
   * MessageSubscription findFirstOrThrow
   */
  export type MessageSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscription to fetch.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageSubscriptions.
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageSubscriptions.
     */
    distinct?: MessageSubscriptionScalarFieldEnum | MessageSubscriptionScalarFieldEnum[]
  }

  /**
   * MessageSubscription findMany
   */
  export type MessageSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which MessageSubscriptions to fetch.
     */
    where?: MessageSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageSubscriptions to fetch.
     */
    orderBy?: MessageSubscriptionOrderByWithRelationInput | MessageSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageSubscriptions.
     */
    cursor?: MessageSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageSubscriptions.
     */
    skip?: number
    distinct?: MessageSubscriptionScalarFieldEnum | MessageSubscriptionScalarFieldEnum[]
  }

  /**
   * MessageSubscription create
   */
  export type MessageSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageSubscription.
     */
    data: XOR<MessageSubscriptionCreateInput, MessageSubscriptionUncheckedCreateInput>
  }

  /**
   * MessageSubscription createMany
   */
  export type MessageSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageSubscriptions.
     */
    data: MessageSubscriptionCreateManyInput | MessageSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageSubscription createManyAndReturn
   */
  export type MessageSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many MessageSubscriptions.
     */
    data: MessageSubscriptionCreateManyInput | MessageSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageSubscription update
   */
  export type MessageSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageSubscription.
     */
    data: XOR<MessageSubscriptionUpdateInput, MessageSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which MessageSubscription to update.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription updateMany
   */
  export type MessageSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageSubscriptions.
     */
    data: XOR<MessageSubscriptionUpdateManyMutationInput, MessageSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which MessageSubscriptions to update
     */
    where?: MessageSubscriptionWhereInput
    /**
     * Limit how many MessageSubscriptions to update.
     */
    limit?: number
  }

  /**
   * MessageSubscription updateManyAndReturn
   */
  export type MessageSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update MessageSubscriptions.
     */
    data: XOR<MessageSubscriptionUpdateManyMutationInput, MessageSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which MessageSubscriptions to update
     */
    where?: MessageSubscriptionWhereInput
    /**
     * Limit how many MessageSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageSubscription upsert
   */
  export type MessageSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageSubscription to update in case it exists.
     */
    where: MessageSubscriptionWhereUniqueInput
    /**
     * In case the MessageSubscription found by the `where` argument doesn't exist, create a new MessageSubscription with this data.
     */
    create: XOR<MessageSubscriptionCreateInput, MessageSubscriptionUncheckedCreateInput>
    /**
     * In case the MessageSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageSubscriptionUpdateInput, MessageSubscriptionUncheckedUpdateInput>
  }

  /**
   * MessageSubscription delete
   */
  export type MessageSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which MessageSubscription to delete.
     */
    where: MessageSubscriptionWhereUniqueInput
  }

  /**
   * MessageSubscription deleteMany
   */
  export type MessageSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageSubscriptions to delete
     */
    where?: MessageSubscriptionWhereInput
    /**
     * Limit how many MessageSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * MessageSubscription.deliveries
   */
  export type MessageSubscription$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    where?: MessageDeliveryWhereInput
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    cursor?: MessageDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageSubscription without action
   */
  export type MessageSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageSubscription
     */
    select?: MessageSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageSubscription
     */
    omit?: MessageSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model BroadcastMessage
   */

  export type AggregateBroadcastMessage = {
    _count: BroadcastMessageCountAggregateOutputType | null
    _min: BroadcastMessageMinAggregateOutputType | null
    _max: BroadcastMessageMaxAggregateOutputType | null
  }

  export type BroadcastMessageMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    createdAt: Date | null
    scheduledFor: Date | null
  }

  export type BroadcastMessageMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    createdAt: Date | null
    scheduledFor: Date | null
  }

  export type BroadcastMessageCountAggregateOutputType = {
    id: number
    title: number
    body: number
    createdAt: number
    scheduledFor: number
    _all: number
  }


  export type BroadcastMessageMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
    scheduledFor?: true
  }

  export type BroadcastMessageMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
    scheduledFor?: true
  }

  export type BroadcastMessageCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    createdAt?: true
    scheduledFor?: true
    _all?: true
  }

  export type BroadcastMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastMessage to aggregate.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BroadcastMessages
    **/
    _count?: true | BroadcastMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BroadcastMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BroadcastMessageMaxAggregateInputType
  }

  export type GetBroadcastMessageAggregateType<T extends BroadcastMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateBroadcastMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroadcastMessage[P]>
      : GetScalarType<T[P], AggregateBroadcastMessage[P]>
  }




  export type BroadcastMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BroadcastMessageWhereInput
    orderBy?: BroadcastMessageOrderByWithAggregationInput | BroadcastMessageOrderByWithAggregationInput[]
    by: BroadcastMessageScalarFieldEnum[] | BroadcastMessageScalarFieldEnum
    having?: BroadcastMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BroadcastMessageCountAggregateInputType | true
    _min?: BroadcastMessageMinAggregateInputType
    _max?: BroadcastMessageMaxAggregateInputType
  }

  export type BroadcastMessageGroupByOutputType = {
    id: string
    title: string
    body: string
    createdAt: Date
    scheduledFor: Date | null
    _count: BroadcastMessageCountAggregateOutputType | null
    _min: BroadcastMessageMinAggregateOutputType | null
    _max: BroadcastMessageMaxAggregateOutputType | null
  }

  type GetBroadcastMessageGroupByPayload<T extends BroadcastMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BroadcastMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BroadcastMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BroadcastMessageGroupByOutputType[P]>
            : GetScalarType<T[P], BroadcastMessageGroupByOutputType[P]>
        }
      >
    >


  export type BroadcastMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
    deliveries?: boolean | BroadcastMessage$deliveriesArgs<ExtArgs>
    _count?: boolean | BroadcastMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
  }, ExtArgs["result"]["broadcastMessage"]>

  export type BroadcastMessageSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    createdAt?: boolean
    scheduledFor?: boolean
  }

  export type BroadcastMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "body" | "createdAt" | "scheduledFor", ExtArgs["result"]["broadcastMessage"]>
  export type BroadcastMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliveries?: boolean | BroadcastMessage$deliveriesArgs<ExtArgs>
    _count?: boolean | BroadcastMessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BroadcastMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BroadcastMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BroadcastMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BroadcastMessage"
    objects: {
      deliveries: Prisma.$MessageDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      body: string
      createdAt: Date
      scheduledFor: Date | null
    }, ExtArgs["result"]["broadcastMessage"]>
    composites: {}
  }

  type BroadcastMessageGetPayload<S extends boolean | null | undefined | BroadcastMessageDefaultArgs> = $Result.GetResult<Prisma.$BroadcastMessagePayload, S>

  type BroadcastMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BroadcastMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BroadcastMessageCountAggregateInputType | true
    }

  export interface BroadcastMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BroadcastMessage'], meta: { name: 'BroadcastMessage' } }
    /**
     * Find zero or one BroadcastMessage that matches the filter.
     * @param {BroadcastMessageFindUniqueArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BroadcastMessageFindUniqueArgs>(args: SelectSubset<T, BroadcastMessageFindUniqueArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BroadcastMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BroadcastMessageFindUniqueOrThrowArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BroadcastMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, BroadcastMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindFirstArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BroadcastMessageFindFirstArgs>(args?: SelectSubset<T, BroadcastMessageFindFirstArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BroadcastMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindFirstOrThrowArgs} args - Arguments to find a BroadcastMessage
     * @example
     * // Get one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BroadcastMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, BroadcastMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BroadcastMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BroadcastMessages
     * const broadcastMessages = await prisma.broadcastMessage.findMany()
     * 
     * // Get first 10 BroadcastMessages
     * const broadcastMessages = await prisma.broadcastMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BroadcastMessageFindManyArgs>(args?: SelectSubset<T, BroadcastMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BroadcastMessage.
     * @param {BroadcastMessageCreateArgs} args - Arguments to create a BroadcastMessage.
     * @example
     * // Create one BroadcastMessage
     * const BroadcastMessage = await prisma.broadcastMessage.create({
     *   data: {
     *     // ... data to create a BroadcastMessage
     *   }
     * })
     * 
     */
    create<T extends BroadcastMessageCreateArgs>(args: SelectSubset<T, BroadcastMessageCreateArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BroadcastMessages.
     * @param {BroadcastMessageCreateManyArgs} args - Arguments to create many BroadcastMessages.
     * @example
     * // Create many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BroadcastMessageCreateManyArgs>(args?: SelectSubset<T, BroadcastMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BroadcastMessages and returns the data saved in the database.
     * @param {BroadcastMessageCreateManyAndReturnArgs} args - Arguments to create many BroadcastMessages.
     * @example
     * // Create many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BroadcastMessages and only return the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BroadcastMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, BroadcastMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BroadcastMessage.
     * @param {BroadcastMessageDeleteArgs} args - Arguments to delete one BroadcastMessage.
     * @example
     * // Delete one BroadcastMessage
     * const BroadcastMessage = await prisma.broadcastMessage.delete({
     *   where: {
     *     // ... filter to delete one BroadcastMessage
     *   }
     * })
     * 
     */
    delete<T extends BroadcastMessageDeleteArgs>(args: SelectSubset<T, BroadcastMessageDeleteArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BroadcastMessage.
     * @param {BroadcastMessageUpdateArgs} args - Arguments to update one BroadcastMessage.
     * @example
     * // Update one BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BroadcastMessageUpdateArgs>(args: SelectSubset<T, BroadcastMessageUpdateArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BroadcastMessages.
     * @param {BroadcastMessageDeleteManyArgs} args - Arguments to filter BroadcastMessages to delete.
     * @example
     * // Delete a few BroadcastMessages
     * const { count } = await prisma.broadcastMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BroadcastMessageDeleteManyArgs>(args?: SelectSubset<T, BroadcastMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BroadcastMessageUpdateManyArgs>(args: SelectSubset<T, BroadcastMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BroadcastMessages and returns the data updated in the database.
     * @param {BroadcastMessageUpdateManyAndReturnArgs} args - Arguments to update many BroadcastMessages.
     * @example
     * // Update many BroadcastMessages
     * const broadcastMessage = await prisma.broadcastMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BroadcastMessages and only return the `id`
     * const broadcastMessageWithIdOnly = await prisma.broadcastMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends BroadcastMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, BroadcastMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BroadcastMessage.
     * @param {BroadcastMessageUpsertArgs} args - Arguments to update or create a BroadcastMessage.
     * @example
     * // Update or create a BroadcastMessage
     * const broadcastMessage = await prisma.broadcastMessage.upsert({
     *   create: {
     *     // ... data to create a BroadcastMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BroadcastMessage we want to update
     *   }
     * })
     */
    upsert<T extends BroadcastMessageUpsertArgs>(args: SelectSubset<T, BroadcastMessageUpsertArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BroadcastMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageCountArgs} args - Arguments to filter BroadcastMessages to count.
     * @example
     * // Count the number of BroadcastMessages
     * const count = await prisma.broadcastMessage.count({
     *   where: {
     *     // ... the filter for the BroadcastMessages we want to count
     *   }
     * })
    **/
    count<T extends BroadcastMessageCountArgs>(
      args?: Subset<T, BroadcastMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BroadcastMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BroadcastMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BroadcastMessageAggregateArgs>(args: Subset<T, BroadcastMessageAggregateArgs>): Prisma.PrismaPromise<GetBroadcastMessageAggregateType<T>>

    /**
     * Group by BroadcastMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BroadcastMessageGroupByArgs} args - Group by arguments.
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
      T extends BroadcastMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BroadcastMessageGroupByArgs['orderBy'] }
        : { orderBy?: BroadcastMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BroadcastMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBroadcastMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BroadcastMessage model
   */
  readonly fields: BroadcastMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BroadcastMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BroadcastMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deliveries<T extends BroadcastMessage$deliveriesArgs<ExtArgs> = {}>(args?: Subset<T, BroadcastMessage$deliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BroadcastMessage model
   */
  interface BroadcastMessageFieldRefs {
    readonly id: FieldRef<"BroadcastMessage", 'String'>
    readonly title: FieldRef<"BroadcastMessage", 'String'>
    readonly body: FieldRef<"BroadcastMessage", 'String'>
    readonly createdAt: FieldRef<"BroadcastMessage", 'DateTime'>
    readonly scheduledFor: FieldRef<"BroadcastMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BroadcastMessage findUnique
   */
  export type BroadcastMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage findUniqueOrThrow
   */
  export type BroadcastMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage findFirst
   */
  export type BroadcastMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastMessages.
     */
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage findFirstOrThrow
   */
  export type BroadcastMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessage to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BroadcastMessages.
     */
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage findMany
   */
  export type BroadcastMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter, which BroadcastMessages to fetch.
     */
    where?: BroadcastMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BroadcastMessages to fetch.
     */
    orderBy?: BroadcastMessageOrderByWithRelationInput | BroadcastMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BroadcastMessages.
     */
    cursor?: BroadcastMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BroadcastMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BroadcastMessages.
     */
    skip?: number
    distinct?: BroadcastMessageScalarFieldEnum | BroadcastMessageScalarFieldEnum[]
  }

  /**
   * BroadcastMessage create
   */
  export type BroadcastMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a BroadcastMessage.
     */
    data: XOR<BroadcastMessageCreateInput, BroadcastMessageUncheckedCreateInput>
  }

  /**
   * BroadcastMessage createMany
   */
  export type BroadcastMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BroadcastMessages.
     */
    data: BroadcastMessageCreateManyInput | BroadcastMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BroadcastMessage createManyAndReturn
   */
  export type BroadcastMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * The data used to create many BroadcastMessages.
     */
    data: BroadcastMessageCreateManyInput | BroadcastMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BroadcastMessage update
   */
  export type BroadcastMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a BroadcastMessage.
     */
    data: XOR<BroadcastMessageUpdateInput, BroadcastMessageUncheckedUpdateInput>
    /**
     * Choose, which BroadcastMessage to update.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage updateMany
   */
  export type BroadcastMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BroadcastMessages.
     */
    data: XOR<BroadcastMessageUpdateManyMutationInput, BroadcastMessageUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastMessages to update
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to update.
     */
    limit?: number
  }

  /**
   * BroadcastMessage updateManyAndReturn
   */
  export type BroadcastMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * The data used to update BroadcastMessages.
     */
    data: XOR<BroadcastMessageUpdateManyMutationInput, BroadcastMessageUncheckedUpdateManyInput>
    /**
     * Filter which BroadcastMessages to update
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to update.
     */
    limit?: number
  }

  /**
   * BroadcastMessage upsert
   */
  export type BroadcastMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the BroadcastMessage to update in case it exists.
     */
    where: BroadcastMessageWhereUniqueInput
    /**
     * In case the BroadcastMessage found by the `where` argument doesn't exist, create a new BroadcastMessage with this data.
     */
    create: XOR<BroadcastMessageCreateInput, BroadcastMessageUncheckedCreateInput>
    /**
     * In case the BroadcastMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BroadcastMessageUpdateInput, BroadcastMessageUncheckedUpdateInput>
  }

  /**
   * BroadcastMessage delete
   */
  export type BroadcastMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
    /**
     * Filter which BroadcastMessage to delete.
     */
    where: BroadcastMessageWhereUniqueInput
  }

  /**
   * BroadcastMessage deleteMany
   */
  export type BroadcastMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BroadcastMessages to delete
     */
    where?: BroadcastMessageWhereInput
    /**
     * Limit how many BroadcastMessages to delete.
     */
    limit?: number
  }

  /**
   * BroadcastMessage.deliveries
   */
  export type BroadcastMessage$deliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    where?: MessageDeliveryWhereInput
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    cursor?: MessageDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * BroadcastMessage without action
   */
  export type BroadcastMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BroadcastMessage
     */
    select?: BroadcastMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BroadcastMessage
     */
    omit?: BroadcastMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BroadcastMessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageDelivery
   */

  export type AggregateMessageDelivery = {
    _count: MessageDeliveryCountAggregateOutputType | null
    _min: MessageDeliveryMinAggregateOutputType | null
    _max: MessageDeliveryMaxAggregateOutputType | null
  }

  export type MessageDeliveryMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    subscriptionId: string | null
    phoneNumber: string | null
    status: $Enums.DeliveryStatus | null
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageDeliveryMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    subscriptionId: string | null
    phoneNumber: string | null
    status: $Enums.DeliveryStatus | null
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageDeliveryCountAggregateOutputType = {
    id: number
    messageId: number
    subscriptionId: number
    phoneNumber: number
    status: number
    sentAt: number
    errorMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageDeliveryMinAggregateInputType = {
    id?: true
    messageId?: true
    subscriptionId?: true
    phoneNumber?: true
    status?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageDeliveryMaxAggregateInputType = {
    id?: true
    messageId?: true
    subscriptionId?: true
    phoneNumber?: true
    status?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageDeliveryCountAggregateInputType = {
    id?: true
    messageId?: true
    subscriptionId?: true
    phoneNumber?: true
    status?: true
    sentAt?: true
    errorMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageDelivery to aggregate.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageDeliveries
    **/
    _count?: true | MessageDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageDeliveryMaxAggregateInputType
  }

  export type GetMessageDeliveryAggregateType<T extends MessageDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageDelivery[P]>
      : GetScalarType<T[P], AggregateMessageDelivery[P]>
  }




  export type MessageDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageDeliveryWhereInput
    orderBy?: MessageDeliveryOrderByWithAggregationInput | MessageDeliveryOrderByWithAggregationInput[]
    by: MessageDeliveryScalarFieldEnum[] | MessageDeliveryScalarFieldEnum
    having?: MessageDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageDeliveryCountAggregateInputType | true
    _min?: MessageDeliveryMinAggregateInputType
    _max?: MessageDeliveryMaxAggregateInputType
  }

  export type MessageDeliveryGroupByOutputType = {
    id: string
    messageId: string
    subscriptionId: string
    phoneNumber: string
    status: $Enums.DeliveryStatus
    sentAt: Date | null
    errorMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: MessageDeliveryCountAggregateOutputType | null
    _min: MessageDeliveryMinAggregateOutputType | null
    _max: MessageDeliveryMaxAggregateOutputType | null
  }

  type GetMessageDeliveryGroupByPayload<T extends MessageDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], MessageDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type MessageDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageDelivery"]>

  export type MessageDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageDelivery"]>

  export type MessageDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageDelivery"]>

  export type MessageDeliverySelectScalar = {
    id?: boolean
    messageId?: boolean
    subscriptionId?: boolean
    phoneNumber?: boolean
    status?: boolean
    sentAt?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "subscriptionId" | "phoneNumber" | "status" | "sentAt" | "errorMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["messageDelivery"]>
  export type MessageDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }
  export type MessageDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }
  export type MessageDeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | BroadcastMessageDefaultArgs<ExtArgs>
    subscription?: boolean | MessageSubscriptionDefaultArgs<ExtArgs>
  }

  export type $MessageDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageDelivery"
    objects: {
      message: Prisma.$BroadcastMessagePayload<ExtArgs>
      subscription: Prisma.$MessageSubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      subscriptionId: string
      phoneNumber: string
      status: $Enums.DeliveryStatus
      sentAt: Date | null
      errorMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messageDelivery"]>
    composites: {}
  }

  type MessageDeliveryGetPayload<S extends boolean | null | undefined | MessageDeliveryDefaultArgs> = $Result.GetResult<Prisma.$MessageDeliveryPayload, S>

  type MessageDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageDeliveryCountAggregateInputType | true
    }

  export interface MessageDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageDelivery'], meta: { name: 'MessageDelivery' } }
    /**
     * Find zero or one MessageDelivery that matches the filter.
     * @param {MessageDeliveryFindUniqueArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageDeliveryFindUniqueArgs>(args: SelectSubset<T, MessageDeliveryFindUniqueArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageDeliveryFindUniqueOrThrowArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryFindFirstArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageDeliveryFindFirstArgs>(args?: SelectSubset<T, MessageDeliveryFindFirstArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryFindFirstOrThrowArgs} args - Arguments to find a MessageDelivery
     * @example
     * // Get one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageDeliveries
     * const messageDeliveries = await prisma.messageDelivery.findMany()
     * 
     * // Get first 10 MessageDeliveries
     * const messageDeliveries = await prisma.messageDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageDeliveryWithIdOnly = await prisma.messageDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageDeliveryFindManyArgs>(args?: SelectSubset<T, MessageDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageDelivery.
     * @param {MessageDeliveryCreateArgs} args - Arguments to create a MessageDelivery.
     * @example
     * // Create one MessageDelivery
     * const MessageDelivery = await prisma.messageDelivery.create({
     *   data: {
     *     // ... data to create a MessageDelivery
     *   }
     * })
     * 
     */
    create<T extends MessageDeliveryCreateArgs>(args: SelectSubset<T, MessageDeliveryCreateArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageDeliveries.
     * @param {MessageDeliveryCreateManyArgs} args - Arguments to create many MessageDeliveries.
     * @example
     * // Create many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageDeliveryCreateManyArgs>(args?: SelectSubset<T, MessageDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageDeliveries and returns the data saved in the database.
     * @param {MessageDeliveryCreateManyAndReturnArgs} args - Arguments to create many MessageDeliveries.
     * @example
     * // Create many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageDeliveries and only return the `id`
     * const messageDeliveryWithIdOnly = await prisma.messageDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageDelivery.
     * @param {MessageDeliveryDeleteArgs} args - Arguments to delete one MessageDelivery.
     * @example
     * // Delete one MessageDelivery
     * const MessageDelivery = await prisma.messageDelivery.delete({
     *   where: {
     *     // ... filter to delete one MessageDelivery
     *   }
     * })
     * 
     */
    delete<T extends MessageDeliveryDeleteArgs>(args: SelectSubset<T, MessageDeliveryDeleteArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageDelivery.
     * @param {MessageDeliveryUpdateArgs} args - Arguments to update one MessageDelivery.
     * @example
     * // Update one MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageDeliveryUpdateArgs>(args: SelectSubset<T, MessageDeliveryUpdateArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageDeliveries.
     * @param {MessageDeliveryDeleteManyArgs} args - Arguments to filter MessageDeliveries to delete.
     * @example
     * // Delete a few MessageDeliveries
     * const { count } = await prisma.messageDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeliveryDeleteManyArgs>(args?: SelectSubset<T, MessageDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageDeliveryUpdateManyArgs>(args: SelectSubset<T, MessageDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageDeliveries and returns the data updated in the database.
     * @param {MessageDeliveryUpdateManyAndReturnArgs} args - Arguments to update many MessageDeliveries.
     * @example
     * // Update many MessageDeliveries
     * const messageDelivery = await prisma.messageDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageDeliveries and only return the `id`
     * const messageDeliveryWithIdOnly = await prisma.messageDelivery.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageDelivery.
     * @param {MessageDeliveryUpsertArgs} args - Arguments to update or create a MessageDelivery.
     * @example
     * // Update or create a MessageDelivery
     * const messageDelivery = await prisma.messageDelivery.upsert({
     *   create: {
     *     // ... data to create a MessageDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageDelivery we want to update
     *   }
     * })
     */
    upsert<T extends MessageDeliveryUpsertArgs>(args: SelectSubset<T, MessageDeliveryUpsertArgs<ExtArgs>>): Prisma__MessageDeliveryClient<$Result.GetResult<Prisma.$MessageDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryCountArgs} args - Arguments to filter MessageDeliveries to count.
     * @example
     * // Count the number of MessageDeliveries
     * const count = await prisma.messageDelivery.count({
     *   where: {
     *     // ... the filter for the MessageDeliveries we want to count
     *   }
     * })
    **/
    count<T extends MessageDeliveryCountArgs>(
      args?: Subset<T, MessageDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageDeliveryAggregateArgs>(args: Subset<T, MessageDeliveryAggregateArgs>): Prisma.PrismaPromise<GetMessageDeliveryAggregateType<T>>

    /**
     * Group by MessageDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageDeliveryGroupByArgs} args - Group by arguments.
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
      T extends MessageDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: MessageDeliveryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageDelivery model
   */
  readonly fields: MessageDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends BroadcastMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BroadcastMessageDefaultArgs<ExtArgs>>): Prisma__BroadcastMessageClient<$Result.GetResult<Prisma.$BroadcastMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscription<T extends MessageSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageSubscriptionDefaultArgs<ExtArgs>>): Prisma__MessageSubscriptionClient<$Result.GetResult<Prisma.$MessageSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageDelivery model
   */
  interface MessageDeliveryFieldRefs {
    readonly id: FieldRef<"MessageDelivery", 'String'>
    readonly messageId: FieldRef<"MessageDelivery", 'String'>
    readonly subscriptionId: FieldRef<"MessageDelivery", 'String'>
    readonly phoneNumber: FieldRef<"MessageDelivery", 'String'>
    readonly status: FieldRef<"MessageDelivery", 'DeliveryStatus'>
    readonly sentAt: FieldRef<"MessageDelivery", 'DateTime'>
    readonly errorMessage: FieldRef<"MessageDelivery", 'String'>
    readonly createdAt: FieldRef<"MessageDelivery", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageDelivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MessageDelivery findUnique
   */
  export type MessageDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery findUniqueOrThrow
   */
  export type MessageDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery findFirst
   */
  export type MessageDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageDeliveries.
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageDeliveries.
     */
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageDelivery findFirstOrThrow
   */
  export type MessageDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDelivery to fetch.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageDeliveries.
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageDeliveries.
     */
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageDelivery findMany
   */
  export type MessageDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which MessageDeliveries to fetch.
     */
    where?: MessageDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageDeliveries to fetch.
     */
    orderBy?: MessageDeliveryOrderByWithRelationInput | MessageDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageDeliveries.
     */
    cursor?: MessageDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageDeliveries.
     */
    skip?: number
    distinct?: MessageDeliveryScalarFieldEnum | MessageDeliveryScalarFieldEnum[]
  }

  /**
   * MessageDelivery create
   */
  export type MessageDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageDelivery.
     */
    data: XOR<MessageDeliveryCreateInput, MessageDeliveryUncheckedCreateInput>
  }

  /**
   * MessageDelivery createMany
   */
  export type MessageDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageDeliveries.
     */
    data: MessageDeliveryCreateManyInput | MessageDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageDelivery createManyAndReturn
   */
  export type MessageDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many MessageDeliveries.
     */
    data: MessageDeliveryCreateManyInput | MessageDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageDelivery update
   */
  export type MessageDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageDelivery.
     */
    data: XOR<MessageDeliveryUpdateInput, MessageDeliveryUncheckedUpdateInput>
    /**
     * Choose, which MessageDelivery to update.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery updateMany
   */
  export type MessageDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageDeliveries.
     */
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which MessageDeliveries to update
     */
    where?: MessageDeliveryWhereInput
    /**
     * Limit how many MessageDeliveries to update.
     */
    limit?: number
  }

  /**
   * MessageDelivery updateManyAndReturn
   */
  export type MessageDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update MessageDeliveries.
     */
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which MessageDeliveries to update
     */
    where?: MessageDeliveryWhereInput
    /**
     * Limit how many MessageDeliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageDelivery upsert
   */
  export type MessageDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageDelivery to update in case it exists.
     */
    where: MessageDeliveryWhereUniqueInput
    /**
     * In case the MessageDelivery found by the `where` argument doesn't exist, create a new MessageDelivery with this data.
     */
    create: XOR<MessageDeliveryCreateInput, MessageDeliveryUncheckedCreateInput>
    /**
     * In case the MessageDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageDeliveryUpdateInput, MessageDeliveryUncheckedUpdateInput>
  }

  /**
   * MessageDelivery delete
   */
  export type MessageDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
    /**
     * Filter which MessageDelivery to delete.
     */
    where: MessageDeliveryWhereUniqueInput
  }

  /**
   * MessageDelivery deleteMany
   */
  export type MessageDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageDeliveries to delete
     */
    where?: MessageDeliveryWhereInput
    /**
     * Limit how many MessageDeliveries to delete.
     */
    limit?: number
  }

  /**
   * MessageDelivery without action
   */
  export type MessageDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageDelivery
     */
    select?: MessageDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageDelivery
     */
    omit?: MessageDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageDeliveryInclude<ExtArgs> | null
  }


  /**
   * Model OwnerLoginSession
   */

  export type AggregateOwnerLoginSession = {
    _count: OwnerLoginSessionCountAggregateOutputType | null
    _avg: OwnerLoginSessionAvgAggregateOutputType | null
    _sum: OwnerLoginSessionSumAggregateOutputType | null
    _min: OwnerLoginSessionMinAggregateOutputType | null
    _max: OwnerLoginSessionMaxAggregateOutputType | null
  }

  export type OwnerLoginSessionAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    countryPopulation: number | null
    countryArea: number | null
  }

  export type OwnerLoginSessionSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    countryPopulation: number | null
    countryArea: number | null
  }

  export type OwnerLoginSessionMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    userAgent: string | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isSuccessful: boolean | null
    loginAt: Date | null
    timezone: string | null
    isp: string | null
    region: string | null
    deviceType: string | null
    deviceModel: string | null
    browserName: string | null
    browserVersion: string | null
    osName: string | null
    osVersion: string | null
    countryCode: string | null
    regionCode: string | null
    postal: string | null
    currency: string | null
    currencyName: string | null
    languages: string | null
    countryPopulation: number | null
    countryArea: number | null
    countryCapital: string | null
    continent: string | null
    isEu: boolean | null
    callingCode: string | null
    utcOffset: string | null
  }

  export type OwnerLoginSessionMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    userAgent: string | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isSuccessful: boolean | null
    loginAt: Date | null
    timezone: string | null
    isp: string | null
    region: string | null
    deviceType: string | null
    deviceModel: string | null
    browserName: string | null
    browserVersion: string | null
    osName: string | null
    osVersion: string | null
    countryCode: string | null
    regionCode: string | null
    postal: string | null
    currency: string | null
    currencyName: string | null
    languages: string | null
    countryPopulation: number | null
    countryArea: number | null
    countryCapital: string | null
    continent: string | null
    isEu: boolean | null
    callingCode: string | null
    utcOffset: string | null
  }

  export type OwnerLoginSessionCountAggregateOutputType = {
    id: number
    ownerId: number
    deviceInfo: number
    ipAddress: number
    location: number
    userAgent: number
    browser: number
    os: number
    device: number
    country: number
    city: number
    latitude: number
    longitude: number
    isSuccessful: number
    loginAt: number
    timezone: number
    isp: number
    region: number
    deviceType: number
    deviceModel: number
    browserName: number
    browserVersion: number
    osName: number
    osVersion: number
    countryCode: number
    regionCode: number
    postal: number
    currency: number
    currencyName: number
    languages: number
    countryPopulation: number
    countryArea: number
    countryCapital: number
    continent: number
    isEu: number
    callingCode: number
    utcOffset: number
    _all: number
  }


  export type OwnerLoginSessionAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    countryPopulation?: true
    countryArea?: true
  }

  export type OwnerLoginSessionSumAggregateInputType = {
    latitude?: true
    longitude?: true
    countryPopulation?: true
    countryArea?: true
  }

  export type OwnerLoginSessionMinAggregateInputType = {
    id?: true
    ownerId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    userAgent?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    isSuccessful?: true
    loginAt?: true
    timezone?: true
    isp?: true
    region?: true
    deviceType?: true
    deviceModel?: true
    browserName?: true
    browserVersion?: true
    osName?: true
    osVersion?: true
    countryCode?: true
    regionCode?: true
    postal?: true
    currency?: true
    currencyName?: true
    languages?: true
    countryPopulation?: true
    countryArea?: true
    countryCapital?: true
    continent?: true
    isEu?: true
    callingCode?: true
    utcOffset?: true
  }

  export type OwnerLoginSessionMaxAggregateInputType = {
    id?: true
    ownerId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    userAgent?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    isSuccessful?: true
    loginAt?: true
    timezone?: true
    isp?: true
    region?: true
    deviceType?: true
    deviceModel?: true
    browserName?: true
    browserVersion?: true
    osName?: true
    osVersion?: true
    countryCode?: true
    regionCode?: true
    postal?: true
    currency?: true
    currencyName?: true
    languages?: true
    countryPopulation?: true
    countryArea?: true
    countryCapital?: true
    continent?: true
    isEu?: true
    callingCode?: true
    utcOffset?: true
  }

  export type OwnerLoginSessionCountAggregateInputType = {
    id?: true
    ownerId?: true
    deviceInfo?: true
    ipAddress?: true
    location?: true
    userAgent?: true
    browser?: true
    os?: true
    device?: true
    country?: true
    city?: true
    latitude?: true
    longitude?: true
    isSuccessful?: true
    loginAt?: true
    timezone?: true
    isp?: true
    region?: true
    deviceType?: true
    deviceModel?: true
    browserName?: true
    browserVersion?: true
    osName?: true
    osVersion?: true
    countryCode?: true
    regionCode?: true
    postal?: true
    currency?: true
    currencyName?: true
    languages?: true
    countryPopulation?: true
    countryArea?: true
    countryCapital?: true
    continent?: true
    isEu?: true
    callingCode?: true
    utcOffset?: true
    _all?: true
  }

  export type OwnerLoginSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerLoginSession to aggregate.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OwnerLoginSessions
    **/
    _count?: true | OwnerLoginSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerLoginSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerLoginSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerLoginSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerLoginSessionMaxAggregateInputType
  }

  export type GetOwnerLoginSessionAggregateType<T extends OwnerLoginSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateOwnerLoginSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwnerLoginSession[P]>
      : GetScalarType<T[P], AggregateOwnerLoginSession[P]>
  }




  export type OwnerLoginSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerLoginSessionWhereInput
    orderBy?: OwnerLoginSessionOrderByWithAggregationInput | OwnerLoginSessionOrderByWithAggregationInput[]
    by: OwnerLoginSessionScalarFieldEnum[] | OwnerLoginSessionScalarFieldEnum
    having?: OwnerLoginSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerLoginSessionCountAggregateInputType | true
    _avg?: OwnerLoginSessionAvgAggregateInputType
    _sum?: OwnerLoginSessionSumAggregateInputType
    _min?: OwnerLoginSessionMinAggregateInputType
    _max?: OwnerLoginSessionMaxAggregateInputType
  }

  export type OwnerLoginSessionGroupByOutputType = {
    id: string
    ownerId: string
    deviceInfo: string | null
    ipAddress: string | null
    location: string | null
    userAgent: string | null
    browser: string | null
    os: string | null
    device: string | null
    country: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    isSuccessful: boolean
    loginAt: Date
    timezone: string | null
    isp: string | null
    region: string | null
    deviceType: string | null
    deviceModel: string | null
    browserName: string | null
    browserVersion: string | null
    osName: string | null
    osVersion: string | null
    countryCode: string | null
    regionCode: string | null
    postal: string | null
    currency: string | null
    currencyName: string | null
    languages: string | null
    countryPopulation: number | null
    countryArea: number | null
    countryCapital: string | null
    continent: string | null
    isEu: boolean | null
    callingCode: string | null
    utcOffset: string | null
    _count: OwnerLoginSessionCountAggregateOutputType | null
    _avg: OwnerLoginSessionAvgAggregateOutputType | null
    _sum: OwnerLoginSessionSumAggregateOutputType | null
    _min: OwnerLoginSessionMinAggregateOutputType | null
    _max: OwnerLoginSessionMaxAggregateOutputType | null
  }

  type GetOwnerLoginSessionGroupByPayload<T extends OwnerLoginSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerLoginSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerLoginSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerLoginSessionGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerLoginSessionGroupByOutputType[P]>
        }
      >
    >


  export type OwnerLoginSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerLoginSession"]>

  export type OwnerLoginSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerLoginSession"]>

  export type OwnerLoginSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ownerLoginSession"]>

  export type OwnerLoginSessionSelectScalar = {
    id?: boolean
    ownerId?: boolean
    deviceInfo?: boolean
    ipAddress?: boolean
    location?: boolean
    userAgent?: boolean
    browser?: boolean
    os?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    isSuccessful?: boolean
    loginAt?: boolean
    timezone?: boolean
    isp?: boolean
    region?: boolean
    deviceType?: boolean
    deviceModel?: boolean
    browserName?: boolean
    browserVersion?: boolean
    osName?: boolean
    osVersion?: boolean
    countryCode?: boolean
    regionCode?: boolean
    postal?: boolean
    currency?: boolean
    currencyName?: boolean
    languages?: boolean
    countryPopulation?: boolean
    countryArea?: boolean
    countryCapital?: boolean
    continent?: boolean
    isEu?: boolean
    callingCode?: boolean
    utcOffset?: boolean
  }

  export type OwnerLoginSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "deviceInfo" | "ipAddress" | "location" | "userAgent" | "browser" | "os" | "device" | "country" | "city" | "latitude" | "longitude" | "isSuccessful" | "loginAt" | "timezone" | "isp" | "region" | "deviceType" | "deviceModel" | "browserName" | "browserVersion" | "osName" | "osVersion" | "countryCode" | "regionCode" | "postal" | "currency" | "currencyName" | "languages" | "countryPopulation" | "countryArea" | "countryCapital" | "continent" | "isEu" | "callingCode" | "utcOffset", ExtArgs["result"]["ownerLoginSession"]>
  export type OwnerLoginSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type OwnerLoginSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type OwnerLoginSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $OwnerLoginSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OwnerLoginSession"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      deviceInfo: string | null
      ipAddress: string | null
      location: string | null
      userAgent: string | null
      browser: string | null
      os: string | null
      device: string | null
      country: string | null
      city: string | null
      latitude: number | null
      longitude: number | null
      isSuccessful: boolean
      loginAt: Date
      timezone: string | null
      isp: string | null
      region: string | null
      deviceType: string | null
      deviceModel: string | null
      browserName: string | null
      browserVersion: string | null
      osName: string | null
      osVersion: string | null
      countryCode: string | null
      regionCode: string | null
      postal: string | null
      currency: string | null
      currencyName: string | null
      languages: string | null
      countryPopulation: number | null
      countryArea: number | null
      countryCapital: string | null
      continent: string | null
      isEu: boolean | null
      callingCode: string | null
      utcOffset: string | null
    }, ExtArgs["result"]["ownerLoginSession"]>
    composites: {}
  }

  type OwnerLoginSessionGetPayload<S extends boolean | null | undefined | OwnerLoginSessionDefaultArgs> = $Result.GetResult<Prisma.$OwnerLoginSessionPayload, S>

  type OwnerLoginSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerLoginSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerLoginSessionCountAggregateInputType | true
    }

  export interface OwnerLoginSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OwnerLoginSession'], meta: { name: 'OwnerLoginSession' } }
    /**
     * Find zero or one OwnerLoginSession that matches the filter.
     * @param {OwnerLoginSessionFindUniqueArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerLoginSessionFindUniqueArgs>(args: SelectSubset<T, OwnerLoginSessionFindUniqueArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OwnerLoginSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerLoginSessionFindUniqueOrThrowArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerLoginSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerLoginSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerLoginSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionFindFirstArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerLoginSessionFindFirstArgs>(args?: SelectSubset<T, OwnerLoginSessionFindFirstArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OwnerLoginSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionFindFirstOrThrowArgs} args - Arguments to find a OwnerLoginSession
     * @example
     * // Get one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerLoginSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerLoginSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OwnerLoginSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OwnerLoginSessions
     * const ownerLoginSessions = await prisma.ownerLoginSession.findMany()
     * 
     * // Get first 10 OwnerLoginSessions
     * const ownerLoginSessions = await prisma.ownerLoginSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerLoginSessionWithIdOnly = await prisma.ownerLoginSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerLoginSessionFindManyArgs>(args?: SelectSubset<T, OwnerLoginSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OwnerLoginSession.
     * @param {OwnerLoginSessionCreateArgs} args - Arguments to create a OwnerLoginSession.
     * @example
     * // Create one OwnerLoginSession
     * const OwnerLoginSession = await prisma.ownerLoginSession.create({
     *   data: {
     *     // ... data to create a OwnerLoginSession
     *   }
     * })
     * 
     */
    create<T extends OwnerLoginSessionCreateArgs>(args: SelectSubset<T, OwnerLoginSessionCreateArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OwnerLoginSessions.
     * @param {OwnerLoginSessionCreateManyArgs} args - Arguments to create many OwnerLoginSessions.
     * @example
     * // Create many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerLoginSessionCreateManyArgs>(args?: SelectSubset<T, OwnerLoginSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OwnerLoginSessions and returns the data saved in the database.
     * @param {OwnerLoginSessionCreateManyAndReturnArgs} args - Arguments to create many OwnerLoginSessions.
     * @example
     * // Create many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OwnerLoginSessions and only return the `id`
     * const ownerLoginSessionWithIdOnly = await prisma.ownerLoginSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerLoginSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerLoginSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OwnerLoginSession.
     * @param {OwnerLoginSessionDeleteArgs} args - Arguments to delete one OwnerLoginSession.
     * @example
     * // Delete one OwnerLoginSession
     * const OwnerLoginSession = await prisma.ownerLoginSession.delete({
     *   where: {
     *     // ... filter to delete one OwnerLoginSession
     *   }
     * })
     * 
     */
    delete<T extends OwnerLoginSessionDeleteArgs>(args: SelectSubset<T, OwnerLoginSessionDeleteArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OwnerLoginSession.
     * @param {OwnerLoginSessionUpdateArgs} args - Arguments to update one OwnerLoginSession.
     * @example
     * // Update one OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerLoginSessionUpdateArgs>(args: SelectSubset<T, OwnerLoginSessionUpdateArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OwnerLoginSessions.
     * @param {OwnerLoginSessionDeleteManyArgs} args - Arguments to filter OwnerLoginSessions to delete.
     * @example
     * // Delete a few OwnerLoginSessions
     * const { count } = await prisma.ownerLoginSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerLoginSessionDeleteManyArgs>(args?: SelectSubset<T, OwnerLoginSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerLoginSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerLoginSessionUpdateManyArgs>(args: SelectSubset<T, OwnerLoginSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OwnerLoginSessions and returns the data updated in the database.
     * @param {OwnerLoginSessionUpdateManyAndReturnArgs} args - Arguments to update many OwnerLoginSessions.
     * @example
     * // Update many OwnerLoginSessions
     * const ownerLoginSession = await prisma.ownerLoginSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OwnerLoginSessions and only return the `id`
     * const ownerLoginSessionWithIdOnly = await prisma.ownerLoginSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends OwnerLoginSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerLoginSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OwnerLoginSession.
     * @param {OwnerLoginSessionUpsertArgs} args - Arguments to update or create a OwnerLoginSession.
     * @example
     * // Update or create a OwnerLoginSession
     * const ownerLoginSession = await prisma.ownerLoginSession.upsert({
     *   create: {
     *     // ... data to create a OwnerLoginSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OwnerLoginSession we want to update
     *   }
     * })
     */
    upsert<T extends OwnerLoginSessionUpsertArgs>(args: SelectSubset<T, OwnerLoginSessionUpsertArgs<ExtArgs>>): Prisma__OwnerLoginSessionClient<$Result.GetResult<Prisma.$OwnerLoginSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OwnerLoginSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionCountArgs} args - Arguments to filter OwnerLoginSessions to count.
     * @example
     * // Count the number of OwnerLoginSessions
     * const count = await prisma.ownerLoginSession.count({
     *   where: {
     *     // ... the filter for the OwnerLoginSessions we want to count
     *   }
     * })
    **/
    count<T extends OwnerLoginSessionCountArgs>(
      args?: Subset<T, OwnerLoginSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerLoginSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OwnerLoginSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerLoginSessionAggregateArgs>(args: Subset<T, OwnerLoginSessionAggregateArgs>): Prisma.PrismaPromise<GetOwnerLoginSessionAggregateType<T>>

    /**
     * Group by OwnerLoginSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerLoginSessionGroupByArgs} args - Group by arguments.
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
      T extends OwnerLoginSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerLoginSessionGroupByArgs['orderBy'] }
        : { orderBy?: OwnerLoginSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerLoginSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerLoginSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OwnerLoginSession model
   */
  readonly fields: OwnerLoginSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OwnerLoginSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerLoginSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OwnerLoginSession model
   */
  interface OwnerLoginSessionFieldRefs {
    readonly id: FieldRef<"OwnerLoginSession", 'String'>
    readonly ownerId: FieldRef<"OwnerLoginSession", 'String'>
    readonly deviceInfo: FieldRef<"OwnerLoginSession", 'String'>
    readonly ipAddress: FieldRef<"OwnerLoginSession", 'String'>
    readonly location: FieldRef<"OwnerLoginSession", 'String'>
    readonly userAgent: FieldRef<"OwnerLoginSession", 'String'>
    readonly browser: FieldRef<"OwnerLoginSession", 'String'>
    readonly os: FieldRef<"OwnerLoginSession", 'String'>
    readonly device: FieldRef<"OwnerLoginSession", 'String'>
    readonly country: FieldRef<"OwnerLoginSession", 'String'>
    readonly city: FieldRef<"OwnerLoginSession", 'String'>
    readonly latitude: FieldRef<"OwnerLoginSession", 'Float'>
    readonly longitude: FieldRef<"OwnerLoginSession", 'Float'>
    readonly isSuccessful: FieldRef<"OwnerLoginSession", 'Boolean'>
    readonly loginAt: FieldRef<"OwnerLoginSession", 'DateTime'>
    readonly timezone: FieldRef<"OwnerLoginSession", 'String'>
    readonly isp: FieldRef<"OwnerLoginSession", 'String'>
    readonly region: FieldRef<"OwnerLoginSession", 'String'>
    readonly deviceType: FieldRef<"OwnerLoginSession", 'String'>
    readonly deviceModel: FieldRef<"OwnerLoginSession", 'String'>
    readonly browserName: FieldRef<"OwnerLoginSession", 'String'>
    readonly browserVersion: FieldRef<"OwnerLoginSession", 'String'>
    readonly osName: FieldRef<"OwnerLoginSession", 'String'>
    readonly osVersion: FieldRef<"OwnerLoginSession", 'String'>
    readonly countryCode: FieldRef<"OwnerLoginSession", 'String'>
    readonly regionCode: FieldRef<"OwnerLoginSession", 'String'>
    readonly postal: FieldRef<"OwnerLoginSession", 'String'>
    readonly currency: FieldRef<"OwnerLoginSession", 'String'>
    readonly currencyName: FieldRef<"OwnerLoginSession", 'String'>
    readonly languages: FieldRef<"OwnerLoginSession", 'String'>
    readonly countryPopulation: FieldRef<"OwnerLoginSession", 'Int'>
    readonly countryArea: FieldRef<"OwnerLoginSession", 'Int'>
    readonly countryCapital: FieldRef<"OwnerLoginSession", 'String'>
    readonly continent: FieldRef<"OwnerLoginSession", 'String'>
    readonly isEu: FieldRef<"OwnerLoginSession", 'Boolean'>
    readonly callingCode: FieldRef<"OwnerLoginSession", 'String'>
    readonly utcOffset: FieldRef<"OwnerLoginSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OwnerLoginSession findUnique
   */
  export type OwnerLoginSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession findUniqueOrThrow
   */
  export type OwnerLoginSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession findFirst
   */
  export type OwnerLoginSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerLoginSessions.
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerLoginSessions.
     */
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * OwnerLoginSession findFirstOrThrow
   */
  export type OwnerLoginSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSession to fetch.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OwnerLoginSessions.
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OwnerLoginSessions.
     */
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * OwnerLoginSession findMany
   */
  export type OwnerLoginSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter, which OwnerLoginSessions to fetch.
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OwnerLoginSessions to fetch.
     */
    orderBy?: OwnerLoginSessionOrderByWithRelationInput | OwnerLoginSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OwnerLoginSessions.
     */
    cursor?: OwnerLoginSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OwnerLoginSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OwnerLoginSessions.
     */
    skip?: number
    distinct?: OwnerLoginSessionScalarFieldEnum | OwnerLoginSessionScalarFieldEnum[]
  }

  /**
   * OwnerLoginSession create
   */
  export type OwnerLoginSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a OwnerLoginSession.
     */
    data: XOR<OwnerLoginSessionCreateInput, OwnerLoginSessionUncheckedCreateInput>
  }

  /**
   * OwnerLoginSession createMany
   */
  export type OwnerLoginSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OwnerLoginSessions.
     */
    data: OwnerLoginSessionCreateManyInput | OwnerLoginSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OwnerLoginSession createManyAndReturn
   */
  export type OwnerLoginSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * The data used to create many OwnerLoginSessions.
     */
    data: OwnerLoginSessionCreateManyInput | OwnerLoginSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerLoginSession update
   */
  export type OwnerLoginSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a OwnerLoginSession.
     */
    data: XOR<OwnerLoginSessionUpdateInput, OwnerLoginSessionUncheckedUpdateInput>
    /**
     * Choose, which OwnerLoginSession to update.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession updateMany
   */
  export type OwnerLoginSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OwnerLoginSessions.
     */
    data: XOR<OwnerLoginSessionUpdateManyMutationInput, OwnerLoginSessionUncheckedUpdateManyInput>
    /**
     * Filter which OwnerLoginSessions to update
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * Limit how many OwnerLoginSessions to update.
     */
    limit?: number
  }

  /**
   * OwnerLoginSession updateManyAndReturn
   */
  export type OwnerLoginSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * The data used to update OwnerLoginSessions.
     */
    data: XOR<OwnerLoginSessionUpdateManyMutationInput, OwnerLoginSessionUncheckedUpdateManyInput>
    /**
     * Filter which OwnerLoginSessions to update
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * Limit how many OwnerLoginSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OwnerLoginSession upsert
   */
  export type OwnerLoginSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the OwnerLoginSession to update in case it exists.
     */
    where: OwnerLoginSessionWhereUniqueInput
    /**
     * In case the OwnerLoginSession found by the `where` argument doesn't exist, create a new OwnerLoginSession with this data.
     */
    create: XOR<OwnerLoginSessionCreateInput, OwnerLoginSessionUncheckedCreateInput>
    /**
     * In case the OwnerLoginSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerLoginSessionUpdateInput, OwnerLoginSessionUncheckedUpdateInput>
  }

  /**
   * OwnerLoginSession delete
   */
  export type OwnerLoginSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
    /**
     * Filter which OwnerLoginSession to delete.
     */
    where: OwnerLoginSessionWhereUniqueInput
  }

  /**
   * OwnerLoginSession deleteMany
   */
  export type OwnerLoginSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OwnerLoginSessions to delete
     */
    where?: OwnerLoginSessionWhereInput
    /**
     * Limit how many OwnerLoginSessions to delete.
     */
    limit?: number
  }

  /**
   * OwnerLoginSession without action
   */
  export type OwnerLoginSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerLoginSession
     */
    select?: OwnerLoginSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OwnerLoginSession
     */
    omit?: OwnerLoginSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerLoginSessionInclude<ExtArgs> | null
  }


  /**
   * Model FormDraft
   */

  export type AggregateFormDraft = {
    _count: FormDraftCountAggregateOutputType | null
    _min: FormDraftMinAggregateOutputType | null
    _max: FormDraftMaxAggregateOutputType | null
  }

  export type FormDraftMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    country: string | null
    preferredFood: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormDraftMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    country: string | null
    preferredFood: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormDraftCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    phoneNumber: number
    email: number
    city: number
    street: number
    postalCode: number
    houseNumber: number
    country: number
    preferredFood: number
    feedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormDraftMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    country?: true
    preferredFood?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormDraftMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    country?: true
    preferredFood?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormDraftCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    phoneNumber?: true
    email?: true
    city?: true
    street?: true
    postalCode?: true
    houseNumber?: true
    country?: true
    preferredFood?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormDraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormDraft to aggregate.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormDrafts
    **/
    _count?: true | FormDraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormDraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormDraftMaxAggregateInputType
  }

  export type GetFormDraftAggregateType<T extends FormDraftAggregateArgs> = {
        [P in keyof T & keyof AggregateFormDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormDraft[P]>
      : GetScalarType<T[P], AggregateFormDraft[P]>
  }




  export type FormDraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormDraftWhereInput
    orderBy?: FormDraftOrderByWithAggregationInput | FormDraftOrderByWithAggregationInput[]
    by: FormDraftScalarFieldEnum[] | FormDraftScalarFieldEnum
    having?: FormDraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormDraftCountAggregateInputType | true
    _min?: FormDraftMinAggregateInputType
    _max?: FormDraftMaxAggregateInputType
  }

  export type FormDraftGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    phoneNumber: string | null
    email: string | null
    city: string | null
    street: string | null
    postalCode: string | null
    houseNumber: string | null
    country: string | null
    preferredFood: string | null
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    _count: FormDraftCountAggregateOutputType | null
    _min: FormDraftMinAggregateOutputType | null
    _max: FormDraftMaxAggregateOutputType | null
  }

  type GetFormDraftGroupByPayload<T extends FormDraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormDraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormDraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormDraftGroupByOutputType[P]>
            : GetScalarType<T[P], FormDraftGroupByOutputType[P]>
        }
      >
    >


  export type FormDraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formDraft"]>

  export type FormDraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formDraft"]>

  export type FormDraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["formDraft"]>

  export type FormDraftSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    phoneNumber?: boolean
    email?: boolean
    city?: boolean
    street?: boolean
    postalCode?: boolean
    houseNumber?: boolean
    country?: boolean
    preferredFood?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormDraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "phoneNumber" | "email" | "city" | "street" | "postalCode" | "houseNumber" | "country" | "preferredFood" | "feedback" | "createdAt" | "updatedAt", ExtArgs["result"]["formDraft"]>

  export type $FormDraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormDraft"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      phoneNumber: string | null
      email: string | null
      city: string | null
      street: string | null
      postalCode: string | null
      houseNumber: string | null
      country: string | null
      preferredFood: string | null
      feedback: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formDraft"]>
    composites: {}
  }

  type FormDraftGetPayload<S extends boolean | null | undefined | FormDraftDefaultArgs> = $Result.GetResult<Prisma.$FormDraftPayload, S>

  type FormDraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormDraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormDraftCountAggregateInputType | true
    }

  export interface FormDraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormDraft'], meta: { name: 'FormDraft' } }
    /**
     * Find zero or one FormDraft that matches the filter.
     * @param {FormDraftFindUniqueArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormDraftFindUniqueArgs>(args: SelectSubset<T, FormDraftFindUniqueArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormDraft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormDraftFindUniqueOrThrowArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormDraftFindUniqueOrThrowArgs>(args: SelectSubset<T, FormDraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormDraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftFindFirstArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormDraftFindFirstArgs>(args?: SelectSubset<T, FormDraftFindFirstArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormDraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftFindFirstOrThrowArgs} args - Arguments to find a FormDraft
     * @example
     * // Get one FormDraft
     * const formDraft = await prisma.formDraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormDraftFindFirstOrThrowArgs>(args?: SelectSubset<T, FormDraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormDrafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormDrafts
     * const formDrafts = await prisma.formDraft.findMany()
     * 
     * // Get first 10 FormDrafts
     * const formDrafts = await prisma.formDraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formDraftWithIdOnly = await prisma.formDraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormDraftFindManyArgs>(args?: SelectSubset<T, FormDraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormDraft.
     * @param {FormDraftCreateArgs} args - Arguments to create a FormDraft.
     * @example
     * // Create one FormDraft
     * const FormDraft = await prisma.formDraft.create({
     *   data: {
     *     // ... data to create a FormDraft
     *   }
     * })
     * 
     */
    create<T extends FormDraftCreateArgs>(args: SelectSubset<T, FormDraftCreateArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormDrafts.
     * @param {FormDraftCreateManyArgs} args - Arguments to create many FormDrafts.
     * @example
     * // Create many FormDrafts
     * const formDraft = await prisma.formDraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormDraftCreateManyArgs>(args?: SelectSubset<T, FormDraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormDrafts and returns the data saved in the database.
     * @param {FormDraftCreateManyAndReturnArgs} args - Arguments to create many FormDrafts.
     * @example
     * // Create many FormDrafts
     * const formDraft = await prisma.formDraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormDrafts and only return the `id`
     * const formDraftWithIdOnly = await prisma.formDraft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormDraftCreateManyAndReturnArgs>(args?: SelectSubset<T, FormDraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormDraft.
     * @param {FormDraftDeleteArgs} args - Arguments to delete one FormDraft.
     * @example
     * // Delete one FormDraft
     * const FormDraft = await prisma.formDraft.delete({
     *   where: {
     *     // ... filter to delete one FormDraft
     *   }
     * })
     * 
     */
    delete<T extends FormDraftDeleteArgs>(args: SelectSubset<T, FormDraftDeleteArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormDraft.
     * @param {FormDraftUpdateArgs} args - Arguments to update one FormDraft.
     * @example
     * // Update one FormDraft
     * const formDraft = await prisma.formDraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormDraftUpdateArgs>(args: SelectSubset<T, FormDraftUpdateArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormDrafts.
     * @param {FormDraftDeleteManyArgs} args - Arguments to filter FormDrafts to delete.
     * @example
     * // Delete a few FormDrafts
     * const { count } = await prisma.formDraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDraftDeleteManyArgs>(args?: SelectSubset<T, FormDraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormDrafts
     * const formDraft = await prisma.formDraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormDraftUpdateManyArgs>(args: SelectSubset<T, FormDraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormDrafts and returns the data updated in the database.
     * @param {FormDraftUpdateManyAndReturnArgs} args - Arguments to update many FormDrafts.
     * @example
     * // Update many FormDrafts
     * const formDraft = await prisma.formDraft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormDrafts and only return the `id`
     * const formDraftWithIdOnly = await prisma.formDraft.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormDraftUpdateManyAndReturnArgs>(args: SelectSubset<T, FormDraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormDraft.
     * @param {FormDraftUpsertArgs} args - Arguments to update or create a FormDraft.
     * @example
     * // Update or create a FormDraft
     * const formDraft = await prisma.formDraft.upsert({
     *   create: {
     *     // ... data to create a FormDraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormDraft we want to update
     *   }
     * })
     */
    upsert<T extends FormDraftUpsertArgs>(args: SelectSubset<T, FormDraftUpsertArgs<ExtArgs>>): Prisma__FormDraftClient<$Result.GetResult<Prisma.$FormDraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormDrafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftCountArgs} args - Arguments to filter FormDrafts to count.
     * @example
     * // Count the number of FormDrafts
     * const count = await prisma.formDraft.count({
     *   where: {
     *     // ... the filter for the FormDrafts we want to count
     *   }
     * })
    **/
    count<T extends FormDraftCountArgs>(
      args?: Subset<T, FormDraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormDraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormDraftAggregateArgs>(args: Subset<T, FormDraftAggregateArgs>): Prisma.PrismaPromise<GetFormDraftAggregateType<T>>

    /**
     * Group by FormDraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormDraftGroupByArgs} args - Group by arguments.
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
      T extends FormDraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormDraftGroupByArgs['orderBy'] }
        : { orderBy?: FormDraftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormDraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormDraft model
   */
  readonly fields: FormDraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormDraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormDraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FormDraft model
   */
  interface FormDraftFieldRefs {
    readonly id: FieldRef<"FormDraft", 'String'>
    readonly firstName: FieldRef<"FormDraft", 'String'>
    readonly lastName: FieldRef<"FormDraft", 'String'>
    readonly phoneNumber: FieldRef<"FormDraft", 'String'>
    readonly email: FieldRef<"FormDraft", 'String'>
    readonly city: FieldRef<"FormDraft", 'String'>
    readonly street: FieldRef<"FormDraft", 'String'>
    readonly postalCode: FieldRef<"FormDraft", 'String'>
    readonly houseNumber: FieldRef<"FormDraft", 'String'>
    readonly country: FieldRef<"FormDraft", 'String'>
    readonly preferredFood: FieldRef<"FormDraft", 'String'>
    readonly feedback: FieldRef<"FormDraft", 'String'>
    readonly createdAt: FieldRef<"FormDraft", 'DateTime'>
    readonly updatedAt: FieldRef<"FormDraft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormDraft findUnique
   */
  export type FormDraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft findUniqueOrThrow
   */
  export type FormDraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft findFirst
   */
  export type FormDraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormDrafts.
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormDrafts.
     */
    distinct?: FormDraftScalarFieldEnum | FormDraftScalarFieldEnum[]
  }

  /**
   * FormDraft findFirstOrThrow
   */
  export type FormDraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDraft to fetch.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormDrafts.
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormDrafts.
     */
    distinct?: FormDraftScalarFieldEnum | FormDraftScalarFieldEnum[]
  }

  /**
   * FormDraft findMany
   */
  export type FormDraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter, which FormDrafts to fetch.
     */
    where?: FormDraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormDrafts to fetch.
     */
    orderBy?: FormDraftOrderByWithRelationInput | FormDraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormDrafts.
     */
    cursor?: FormDraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormDrafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormDrafts.
     */
    skip?: number
    distinct?: FormDraftScalarFieldEnum | FormDraftScalarFieldEnum[]
  }

  /**
   * FormDraft create
   */
  export type FormDraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data needed to create a FormDraft.
     */
    data: XOR<FormDraftCreateInput, FormDraftUncheckedCreateInput>
  }

  /**
   * FormDraft createMany
   */
  export type FormDraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormDrafts.
     */
    data: FormDraftCreateManyInput | FormDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormDraft createManyAndReturn
   */
  export type FormDraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data used to create many FormDrafts.
     */
    data: FormDraftCreateManyInput | FormDraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormDraft update
   */
  export type FormDraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data needed to update a FormDraft.
     */
    data: XOR<FormDraftUpdateInput, FormDraftUncheckedUpdateInput>
    /**
     * Choose, which FormDraft to update.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft updateMany
   */
  export type FormDraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormDrafts.
     */
    data: XOR<FormDraftUpdateManyMutationInput, FormDraftUncheckedUpdateManyInput>
    /**
     * Filter which FormDrafts to update
     */
    where?: FormDraftWhereInput
    /**
     * Limit how many FormDrafts to update.
     */
    limit?: number
  }

  /**
   * FormDraft updateManyAndReturn
   */
  export type FormDraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The data used to update FormDrafts.
     */
    data: XOR<FormDraftUpdateManyMutationInput, FormDraftUncheckedUpdateManyInput>
    /**
     * Filter which FormDrafts to update
     */
    where?: FormDraftWhereInput
    /**
     * Limit how many FormDrafts to update.
     */
    limit?: number
  }

  /**
   * FormDraft upsert
   */
  export type FormDraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * The filter to search for the FormDraft to update in case it exists.
     */
    where: FormDraftWhereUniqueInput
    /**
     * In case the FormDraft found by the `where` argument doesn't exist, create a new FormDraft with this data.
     */
    create: XOR<FormDraftCreateInput, FormDraftUncheckedCreateInput>
    /**
     * In case the FormDraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormDraftUpdateInput, FormDraftUncheckedUpdateInput>
  }

  /**
   * FormDraft delete
   */
  export type FormDraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
    /**
     * Filter which FormDraft to delete.
     */
    where: FormDraftWhereUniqueInput
  }

  /**
   * FormDraft deleteMany
   */
  export type FormDraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormDrafts to delete
     */
    where?: FormDraftWhereInput
    /**
     * Limit how many FormDrafts to delete.
     */
    limit?: number
  }

  /**
   * FormDraft without action
   */
  export type FormDraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormDraft
     */
    select?: FormDraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormDraft
     */
    omit?: FormDraftOmit<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    birthDate: 'birthDate',
    city: 'city',
    street: 'street',
    postalCode: 'postalCode',
    houseNumber: 'houseNumber',
    preferredFood: 'preferredFood',
    feedback: 'feedback',
    country: 'country',
    discountCode: 'discountCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerificationCode: 'emailVerificationCode',
    isEmailVerified: 'isEmailVerified'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    accessCode: 'accessCode',
    password: 'password',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerificationCode: 'emailVerificationCode',
    isEmailVerified: 'isEmailVerified'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const MessageSubscriptionScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    subscribed: 'subscribed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageSubscriptionScalarFieldEnum = (typeof MessageSubscriptionScalarFieldEnum)[keyof typeof MessageSubscriptionScalarFieldEnum]


  export const BroadcastMessageScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    createdAt: 'createdAt',
    scheduledFor: 'scheduledFor'
  };

  export type BroadcastMessageScalarFieldEnum = (typeof BroadcastMessageScalarFieldEnum)[keyof typeof BroadcastMessageScalarFieldEnum]


  export const MessageDeliveryScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    subscriptionId: 'subscriptionId',
    phoneNumber: 'phoneNumber',
    status: 'status',
    sentAt: 'sentAt',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageDeliveryScalarFieldEnum = (typeof MessageDeliveryScalarFieldEnum)[keyof typeof MessageDeliveryScalarFieldEnum]


  export const OwnerLoginSessionScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    deviceInfo: 'deviceInfo',
    ipAddress: 'ipAddress',
    location: 'location',
    userAgent: 'userAgent',
    browser: 'browser',
    os: 'os',
    device: 'device',
    country: 'country',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    isSuccessful: 'isSuccessful',
    loginAt: 'loginAt',
    timezone: 'timezone',
    isp: 'isp',
    region: 'region',
    deviceType: 'deviceType',
    deviceModel: 'deviceModel',
    browserName: 'browserName',
    browserVersion: 'browserVersion',
    osName: 'osName',
    osVersion: 'osVersion',
    countryCode: 'countryCode',
    regionCode: 'regionCode',
    postal: 'postal',
    currency: 'currency',
    currencyName: 'currencyName',
    languages: 'languages',
    countryPopulation: 'countryPopulation',
    countryArea: 'countryArea',
    countryCapital: 'countryCapital',
    continent: 'continent',
    isEu: 'isEu',
    callingCode: 'callingCode',
    utcOffset: 'utcOffset'
  };

  export type OwnerLoginSessionScalarFieldEnum = (typeof OwnerLoginSessionScalarFieldEnum)[keyof typeof OwnerLoginSessionScalarFieldEnum]


  export const FormDraftScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    phoneNumber: 'phoneNumber',
    email: 'email',
    city: 'city',
    street: 'street',
    postalCode: 'postalCode',
    houseNumber: 'houseNumber',
    country: 'country',
    preferredFood: 'preferredFood',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormDraftScalarFieldEnum = (typeof FormDraftScalarFieldEnum)[keyof typeof FormDraftScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    phoneNumber?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    birthDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    street?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    houseNumber?: StringNullableFilter<"Customer"> | string | null
    preferredFood?: StringNullableFilter<"Customer"> | string | null
    feedback?: StringNullableFilter<"Customer"> | string | null
    country?: StringNullableFilter<"Customer"> | string | null
    discountCode?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    emailVerificationCode?: StringNullableFilter<"Customer"> | string | null
    isEmailVerified?: BoolFilter<"Customer"> | boolean
    subscriptions?: MessageSubscriptionListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    subscriptions?: MessageSubscriptionOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    discountCode?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    firstName?: StringFilter<"Customer"> | string
    lastName?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    birthDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    street?: StringNullableFilter<"Customer"> | string | null
    postalCode?: StringNullableFilter<"Customer"> | string | null
    houseNumber?: StringNullableFilter<"Customer"> | string | null
    preferredFood?: StringNullableFilter<"Customer"> | string | null
    feedback?: StringNullableFilter<"Customer"> | string | null
    country?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    emailVerificationCode?: StringNullableFilter<"Customer"> | string | null
    isEmailVerified?: BoolFilter<"Customer"> | boolean
    subscriptions?: MessageSubscriptionListRelationFilter
  }, "id" | "phoneNumber" | "discountCode">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    firstName?: StringWithAggregatesFilter<"Customer"> | string
    lastName?: StringWithAggregatesFilter<"Customer"> | string
    phoneNumber?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    street?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    houseNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    preferredFood?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    country?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    discountCode?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    emailVerificationCode?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"Customer"> | boolean
  }

  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    email?: StringFilter<"Owner"> | string
    name?: StringFilter<"Owner"> | string
    accessCode?: StringFilter<"Owner"> | string
    password?: StringFilter<"Owner"> | string
    isActive?: BoolFilter<"Owner"> | boolean
    lastLogin?: DateTimeNullableFilter<"Owner"> | Date | string | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    emailVerificationCode?: StringNullableFilter<"Owner"> | string | null
    isEmailVerified?: BoolFilter<"Owner"> | boolean
    loginSessions?: OwnerLoginSessionListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    loginSessions?: OwnerLoginSessionOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    accessCode?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    name?: StringFilter<"Owner"> | string
    password?: StringFilter<"Owner"> | string
    isActive?: BoolFilter<"Owner"> | boolean
    lastLogin?: DateTimeNullableFilter<"Owner"> | Date | string | null
    createdAt?: DateTimeFilter<"Owner"> | Date | string
    updatedAt?: DateTimeFilter<"Owner"> | Date | string
    emailVerificationCode?: StringNullableFilter<"Owner"> | string | null
    isEmailVerified?: BoolFilter<"Owner"> | boolean
    loginSessions?: OwnerLoginSessionListRelationFilter
  }, "id" | "email" | "accessCode">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrderInput | SortOrder
    isEmailVerified?: SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    email?: StringWithAggregatesFilter<"Owner"> | string
    name?: StringWithAggregatesFilter<"Owner"> | string
    accessCode?: StringWithAggregatesFilter<"Owner"> | string
    password?: StringWithAggregatesFilter<"Owner"> | string
    isActive?: BoolWithAggregatesFilter<"Owner"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Owner"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Owner"> | Date | string
    emailVerificationCode?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    isEmailVerified?: BoolWithAggregatesFilter<"Owner"> | boolean
  }

  export type MessageSubscriptionWhereInput = {
    AND?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    OR?: MessageSubscriptionWhereInput[]
    NOT?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    id?: StringFilter<"MessageSubscription"> | string
    customerId?: StringFilter<"MessageSubscription"> | string
    subscribed?: BoolFilter<"MessageSubscription"> | boolean
    createdAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    deliveries?: MessageDeliveryListRelationFilter
  }

  export type MessageSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    deliveries?: MessageDeliveryOrderByRelationAggregateInput
  }

  export type MessageSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    OR?: MessageSubscriptionWhereInput[]
    NOT?: MessageSubscriptionWhereInput | MessageSubscriptionWhereInput[]
    customerId?: StringFilter<"MessageSubscription"> | string
    subscribed?: BoolFilter<"MessageSubscription"> | boolean
    createdAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    deliveries?: MessageDeliveryListRelationFilter
  }, "id">

  export type MessageSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageSubscriptionCountOrderByAggregateInput
    _max?: MessageSubscriptionMaxOrderByAggregateInput
    _min?: MessageSubscriptionMinOrderByAggregateInput
  }

  export type MessageSubscriptionScalarWhereWithAggregatesInput = {
    AND?: MessageSubscriptionScalarWhereWithAggregatesInput | MessageSubscriptionScalarWhereWithAggregatesInput[]
    OR?: MessageSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: MessageSubscriptionScalarWhereWithAggregatesInput | MessageSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageSubscription"> | string
    customerId?: StringWithAggregatesFilter<"MessageSubscription"> | string
    subscribed?: BoolWithAggregatesFilter<"MessageSubscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MessageSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageSubscription"> | Date | string
  }

  export type BroadcastMessageWhereInput = {
    AND?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    OR?: BroadcastMessageWhereInput[]
    NOT?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    id?: StringFilter<"BroadcastMessage"> | string
    title?: StringFilter<"BroadcastMessage"> | string
    body?: StringFilter<"BroadcastMessage"> | string
    createdAt?: DateTimeFilter<"BroadcastMessage"> | Date | string
    scheduledFor?: DateTimeNullableFilter<"BroadcastMessage"> | Date | string | null
    deliveries?: MessageDeliveryListRelationFilter
  }

  export type BroadcastMessageOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    deliveries?: MessageDeliveryOrderByRelationAggregateInput
  }

  export type BroadcastMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    OR?: BroadcastMessageWhereInput[]
    NOT?: BroadcastMessageWhereInput | BroadcastMessageWhereInput[]
    title?: StringFilter<"BroadcastMessage"> | string
    body?: StringFilter<"BroadcastMessage"> | string
    createdAt?: DateTimeFilter<"BroadcastMessage"> | Date | string
    scheduledFor?: DateTimeNullableFilter<"BroadcastMessage"> | Date | string | null
    deliveries?: MessageDeliveryListRelationFilter
  }, "id">

  export type BroadcastMessageOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrderInput | SortOrder
    _count?: BroadcastMessageCountOrderByAggregateInput
    _max?: BroadcastMessageMaxOrderByAggregateInput
    _min?: BroadcastMessageMinOrderByAggregateInput
  }

  export type BroadcastMessageScalarWhereWithAggregatesInput = {
    AND?: BroadcastMessageScalarWhereWithAggregatesInput | BroadcastMessageScalarWhereWithAggregatesInput[]
    OR?: BroadcastMessageScalarWhereWithAggregatesInput[]
    NOT?: BroadcastMessageScalarWhereWithAggregatesInput | BroadcastMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    title?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    body?: StringWithAggregatesFilter<"BroadcastMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BroadcastMessage"> | Date | string
    scheduledFor?: DateTimeNullableWithAggregatesFilter<"BroadcastMessage"> | Date | string | null
  }

  export type MessageDeliveryWhereInput = {
    AND?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    OR?: MessageDeliveryWhereInput[]
    NOT?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    id?: StringFilter<"MessageDelivery"> | string
    messageId?: StringFilter<"MessageDelivery"> | string
    subscriptionId?: StringFilter<"MessageDelivery"> | string
    phoneNumber?: StringFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    message?: XOR<BroadcastMessageScalarRelationFilter, BroadcastMessageWhereInput>
    subscription?: XOR<MessageSubscriptionScalarRelationFilter, MessageSubscriptionWhereInput>
  }

  export type MessageDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    message?: BroadcastMessageOrderByWithRelationInput
    subscription?: MessageSubscriptionOrderByWithRelationInput
  }

  export type MessageDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    OR?: MessageDeliveryWhereInput[]
    NOT?: MessageDeliveryWhereInput | MessageDeliveryWhereInput[]
    messageId?: StringFilter<"MessageDelivery"> | string
    subscriptionId?: StringFilter<"MessageDelivery"> | string
    phoneNumber?: StringFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    message?: XOR<BroadcastMessageScalarRelationFilter, BroadcastMessageWhereInput>
    subscription?: XOR<MessageSubscriptionScalarRelationFilter, MessageSubscriptionWhereInput>
  }, "id">

  export type MessageDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageDeliveryCountOrderByAggregateInput
    _max?: MessageDeliveryMaxOrderByAggregateInput
    _min?: MessageDeliveryMinOrderByAggregateInput
  }

  export type MessageDeliveryScalarWhereWithAggregatesInput = {
    AND?: MessageDeliveryScalarWhereWithAggregatesInput | MessageDeliveryScalarWhereWithAggregatesInput[]
    OR?: MessageDeliveryScalarWhereWithAggregatesInput[]
    NOT?: MessageDeliveryScalarWhereWithAggregatesInput | MessageDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MessageDelivery"> | string
    messageId?: StringWithAggregatesFilter<"MessageDelivery"> | string
    subscriptionId?: StringWithAggregatesFilter<"MessageDelivery"> | string
    phoneNumber?: StringWithAggregatesFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusWithAggregatesFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableWithAggregatesFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageDelivery"> | Date | string
  }

  export type OwnerLoginSessionWhereInput = {
    AND?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    OR?: OwnerLoginSessionWhereInput[]
    NOT?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    id?: StringFilter<"OwnerLoginSession"> | string
    ownerId?: StringFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableFilter<"OwnerLoginSession"> | string | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }

  export type OwnerLoginSessionOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    deviceModel?: SortOrderInput | SortOrder
    browserName?: SortOrderInput | SortOrder
    browserVersion?: SortOrderInput | SortOrder
    osName?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    regionCode?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    currencyName?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    countryPopulation?: SortOrderInput | SortOrder
    countryArea?: SortOrderInput | SortOrder
    countryCapital?: SortOrderInput | SortOrder
    continent?: SortOrderInput | SortOrder
    isEu?: SortOrderInput | SortOrder
    callingCode?: SortOrderInput | SortOrder
    utcOffset?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
  }

  export type OwnerLoginSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    OR?: OwnerLoginSessionWhereInput[]
    NOT?: OwnerLoginSessionWhereInput | OwnerLoginSessionWhereInput[]
    ownerId?: StringFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableFilter<"OwnerLoginSession"> | string | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
  }, "id">

  export type OwnerLoginSessionOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrderInput | SortOrder
    isp?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    deviceType?: SortOrderInput | SortOrder
    deviceModel?: SortOrderInput | SortOrder
    browserName?: SortOrderInput | SortOrder
    browserVersion?: SortOrderInput | SortOrder
    osName?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    regionCode?: SortOrderInput | SortOrder
    postal?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    currencyName?: SortOrderInput | SortOrder
    languages?: SortOrderInput | SortOrder
    countryPopulation?: SortOrderInput | SortOrder
    countryArea?: SortOrderInput | SortOrder
    countryCapital?: SortOrderInput | SortOrder
    continent?: SortOrderInput | SortOrder
    isEu?: SortOrderInput | SortOrder
    callingCode?: SortOrderInput | SortOrder
    utcOffset?: SortOrderInput | SortOrder
    _count?: OwnerLoginSessionCountOrderByAggregateInput
    _avg?: OwnerLoginSessionAvgOrderByAggregateInput
    _max?: OwnerLoginSessionMaxOrderByAggregateInput
    _min?: OwnerLoginSessionMinOrderByAggregateInput
    _sum?: OwnerLoginSessionSumOrderByAggregateInput
  }

  export type OwnerLoginSessionScalarWhereWithAggregatesInput = {
    AND?: OwnerLoginSessionScalarWhereWithAggregatesInput | OwnerLoginSessionScalarWhereWithAggregatesInput[]
    OR?: OwnerLoginSessionScalarWhereWithAggregatesInput[]
    NOT?: OwnerLoginSessionScalarWhereWithAggregatesInput | OwnerLoginSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OwnerLoginSession"> | string
    ownerId?: StringWithAggregatesFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolWithAggregatesFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeWithAggregatesFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableWithAggregatesFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableWithAggregatesFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableWithAggregatesFilter<"OwnerLoginSession"> | string | null
  }

  export type FormDraftWhereInput = {
    AND?: FormDraftWhereInput | FormDraftWhereInput[]
    OR?: FormDraftWhereInput[]
    NOT?: FormDraftWhereInput | FormDraftWhereInput[]
    id?: StringFilter<"FormDraft"> | string
    firstName?: StringNullableFilter<"FormDraft"> | string | null
    lastName?: StringNullableFilter<"FormDraft"> | string | null
    phoneNumber?: StringNullableFilter<"FormDraft"> | string | null
    email?: StringNullableFilter<"FormDraft"> | string | null
    city?: StringNullableFilter<"FormDraft"> | string | null
    street?: StringNullableFilter<"FormDraft"> | string | null
    postalCode?: StringNullableFilter<"FormDraft"> | string | null
    houseNumber?: StringNullableFilter<"FormDraft"> | string | null
    country?: StringNullableFilter<"FormDraft"> | string | null
    preferredFood?: StringNullableFilter<"FormDraft"> | string | null
    feedback?: StringNullableFilter<"FormDraft"> | string | null
    createdAt?: DateTimeFilter<"FormDraft"> | Date | string
    updatedAt?: DateTimeFilter<"FormDraft"> | Date | string
  }

  export type FormDraftOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormDraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormDraftWhereInput | FormDraftWhereInput[]
    OR?: FormDraftWhereInput[]
    NOT?: FormDraftWhereInput | FormDraftWhereInput[]
    firstName?: StringNullableFilter<"FormDraft"> | string | null
    lastName?: StringNullableFilter<"FormDraft"> | string | null
    phoneNumber?: StringNullableFilter<"FormDraft"> | string | null
    email?: StringNullableFilter<"FormDraft"> | string | null
    city?: StringNullableFilter<"FormDraft"> | string | null
    street?: StringNullableFilter<"FormDraft"> | string | null
    postalCode?: StringNullableFilter<"FormDraft"> | string | null
    houseNumber?: StringNullableFilter<"FormDraft"> | string | null
    country?: StringNullableFilter<"FormDraft"> | string | null
    preferredFood?: StringNullableFilter<"FormDraft"> | string | null
    feedback?: StringNullableFilter<"FormDraft"> | string | null
    createdAt?: DateTimeFilter<"FormDraft"> | Date | string
    updatedAt?: DateTimeFilter<"FormDraft"> | Date | string
  }, "id">

  export type FormDraftOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    postalCode?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    preferredFood?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormDraftCountOrderByAggregateInput
    _max?: FormDraftMaxOrderByAggregateInput
    _min?: FormDraftMinOrderByAggregateInput
  }

  export type FormDraftScalarWhereWithAggregatesInput = {
    AND?: FormDraftScalarWhereWithAggregatesInput | FormDraftScalarWhereWithAggregatesInput[]
    OR?: FormDraftScalarWhereWithAggregatesInput[]
    NOT?: FormDraftScalarWhereWithAggregatesInput | FormDraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormDraft"> | string
    firstName?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    email?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    city?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    street?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    postalCode?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    houseNumber?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    country?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    preferredFood?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    feedback?: StringNullableWithAggregatesFilter<"FormDraft"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FormDraft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormDraft"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    country?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
    subscriptions?: MessageSubscriptionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    country?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
    subscriptions?: MessageSubscriptionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptions?: MessageSubscriptionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    subscriptions?: MessageSubscriptionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    country?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OwnerCreateInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
    loginSessions?: OwnerLoginSessionCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
    loginSessions?: OwnerLoginSessionUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    loginSessions?: OwnerLoginSessionUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    loginSessions?: OwnerLoginSessionUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageSubscriptionCreateInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
    deliveries?: MessageDeliveryCreateNestedManyWithoutSubscriptionInput
  }

  export type MessageSubscriptionUncheckedCreateInput = {
    id?: string
    customerId: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: MessageDeliveryUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type MessageSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
    deliveries?: MessageDeliveryUpdateManyWithoutSubscriptionNestedInput
  }

  export type MessageSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: MessageDeliveryUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type MessageSubscriptionCreateManyInput = {
    id?: string
    customerId: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BroadcastMessageCreateInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
    deliveries?: MessageDeliveryCreateNestedManyWithoutMessageInput
  }

  export type BroadcastMessageUncheckedCreateInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
    deliveries?: MessageDeliveryUncheckedCreateNestedManyWithoutMessageInput
  }

  export type BroadcastMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: MessageDeliveryUpdateManyWithoutMessageNestedInput
  }

  export type BroadcastMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveries?: MessageDeliveryUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type BroadcastMessageCreateManyInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
  }

  export type BroadcastMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BroadcastMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageDeliveryCreateInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    message: BroadcastMessageCreateNestedOneWithoutDeliveriesInput
    subscription: MessageSubscriptionCreateNestedOneWithoutDeliveriesInput
  }

  export type MessageDeliveryUncheckedCreateInput = {
    id?: string
    messageId: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: BroadcastMessageUpdateOneRequiredWithoutDeliveriesNestedInput
    subscription?: MessageSubscriptionUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type MessageDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryCreateManyInput = {
    id?: string
    messageId: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerLoginSessionCreateInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
    owner: OwnerCreateNestedOneWithoutLoginSessionsInput
  }

  export type OwnerLoginSessionUncheckedCreateInput = {
    id?: string
    ownerId: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: OwnerUpdateOneRequiredWithoutLoginSessionsNestedInput
  }

  export type OwnerLoginSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionCreateManyInput = {
    id?: string
    ownerId: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormDraftCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    email?: string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    country?: string | null
    preferredFood?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormDraftUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    email?: string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    country?: string | null
    preferredFood?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormDraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormDraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormDraftCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    phoneNumber?: string | null
    email?: string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    country?: string | null
    preferredFood?: string | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormDraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormDraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MessageSubscriptionListRelationFilter = {
    every?: MessageSubscriptionWhereInput
    some?: MessageSubscriptionWhereInput
    none?: MessageSubscriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    country?: SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    country?: SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    country?: SortOrder
    discountCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OwnerLoginSessionListRelationFilter = {
    every?: OwnerLoginSessionWhereInput
    some?: OwnerLoginSessionWhereInput
    none?: OwnerLoginSessionWhereInput
  }

  export type OwnerLoginSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    accessCode?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerificationCode?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type MessageDeliveryListRelationFilter = {
    every?: MessageDeliveryWhereInput
    some?: MessageDeliveryWhereInput
    none?: MessageDeliveryWhereInput
  }

  export type MessageDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    subscribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BroadcastMessageCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrder
  }

  export type BroadcastMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrder
  }

  export type BroadcastMessageMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    scheduledFor?: SortOrder
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type BroadcastMessageScalarRelationFilter = {
    is?: BroadcastMessageWhereInput
    isNot?: BroadcastMessageWhereInput
  }

  export type MessageSubscriptionScalarRelationFilter = {
    is?: MessageSubscriptionWhereInput
    isNot?: MessageSubscriptionWhereInput
  }

  export type MessageDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    subscriptionId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type OwnerLoginSessionCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    userAgent?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    deviceModel?: SortOrder
    browserName?: SortOrder
    browserVersion?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    countryCode?: SortOrder
    regionCode?: SortOrder
    postal?: SortOrder
    currency?: SortOrder
    currencyName?: SortOrder
    languages?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
    countryCapital?: SortOrder
    continent?: SortOrder
    isEu?: SortOrder
    callingCode?: SortOrder
    utcOffset?: SortOrder
  }

  export type OwnerLoginSessionAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
  }

  export type OwnerLoginSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    userAgent?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    deviceModel?: SortOrder
    browserName?: SortOrder
    browserVersion?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    countryCode?: SortOrder
    regionCode?: SortOrder
    postal?: SortOrder
    currency?: SortOrder
    currencyName?: SortOrder
    languages?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
    countryCapital?: SortOrder
    continent?: SortOrder
    isEu?: SortOrder
    callingCode?: SortOrder
    utcOffset?: SortOrder
  }

  export type OwnerLoginSessionMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    deviceInfo?: SortOrder
    ipAddress?: SortOrder
    location?: SortOrder
    userAgent?: SortOrder
    browser?: SortOrder
    os?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isSuccessful?: SortOrder
    loginAt?: SortOrder
    timezone?: SortOrder
    isp?: SortOrder
    region?: SortOrder
    deviceType?: SortOrder
    deviceModel?: SortOrder
    browserName?: SortOrder
    browserVersion?: SortOrder
    osName?: SortOrder
    osVersion?: SortOrder
    countryCode?: SortOrder
    regionCode?: SortOrder
    postal?: SortOrder
    currency?: SortOrder
    currencyName?: SortOrder
    languages?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
    countryCapital?: SortOrder
    continent?: SortOrder
    isEu?: SortOrder
    callingCode?: SortOrder
    utcOffset?: SortOrder
  }

  export type OwnerLoginSessionSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    countryPopulation?: SortOrder
    countryArea?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FormDraftCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    country?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormDraftMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    country?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormDraftMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    city?: SortOrder
    street?: SortOrder
    postalCode?: SortOrder
    houseNumber?: SortOrder
    country?: SortOrder
    preferredFood?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageSubscriptionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput> | MessageSubscriptionCreateWithoutCustomerInput[] | MessageSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput | MessageSubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: MessageSubscriptionCreateManyCustomerInputEnvelope
    connect?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
  }

  export type MessageSubscriptionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput> | MessageSubscriptionCreateWithoutCustomerInput[] | MessageSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput | MessageSubscriptionCreateOrConnectWithoutCustomerInput[]
    createMany?: MessageSubscriptionCreateManyCustomerInputEnvelope
    connect?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MessageSubscriptionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput> | MessageSubscriptionCreateWithoutCustomerInput[] | MessageSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput | MessageSubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: MessageSubscriptionUpsertWithWhereUniqueWithoutCustomerInput | MessageSubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MessageSubscriptionCreateManyCustomerInputEnvelope
    set?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    disconnect?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    delete?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    connect?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    update?: MessageSubscriptionUpdateWithWhereUniqueWithoutCustomerInput | MessageSubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MessageSubscriptionUpdateManyWithWhereWithoutCustomerInput | MessageSubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MessageSubscriptionScalarWhereInput | MessageSubscriptionScalarWhereInput[]
  }

  export type MessageSubscriptionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput> | MessageSubscriptionCreateWithoutCustomerInput[] | MessageSubscriptionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutCustomerInput | MessageSubscriptionCreateOrConnectWithoutCustomerInput[]
    upsert?: MessageSubscriptionUpsertWithWhereUniqueWithoutCustomerInput | MessageSubscriptionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: MessageSubscriptionCreateManyCustomerInputEnvelope
    set?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    disconnect?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    delete?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    connect?: MessageSubscriptionWhereUniqueInput | MessageSubscriptionWhereUniqueInput[]
    update?: MessageSubscriptionUpdateWithWhereUniqueWithoutCustomerInput | MessageSubscriptionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: MessageSubscriptionUpdateManyWithWhereWithoutCustomerInput | MessageSubscriptionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: MessageSubscriptionScalarWhereInput | MessageSubscriptionScalarWhereInput[]
  }

  export type OwnerLoginSessionCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
  }

  export type OwnerLoginSessionUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
  }

  export type OwnerLoginSessionUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    upsert?: OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    set?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    disconnect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    delete?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    update?: OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput | OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
  }

  export type OwnerLoginSessionUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput> | OwnerLoginSessionCreateWithoutOwnerInput[] | OwnerLoginSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OwnerLoginSessionCreateOrConnectWithoutOwnerInput | OwnerLoginSessionCreateOrConnectWithoutOwnerInput[]
    upsert?: OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OwnerLoginSessionCreateManyOwnerInputEnvelope
    set?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    disconnect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    delete?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    connect?: OwnerLoginSessionWhereUniqueInput | OwnerLoginSessionWhereUniqueInput[]
    update?: OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput | OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput | OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type MessageDeliveryCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type MessageDeliveryUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSubscriptionsInput
    upsert?: CustomerUpsertWithoutSubscriptionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSubscriptionsInput, CustomerUpdateWithoutSubscriptionsInput>, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type MessageDeliveryUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput | MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput> | MessageDeliveryCreateWithoutSubscriptionInput[] | MessageDeliveryUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutSubscriptionInput | MessageDeliveryCreateOrConnectWithoutSubscriptionInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: MessageDeliveryCreateManySubscriptionInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput | MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput | MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type MessageDeliveryCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type MessageDeliveryUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
  }

  export type MessageDeliveryUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput | MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput | MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutMessageInput | MessageDeliveryUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput> | MessageDeliveryCreateWithoutMessageInput[] | MessageDeliveryUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageDeliveryCreateOrConnectWithoutMessageInput | MessageDeliveryCreateOrConnectWithoutMessageInput[]
    upsert?: MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput | MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageDeliveryCreateManyMessageInputEnvelope
    set?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    disconnect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    delete?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    connect?: MessageDeliveryWhereUniqueInput | MessageDeliveryWhereUniqueInput[]
    update?: MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput | MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageDeliveryUpdateManyWithWhereWithoutMessageInput | MessageDeliveryUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
  }

  export type BroadcastMessageCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutDeliveriesInput
    connect?: BroadcastMessageWhereUniqueInput
  }

  export type MessageSubscriptionCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutDeliveriesInput
    connect?: MessageSubscriptionWhereUniqueInput
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type BroadcastMessageUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: BroadcastMessageCreateOrConnectWithoutDeliveriesInput
    upsert?: BroadcastMessageUpsertWithoutDeliveriesInput
    connect?: BroadcastMessageWhereUniqueInput
    update?: XOR<XOR<BroadcastMessageUpdateToOneWithWhereWithoutDeliveriesInput, BroadcastMessageUpdateWithoutDeliveriesInput>, BroadcastMessageUncheckedUpdateWithoutDeliveriesInput>
  }

  export type MessageSubscriptionUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: MessageSubscriptionCreateOrConnectWithoutDeliveriesInput
    upsert?: MessageSubscriptionUpsertWithoutDeliveriesInput
    connect?: MessageSubscriptionWhereUniqueInput
    update?: XOR<XOR<MessageSubscriptionUpdateToOneWithWhereWithoutDeliveriesInput, MessageSubscriptionUpdateWithoutDeliveriesInput>, MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput>
  }

  export type OwnerCreateNestedOneWithoutLoginSessionsInput = {
    create?: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutLoginSessionsInput
    connect?: OwnerWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type OwnerUpdateOneRequiredWithoutLoginSessionsNestedInput = {
    create?: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutLoginSessionsInput
    upsert?: OwnerUpsertWithoutLoginSessionsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutLoginSessionsInput, OwnerUpdateWithoutLoginSessionsInput>, OwnerUncheckedUpdateWithoutLoginSessionsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MessageSubscriptionCreateWithoutCustomerInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: MessageDeliveryCreateNestedManyWithoutSubscriptionInput
  }

  export type MessageSubscriptionUncheckedCreateWithoutCustomerInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveries?: MessageDeliveryUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type MessageSubscriptionCreateOrConnectWithoutCustomerInput = {
    where: MessageSubscriptionWhereUniqueInput
    create: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type MessageSubscriptionCreateManyCustomerInputEnvelope = {
    data: MessageSubscriptionCreateManyCustomerInput | MessageSubscriptionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type MessageSubscriptionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: MessageSubscriptionWhereUniqueInput
    update: XOR<MessageSubscriptionUpdateWithoutCustomerInput, MessageSubscriptionUncheckedUpdateWithoutCustomerInput>
    create: XOR<MessageSubscriptionCreateWithoutCustomerInput, MessageSubscriptionUncheckedCreateWithoutCustomerInput>
  }

  export type MessageSubscriptionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: MessageSubscriptionWhereUniqueInput
    data: XOR<MessageSubscriptionUpdateWithoutCustomerInput, MessageSubscriptionUncheckedUpdateWithoutCustomerInput>
  }

  export type MessageSubscriptionUpdateManyWithWhereWithoutCustomerInput = {
    where: MessageSubscriptionScalarWhereInput
    data: XOR<MessageSubscriptionUpdateManyMutationInput, MessageSubscriptionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type MessageSubscriptionScalarWhereInput = {
    AND?: MessageSubscriptionScalarWhereInput | MessageSubscriptionScalarWhereInput[]
    OR?: MessageSubscriptionScalarWhereInput[]
    NOT?: MessageSubscriptionScalarWhereInput | MessageSubscriptionScalarWhereInput[]
    id?: StringFilter<"MessageSubscription"> | string
    customerId?: StringFilter<"MessageSubscription"> | string
    subscribed?: BoolFilter<"MessageSubscription"> | boolean
    createdAt?: DateTimeFilter<"MessageSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"MessageSubscription"> | Date | string
  }

  export type OwnerLoginSessionCreateWithoutOwnerInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUncheckedCreateWithoutOwnerInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionCreateOrConnectWithoutOwnerInput = {
    where: OwnerLoginSessionWhereUniqueInput
    create: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput>
  }

  export type OwnerLoginSessionCreateManyOwnerInputEnvelope = {
    data: OwnerLoginSessionCreateManyOwnerInput | OwnerLoginSessionCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type OwnerLoginSessionUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OwnerLoginSessionWhereUniqueInput
    update: XOR<OwnerLoginSessionUpdateWithoutOwnerInput, OwnerLoginSessionUncheckedUpdateWithoutOwnerInput>
    create: XOR<OwnerLoginSessionCreateWithoutOwnerInput, OwnerLoginSessionUncheckedCreateWithoutOwnerInput>
  }

  export type OwnerLoginSessionUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OwnerLoginSessionWhereUniqueInput
    data: XOR<OwnerLoginSessionUpdateWithoutOwnerInput, OwnerLoginSessionUncheckedUpdateWithoutOwnerInput>
  }

  export type OwnerLoginSessionUpdateManyWithWhereWithoutOwnerInput = {
    where: OwnerLoginSessionScalarWhereInput
    data: XOR<OwnerLoginSessionUpdateManyMutationInput, OwnerLoginSessionUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OwnerLoginSessionScalarWhereInput = {
    AND?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
    OR?: OwnerLoginSessionScalarWhereInput[]
    NOT?: OwnerLoginSessionScalarWhereInput | OwnerLoginSessionScalarWhereInput[]
    id?: StringFilter<"OwnerLoginSession"> | string
    ownerId?: StringFilter<"OwnerLoginSession"> | string
    deviceInfo?: StringNullableFilter<"OwnerLoginSession"> | string | null
    ipAddress?: StringNullableFilter<"OwnerLoginSession"> | string | null
    location?: StringNullableFilter<"OwnerLoginSession"> | string | null
    userAgent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browser?: StringNullableFilter<"OwnerLoginSession"> | string | null
    os?: StringNullableFilter<"OwnerLoginSession"> | string | null
    device?: StringNullableFilter<"OwnerLoginSession"> | string | null
    country?: StringNullableFilter<"OwnerLoginSession"> | string | null
    city?: StringNullableFilter<"OwnerLoginSession"> | string | null
    latitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    longitude?: FloatNullableFilter<"OwnerLoginSession"> | number | null
    isSuccessful?: BoolFilter<"OwnerLoginSession"> | boolean
    loginAt?: DateTimeFilter<"OwnerLoginSession"> | Date | string
    timezone?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isp?: StringNullableFilter<"OwnerLoginSession"> | string | null
    region?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceType?: StringNullableFilter<"OwnerLoginSession"> | string | null
    deviceModel?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    browserVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    osVersion?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    regionCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    postal?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currency?: StringNullableFilter<"OwnerLoginSession"> | string | null
    currencyName?: StringNullableFilter<"OwnerLoginSession"> | string | null
    languages?: StringNullableFilter<"OwnerLoginSession"> | string | null
    countryPopulation?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryArea?: IntNullableFilter<"OwnerLoginSession"> | number | null
    countryCapital?: StringNullableFilter<"OwnerLoginSession"> | string | null
    continent?: StringNullableFilter<"OwnerLoginSession"> | string | null
    isEu?: BoolNullableFilter<"OwnerLoginSession"> | boolean | null
    callingCode?: StringNullableFilter<"OwnerLoginSession"> | string | null
    utcOffset?: StringNullableFilter<"OwnerLoginSession"> | string | null
  }

  export type CustomerCreateWithoutSubscriptionsInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    country?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type CustomerUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    birthDate?: Date | string | null
    city?: string | null
    street?: string | null
    postalCode?: string | null
    houseNumber?: string | null
    preferredFood?: string | null
    feedback?: string | null
    country?: string | null
    discountCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type CustomerCreateOrConnectWithoutSubscriptionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
  }

  export type MessageDeliveryCreateWithoutSubscriptionInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    message: BroadcastMessageCreateNestedOneWithoutDeliveriesInput
  }

  export type MessageDeliveryUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    messageId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryCreateOrConnectWithoutSubscriptionInput = {
    where: MessageDeliveryWhereUniqueInput
    create: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput>
  }

  export type MessageDeliveryCreateManySubscriptionInputEnvelope = {
    data: MessageDeliveryCreateManySubscriptionInput | MessageDeliveryCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutSubscriptionsInput = {
    update: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<CustomerCreateWithoutSubscriptionsInput, CustomerUncheckedCreateWithoutSubscriptionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSubscriptionsInput, CustomerUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CustomerUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    preferredFood?: NullableStringFieldUpdateOperationsInput | string | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    discountCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageDeliveryUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: MessageDeliveryWhereUniqueInput
    update: XOR<MessageDeliveryUpdateWithoutSubscriptionInput, MessageDeliveryUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<MessageDeliveryCreateWithoutSubscriptionInput, MessageDeliveryUncheckedCreateWithoutSubscriptionInput>
  }

  export type MessageDeliveryUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: MessageDeliveryWhereUniqueInput
    data: XOR<MessageDeliveryUpdateWithoutSubscriptionInput, MessageDeliveryUncheckedUpdateWithoutSubscriptionInput>
  }

  export type MessageDeliveryUpdateManyWithWhereWithoutSubscriptionInput = {
    where: MessageDeliveryScalarWhereInput
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type MessageDeliveryScalarWhereInput = {
    AND?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
    OR?: MessageDeliveryScalarWhereInput[]
    NOT?: MessageDeliveryScalarWhereInput | MessageDeliveryScalarWhereInput[]
    id?: StringFilter<"MessageDelivery"> | string
    messageId?: StringFilter<"MessageDelivery"> | string
    subscriptionId?: StringFilter<"MessageDelivery"> | string
    phoneNumber?: StringFilter<"MessageDelivery"> | string
    status?: EnumDeliveryStatusFilter<"MessageDelivery"> | $Enums.DeliveryStatus
    sentAt?: DateTimeNullableFilter<"MessageDelivery"> | Date | string | null
    errorMessage?: StringNullableFilter<"MessageDelivery"> | string | null
    createdAt?: DateTimeFilter<"MessageDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"MessageDelivery"> | Date | string
  }

  export type MessageDeliveryCreateWithoutMessageInput = {
    id?: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: MessageSubscriptionCreateNestedOneWithoutDeliveriesInput
  }

  export type MessageDeliveryUncheckedCreateWithoutMessageInput = {
    id?: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryCreateOrConnectWithoutMessageInput = {
    where: MessageDeliveryWhereUniqueInput
    create: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput>
  }

  export type MessageDeliveryCreateManyMessageInputEnvelope = {
    data: MessageDeliveryCreateManyMessageInput | MessageDeliveryCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessageDeliveryUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageDeliveryWhereUniqueInput
    update: XOR<MessageDeliveryUpdateWithoutMessageInput, MessageDeliveryUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageDeliveryCreateWithoutMessageInput, MessageDeliveryUncheckedCreateWithoutMessageInput>
  }

  export type MessageDeliveryUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageDeliveryWhereUniqueInput
    data: XOR<MessageDeliveryUpdateWithoutMessageInput, MessageDeliveryUncheckedUpdateWithoutMessageInput>
  }

  export type MessageDeliveryUpdateManyWithWhereWithoutMessageInput = {
    where: MessageDeliveryScalarWhereInput
    data: XOR<MessageDeliveryUpdateManyMutationInput, MessageDeliveryUncheckedUpdateManyWithoutMessageInput>
  }

  export type BroadcastMessageCreateWithoutDeliveriesInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
  }

  export type BroadcastMessageUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    title: string
    body: string
    createdAt?: Date | string
    scheduledFor?: Date | string | null
  }

  export type BroadcastMessageCreateOrConnectWithoutDeliveriesInput = {
    where: BroadcastMessageWhereUniqueInput
    create: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
  }

  export type MessageSubscriptionCreateWithoutDeliveriesInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutSubscriptionsInput
  }

  export type MessageSubscriptionUncheckedCreateWithoutDeliveriesInput = {
    id?: string
    customerId: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageSubscriptionCreateOrConnectWithoutDeliveriesInput = {
    where: MessageSubscriptionWhereUniqueInput
    create: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
  }

  export type BroadcastMessageUpsertWithoutDeliveriesInput = {
    update: XOR<BroadcastMessageUpdateWithoutDeliveriesInput, BroadcastMessageUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<BroadcastMessageCreateWithoutDeliveriesInput, BroadcastMessageUncheckedCreateWithoutDeliveriesInput>
    where?: BroadcastMessageWhereInput
  }

  export type BroadcastMessageUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: BroadcastMessageWhereInput
    data: XOR<BroadcastMessageUpdateWithoutDeliveriesInput, BroadcastMessageUncheckedUpdateWithoutDeliveriesInput>
  }

  export type BroadcastMessageUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BroadcastMessageUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduledFor?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MessageSubscriptionUpsertWithoutDeliveriesInput = {
    update: XOR<MessageSubscriptionUpdateWithoutDeliveriesInput, MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<MessageSubscriptionCreateWithoutDeliveriesInput, MessageSubscriptionUncheckedCreateWithoutDeliveriesInput>
    where?: MessageSubscriptionWhereInput
  }

  export type MessageSubscriptionUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: MessageSubscriptionWhereInput
    data: XOR<MessageSubscriptionUpdateWithoutDeliveriesInput, MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput>
  }

  export type MessageSubscriptionUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type MessageSubscriptionUncheckedUpdateWithoutDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerCreateWithoutLoginSessionsInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type OwnerUncheckedCreateWithoutLoginSessionsInput = {
    id?: string
    email: string
    name: string
    accessCode: string
    password: string
    isActive?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerificationCode?: string | null
    isEmailVerified?: boolean
  }

  export type OwnerCreateOrConnectWithoutLoginSessionsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
  }

  export type OwnerUpsertWithoutLoginSessionsInput = {
    update: XOR<OwnerUpdateWithoutLoginSessionsInput, OwnerUncheckedUpdateWithoutLoginSessionsInput>
    create: XOR<OwnerCreateWithoutLoginSessionsInput, OwnerUncheckedCreateWithoutLoginSessionsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutLoginSessionsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutLoginSessionsInput, OwnerUncheckedUpdateWithoutLoginSessionsInput>
  }

  export type OwnerUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OwnerUncheckedUpdateWithoutLoginSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accessCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageSubscriptionCreateManyCustomerInput = {
    id?: string
    subscribed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageSubscriptionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: MessageDeliveryUpdateManyWithoutSubscriptionNestedInput
  }

  export type MessageSubscriptionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveries?: MessageDeliveryUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type MessageSubscriptionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscribed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OwnerLoginSessionCreateManyOwnerInput = {
    id?: string
    deviceInfo?: string | null
    ipAddress?: string | null
    location?: string | null
    userAgent?: string | null
    browser?: string | null
    os?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    latitude?: number | null
    longitude?: number | null
    isSuccessful?: boolean
    loginAt?: Date | string
    timezone?: string | null
    isp?: string | null
    region?: string | null
    deviceType?: string | null
    deviceModel?: string | null
    browserName?: string | null
    browserVersion?: string | null
    osName?: string | null
    osVersion?: string | null
    countryCode?: string | null
    regionCode?: string | null
    postal?: string | null
    currency?: string | null
    currencyName?: string | null
    languages?: string | null
    countryPopulation?: number | null
    countryArea?: number | null
    countryCapital?: string | null
    continent?: string | null
    isEu?: boolean | null
    callingCode?: string | null
    utcOffset?: string | null
  }

  export type OwnerLoginSessionUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OwnerLoginSessionUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    deviceInfo?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isSuccessful?: BoolFieldUpdateOperationsInput | boolean
    loginAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    isp?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    deviceType?: NullableStringFieldUpdateOperationsInput | string | null
    deviceModel?: NullableStringFieldUpdateOperationsInput | string | null
    browserName?: NullableStringFieldUpdateOperationsInput | string | null
    browserVersion?: NullableStringFieldUpdateOperationsInput | string | null
    osName?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    postal?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    currencyName?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: NullableStringFieldUpdateOperationsInput | string | null
    countryPopulation?: NullableIntFieldUpdateOperationsInput | number | null
    countryArea?: NullableIntFieldUpdateOperationsInput | number | null
    countryCapital?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    isEu?: NullableBoolFieldUpdateOperationsInput | boolean | null
    callingCode?: NullableStringFieldUpdateOperationsInput | string | null
    utcOffset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageDeliveryCreateManySubscriptionInput = {
    id?: string
    messageId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: BroadcastMessageUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type MessageDeliveryUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryCreateManyMessageInput = {
    id?: string
    subscriptionId: string
    phoneNumber: string
    status?: $Enums.DeliveryStatus
    sentAt?: Date | string | null
    errorMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageDeliveryUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: MessageSubscriptionUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type MessageDeliveryUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageDeliveryUncheckedUpdateManyWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
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