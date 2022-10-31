/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace DataTypes {
  export type CommentDataStruct = {
    profileId: PromiseOrValue<BigNumberish>;
    contentURI: PromiseOrValue<string>;
    profileIdPointed: PromiseOrValue<BigNumberish>;
    pubIdPointed: PromiseOrValue<BigNumberish>;
    referenceModuleData: PromiseOrValue<BytesLike>;
    collectModule: PromiseOrValue<string>;
    collectModuleInitData: PromiseOrValue<BytesLike>;
    referenceModule: PromiseOrValue<string>;
    referenceModuleInitData: PromiseOrValue<BytesLike>;
  };

  export type CommentDataStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    string,
    string
  ] & {
    profileId: BigNumber;
    contentURI: string;
    profileIdPointed: BigNumber;
    pubIdPointed: BigNumber;
    referenceModuleData: string;
    collectModule: string;
    collectModuleInitData: string;
    referenceModule: string;
    referenceModuleInitData: string;
  };

  export type MirrorDataStruct = {
    profileId: PromiseOrValue<BigNumberish>;
    profileIdPointed: PromiseOrValue<BigNumberish>;
    pubIdPointed: PromiseOrValue<BigNumberish>;
    referenceModuleData: PromiseOrValue<BytesLike>;
    referenceModule: PromiseOrValue<string>;
    referenceModuleInitData: PromiseOrValue<BytesLike>;
  };

  export type MirrorDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string
  ] & {
    profileId: BigNumber;
    profileIdPointed: BigNumber;
    pubIdPointed: BigNumber;
    referenceModuleData: string;
    referenceModule: string;
    referenceModuleInitData: string;
  };

  export type PostDataStruct = {
    profileId: PromiseOrValue<BigNumberish>;
    contentURI: PromiseOrValue<string>;
    collectModule: PromiseOrValue<string>;
    collectModuleInitData: PromiseOrValue<BytesLike>;
    referenceModule: PromiseOrValue<string>;
    referenceModuleInitData: PromiseOrValue<BytesLike>;
  };

  export type PostDataStructOutput = [
    BigNumber,
    string,
    string,
    string,
    string,
    string
  ] & {
    profileId: BigNumber;
    contentURI: string;
    collectModule: string;
    collectModuleInitData: string;
    referenceModule: string;
    referenceModuleInitData: string;
  };
}

export declare namespace NFTinStorage {
  export type CommentsStruct = {
    profileId: PromiseOrValue<BigNumberish>;
    profileIdPointed: PromiseOrValue<BigNumberish>;
    pubId: PromiseOrValue<BigNumberish>;
    pubIdPointed: PromiseOrValue<BigNumberish>;
  };

  export type CommentsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    profileId: BigNumber;
    profileIdPointed: BigNumber;
    pubId: BigNumber;
    pubIdPointed: BigNumber;
  };

  export type MirrorsStruct = {
    mirrorId: PromiseOrValue<BigNumberish>;
    profileIdPointed: PromiseOrValue<BigNumberish>;
    pubIdPointed: PromiseOrValue<BigNumberish>;
  };

  export type MirrorsStructOutput = [BigNumber, BigNumber, BigNumber] & {
    mirrorId: BigNumber;
    profileIdPointed: BigNumber;
    pubIdPointed: BigNumber;
  };
}

export interface NftinInterface extends utils.Interface {
  functions: {
    "collect(uint256,uint256,bytes)": FunctionFragment;
    "collections(uint256,uint256)": FunctionFragment;
    "comments(uint256,uint256,uint256)": FunctionFragment;
    "getComments(uint256,uint256)": FunctionFragment;
    "getMirrors(uint256)": FunctionFragment;
    "getPostList(uint256)": FunctionFragment;
    "getProfile(address)": FunctionFragment;
    "lensAddress()": FunctionFragment;
    "likes(uint256,uint256,uint256)": FunctionFragment;
    "likesCount(uint256,uint256)": FunctionFragment;
    "mirrors(uint256,uint256)": FunctionFragment;
    "onboardNewProfile(uint256)": FunctionFragment;
    "post((uint256,string,address,bytes,address,bytes))": FunctionFragment;
    "postList(uint256,uint256)": FunctionFragment;
    "profiles(address)": FunctionFragment;
    "rating(uint256)": FunctionFragment;
    "setComment((uint256,string,uint256,uint256,bytes,address,bytes,address,bytes))": FunctionFragment;
    "setLensHubAddress(address)": FunctionFragment;
    "setLike(uint256,uint256,uint256)": FunctionFragment;
    "setMirror((uint256,uint256,uint256,bytes,address,bytes))": FunctionFragment;
    "setPost((uint256,string,address,bytes,address,bytes))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "collect"
      | "collections"
      | "comments"
      | "getComments"
      | "getMirrors"
      | "getPostList"
      | "getProfile"
      | "lensAddress"
      | "likes"
      | "likesCount"
      | "mirrors"
      | "onboardNewProfile"
      | "post"
      | "postList"
      | "profiles"
      | "rating"
      | "setComment"
      | "setLensHubAddress"
      | "setLike"
      | "setMirror"
      | "setPost"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "collect",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "collections",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "comments",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getComments",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMirrors",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPostList",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProfile",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "lensAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "likes",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "likesCount",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mirrors",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onboardNewProfile",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "post",
    values: [DataTypes.PostDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "postList",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "profiles",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rating",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setComment",
    values: [DataTypes.CommentDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setLensHubAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLike",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setMirror",
    values: [DataTypes.MirrorDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setPost",
    values: [DataTypes.PostDataStruct]
  ): string;

  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collections",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "comments", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getComments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getMirrors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPostList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProfile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lensAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "likes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "likesCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mirrors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onboardNewProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "post", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "postList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "profiles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rating", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setComment", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLensHubAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLike", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMirror", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPost", data: BytesLike): Result;

  events: {
    "commented(address,tuple)": EventFragment;
    "liked(address,uint256,uint256)": EventFragment;
    "mirrored(address,tuple)": EventFragment;
    "posted(address,tuple)": EventFragment;
    "profileOnboarded(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "commented"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "liked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "mirrored"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "posted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "profileOnboarded"): EventFragment;
}

export interface commentedEventObject {
  _profileAddress: string;
  _data: DataTypes.CommentDataStructOutput;
}
export type commentedEvent = TypedEvent<
  [string, DataTypes.CommentDataStructOutput],
  commentedEventObject
>;

export type commentedEventFilter = TypedEventFilter<commentedEvent>;

export interface likedEventObject {
  _profileAddress: string;
  _profileIdPointed: BigNumber;
  _pubIdPointed: BigNumber;
}
export type likedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  likedEventObject
>;

export type likedEventFilter = TypedEventFilter<likedEvent>;

export interface mirroredEventObject {
  _profileAddress: string;
  _data: DataTypes.MirrorDataStructOutput;
}
export type mirroredEvent = TypedEvent<
  [string, DataTypes.MirrorDataStructOutput],
  mirroredEventObject
>;

export type mirroredEventFilter = TypedEventFilter<mirroredEvent>;

export interface postedEventObject {
  _profileAddress: string;
  _data: DataTypes.PostDataStructOutput;
}
export type postedEvent = TypedEvent<
  [string, DataTypes.PostDataStructOutput],
  postedEventObject
>;

export type postedEventFilter = TypedEventFilter<postedEvent>;

export interface profileOnboardedEventObject {
  _profileAddress: string;
  _profileId: BigNumber;
}
export type profileOnboardedEvent = TypedEvent<
  [string, BigNumber],
  profileOnboardedEventObject
>;

export type profileOnboardedEventFilter =
  TypedEventFilter<profileOnboardedEvent>;

export interface Nftin extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NftinInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    collect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collections(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    comments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        profileId: BigNumber;
        profileIdPointed: BigNumber;
        pubId: BigNumber;
        pubIdPointed: BigNumber;
      }
    >;

    getComments(
      _profileId: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NFTinStorage.CommentsStructOutput[]]>;

    getMirrors(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[NFTinStorage.MirrorsStructOutput[]]>;

    getPostList(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getProfile(
      _profileAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lensAddress(overrides?: CallOverrides): Promise<[string]>;

    likes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    likesCount(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mirrors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        mirrorId: BigNumber;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
      }
    >;

    onboardNewProfile(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    post(
      vars: DataTypes.PostDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    postList(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    profiles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rating(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setComment(
      vars: DataTypes.CommentDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLensHubAddress(
      _lensHub: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLike(
      _profileId: PromiseOrValue<BigNumberish>,
      _profileIdPointed: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMirror(
      vars: DataTypes.MirrorDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPost(
      vars: DataTypes.PostDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  collect(
    profileId: PromiseOrValue<BigNumberish>,
    pubId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collections(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  comments(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      profileId: BigNumber;
      profileIdPointed: BigNumber;
      pubId: BigNumber;
      pubIdPointed: BigNumber;
    }
  >;

  getComments(
    _profileId: PromiseOrValue<BigNumberish>,
    _postId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NFTinStorage.CommentsStructOutput[]>;

  getMirrors(
    _profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<NFTinStorage.MirrorsStructOutput[]>;

  getPostList(
    _profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getProfile(
    _profileAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lensAddress(overrides?: CallOverrides): Promise<string>;

  likes(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  likesCount(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mirrors(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      mirrorId: BigNumber;
      profileIdPointed: BigNumber;
      pubIdPointed: BigNumber;
    }
  >;

  onboardNewProfile(
    _profileId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  post(
    vars: DataTypes.PostDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  postList(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  profiles(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rating(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setComment(
    vars: DataTypes.CommentDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLensHubAddress(
    _lensHub: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLike(
    _profileId: PromiseOrValue<BigNumberish>,
    _profileIdPointed: PromiseOrValue<BigNumberish>,
    _postId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMirror(
    vars: DataTypes.MirrorDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPost(
    vars: DataTypes.PostDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    collect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    collections(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    comments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        profileId: BigNumber;
        profileIdPointed: BigNumber;
        pubId: BigNumber;
        pubIdPointed: BigNumber;
      }
    >;

    getComments(
      _profileId: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NFTinStorage.CommentsStructOutput[]>;

    getMirrors(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<NFTinStorage.MirrorsStructOutput[]>;

    getPostList(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getProfile(
      _profileAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lensAddress(overrides?: CallOverrides): Promise<string>;

    likes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    likesCount(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mirrors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        mirrorId: BigNumber;
        profileIdPointed: BigNumber;
        pubIdPointed: BigNumber;
      }
    >;

    onboardNewProfile(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    post(
      vars: DataTypes.PostDataStruct,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    postList(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    profiles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rating(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setComment(
      vars: DataTypes.CommentDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setLensHubAddress(
      _lensHub: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLike(
      _profileId: PromiseOrValue<BigNumberish>,
      _profileIdPointed: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMirror(
      vars: DataTypes.MirrorDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    setPost(
      vars: DataTypes.PostDataStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "commented(address,tuple)"(
      _profileAddress?: PromiseOrValue<string> | null,
      _data?: DataTypes.CommentDataStruct | null
    ): commentedEventFilter;
    commented(
      _profileAddress?: PromiseOrValue<string> | null,
      _data?: DataTypes.CommentDataStruct | null
    ): commentedEventFilter;

    "liked(address,uint256,uint256)"(
      _profileAddress?: PromiseOrValue<string> | null,
      _profileIdPointed?: PromiseOrValue<BigNumberish> | null,
      _pubIdPointed?: PromiseOrValue<BigNumberish> | null
    ): likedEventFilter;
    liked(
      _profileAddress?: PromiseOrValue<string> | null,
      _profileIdPointed?: PromiseOrValue<BigNumberish> | null,
      _pubIdPointed?: PromiseOrValue<BigNumberish> | null
    ): likedEventFilter;

    "mirrored(address,tuple)"(
      _profileAddress?: PromiseOrValue<string> | null,
      _data?: DataTypes.MirrorDataStruct | null
    ): mirroredEventFilter;
    mirrored(
      _profileAddress?: PromiseOrValue<string> | null,
      _data?: DataTypes.MirrorDataStruct | null
    ): mirroredEventFilter;

    "posted(address,tuple)"(
      _profileAddress?: PromiseOrValue<string> | null,
      _data?: DataTypes.PostDataStruct | null
    ): postedEventFilter;
    posted(
      _profileAddress?: PromiseOrValue<string> | null,
      _data?: DataTypes.PostDataStruct | null
    ): postedEventFilter;

    "profileOnboarded(address,uint256)"(
      _profileAddress?: PromiseOrValue<string> | null,
      _profileId?: PromiseOrValue<BigNumberish> | null
    ): profileOnboardedEventFilter;
    profileOnboarded(
      _profileAddress?: PromiseOrValue<string> | null,
      _profileId?: PromiseOrValue<BigNumberish> | null
    ): profileOnboardedEventFilter;
  };

  estimateGas: {
    collect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collections(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    comments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getComments(
      _profileId: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMirrors(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPostList(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProfile(
      _profileAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lensAddress(overrides?: CallOverrides): Promise<BigNumber>;

    likes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    likesCount(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mirrors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onboardNewProfile(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    post(
      vars: DataTypes.PostDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    postList(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    profiles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rating(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setComment(
      vars: DataTypes.CommentDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLensHubAddress(
      _lensHub: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLike(
      _profileId: PromiseOrValue<BigNumberish>,
      _profileIdPointed: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMirror(
      vars: DataTypes.MirrorDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPost(
      vars: DataTypes.PostDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    collect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collections(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    comments(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getComments(
      _profileId: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMirrors(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPostList(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProfile(
      _profileAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lensAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    likes(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    likesCount(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mirrors(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onboardNewProfile(
      _profileId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    post(
      vars: DataTypes.PostDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    postList(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    profiles(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rating(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setComment(
      vars: DataTypes.CommentDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLensHubAddress(
      _lensHub: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLike(
      _profileId: PromiseOrValue<BigNumberish>,
      _profileIdPointed: PromiseOrValue<BigNumberish>,
      _postId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMirror(
      vars: DataTypes.MirrorDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPost(
      vars: DataTypes.PostDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}