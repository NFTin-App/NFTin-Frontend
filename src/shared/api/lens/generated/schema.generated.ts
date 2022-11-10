/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from 'gqty';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** Blockchain data scalar type */
    BlockchainData: any;
    /** Broadcast scalar id type */
    BroadcastId: any;
    /** ChainId custom scalar type */
    ChainId: any;
    /** collect module data scalar type */
    CollectModuleData: any;
    /** Contract address custom scalar type */
    ContractAddress: any;
    /** create handle custom scalar type */
    CreateHandle: any;
    /** Cursor custom scalar type */
    Cursor: any;
    /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
    DateTime: string;
    /** Ens custom scalar type */
    Ens: any;
    /** Ethereum address custom scalar type */
    EthereumAddress: any;
    /** follow module data scalar type */
    FollowModuleData: any;
    /** handle custom scalar type */
    Handle: any;
    /** handle claim id custom scalar type */
    HandleClaimIdScalar: any;
    /** Internal publication id custom scalar type */
    InternalPublicationId: any;
    /** jwt custom scalar type */
    Jwt: any;
    /** limit custom scalar type */
    LimitScalar: any;
    /** Locale scalar type */
    Locale: any;
    /** Markdown scalar type */
    Markdown: any;
    /** mimetype custom scalar type */
    MimeType: any;
    /** Nft ownership id type */
    NftOwnershipId: any;
    /** Nonce custom scalar type */
    Nonce: any;
    /** The notification id */
    NotificationId: any;
    /** ProfileId custom scalar type */
    ProfileId: any;
    /** proxy action scalar id type */
    ProxyActionId: any;
    /** Publication id custom scalar type */
    PublicationId: any;
    /** The publication tag */
    PublicationTag: any;
    /** Publication url scalar type */
    PublicationUrl: any;
    /** The reaction id */
    ReactionId: any;
    /** reference module data scalar type */
    ReferenceModuleData: any;
    /** Query search */
    Search: any;
    /** Relayer signature */
    Signature: any;
    /** Sources custom scalar type */
    Sources: any;
    /** timestamp date custom scalar type */
    TimestampScalar: any;
    /** The tx hash */
    TxHash: any;
    /** The tx id */
    TxId: any;
    /** UnixTimestamp custom scalar type */
    UnixTimestamp: any;
    /** Url scalar type */
    Url: any;
    /** Represents NULL values */
    Void: any;
}

export interface AchRequest {
    ethereumAddress: Scalars['EthereumAddress'];
    freeTextHandle?: InputMaybe<Scalars['Boolean']>;
    handle?: InputMaybe<Scalars['CreateHandle']>;
    overrideAlreadyClaimed: Scalars['Boolean'];
    overrideTradeMark: Scalars['Boolean'];
    secret: Scalars['String'];
}

export interface AllPublicationsTagsRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    sort: TagSortCriteria;
    /** The App Id */
    source?: InputMaybe<Scalars['Sources']>;
}

export interface ApprovedModuleAllowanceAmountRequest {
    collectModules?: InputMaybe<CollectModules[]>;
    /** The contract addresses for the module approved currencies you want to find information on about the user */
    currencies: Array<Scalars['ContractAddress']>;
    followModules?: InputMaybe<FollowModules[]>;
    referenceModules?: InputMaybe<ReferenceModules[]>;
    unknownCollectModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
    unknownFollowModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
    unknownReferenceModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
}

export interface BroadcastRequest {
    id: Scalars['BroadcastId'];
    signature: Scalars['Signature'];
}

export interface BurnProfileRequest {
    profileId: Scalars['ProfileId'];
}

/** The challenge request */
export interface ChallengeRequest {
    /** The ethereum address you want to login with */
    address: Scalars['EthereumAddress'];
}

export interface ClaimHandleRequest {
    /** The follow module */
    followModule?: InputMaybe<FollowModuleParams>;
    freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
    id?: InputMaybe<Scalars['HandleClaimIdScalar']>;
}

/** The claim status */
export enum ClaimStatus {
    ALREADY_CLAIMED = 'ALREADY_CLAIMED',
    CLAIM_FAILED = 'CLAIM_FAILED',
    NOT_CLAIMED = 'NOT_CLAIMED',
}

export interface CollectModuleParams {
    /** The collect fee collect module */
    feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
    /** The collect empty collect module */
    freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
    /** The collect limited fee collect module */
    limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
    /** The collect limited timed fee collect module */
    limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
    /** The collect revert collect module */
    revertCollectModule?: InputMaybe<Scalars['Boolean']>;
    /** The collect timed fee collect module */
    timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
    /** A unknown collect module */
    unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
}

/** The collect module types */
export enum CollectModules {
    FeeCollectModule = 'FeeCollectModule',
    FreeCollectModule = 'FreeCollectModule',
    LimitedFeeCollectModule = 'LimitedFeeCollectModule',
    LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
    RevertCollectModule = 'RevertCollectModule',
    TimedFeeCollectModule = 'TimedFeeCollectModule',
    UnknownCollectModule = 'UnknownCollectModule',
}

export interface CollectProxyAction {
    freeCollect?: InputMaybe<FreeCollectProxyAction>;
}

export interface CreateCollectRequest {
    publicationId: Scalars['InternalPublicationId'];
    /** The encoded data to collect with if using an unknown module */
    unknownModuleData?: InputMaybe<Scalars['BlockchainData']>;
}

export interface CreateMirrorRequest {
    /** Profile id */
    profileId: Scalars['ProfileId'];
    /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
    publicationId: Scalars['InternalPublicationId'];
    /** The reference module info */
    referenceModule?: InputMaybe<ReferenceModuleParams>;
}

export interface CreateProfileRequest {
    /** The follow module */
    followModule?: InputMaybe<FollowModuleParams>;
    /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
    followNFTURI?: InputMaybe<Scalars['Url']>;
    handle: Scalars['CreateHandle'];
    /** The profile picture uri */
    profilePictureUri?: InputMaybe<Scalars['Url']>;
}

export interface CreatePublicCommentRequest {
    /** The collect module */
    collectModule: CollectModuleParams;
    /** The metadata uploaded somewhere passing in the url to reach it */
    contentURI: Scalars['Url'];
    /** Profile id */
    profileId: Scalars['ProfileId'];
    /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
    publicationId: Scalars['InternalPublicationId'];
    /** The reference module */
    referenceModule?: InputMaybe<ReferenceModuleParams>;
}

export interface CreatePublicPostRequest {
    /** The collect module */
    collectModule: CollectModuleParams;
    /** The metadata uploaded somewhere passing in the url to reach it */
    contentURI: Scalars['Url'];
    /** Profile id */
    profileId: Scalars['ProfileId'];
    /** The reference module */
    referenceModule?: InputMaybe<ReferenceModuleParams>;
}

export interface CreatePublicSetProfileMetadataURIRequest {
    /** The metadata uploaded somewhere passing in the url to reach it */
    metadata: Scalars['Url'];
    /** Profile id */
    profileId: Scalars['ProfileId'];
}

export interface CreateSetDefaultProfileRequest {
    /** Profile id */
    profileId: Scalars['ProfileId'];
}

export interface CreateSetFollowModuleRequest {
    /** The follow module info */
    followModule: FollowModuleParams;
    profileId: Scalars['ProfileId'];
}

export interface CreateSetFollowNFTUriRequest {
    /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
    followNFTURI?: InputMaybe<Scalars['Url']>;
    profileId: Scalars['ProfileId'];
}

export interface CreateToggleFollowRequest {
    enables: Array<Scalars['Boolean']>;
    profileIds: Array<Scalars['ProfileId']>;
}

/** The custom filters types */
export enum CustomFiltersTypes {
    GARDENERS = 'GARDENERS',
}

export interface DefaultProfileRequest {
    ethereumAddress: Scalars['EthereumAddress'];
}

export interface DegreesOfSeparationReferenceModuleParams {
    /** Applied to comments */
    commentsRestricted: Scalars['Boolean'];
    /** Degrees of separation */
    degreesOfSeparation: Scalars['Int'];
    /** Applied to mirrors */
    mirrorsRestricted: Scalars['Boolean'];
}

export interface DoesFollow {
    /** The follower address remember wallets follow profiles */
    followerAddress: Scalars['EthereumAddress'];
    /** The profile id */
    profileId: Scalars['ProfileId'];
}

export interface DoesFollowRequest {
    /** The follower infos */
    followInfos: DoesFollow[];
}

export interface ExploreProfilesRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    customFilters?: InputMaybe<CustomFiltersTypes[]>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    sortCriteria: ProfileSortCriteria;
    timestamp?: InputMaybe<Scalars['TimestampScalar']>;
}

export interface ExplorePublicationRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    customFilters?: InputMaybe<CustomFiltersTypes[]>;
    /** If you wish to exclude any results for profile ids */
    excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** If you want the randomizer off (default on) */
    noRandomize?: InputMaybe<Scalars['Boolean']>;
    /** The publication types you want to query */
    publicationTypes?: InputMaybe<PublicationTypes[]>;
    sortCriteria: PublicationSortCriteria;
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
    timestamp?: InputMaybe<Scalars['TimestampScalar']>;
}

export interface FeeCollectModuleParams {
    /** The collect module amount info */
    amount: ModuleFeeAmountParams;
    /** Follower only */
    followerOnly: Scalars['Boolean'];
    /** The collect module recipient address */
    recipient: Scalars['EthereumAddress'];
    /** The collect module referral fee */
    referralFee: Scalars['Float'];
}

export interface FeeFollowModuleParams {
    /** The follow module amount info */
    amount: ModuleFeeAmountParams;
    /** The follow module recipient address */
    recipient: Scalars['EthereumAddress'];
}

export interface FeeFollowModuleRedeemParams {
    /** The expected amount to pay */
    amount: ModuleFeeAmountParams;
}

/** The feed event item filter types */
export enum FeedEventItemType {
    COLLECT_COMMENT = 'COLLECT_COMMENT',
    COLLECT_POST = 'COLLECT_POST',
    COMMENT = 'COMMENT',
    MIRROR = 'MIRROR',
    POST = 'POST',
    REACTION_COMMENT = 'REACTION_COMMENT',
    REACTION_POST = 'REACTION_POST',
}

export interface FeedHighlightsRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** The profile id */
    profileId: Scalars['ProfileId'];
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
}

export interface FeedRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    /** Filter your feed to whatever you wish */
    feedEventItemTypes?: InputMaybe<FeedEventItemType[]>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** The profile id */
    profileId: Scalars['ProfileId'];
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
}

export interface Follow {
    followModule?: InputMaybe<FollowModuleRedeemParams>;
    profile: Scalars['ProfileId'];
}

export interface FollowModuleParams {
    /** The follower fee follower module */
    feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
    /** The empty follow module */
    freeFollowModule?: InputMaybe<Scalars['Boolean']>;
    /** The profile follow module */
    profileFollowModule?: InputMaybe<Scalars['Boolean']>;
    /** The revert follow module */
    revertFollowModule?: InputMaybe<Scalars['Boolean']>;
    /** A unknown follow module */
    unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
}

export interface FollowModuleRedeemParams {
    /** The follower fee follower module */
    feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
    /** The profile follower module */
    profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
    /** A unknown follow module */
    unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
}

/** The follow module types */
export enum FollowModules {
    FeeFollowModule = 'FeeFollowModule',
    ProfileFollowModule = 'ProfileFollowModule',
    RevertFollowModule = 'RevertFollowModule',
    UnknownFollowModule = 'UnknownFollowModule',
}

export interface FollowProxyAction {
    freeFollow?: InputMaybe<FreeFollowProxyAction>;
}

export interface FollowRequest {
    follow: Follow[];
}

export interface FollowerNftOwnedTokenIdsRequest {
    address: Scalars['EthereumAddress'];
    profileId: Scalars['ProfileId'];
}

export interface FollowersRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    profileId: Scalars['ProfileId'];
}

export interface FollowingRequest {
    address: Scalars['EthereumAddress'];
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
}

export interface FraudReasonInputParams {
    reason: PublicationReportingReason;
    subreason: PublicationReportingFraudSubreason;
}

export interface FreeCollectModuleParams {
    /** Follower only */
    followerOnly: Scalars['Boolean'];
}

export interface FreeCollectProxyAction {
    publicationId: Scalars['InternalPublicationId'];
}

export interface FreeFollowProxyAction {
    profileId: Scalars['ProfileId'];
}

export interface GenerateModuleCurrencyApprovalDataRequest {
    collectModule?: InputMaybe<CollectModules>;
    currency: Scalars['ContractAddress'];
    followModule?: InputMaybe<FollowModules>;
    referenceModule?: InputMaybe<ReferenceModules>;
    unknownCollectModule?: InputMaybe<Scalars['ContractAddress']>;
    unknownFollowModule?: InputMaybe<Scalars['ContractAddress']>;
    unknownReferenceModule?: InputMaybe<Scalars['ContractAddress']>;
    /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
    value: Scalars['String'];
}

export interface GetPublicationMetadataStatusRequest {
    publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
    txHash?: InputMaybe<Scalars['TxHash']>;
    txId?: InputMaybe<Scalars['TxId']>;
}

export interface GlobalProtocolStatsRequest {
    /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
    fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
    /** Unix time to timestamp - if not supplied it go to the present timestamp */
    toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
}

export interface HasTxHashBeenIndexedRequest {
    /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
    txHash?: InputMaybe<Scalars['TxHash']>;
    /** Tx id.. if your using the broadcaster you should always use this field */
    txId?: InputMaybe<Scalars['TxId']>;
}

export interface HidePublicationRequest {
    /** Publication id */
    publicationId: Scalars['InternalPublicationId'];
}

export interface IllegalReasonInputParams {
    reason: PublicationReportingReason;
    subreason: PublicationReportingIllegalSubreason;
}

export interface InternalPublicationsFilterRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    /** must be DD/MM/YYYY */
    fromDate: Scalars['String'];
    limit?: InputMaybe<Scalars['LimitScalar']>;
    /** The shared secret */
    secret: Scalars['String'];
    /** The App Id */
    source: Scalars['Sources'];
    /** must be DD/MM/YYYY */
    toDate: Scalars['String'];
}

export interface LimitedFeeCollectModuleParams {
    /** The collect module amount info */
    amount: ModuleFeeAmountParams;
    /** The collect module limit */
    collectLimit: Scalars['String'];
    /** Follower only */
    followerOnly: Scalars['Boolean'];
    /** The collect module recipient address */
    recipient: Scalars['EthereumAddress'];
    /** The collect module referral fee */
    referralFee: Scalars['Float'];
}

export interface LimitedTimedFeeCollectModuleParams {
    /** The collect module amount info */
    amount: ModuleFeeAmountParams;
    /** The collect module limit */
    collectLimit: Scalars['String'];
    /** Follower only */
    followerOnly: Scalars['Boolean'];
    /** The collect module recipient address */
    recipient: Scalars['EthereumAddress'];
    /** The collect module referral fee */
    referralFee: Scalars['Float'];
}

/** The metadata attribute input */
export interface MetadataAttributeInput {
    /** The display type */
    displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
    /** The trait type - can be anything its the name it will render so include spaces */
    traitType: Scalars['String'];
    /** The value */
    value: Scalars['String'];
}

export interface ModuleFeeAmountParams {
    /** The currency address */
    currency: Scalars['ContractAddress'];
    /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
    value: Scalars['String'];
}

export interface MutualFollowersProfilesQueryRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    /** The profile id your viewing */
    viewingProfileId: Scalars['ProfileId'];
    /** The profile id you want the result to come back as your viewing from */
    yourProfileId: Scalars['ProfileId'];
}

export interface NFTData {
    /** Id of the nft ownership challenge */
    id: Scalars['NftOwnershipId'];
    /** The signature */
    signature: Scalars['Signature'];
}

export interface NFTsRequest {
    /** Chain Ids */
    chainIds: Array<Scalars['ChainId']>;
    /** Filter by contract address */
    contractAddress?: InputMaybe<Scalars['ContractAddress']>;
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    /** Filter by owner address */
    ownerAddress: Scalars['EthereumAddress'];
}

export interface NftOwnershipChallenge {
    /** Chain Id */
    chainId: Scalars['ChainId'];
    /** ContractAddress for nft */
    contractAddress: Scalars['ContractAddress'];
    /** Token id for NFT */
    tokenId: Scalars['String'];
}

export interface NftOwnershipChallengeRequest {
    /** The wallet address which owns the NFT */
    ethereumAddress: Scalars['EthereumAddress'];
    nfts: NftOwnershipChallenge[];
}

export interface NotificationRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    customFilters?: InputMaybe<CustomFiltersTypes[]>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** The profile id */
    notificationTypes?: InputMaybe<NotificationTypes[]>;
    /** The profile id */
    profileId: Scalars['ProfileId'];
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
}

/** The notification filter types */
export enum NotificationTypes {
    COLLECTED_COMMENT = 'COLLECTED_COMMENT',
    COLLECTED_POST = 'COLLECTED_POST',
    COMMENTED_COMMENT = 'COMMENTED_COMMENT',
    COMMENTED_POST = 'COMMENTED_POST',
    FOLLOWED = 'FOLLOWED',
    MENTION_COMMENT = 'MENTION_COMMENT',
    MENTION_POST = 'MENTION_POST',
    MIRRORED_COMMENT = 'MIRRORED_COMMENT',
    MIRRORED_POST = 'MIRRORED_POST',
    REACTION_COMMENT = 'REACTION_COMMENT',
    REACTION_POST = 'REACTION_POST',
}

export interface PendingApprovalFollowsRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
}

export interface ProfileFollowModuleBeenRedeemedRequest {
    followProfileId: Scalars['ProfileId'];
    redeemingProfileId: Scalars['ProfileId'];
}

export interface ProfileFollowModuleRedeemParams {
    /** The profile id to use to follow this profile */
    profileId: Scalars['ProfileId'];
}

export interface ProfileFollowRevenueQueryRequest {
    /** The profile id */
    profileId: Scalars['ProfileId'];
}

export interface ProfileOnChainIdentityRequest {
    profileIds: Array<Scalars['ProfileId']>;
}

export interface ProfilePublicationRevenueQueryRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** The profile id */
    profileId: Scalars['ProfileId'];
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
    /** The revenue types */
    types?: InputMaybe<PublicationTypes[]>;
}

export interface ProfilePublicationsForSaleRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** Profile id */
    profileId: Scalars['ProfileId'];
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
}

export interface ProfileQueryRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    /** The handles for the profile */
    handles?: InputMaybe<Array<Scalars['Handle']>>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    /** The ethereum addresses */
    ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>;
    /** The profile ids */
    profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
    /** The mirrored publication id */
    whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>;
}

/** profile sort criteria */
export enum ProfileSortCriteria {
    CREATED_ON = 'CREATED_ON',
    LATEST_CREATED = 'LATEST_CREATED',
    MOST_COLLECTS = 'MOST_COLLECTS',
    MOST_COMMENTS = 'MOST_COMMENTS',
    MOST_FOLLOWERS = 'MOST_FOLLOWERS',
    MOST_MIRRORS = 'MOST_MIRRORS',
    MOST_POSTS = 'MOST_POSTS',
    MOST_PUBLICATION = 'MOST_PUBLICATION',
}

export interface ProxyActionRequest {
    collect?: InputMaybe<CollectProxyAction>;
    follow?: InputMaybe<FollowProxyAction>;
}

/** The proxy action status */
export enum ProxyActionStatusTypes {
    COMPLETE = 'COMPLETE',
    MINTING = 'MINTING',
    TRANSFERRING = 'TRANSFERRING',
}

/** The publication content warning */
export enum PublicationContentWarning {
    NSFW = 'NSFW',
    SENSITIVE = 'SENSITIVE',
    SPOILER = 'SPOILER',
}

/** The publication main focus */
export enum PublicationMainFocus {
    ARTICLE = 'ARTICLE',
    AUDIO = 'AUDIO',
    EMBED = 'EMBED',
    IMAGE = 'IMAGE',
    LINK = 'LINK',
    TEXT_ONLY = 'TEXT_ONLY',
    VIDEO = 'VIDEO',
}

/** Publication metadata content waring filters */
export interface PublicationMetadataContentWarningFilter {
    /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
    includeOneOf?: InputMaybe<PublicationContentWarning[]>;
}

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
    date = 'date',
    number = 'number',
    string = 'string',
}

/** Publication metadata filters */
export interface PublicationMetadataFilters {
    contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
    /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
    locale?: InputMaybe<Scalars['Locale']>;
    mainContentFocus?: InputMaybe<PublicationMainFocus[]>;
    tags?: InputMaybe<PublicationMetadataTagsFilter>;
}

/** The metadata attribute output */
export interface PublicationMetadataMediaInput {
    /** The alt tags for accessibility */
    altTag?: InputMaybe<Scalars['String']>;
    /** The cover for any video or audio you attached */
    cover?: InputMaybe<Scalars['String']>;
    item: Scalars['Url'];
    /** This is the mime type of media */
    type?: InputMaybe<Scalars['MimeType']>;
}

/** publication metadata status type */
export enum PublicationMetadataStatusType {
    METADATA_VALIDATION_FAILED = 'METADATA_VALIDATION_FAILED',
    NOT_FOUND = 'NOT_FOUND',
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
}

/** Publication metadata tag filter */
export interface PublicationMetadataTagsFilter {
    /** Needs to only match all */
    all?: InputMaybe<Array<Scalars['String']>>;
    /** Needs to only match one of */
    oneOf?: InputMaybe<Array<Scalars['String']>>;
}

export interface PublicationMetadataV1Input {
    /**
     * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
     *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
     *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
     *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
     */
    animation_url?: InputMaybe<Scalars['Url']>;
    /**  This is the appId the content belongs to */
    appId?: InputMaybe<Scalars['Sources']>;
    /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
    attributes: MetadataAttributeInput[];
    /** The content of a publication. If this is blank `media` must be defined or its out of spec */
    content?: InputMaybe<Scalars['Markdown']>;
    /** A human-readable description of the item. */
    description?: InputMaybe<Scalars['Markdown']>;
    /**
     * This is the URL that will appear below the asset's image on OpenSea and others etc
     *       and will allow users to leave OpenSea and view the item on the site.
     */
    external_url?: InputMaybe<Scalars['Url']>;
    /** legacy to support OpenSea will store any NFT image here. */
    image?: InputMaybe<Scalars['Url']>;
    /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
    imageMimeType?: InputMaybe<Scalars['MimeType']>;
    /**  This is lens supported attached media items to the publication */
    media?: InputMaybe<PublicationMetadataMediaInput[]>;
    /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
    metadata_id: Scalars['String'];
    /** Name of the item. */
    name: Scalars['String'];
    /** Signed metadata to validate the owner */
    signatureContext?: InputMaybe<PublicationSignatureContextInput>;
    /** The metadata version. (1.0.0 | 2.0.0) */
    version: Scalars['String'];
}

export interface PublicationMetadataV2Input {
    /**
     * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
     *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
     *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
     *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
     */
    animation_url?: InputMaybe<Scalars['Url']>;
    /**  This is the appId the content belongs to */
    appId?: InputMaybe<Scalars['Sources']>;
    /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
    attributes: MetadataAttributeInput[];
    /** The content of a publication. If this is blank `media` must be defined or its out of spec */
    content?: InputMaybe<Scalars['Markdown']>;
    /** Ability to add a content warning */
    contentWarning?: InputMaybe<PublicationContentWarning>;
    /** A human-readable description of the item. */
    description?: InputMaybe<Scalars['Markdown']>;
    /**
     * This is the URL that will appear below the asset's image on OpenSea and others etc
     *       and will allow users to leave OpenSea and view the item on the site.
     */
    external_url?: InputMaybe<Scalars['Url']>;
    /** legacy to support OpenSea will store any NFT image here. */
    image?: InputMaybe<Scalars['Url']>;
    /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
    imageMimeType?: InputMaybe<Scalars['MimeType']>;
    /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
    locale: Scalars['Locale'];
    /** Main content focus that for this publication */
    mainContentFocus: PublicationMainFocus;
    /**  This is lens supported attached media items to the publication */
    media?: InputMaybe<PublicationMetadataMediaInput[]>;
    /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
    metadata_id: Scalars['String'];
    /** Name of the item. */
    name: Scalars['String'];
    /** Signed metadata to validate the owner */
    signatureContext?: InputMaybe<PublicationSignatureContextInput>;
    /** Ability to tag your publication */
    tags?: InputMaybe<Array<Scalars['String']>>;
    /** The metadata version. (1.0.0 | 2.0.0) */
    version: Scalars['String'];
}

export interface PublicationQueryRequest {
    /** The publication id */
    publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
    /** The tx hash */
    txHash?: InputMaybe<Scalars['TxHash']>;
}

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
    IMPERSONATION = 'IMPERSONATION',
    SCAM = 'SCAM',
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
    ANIMAL_ABUSE = 'ANIMAL_ABUSE',
    DIRECT_THREAT = 'DIRECT_THREAT',
    HUMAN_ABUSE = 'HUMAN_ABUSE',
    THREAT_INDIVIDUAL = 'THREAT_INDIVIDUAL',
    VIOLENCE = 'VIOLENCE',
}

/** Publication reporting reason */
export enum PublicationReportingReason {
    FRAUD = 'FRAUD',
    ILLEGAL = 'ILLEGAL',
    SENSITIVE = 'SENSITIVE',
    SPAM = 'SPAM',
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
    NSFW = 'NSFW',
    OFFENSIVE = 'OFFENSIVE',
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
    FAKE_ENGAGEMENT = 'FAKE_ENGAGEMENT',
    MANIPULATION_ALGO = 'MANIPULATION_ALGO',
    MISLEADING = 'MISLEADING',
    MISUSE_HASHTAGS = 'MISUSE_HASHTAGS',
    REPETITIVE = 'REPETITIVE',
    SOMETHING_ELSE = 'SOMETHING_ELSE',
    UNRELATED = 'UNRELATED',
}

export interface PublicationRevenueQueryRequest {
    /** The publication id */
    publicationId: Scalars['InternalPublicationId'];
}

export interface PublicationSignatureContextInput {
    signature: Scalars['String'];
}

/** Publication sort criteria */
export enum PublicationSortCriteria {
    CURATED_PROFILES = 'CURATED_PROFILES',
    LATEST = 'LATEST',
    TOP_COLLECTED = 'TOP_COLLECTED',
    TOP_COMMENTED = 'TOP_COMMENTED',
    TOP_MIRRORED = 'TOP_MIRRORED',
}

/** The publication types */
export enum PublicationTypes {
    COMMENT = 'COMMENT',
    MIRROR = 'MIRROR',
    POST = 'POST',
}

export interface PublicationsQueryRequest {
    /** The ethereum address */
    collectedBy?: InputMaybe<Scalars['EthereumAddress']>;
    /** The publication id you wish to get comments for */
    commentsOf?: InputMaybe<Scalars['InternalPublicationId']>;
    cursor?: InputMaybe<Scalars['Cursor']>;
    customFilters?: InputMaybe<CustomFiltersTypes[]>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** Profile id */
    profileId?: InputMaybe<Scalars['ProfileId']>;
    /** Profile ids */
    profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
    /** The publication id */
    publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>;
    /** The publication types you want to query */
    publicationTypes?: InputMaybe<PublicationTypes[]>;
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
}

export interface ReactionFieldResolverRequest {
    /** Profile id */
    profileId?: InputMaybe<Scalars['ProfileId']>;
}

export interface ReactionRequest {
    /** Profile id to perform the action */
    profileId: Scalars['ProfileId'];
    /** The internal publication id */
    publicationId: Scalars['InternalPublicationId'];
    /** The reaction */
    reaction: ReactionTypes;
}

/** Reaction types */
export enum ReactionTypes {
    DOWNVOTE = 'DOWNVOTE',
    UPVOTE = 'UPVOTE',
}

export interface RecommendedProfileOptions {
    /** If you wish to turn ML off */
    disableML?: InputMaybe<Scalars['Boolean']>;
    /** If you wish to shuffle the results */
    shuffle?: InputMaybe<Scalars['Boolean']>;
}

export interface ReferenceModuleParams {
    /** The degrees of seperation reference module */
    degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
    /** The follower only reference module */
    followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
    /** A unknown reference module */
    unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
}

/** The reference module types */
export enum ReferenceModules {
    DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
    FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
    UnknownReferenceModule = 'UnknownReferenceModule',
}

/** The refresh request */
export interface RefreshRequest {
    /** The refresh token */
    refreshToken: Scalars['Jwt'];
}

export interface RelRequest {
    ethereumAddress: Scalars['EthereumAddress'];
    secret: Scalars['String'];
}

/** Relay error reason */
export enum RelayErrorReasons {
    EXPIRED = 'EXPIRED',
    HANDLE_TAKEN = 'HANDLE_TAKEN',
    NOT_ALLOWED = 'NOT_ALLOWED',
    REJECTED = 'REJECTED',
    WRONG_WALLET_SIGNED = 'WRONG_WALLET_SIGNED',
}

export interface ReportPublicationRequest {
    additionalComments?: InputMaybe<Scalars['String']>;
    publicationId: Scalars['InternalPublicationId'];
    reason: ReportingReasonInputParams;
}

export interface ReportingReasonInputParams {
    fraudReason?: InputMaybe<FraudReasonInputParams>;
    illegalReason?: InputMaybe<IllegalReasonInputParams>;
    sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
    spamReason?: InputMaybe<SpamReasonInputParams>;
}

export interface SearchQueryRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    customFilters?: InputMaybe<CustomFiltersTypes[]>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    /** The search term */
    query: Scalars['Search'];
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
    type: SearchRequestTypes;
}

/** Search request types */
export enum SearchRequestTypes {
    PROFILE = 'PROFILE',
    PUBLICATION = 'PUBLICATION',
}

export interface SensitiveReasonInputParams {
    reason: PublicationReportingReason;
    subreason: PublicationReportingSensitiveSubreason;
}

export interface SetDispatcherRequest {
    /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
    dispatcher?: InputMaybe<Scalars['EthereumAddress']>;
    /** If you want to enable or disable it */
    enable?: InputMaybe<Scalars['Boolean']>;
    /** The profile id */
    profileId: Scalars['ProfileId'];
}

/** The signed auth challenge */
export interface SignedAuthChallenge {
    /** The ethereum address you signed the signature with */
    address: Scalars['EthereumAddress'];
    /** The signature */
    signature: Scalars['Signature'];
}

export interface SingleProfileQueryRequest {
    /** The handle for the profile */
    handle?: InputMaybe<Scalars['Handle']>;
    /** The profile id */
    profileId?: InputMaybe<Scalars['ProfileId']>;
}

export interface SpamReasonInputParams {
    reason: PublicationReportingReason;
    subreason: PublicationReportingSpamSubreason;
}

/** The publications tags sort criteria */
export enum TagSortCriteria {
    ALPHABETICAL = 'ALPHABETICAL',
    MOST_POPULAR = 'MOST_POPULAR',
}

export interface TimedFeeCollectModuleParams {
    /** The collect module amount info */
    amount: ModuleFeeAmountParams;
    /** Follower only */
    followerOnly: Scalars['Boolean'];
    /** The collect module recipient address */
    recipient: Scalars['EthereumAddress'];
    /** The collect module referral fee */
    referralFee: Scalars['Float'];
}

export interface TimelineRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    metadata?: InputMaybe<PublicationMetadataFilters>;
    /** The profile id */
    profileId: Scalars['ProfileId'];
    /** The App Id */
    sources?: InputMaybe<Array<Scalars['Sources']>>;
    /** The timeline types you wish to include, if nothing passed in will bring back all */
    timelineTypes?: InputMaybe<TimelineType[]>;
}

/** Timeline types */
export enum TimelineType {
    COLLECT_COMMENT = 'COLLECT_COMMENT',
    COLLECT_POST = 'COLLECT_POST',
    COMMENT = 'COMMENT',
    MIRROR = 'MIRROR',
    POST = 'POST',
}

/** Transaction error reason */
export enum TransactionErrorReasons {
    REVERTED = 'REVERTED',
}

export interface TypedDataOptions {
    /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
    overrideSigNonce: Scalars['Nonce'];
}

export interface UnfollowRequest {
    profile: Scalars['ProfileId'];
}

export interface UnknownCollectModuleParams {
    contractAddress: Scalars['ContractAddress'];
    /** The encoded data to submit with the module */
    data: Scalars['BlockchainData'];
}

export interface UnknownFollowModuleParams {
    contractAddress: Scalars['ContractAddress'];
    /** The encoded data to submit with the module */
    data: Scalars['BlockchainData'];
}

export interface UnknownFollowModuleRedeemParams {
    /** The encoded data to submit with the module */
    data: Scalars['BlockchainData'];
}

export interface UnknownReferenceModuleParams {
    contractAddress: Scalars['ContractAddress'];
    /** The encoded data to submit with the module */
    data: Scalars['BlockchainData'];
}

export interface UpdateProfileImageRequest {
    /** The nft data */
    nftData?: InputMaybe<NFTData>;
    profileId: Scalars['ProfileId'];
    /** The url to the image if offline */
    url?: InputMaybe<Scalars['Url']>;
}

export interface ValidatePublicationMetadataRequest {
    metadatav1?: InputMaybe<PublicationMetadataV1Input>;
    metadatav2?: InputMaybe<PublicationMetadataV2Input>;
}

/** The access request */
export interface VerifyRequest {
    /** The access token */
    accessToken: Scalars['Jwt'];
}

export interface WhoCollectedPublicationRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    /** Internal publication id */
    publicationId: Scalars['InternalPublicationId'];
}

export interface WhoReactedPublicationRequest {
    cursor?: InputMaybe<Scalars['Cursor']>;
    limit?: InputMaybe<Scalars['LimitScalar']>;
    /** Internal publication id */
    publicationId: Scalars['InternalPublicationId'];
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
    BlockchainData: true,
    Boolean: true,
    BroadcastId: true,
    ChainId: true,
    ClaimStatus: true,
    CollectModuleData: true,
    CollectModules: true,
    ContractAddress: true,
    CreateHandle: true,
    Cursor: true,
    CustomFiltersTypes: true,
    DateTime: true,
    Ens: true,
    EthereumAddress: true,
    FeedEventItemType: true,
    Float: true,
    FollowModuleData: true,
    FollowModules: true,
    Handle: true,
    HandleClaimIdScalar: true,
    Int: true,
    InternalPublicationId: true,
    Jwt: true,
    LimitScalar: true,
    Locale: true,
    Markdown: true,
    MimeType: true,
    NftOwnershipId: true,
    Nonce: true,
    NotificationId: true,
    NotificationTypes: true,
    ProfileId: true,
    ProfileSortCriteria: true,
    ProxyActionId: true,
    ProxyActionStatusTypes: true,
    PublicationContentWarning: true,
    PublicationId: true,
    PublicationMainFocus: true,
    PublicationMetadataDisplayTypes: true,
    PublicationMetadataStatusType: true,
    PublicationReportingFraudSubreason: true,
    PublicationReportingIllegalSubreason: true,
    PublicationReportingReason: true,
    PublicationReportingSensitiveSubreason: true,
    PublicationReportingSpamSubreason: true,
    PublicationSortCriteria: true,
    PublicationTag: true,
    PublicationTypes: true,
    PublicationUrl: true,
    ReactionId: true,
    ReactionTypes: true,
    ReferenceModuleData: true,
    ReferenceModules: true,
    RelayErrorReasons: true,
    Search: true,
    SearchRequestTypes: true,
    Signature: true,
    Sources: true,
    String: true,
    TagSortCriteria: true,
    TimelineType: true,
    TimestampScalar: true,
    TransactionErrorReasons: true,
    TxHash: true,
    TxId: true,
    UnixTimestamp: true,
    Url: true,
    Void: true,
};
export const generatedSchema = {
    AchRequest: {
        ethereumAddress: { __type: 'EthereumAddress!' },
        freeTextHandle: { __type: 'Boolean' },
        handle: { __type: 'CreateHandle' },
        overrideAlreadyClaimed: { __type: 'Boolean!' },
        overrideTradeMark: { __type: 'Boolean!' },
        secret: { __type: 'String!' },
    },
    AllPublicationsTagsRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        sort: { __type: 'TagSortCriteria!' },
        source: { __type: 'Sources' },
    },
    ApprovedAllowanceAmount: {
        __typename: { __type: 'String!' },
        allowance: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        currency: { __type: 'ContractAddress!' },
        module: { __type: 'String!' },
    },
    ApprovedModuleAllowanceAmountRequest: {
        collectModules: { __type: '[CollectModules!]' },
        currencies: { __type: '[ContractAddress!]!' },
        followModules: { __type: '[FollowModules!]' },
        referenceModules: { __type: '[ReferenceModules!]' },
        unknownCollectModules: { __type: '[ContractAddress!]' },
        unknownFollowModules: { __type: '[ContractAddress!]' },
        unknownReferenceModules: { __type: '[ContractAddress!]' },
    },
    Attribute: {
        __typename: { __type: 'String!' },
        displayType: { __type: 'String' },
        key: { __type: 'String!' },
        traitType: { __type: 'String' },
        value: { __type: 'String!' },
    },
    AuthChallengeResult: { __typename: { __type: 'String!' }, text: { __type: 'String!' } },
    AuthenticationResult: {
        __typename: { __type: 'String!' },
        accessToken: { __type: 'Jwt!' },
        refreshToken: { __type: 'Jwt!' },
    },
    BroadcastRequest: { id: { __type: 'BroadcastId!' }, signature: { __type: 'Signature!' } },
    BurnProfileRequest: { profileId: { __type: 'ProfileId!' } },
    CanCommentResponse: { __typename: { __type: 'String!' }, result: { __type: 'Boolean!' } },
    CanMirrorResponse: { __typename: { __type: 'String!' }, result: { __type: 'Boolean!' } },
    ChallengeRequest: { address: { __type: 'EthereumAddress!' } },
    ClaimHandleRequest: {
        followModule: { __type: 'FollowModuleParams' },
        freeTextHandle: { __type: 'CreateHandle' },
        id: { __type: 'HandleClaimIdScalar' },
    },
    ClaimableHandles: {
        __typename: { __type: 'String!' },
        canClaimFreeTextHandle: { __type: 'Boolean!' },
        reservedHandles: { __type: '[ReservedClaimableHandle!]!' },
    },
    CollectModule: { __typename: { __type: 'String!' }, $on: { __type: '$CollectModule!' } },
    CollectModuleParams: {
        feeCollectModule: { __type: 'FeeCollectModuleParams' },
        freeCollectModule: { __type: 'FreeCollectModuleParams' },
        limitedFeeCollectModule: { __type: 'LimitedFeeCollectModuleParams' },
        limitedTimedFeeCollectModule: { __type: 'LimitedTimedFeeCollectModuleParams' },
        revertCollectModule: { __type: 'Boolean' },
        timedFeeCollectModule: { __type: 'TimedFeeCollectModuleParams' },
        unknownCollectModule: { __type: 'UnknownCollectModuleParams' },
    },
    CollectProxyAction: { freeCollect: { __type: 'FreeCollectProxyAction' } },
    CollectedEvent: {
        __typename: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        timestamp: { __type: 'DateTime!' },
    },
    Comment: {
        __typename: { __type: 'String!' },
        appId: { __type: 'Sources' },
        canComment: { __type: 'CanCommentResponse!', __args: { profileId: 'ProfileId' } },
        canMirror: { __type: 'CanMirrorResponse!', __args: { profileId: 'ProfileId' } },
        collectModule: { __type: 'CollectModule!' },
        collectNftAddress: { __type: 'ContractAddress' },
        collectedBy: { __type: 'Wallet' },
        commentOn: { __type: 'Publication' },
        createdAt: { __type: 'DateTime!' },
        firstComment: { __type: 'Comment' },
        hasCollectedByMe: { __type: 'Boolean!' },
        hidden: { __type: 'Boolean!' },
        id: { __type: 'InternalPublicationId!' },
        mainPost: { __type: 'MainPostReference!' },
        metadata: { __type: 'MetadataOutput!' },
        mirrors: { __type: '[InternalPublicationId!]!', __args: { by: 'ProfileId' } },
        onChainContentURI: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        reaction: { __type: 'ReactionTypes', __args: { request: 'ReactionFieldResolverRequest' } },
        referenceModule: { __type: 'ReferenceModule' },
        stats: { __type: 'PublicationStats!' },
    },
    CreateBurnEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateBurnEIP712TypedDataTypes!' },
        value: { __type: 'CreateBurnEIP712TypedDataValue!' },
    },
    CreateBurnEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        BurnWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateBurnEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        nonce: { __type: 'Nonce!' },
        tokenId: { __type: 'String!' },
    },
    CreateBurnProfileBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateBurnEIP712TypedData!' },
    },
    CreateCollectBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateCollectEIP712TypedData!' },
    },
    CreateCollectEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateCollectEIP712TypedDataTypes!' },
        value: { __type: 'CreateCollectEIP712TypedDataValue!' },
    },
    CreateCollectEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        CollectWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateCollectEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        data: { __type: 'BlockchainData!' },
        deadline: { __type: 'UnixTimestamp!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
        pubId: { __type: 'PublicationId!' },
    },
    CreateCollectRequest: {
        publicationId: { __type: 'InternalPublicationId!' },
        unknownModuleData: { __type: 'BlockchainData' },
    },
    CreateCommentBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateCommentEIP712TypedData!' },
    },
    CreateCommentEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateCommentEIP712TypedDataTypes!' },
        value: { __type: 'CreateCommentEIP712TypedDataValue!' },
    },
    CreateCommentEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        CommentWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateCommentEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        collectModule: { __type: 'ContractAddress!' },
        collectModuleInitData: { __type: 'CollectModuleData!' },
        contentURI: { __type: 'PublicationUrl!' },
        deadline: { __type: 'UnixTimestamp!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
        profileIdPointed: { __type: 'ProfileId!' },
        pubIdPointed: { __type: 'PublicationId!' },
        referenceModule: { __type: 'ContractAddress!' },
        referenceModuleData: { __type: 'ReferenceModuleData!' },
        referenceModuleInitData: { __type: 'ReferenceModuleData!' },
    },
    CreateFollowBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateFollowEIP712TypedData!' },
    },
    CreateFollowEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateFollowEIP712TypedDataTypes!' },
        value: { __type: 'CreateFollowEIP712TypedDataValue!' },
    },
    CreateFollowEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        FollowWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateFollowEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        datas: { __type: '[BlockchainData!]!' },
        deadline: { __type: 'UnixTimestamp!' },
        nonce: { __type: 'Nonce!' },
        profileIds: { __type: '[ProfileId!]!' },
    },
    CreateMirrorBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateMirrorEIP712TypedData!' },
    },
    CreateMirrorEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateMirrorEIP712TypedDataTypes!' },
        value: { __type: 'CreateMirrorEIP712TypedDataValue!' },
    },
    CreateMirrorEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        MirrorWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateMirrorEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
        profileIdPointed: { __type: 'ProfileId!' },
        pubIdPointed: { __type: 'PublicationId!' },
        referenceModule: { __type: 'ContractAddress!' },
        referenceModuleData: { __type: 'ReferenceModuleData!' },
        referenceModuleInitData: { __type: 'ReferenceModuleData!' },
    },
    CreateMirrorRequest: {
        profileId: { __type: 'ProfileId!' },
        publicationId: { __type: 'InternalPublicationId!' },
        referenceModule: { __type: 'ReferenceModuleParams' },
    },
    CreatePostBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreatePostEIP712TypedData!' },
    },
    CreatePostEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreatePostEIP712TypedDataTypes!' },
        value: { __type: 'CreatePostEIP712TypedDataValue!' },
    },
    CreatePostEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        PostWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreatePostEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        collectModule: { __type: 'ContractAddress!' },
        collectModuleInitData: { __type: 'CollectModuleData!' },
        contentURI: { __type: 'PublicationUrl!' },
        deadline: { __type: 'UnixTimestamp!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
        referenceModule: { __type: 'ContractAddress!' },
        referenceModuleInitData: { __type: 'ReferenceModuleData!' },
    },
    CreateProfileRequest: {
        followModule: { __type: 'FollowModuleParams' },
        followNFTURI: { __type: 'Url' },
        handle: { __type: 'CreateHandle!' },
        profilePictureUri: { __type: 'Url' },
    },
    CreatePublicCommentRequest: {
        collectModule: { __type: 'CollectModuleParams!' },
        contentURI: { __type: 'Url!' },
        profileId: { __type: 'ProfileId!' },
        publicationId: { __type: 'InternalPublicationId!' },
        referenceModule: { __type: 'ReferenceModuleParams' },
    },
    CreatePublicPostRequest: {
        collectModule: { __type: 'CollectModuleParams!' },
        contentURI: { __type: 'Url!' },
        profileId: { __type: 'ProfileId!' },
        referenceModule: { __type: 'ReferenceModuleParams' },
    },
    CreatePublicSetProfileMetadataURIRequest: {
        metadata: { __type: 'Url!' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateSetDefaultProfileRequest: { profileId: { __type: 'ProfileId!' } },
    CreateSetDispatcherBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateSetDispatcherEIP712TypedData!' },
    },
    CreateSetDispatcherEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateSetDispatcherEIP712TypedDataTypes!' },
        value: { __type: 'CreateSetDispatcherEIP712TypedDataValue!' },
    },
    CreateSetDispatcherEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        SetDispatcherWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateSetDispatcherEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        dispatcher: { __type: 'EthereumAddress!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateSetFollowModuleBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateSetFollowModuleEIP712TypedData!' },
    },
    CreateSetFollowModuleEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateSetFollowModuleEIP712TypedDataTypes!' },
        value: { __type: 'CreateSetFollowModuleEIP712TypedDataValue!' },
    },
    CreateSetFollowModuleEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        SetFollowModuleWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateSetFollowModuleEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        followModule: { __type: 'ContractAddress!' },
        followModuleInitData: { __type: 'FollowModuleData!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateSetFollowModuleRequest: {
        followModule: { __type: 'FollowModuleParams!' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateSetFollowNFTUriBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateSetFollowNFTUriEIP712TypedData!' },
    },
    CreateSetFollowNFTUriEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateSetFollowNFTUriEIP712TypedDataTypes!' },
        value: { __type: 'CreateSetFollowNFTUriEIP712TypedDataValue!' },
    },
    CreateSetFollowNFTUriEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        SetFollowNFTURIWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateSetFollowNFTUriEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        followNFTURI: { __type: 'Url!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateSetFollowNFTUriRequest: {
        followNFTURI: { __type: 'Url' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateSetProfileImageUriBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateSetProfileImageUriEIP712TypedData!' },
    },
    CreateSetProfileImageUriEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateSetProfileImageUriEIP712TypedDataTypes!' },
        value: { __type: 'CreateSetProfileImageUriEIP712TypedDataValue!' },
    },
    CreateSetProfileImageUriEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        SetProfileImageURIWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateSetProfileImageUriEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        imageURI: { __type: 'Url!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateSetProfileMetadataURIBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateSetProfileMetadataURIEIP712TypedData!' },
    },
    CreateSetProfileMetadataURIEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateSetProfileMetadataURIEIP712TypedDataTypes!' },
        value: { __type: 'CreateSetProfileMetadataURIEIP712TypedDataValue!' },
    },
    CreateSetProfileMetadataURIEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        SetProfileMetadataURIWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateSetProfileMetadataURIEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        metadata: { __type: 'Url!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
    },
    CreateToggleFollowBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateToggleFollowEIP712TypedData!' },
    },
    CreateToggleFollowEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'CreateToggleFollowEIP712TypedDataTypes!' },
        value: { __type: 'CreateToggleFollowEIP712TypedDataValue!' },
    },
    CreateToggleFollowEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        ToggleFollowWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    CreateToggleFollowEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        enables: { __type: '[Boolean!]!' },
        nonce: { __type: 'Nonce!' },
        profileIds: { __type: '[ProfileId!]!' },
    },
    CreateToggleFollowRequest: {
        enables: { __type: '[Boolean!]!' },
        profileIds: { __type: '[ProfileId!]!' },
    },
    CreateUnfollowBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'CreateBurnEIP712TypedData!' },
    },
    DefaultProfileRequest: { ethereumAddress: { __type: 'EthereumAddress!' } },
    DegreesOfSeparationReferenceModuleParams: {
        commentsRestricted: { __type: 'Boolean!' },
        degreesOfSeparation: { __type: 'Int!' },
        mirrorsRestricted: { __type: 'Boolean!' },
    },
    DegreesOfSeparationReferenceModuleSettings: {
        __typename: { __type: 'String!' },
        commentsRestricted: { __type: 'Boolean!' },
        contractAddress: { __type: 'ContractAddress!' },
        degreesOfSeparation: { __type: 'Int!' },
        mirrorsRestricted: { __type: 'Boolean!' },
        type: { __type: 'ReferenceModules!' },
    },
    Dispatcher: {
        __typename: { __type: 'String!' },
        address: { __type: 'EthereumAddress!' },
        canUseRelay: { __type: 'Boolean!' },
    },
    DoesFollow: {
        followerAddress: { __type: 'EthereumAddress!' },
        profileId: { __type: 'ProfileId!' },
    },
    DoesFollowRequest: { followInfos: { __type: '[DoesFollow!]!' } },
    DoesFollowResponse: {
        __typename: { __type: 'String!' },
        followerAddress: { __type: 'EthereumAddress!' },
        follows: { __type: 'Boolean!' },
        profileId: { __type: 'ProfileId!' },
    },
    EIP712TypedDataDomain: {
        __typename: { __type: 'String!' },
        chainId: { __type: 'ChainId!' },
        name: { __type: 'String!' },
        verifyingContract: { __type: 'ContractAddress!' },
        version: { __type: 'String!' },
    },
    EIP712TypedDataField: {
        __typename: { __type: 'String!' },
        name: { __type: 'String!' },
        type: { __type: 'String!' },
    },
    ElectedMirror: {
        __typename: { __type: 'String!' },
        mirrorId: { __type: 'InternalPublicationId!' },
        profile: { __type: 'Profile!' },
        timestamp: { __type: 'DateTime!' },
    },
    EnabledModule: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        inputParams: { __type: '[ModuleInfo!]!' },
        moduleName: { __type: 'String!' },
        redeemParams: { __type: '[ModuleInfo!]!' },
        returnDataParms: { __type: '[ModuleInfo!]!' },
    },
    EnabledModules: {
        __typename: { __type: 'String!' },
        collectModules: { __type: '[EnabledModule!]!' },
        followModules: { __type: '[EnabledModule!]!' },
        referenceModules: { __type: '[EnabledModule!]!' },
    },
    EnsOnChainIdentity: { __typename: { __type: 'String!' }, name: { __type: 'Ens' } },
    Erc20: {
        __typename: { __type: 'String!' },
        address: { __type: 'ContractAddress!' },
        decimals: { __type: 'Int!' },
        name: { __type: 'String!' },
        symbol: { __type: 'String!' },
    },
    Erc20Amount: {
        __typename: { __type: 'String!' },
        asset: { __type: 'Erc20!' },
        value: { __type: 'String!' },
    },
    ExploreProfileResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Profile!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    ExploreProfilesRequest: {
        cursor: { __type: 'Cursor' },
        customFilters: { __type: '[CustomFiltersTypes!]' },
        limit: { __type: 'LimitScalar' },
        sortCriteria: { __type: 'ProfileSortCriteria!' },
        timestamp: { __type: 'TimestampScalar' },
    },
    ExplorePublicationRequest: {
        cursor: { __type: 'Cursor' },
        customFilters: { __type: '[CustomFiltersTypes!]' },
        excludeProfileIds: { __type: '[ProfileId!]' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        noRandomize: { __type: 'Boolean' },
        publicationTypes: { __type: '[PublicationTypes!]' },
        sortCriteria: { __type: 'PublicationSortCriteria!' },
        sources: { __type: '[Sources!]' },
        timestamp: { __type: 'TimestampScalar' },
    },
    ExplorePublicationResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Publication!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    FeeCollectModuleParams: {
        amount: { __type: 'ModuleFeeAmountParams!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
    },
    FeeCollectModuleSettings: {
        __typename: { __type: 'String!' },
        amount: { __type: 'ModuleFeeAmount!' },
        contractAddress: { __type: 'ContractAddress!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
        type: { __type: 'CollectModules!' },
    },
    FeeFollowModuleParams: {
        amount: { __type: 'ModuleFeeAmountParams!' },
        recipient: { __type: 'EthereumAddress!' },
    },
    FeeFollowModuleRedeemParams: { amount: { __type: 'ModuleFeeAmountParams!' } },
    FeeFollowModuleSettings: {
        __typename: { __type: 'String!' },
        amount: { __type: 'ModuleFeeAmount!' },
        contractAddress: { __type: 'ContractAddress!' },
        recipient: { __type: 'EthereumAddress!' },
        type: { __type: 'FollowModules!' },
    },
    FeedHighlightsRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        profileId: { __type: 'ProfileId!' },
        sources: { __type: '[Sources!]' },
    },
    FeedItem: {
        __typename: { __type: 'String!' },
        collects: { __type: '[CollectedEvent!]!' },
        comments: { __type: '[Comment!]' },
        electedMirror: { __type: 'ElectedMirror' },
        mirrors: { __type: '[MirrorEvent!]!' },
        reactions: { __type: '[ReactionEvent!]!' },
        root: { __type: 'FeedItemRoot!' },
    },
    FeedItemRoot: { __typename: { __type: 'String!' }, $on: { __type: '$FeedItemRoot!' } },
    FeedRequest: {
        cursor: { __type: 'Cursor' },
        feedEventItemTypes: { __type: '[FeedEventItemType!]' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        profileId: { __type: 'ProfileId!' },
        sources: { __type: '[Sources!]' },
    },
    Follow: {
        followModule: { __type: 'FollowModuleRedeemParams' },
        profile: { __type: 'ProfileId!' },
    },
    FollowModule: { __typename: { __type: 'String!' }, $on: { __type: '$FollowModule!' } },
    FollowModuleParams: {
        feeFollowModule: { __type: 'FeeFollowModuleParams' },
        freeFollowModule: { __type: 'Boolean' },
        profileFollowModule: { __type: 'Boolean' },
        revertFollowModule: { __type: 'Boolean' },
        unknownFollowModule: { __type: 'UnknownFollowModuleParams' },
    },
    FollowModuleRedeemParams: {
        feeFollowModule: { __type: 'FeeFollowModuleRedeemParams' },
        profileFollowModule: { __type: 'ProfileFollowModuleRedeemParams' },
        unknownFollowModule: { __type: 'UnknownFollowModuleRedeemParams' },
    },
    FollowOnlyReferenceModuleSettings: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        type: { __type: 'ReferenceModules!' },
    },
    FollowProxyAction: { freeFollow: { __type: 'FreeFollowProxyAction' } },
    FollowRequest: { follow: { __type: '[Follow!]!' } },
    FollowRevenueResult: {
        __typename: { __type: 'String!' },
        revenues: { __type: '[RevenueAggregate!]!' },
    },
    Follower: {
        __typename: { __type: 'String!' },
        totalAmountOfTimesFollowed: { __type: 'Int!' },
        wallet: { __type: 'Wallet!' },
    },
    FollowerNftOwnedTokenIds: {
        __typename: { __type: 'String!' },
        followerNftAddress: { __type: 'ContractAddress!' },
        tokensIds: { __type: '[String!]!' },
    },
    FollowerNftOwnedTokenIdsRequest: {
        address: { __type: 'EthereumAddress!' },
        profileId: { __type: 'ProfileId!' },
    },
    FollowersRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        profileId: { __type: 'ProfileId!' },
    },
    Following: {
        __typename: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        totalAmountOfTimesFollowing: { __type: 'Int!' },
    },
    FollowingRequest: {
        address: { __type: 'EthereumAddress!' },
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
    },
    FraudReasonInputParams: {
        reason: { __type: 'PublicationReportingReason!' },
        subreason: { __type: 'PublicationReportingFraudSubreason!' },
    },
    FreeCollectModuleParams: { followerOnly: { __type: 'Boolean!' } },
    FreeCollectModuleSettings: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        followerOnly: { __type: 'Boolean!' },
        type: { __type: 'CollectModules!' },
    },
    FreeCollectProxyAction: { publicationId: { __type: 'InternalPublicationId!' } },
    FreeFollowProxyAction: { profileId: { __type: 'ProfileId!' } },
    GenerateModuleCurrencyApproval: {
        __typename: { __type: 'String!' },
        data: { __type: 'BlockchainData!' },
        from: { __type: 'EthereumAddress!' },
        to: { __type: 'ContractAddress!' },
    },
    GenerateModuleCurrencyApprovalDataRequest: {
        collectModule: { __type: 'CollectModules' },
        currency: { __type: 'ContractAddress!' },
        followModule: { __type: 'FollowModules' },
        referenceModule: { __type: 'ReferenceModules' },
        unknownCollectModule: { __type: 'ContractAddress' },
        unknownFollowModule: { __type: 'ContractAddress' },
        unknownReferenceModule: { __type: 'ContractAddress' },
        value: { __type: 'String!' },
    },
    GetPublicationMetadataStatusRequest: {
        publicationId: { __type: 'InternalPublicationId' },
        txHash: { __type: 'TxHash' },
        txId: { __type: 'TxId' },
    },
    GlobalProtocolStats: {
        __typename: { __type: 'String!' },
        totalBurntProfiles: { __type: 'Int!' },
        totalCollects: { __type: 'Int!' },
        totalComments: { __type: 'Int!' },
        totalFollows: { __type: 'Int!' },
        totalMirrors: { __type: 'Int!' },
        totalPosts: { __type: 'Int!' },
        totalProfiles: { __type: 'Int!' },
        totalRevenue: { __type: '[Erc20Amount!]!' },
    },
    GlobalProtocolStatsRequest: {
        fromTimestamp: { __type: 'UnixTimestamp' },
        sources: { __type: '[Sources!]' },
        toTimestamp: { __type: 'UnixTimestamp' },
    },
    HasTxHashBeenIndexedRequest: { txHash: { __type: 'TxHash' }, txId: { __type: 'TxId' } },
    HidePublicationRequest: { publicationId: { __type: 'InternalPublicationId!' } },
    IllegalReasonInputParams: {
        reason: { __type: 'PublicationReportingReason!' },
        subreason: { __type: 'PublicationReportingIllegalSubreason!' },
    },
    InternalPublicationsFilterRequest: {
        cursor: { __type: 'Cursor' },
        fromDate: { __type: 'String!' },
        limit: { __type: 'LimitScalar' },
        secret: { __type: 'String!' },
        source: { __type: 'Sources!' },
        toDate: { __type: 'String!' },
    },
    LimitedFeeCollectModuleParams: {
        amount: { __type: 'ModuleFeeAmountParams!' },
        collectLimit: { __type: 'String!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
    },
    LimitedFeeCollectModuleSettings: {
        __typename: { __type: 'String!' },
        amount: { __type: 'ModuleFeeAmount!' },
        collectLimit: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
        type: { __type: 'CollectModules!' },
    },
    LimitedTimedFeeCollectModuleParams: {
        amount: { __type: 'ModuleFeeAmountParams!' },
        collectLimit: { __type: 'String!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
    },
    LimitedTimedFeeCollectModuleSettings: {
        __typename: { __type: 'String!' },
        amount: { __type: 'ModuleFeeAmount!' },
        collectLimit: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        endTimestamp: { __type: 'DateTime!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
        type: { __type: 'CollectModules!' },
    },
    Log: {
        __typename: { __type: 'String!' },
        address: { __type: 'ContractAddress!' },
        blockHash: { __type: 'String!' },
        blockNumber: { __type: 'Int!' },
        data: { __type: 'String!' },
        logIndex: { __type: 'Int!' },
        removed: { __type: 'Boolean!' },
        topics: { __type: '[String!]!' },
        transactionHash: { __type: 'TxHash!' },
        transactionIndex: { __type: 'Int!' },
    },
    MainPostReference: {
        __typename: { __type: 'String!' },
        $on: { __type: '$MainPostReference!' },
    },
    Media: {
        __typename: { __type: 'String!' },
        altTag: { __type: 'String' },
        cover: { __type: 'String' },
        height: { __type: 'Int' },
        mimeType: { __type: 'MimeType' },
        size: { __type: 'Int' },
        url: { __type: 'Url!' },
        width: { __type: 'Int' },
    },
    MediaSet: {
        __typename: { __type: 'String!' },
        medium: { __type: 'Media' },
        original: { __type: 'Media!' },
        small: { __type: 'Media' },
    },
    MentionPublication: {
        __typename: { __type: 'String!' },
        $on: { __type: '$MentionPublication!' },
    },
    MetadataAttributeInput: {
        displayType: { __type: 'PublicationMetadataDisplayTypes' },
        traitType: { __type: 'String!' },
        value: { __type: 'String!' },
    },
    MetadataAttributeOutput: {
        __typename: { __type: 'String!' },
        displayType: { __type: 'PublicationMetadataDisplayTypes' },
        traitType: { __type: 'String' },
        value: { __type: 'String' },
    },
    MetadataOutput: {
        __typename: { __type: 'String!' },
        animatedUrl: { __type: 'Url' },
        attributes: { __type: '[MetadataAttributeOutput!]!' },
        content: { __type: 'Markdown' },
        contentWarning: { __type: 'PublicationContentWarning' },
        cover: { __type: 'MediaSet' },
        description: { __type: 'Markdown' },
        image: { __type: 'Url' },
        locale: { __type: 'Locale' },
        mainContentFocus: { __type: 'PublicationMainFocus!' },
        media: { __type: '[MediaSet!]!' },
        name: { __type: 'String' },
        tags: { __type: '[String!]!' },
    },
    Mirror: {
        __typename: { __type: 'String!' },
        appId: { __type: 'Sources' },
        canComment: { __type: 'CanCommentResponse!', __args: { profileId: 'ProfileId' } },
        canMirror: { __type: 'CanMirrorResponse!', __args: { profileId: 'ProfileId' } },
        collectModule: { __type: 'CollectModule!' },
        collectNftAddress: { __type: 'ContractAddress' },
        createdAt: { __type: 'DateTime!' },
        hasCollectedByMe: { __type: 'Boolean!' },
        hidden: { __type: 'Boolean!' },
        id: { __type: 'InternalPublicationId!' },
        metadata: { __type: 'MetadataOutput!' },
        mirrorOf: { __type: 'MirrorablePublication!' },
        onChainContentURI: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        reaction: { __type: 'ReactionTypes', __args: { request: 'ReactionFieldResolverRequest' } },
        referenceModule: { __type: 'ReferenceModule' },
        stats: { __type: 'PublicationStats!' },
    },
    MirrorEvent: {
        __typename: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        timestamp: { __type: 'DateTime!' },
    },
    MirrorablePublication: {
        __typename: { __type: 'String!' },
        $on: { __type: '$MirrorablePublication!' },
    },
    ModuleFeeAmount: {
        __typename: { __type: 'String!' },
        asset: { __type: 'Erc20!' },
        value: { __type: 'String!' },
    },
    ModuleFeeAmountParams: {
        currency: { __type: 'ContractAddress!' },
        value: { __type: 'String!' },
    },
    ModuleInfo: {
        __typename: { __type: 'String!' },
        name: { __type: 'String!' },
        type: { __type: 'String!' },
    },
    MutualFollowersProfilesQueryRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        viewingProfileId: { __type: 'ProfileId!' },
        yourProfileId: { __type: 'ProfileId!' },
    },
    NFT: {
        __typename: { __type: 'String!' },
        chainId: { __type: 'ChainId!' },
        collectionName: { __type: 'String!' },
        contentURI: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        contractName: { __type: 'String!' },
        description: { __type: 'String!' },
        ercType: { __type: 'String!' },
        name: { __type: 'String!' },
        originalContent: { __type: 'NFTContent!' },
        owners: { __type: '[Owner!]!' },
        symbol: { __type: 'String!' },
        tokenId: { __type: 'String!' },
    },
    NFTContent: {
        __typename: { __type: 'String!' },
        animatedUrl: { __type: 'String' },
        metaType: { __type: 'String!' },
        uri: { __type: 'String!' },
    },
    NFTData: { id: { __type: 'NftOwnershipId!' }, signature: { __type: 'Signature!' } },
    NFTsRequest: {
        chainIds: { __type: '[ChainId!]!' },
        contractAddress: { __type: 'ContractAddress' },
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        ownerAddress: { __type: 'EthereumAddress!' },
    },
    NFTsResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[NFT!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    NewCollectNotification: {
        __typename: { __type: 'String!' },
        collectedPublication: { __type: 'Publication!' },
        createdAt: { __type: 'DateTime!' },
        notificationId: { __type: 'NotificationId!' },
        wallet: { __type: 'Wallet!' },
    },
    NewCommentNotification: {
        __typename: { __type: 'String!' },
        comment: { __type: 'Comment!' },
        createdAt: { __type: 'DateTime!' },
        notificationId: { __type: 'NotificationId!' },
        profile: { __type: 'Profile!' },
    },
    NewFollowerNotification: {
        __typename: { __type: 'String!' },
        createdAt: { __type: 'DateTime!' },
        isFollowedByMe: { __type: 'Boolean!' },
        notificationId: { __type: 'NotificationId!' },
        wallet: { __type: 'Wallet!' },
    },
    NewMentionNotification: {
        __typename: { __type: 'String!' },
        createdAt: { __type: 'DateTime!' },
        mentionPublication: { __type: 'MentionPublication!' },
        notificationId: { __type: 'NotificationId!' },
    },
    NewMirrorNotification: {
        __typename: { __type: 'String!' },
        createdAt: { __type: 'DateTime!' },
        notificationId: { __type: 'NotificationId!' },
        profile: { __type: 'Profile!' },
        publication: { __type: 'MirrorablePublication!' },
    },
    NewReactionNotification: {
        __typename: { __type: 'String!' },
        createdAt: { __type: 'DateTime!' },
        notificationId: { __type: 'NotificationId!' },
        profile: { __type: 'Profile!' },
        publication: { __type: 'Publication!' },
        reaction: { __type: 'ReactionTypes!' },
    },
    NftImage: {
        __typename: { __type: 'String!' },
        chainId: { __type: 'Int!' },
        contractAddress: { __type: 'ContractAddress!' },
        tokenId: { __type: 'String!' },
        uri: { __type: 'Url!' },
        verified: { __type: 'Boolean!' },
    },
    NftOwnershipChallenge: {
        chainId: { __type: 'ChainId!' },
        contractAddress: { __type: 'ContractAddress!' },
        tokenId: { __type: 'String!' },
    },
    NftOwnershipChallengeRequest: {
        ethereumAddress: { __type: 'EthereumAddress!' },
        nfts: { __type: '[NftOwnershipChallenge!]!' },
    },
    NftOwnershipChallengeResult: {
        __typename: { __type: 'String!' },
        id: { __type: 'NftOwnershipId!' },
        text: { __type: 'String!' },
        timeout: { __type: 'TimestampScalar!' },
    },
    Notification: { __typename: { __type: 'String!' }, $on: { __type: '$Notification!' } },
    NotificationRequest: {
        cursor: { __type: 'Cursor' },
        customFilters: { __type: '[CustomFiltersTypes!]' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        notificationTypes: { __type: '[NotificationTypes!]' },
        profileId: { __type: 'ProfileId!' },
        sources: { __type: '[Sources!]' },
    },
    OnChainIdentity: {
        __typename: { __type: 'String!' },
        ens: { __type: 'EnsOnChainIdentity' },
        proofOfHumanity: { __type: 'Boolean!' },
        sybilDotOrg: { __type: 'SybilDotOrgIdentity!' },
        worldcoin: { __type: 'WorldcoinIdentity!' },
    },
    Owner: {
        __typename: { __type: 'String!' },
        address: { __type: 'EthereumAddress!' },
        amount: { __type: 'Float!' },
    },
    PaginatedAllPublicationsTagsResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[TagResult!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedFeedResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[FeedItem!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedFollowersResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Follower!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedFollowingResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Following!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedNotificationResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Notification!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedProfilePublicationsForSaleResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[PublicationForSale!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedProfileResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Profile!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedPublicationResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Publication!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedResultInfo: {
        __typename: { __type: 'String!' },
        next: { __type: 'Cursor' },
        prev: { __type: 'Cursor' },
        totalCount: { __type: 'Int' },
    },
    PaginatedTimelineResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Publication!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedWhoCollectedResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Wallet!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PaginatedWhoReactedResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[WhoReactedResult!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    PendingApprovalFollowsRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
    },
    PendingApproveFollowsResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Profile!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    Post: {
        __typename: { __type: 'String!' },
        appId: { __type: 'Sources' },
        canComment: { __type: 'CanCommentResponse!', __args: { profileId: 'ProfileId' } },
        canMirror: { __type: 'CanMirrorResponse!', __args: { profileId: 'ProfileId' } },
        collectModule: { __type: 'CollectModule!' },
        collectNftAddress: { __type: 'ContractAddress' },
        collectedBy: { __type: 'Wallet' },
        createdAt: { __type: 'DateTime!' },
        hasCollectedByMe: { __type: 'Boolean!' },
        hidden: { __type: 'Boolean!' },
        id: { __type: 'InternalPublicationId!' },
        metadata: { __type: 'MetadataOutput!' },
        mirrors: { __type: '[InternalPublicationId!]!', __args: { by: 'ProfileId' } },
        onChainContentURI: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        reaction: { __type: 'ReactionTypes', __args: { request: 'ReactionFieldResolverRequest' } },
        referenceModule: { __type: 'ReferenceModule' },
        stats: { __type: 'PublicationStats!' },
    },
    Profile: {
        __typename: { __type: 'String!' },
        attributes: { __type: '[Attribute!]' },
        bio: { __type: 'String' },
        coverPicture: { __type: 'ProfileMedia' },
        dispatcher: { __type: 'Dispatcher' },
        followModule: { __type: 'FollowModule' },
        followNftAddress: { __type: 'ContractAddress' },
        handle: { __type: 'Handle!' },
        id: { __type: 'ProfileId!' },
        isDefault: { __type: 'Boolean!' },
        isFollowedByMe: { __type: 'Boolean!' },
        isFollowing: { __type: 'Boolean!', __args: { who: 'ProfileId' } },
        metadata: { __type: 'Url' },
        name: { __type: 'String' },
        onChainIdentity: { __type: 'OnChainIdentity!' },
        ownedBy: { __type: 'EthereumAddress!' },
        picture: { __type: 'ProfileMedia' },
        stats: { __type: 'ProfileStats!' },
    },
    ProfileFollowModuleBeenRedeemedRequest: {
        followProfileId: { __type: 'ProfileId!' },
        redeemingProfileId: { __type: 'ProfileId!' },
    },
    ProfileFollowModuleRedeemParams: { profileId: { __type: 'ProfileId!' } },
    ProfileFollowModuleSettings: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        type: { __type: 'FollowModules!' },
    },
    ProfileFollowRevenueQueryRequest: { profileId: { __type: 'ProfileId!' } },
    ProfileMedia: { __typename: { __type: 'String!' }, $on: { __type: '$ProfileMedia!' } },
    ProfileOnChainIdentityRequest: { profileIds: { __type: '[ProfileId!]!' } },
    ProfilePublicationRevenueQueryRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        profileId: { __type: 'ProfileId!' },
        sources: { __type: '[Sources!]' },
        types: { __type: '[PublicationTypes!]' },
    },
    ProfilePublicationRevenueResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[PublicationRevenue!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
    },
    ProfilePublicationsForSaleRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        profileId: { __type: 'ProfileId!' },
        sources: { __type: '[Sources!]' },
    },
    ProfileQueryRequest: {
        cursor: { __type: 'Cursor' },
        handles: { __type: '[Handle!]' },
        limit: { __type: 'LimitScalar' },
        ownedBy: { __type: '[EthereumAddress!]' },
        profileIds: { __type: '[ProfileId!]' },
        whoMirroredPublicationId: { __type: 'InternalPublicationId' },
    },
    ProfileSearchResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[Profile!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
        type: { __type: 'SearchRequestTypes!' },
    },
    ProfileStats: {
        __typename: { __type: 'String!' },
        commentsTotal: { __type: 'Int!', __args: { forSources: '[Sources!]!' } },
        id: { __type: 'ProfileId!' },
        mirrorsTotal: { __type: 'Int!', __args: { forSources: '[Sources!]!' } },
        postsTotal: { __type: 'Int!', __args: { forSources: '[Sources!]!' } },
        publicationsTotal: { __type: 'Int!', __args: { forSources: '[Sources!]!' } },
        totalCollects: { __type: 'Int!' },
        totalComments: { __type: 'Int!' },
        totalFollowers: { __type: 'Int!' },
        totalFollowing: { __type: 'Int!' },
        totalMirrors: { __type: 'Int!' },
        totalPosts: { __type: 'Int!' },
        totalPublications: { __type: 'Int!' },
    },
    ProxyActionError: {
        __typename: { __type: 'String!' },
        lastKnownTxId: { __type: 'TxId' },
        reason: { __type: 'String!' },
    },
    ProxyActionQueued: { __typename: { __type: 'String!' }, queuedAt: { __type: 'DateTime!' } },
    ProxyActionRequest: {
        collect: { __type: 'CollectProxyAction' },
        follow: { __type: 'FollowProxyAction' },
    },
    ProxyActionStatusResult: {
        __typename: { __type: 'String!' },
        status: { __type: 'ProxyActionStatusTypes!' },
        txHash: { __type: 'TxHash!' },
        txId: { __type: 'TxId!' },
    },
    ProxyActionStatusResultUnion: {
        __typename: { __type: 'String!' },
        $on: { __type: '$ProxyActionStatusResultUnion!' },
    },
    Publication: { __typename: { __type: 'String!' }, $on: { __type: '$Publication!' } },
    PublicationForSale: {
        __typename: { __type: 'String!' },
        $on: { __type: '$PublicationForSale!' },
    },
    PublicationMetadataContentWarningFilter: {
        includeOneOf: { __type: '[PublicationContentWarning!]' },
    },
    PublicationMetadataFilters: {
        contentWarning: { __type: 'PublicationMetadataContentWarningFilter' },
        locale: { __type: 'Locale' },
        mainContentFocus: { __type: '[PublicationMainFocus!]' },
        tags: { __type: 'PublicationMetadataTagsFilter' },
    },
    PublicationMetadataMediaInput: {
        altTag: { __type: 'String' },
        cover: { __type: 'String' },
        item: { __type: 'Url!' },
        type: { __type: 'MimeType' },
    },
    PublicationMetadataStatus: {
        __typename: { __type: 'String!' },
        reason: { __type: 'String' },
        status: { __type: 'PublicationMetadataStatusType!' },
    },
    PublicationMetadataTagsFilter: { all: { __type: '[String!]' }, oneOf: { __type: '[String!]' } },
    PublicationMetadataV1Input: {
        animation_url: { __type: 'Url' },
        appId: { __type: 'Sources' },
        attributes: { __type: '[MetadataAttributeInput!]!' },
        content: { __type: 'Markdown' },
        description: { __type: 'Markdown' },
        external_url: { __type: 'Url' },
        image: { __type: 'Url' },
        imageMimeType: { __type: 'MimeType' },
        media: { __type: '[PublicationMetadataMediaInput!]' },
        metadata_id: { __type: 'String!' },
        name: { __type: 'String!' },
        signatureContext: { __type: 'PublicationSignatureContextInput' },
        version: { __type: 'String!' },
    },
    PublicationMetadataV2Input: {
        animation_url: { __type: 'Url' },
        appId: { __type: 'Sources' },
        attributes: { __type: '[MetadataAttributeInput!]!' },
        content: { __type: 'Markdown' },
        contentWarning: { __type: 'PublicationContentWarning' },
        description: { __type: 'Markdown' },
        external_url: { __type: 'Url' },
        image: { __type: 'Url' },
        imageMimeType: { __type: 'MimeType' },
        locale: { __type: 'Locale!' },
        mainContentFocus: { __type: 'PublicationMainFocus!' },
        media: { __type: '[PublicationMetadataMediaInput!]' },
        metadata_id: { __type: 'String!' },
        name: { __type: 'String!' },
        signatureContext: { __type: 'PublicationSignatureContextInput' },
        tags: { __type: '[String!]' },
        version: { __type: 'String!' },
    },
    PublicationQueryRequest: {
        publicationId: { __type: 'InternalPublicationId' },
        txHash: { __type: 'TxHash' },
    },
    PublicationRevenue: {
        __typename: { __type: 'String!' },
        publication: { __type: 'Publication!' },
        revenue: { __type: 'RevenueAggregate!' },
    },
    PublicationRevenueQueryRequest: { publicationId: { __type: 'InternalPublicationId!' } },
    PublicationSearchResult: {
        __typename: { __type: 'String!' },
        items: { __type: '[PublicationSearchResultItem!]!' },
        pageInfo: { __type: 'PaginatedResultInfo!' },
        type: { __type: 'SearchRequestTypes!' },
    },
    PublicationSearchResultItem: {
        __typename: { __type: 'String!' },
        $on: { __type: '$PublicationSearchResultItem!' },
    },
    PublicationSignatureContextInput: { signature: { __type: 'String!' } },
    PublicationStats: {
        __typename: { __type: 'String!' },
        commentsTotal: { __type: 'Int!', __args: { forSources: '[Sources!]!' } },
        id: { __type: 'InternalPublicationId!' },
        totalAmountOfCollects: { __type: 'Int!' },
        totalAmountOfComments: { __type: 'Int!' },
        totalAmountOfMirrors: { __type: 'Int!' },
        totalDownvotes: { __type: 'Int!' },
        totalUpvotes: { __type: 'Int!' },
    },
    PublicationValidateMetadataResult: {
        __typename: { __type: 'String!' },
        reason: { __type: 'String' },
        valid: { __type: 'Boolean!' },
    },
    PublicationsQueryRequest: {
        collectedBy: { __type: 'EthereumAddress' },
        commentsOf: { __type: 'InternalPublicationId' },
        cursor: { __type: 'Cursor' },
        customFilters: { __type: '[CustomFiltersTypes!]' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        profileId: { __type: 'ProfileId' },
        profileIds: { __type: '[ProfileId!]' },
        publicationIds: { __type: '[InternalPublicationId!]' },
        publicationTypes: { __type: '[PublicationTypes!]' },
        sources: { __type: '[Sources!]' },
    },
    ReactionEvent: {
        __typename: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        reaction: { __type: 'ReactionTypes!' },
        timestamp: { __type: 'DateTime!' },
    },
    ReactionFieldResolverRequest: { profileId: { __type: 'ProfileId' } },
    ReactionRequest: {
        profileId: { __type: 'ProfileId!' },
        publicationId: { __type: 'InternalPublicationId!' },
        reaction: { __type: 'ReactionTypes!' },
    },
    RecommendedProfileOptions: { disableML: { __type: 'Boolean' }, shuffle: { __type: 'Boolean' } },
    ReferenceModule: { __typename: { __type: 'String!' }, $on: { __type: '$ReferenceModule!' } },
    ReferenceModuleParams: {
        degreesOfSeparationReferenceModule: { __type: 'DegreesOfSeparationReferenceModuleParams' },
        followerOnlyReferenceModule: { __type: 'Boolean' },
        unknownReferenceModule: { __type: 'UnknownReferenceModuleParams' },
    },
    RefreshRequest: { refreshToken: { __type: 'Jwt!' } },
    RelRequest: { ethereumAddress: { __type: 'EthereumAddress!' }, secret: { __type: 'String!' } },
    RelayError: { __typename: { __type: 'String!' }, reason: { __type: 'RelayErrorReasons!' } },
    RelayResult: { __typename: { __type: 'String!' }, $on: { __type: '$RelayResult!' } },
    RelayerResult: {
        __typename: { __type: 'String!' },
        txHash: { __type: 'TxHash!' },
        txId: { __type: 'TxId!' },
    },
    ReportPublicationRequest: {
        additionalComments: { __type: 'String' },
        publicationId: { __type: 'InternalPublicationId!' },
        reason: { __type: 'ReportingReasonInputParams!' },
    },
    ReportingReasonInputParams: {
        fraudReason: { __type: 'FraudReasonInputParams' },
        illegalReason: { __type: 'IllegalReasonInputParams' },
        sensitiveReason: { __type: 'SensitiveReasonInputParams' },
        spamReason: { __type: 'SpamReasonInputParams' },
    },
    ReservedClaimableHandle: {
        __typename: { __type: 'String!' },
        expiry: { __type: 'DateTime!' },
        handle: { __type: 'Handle!' },
        id: { __type: 'HandleClaimIdScalar!' },
        source: { __type: 'String!' },
    },
    RevenueAggregate: { __typename: { __type: 'String!' }, total: { __type: 'Erc20Amount!' } },
    RevertCollectModuleSettings: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        type: { __type: 'CollectModules!' },
    },
    RevertFollowModuleSettings: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        type: { __type: 'FollowModules!' },
    },
    SearchQueryRequest: {
        cursor: { __type: 'Cursor' },
        customFilters: { __type: '[CustomFiltersTypes!]' },
        limit: { __type: 'LimitScalar' },
        query: { __type: 'Search!' },
        sources: { __type: '[Sources!]' },
        type: { __type: 'SearchRequestTypes!' },
    },
    SearchResult: { __typename: { __type: 'String!' }, $on: { __type: '$SearchResult!' } },
    SensitiveReasonInputParams: {
        reason: { __type: 'PublicationReportingReason!' },
        subreason: { __type: 'PublicationReportingSensitiveSubreason!' },
    },
    SetDefaultProfileBroadcastItemResult: {
        __typename: { __type: 'String!' },
        expiresAt: { __type: 'DateTime!' },
        id: { __type: 'BroadcastId!' },
        typedData: { __type: 'SetDefaultProfileEIP712TypedData!' },
    },
    SetDefaultProfileEIP712TypedData: {
        __typename: { __type: 'String!' },
        domain: { __type: 'EIP712TypedDataDomain!' },
        types: { __type: 'SetDefaultProfileEIP712TypedDataTypes!' },
        value: { __type: 'SetDefaultProfileEIP712TypedDataValue!' },
    },
    SetDefaultProfileEIP712TypedDataTypes: {
        __typename: { __type: 'String!' },
        SetDefaultProfileWithSig: { __type: '[EIP712TypedDataField!]!' },
    },
    SetDefaultProfileEIP712TypedDataValue: {
        __typename: { __type: 'String!' },
        deadline: { __type: 'UnixTimestamp!' },
        nonce: { __type: 'Nonce!' },
        profileId: { __type: 'ProfileId!' },
        wallet: { __type: 'EthereumAddress!' },
    },
    SetDispatcherRequest: {
        dispatcher: { __type: 'EthereumAddress' },
        enable: { __type: 'Boolean' },
        profileId: { __type: 'ProfileId!' },
    },
    SignedAuthChallenge: {
        address: { __type: 'EthereumAddress!' },
        signature: { __type: 'Signature!' },
    },
    SingleProfileQueryRequest: { handle: { __type: 'Handle' }, profileId: { __type: 'ProfileId' } },
    SpamReasonInputParams: {
        reason: { __type: 'PublicationReportingReason!' },
        subreason: { __type: 'PublicationReportingSpamSubreason!' },
    },
    SybilDotOrgIdentity: {
        __typename: { __type: 'String!' },
        source: { __type: 'SybilDotOrgIdentitySource!' },
        verified: { __type: 'Boolean!' },
    },
    SybilDotOrgIdentitySource: {
        __typename: { __type: 'String!' },
        twitter: { __type: 'SybilDotOrgTwitterIdentity!' },
    },
    SybilDotOrgTwitterIdentity: { __typename: { __type: 'String!' }, handle: { __type: 'String' } },
    TagResult: {
        __typename: { __type: 'String!' },
        tag: { __type: 'PublicationTag!' },
        total: { __type: 'Int!' },
    },
    TimedFeeCollectModuleParams: {
        amount: { __type: 'ModuleFeeAmountParams!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
    },
    TimedFeeCollectModuleSettings: {
        __typename: { __type: 'String!' },
        amount: { __type: 'ModuleFeeAmount!' },
        contractAddress: { __type: 'ContractAddress!' },
        endTimestamp: { __type: 'DateTime!' },
        followerOnly: { __type: 'Boolean!' },
        recipient: { __type: 'EthereumAddress!' },
        referralFee: { __type: 'Float!' },
        type: { __type: 'CollectModules!' },
    },
    TimelineRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        metadata: { __type: 'PublicationMetadataFilters' },
        profileId: { __type: 'ProfileId!' },
        sources: { __type: '[Sources!]' },
        timelineTypes: { __type: '[TimelineType!]' },
    },
    TransactionError: {
        __typename: { __type: 'String!' },
        reason: { __type: 'TransactionErrorReasons!' },
        txReceipt: { __type: 'TransactionReceipt' },
    },
    TransactionIndexedResult: {
        __typename: { __type: 'String!' },
        indexed: { __type: 'Boolean!' },
        metadataStatus: { __type: 'PublicationMetadataStatus' },
        txHash: { __type: 'TxHash!' },
        txReceipt: { __type: 'TransactionReceipt' },
    },
    TransactionReceipt: {
        __typename: { __type: 'String!' },
        blockHash: { __type: 'String!' },
        blockNumber: { __type: 'Int!' },
        byzantium: { __type: 'Boolean!' },
        confirmations: { __type: 'Int!' },
        contractAddress: { __type: 'ContractAddress' },
        cumulativeGasUsed: { __type: 'String!' },
        effectiveGasPrice: { __type: 'String!' },
        from: { __type: 'EthereumAddress!' },
        gasUsed: { __type: 'String!' },
        logs: { __type: '[Log!]!' },
        logsBloom: { __type: 'String!' },
        root: { __type: 'String' },
        status: { __type: 'Int' },
        to: { __type: 'EthereumAddress' },
        transactionHash: { __type: 'TxHash!' },
        transactionIndex: { __type: 'Int!' },
        type: { __type: 'Int!' },
    },
    TransactionResult: {
        __typename: { __type: 'String!' },
        $on: { __type: '$TransactionResult!' },
    },
    TypedDataOptions: { overrideSigNonce: { __type: 'Nonce!' } },
    UnfollowRequest: { profile: { __type: 'ProfileId!' } },
    UnknownCollectModuleParams: {
        contractAddress: { __type: 'ContractAddress!' },
        data: { __type: 'BlockchainData!' },
    },
    UnknownCollectModuleSettings: {
        __typename: { __type: 'String!' },
        collectModuleReturnData: { __type: 'CollectModuleData!' },
        contractAddress: { __type: 'ContractAddress!' },
        type: { __type: 'CollectModules!' },
    },
    UnknownFollowModuleParams: {
        contractAddress: { __type: 'ContractAddress!' },
        data: { __type: 'BlockchainData!' },
    },
    UnknownFollowModuleRedeemParams: { data: { __type: 'BlockchainData!' } },
    UnknownFollowModuleSettings: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        followModuleReturnData: { __type: 'FollowModuleData!' },
        type: { __type: 'FollowModules!' },
    },
    UnknownReferenceModuleParams: {
        contractAddress: { __type: 'ContractAddress!' },
        data: { __type: 'BlockchainData!' },
    },
    UnknownReferenceModuleSettings: {
        __typename: { __type: 'String!' },
        contractAddress: { __type: 'ContractAddress!' },
        referenceModuleReturnData: { __type: 'ReferenceModuleData!' },
        type: { __type: 'ReferenceModules!' },
    },
    UpdateProfileImageRequest: {
        nftData: { __type: 'NFTData' },
        profileId: { __type: 'ProfileId!' },
        url: { __type: 'Url' },
    },
    UserSigNonces: {
        __typename: { __type: 'String!' },
        lensHubOnChainSigNonce: { __type: 'Nonce!' },
        peripheryOnChainSigNonce: { __type: 'Nonce!' },
    },
    ValidatePublicationMetadataRequest: {
        metadatav1: { __type: 'PublicationMetadataV1Input' },
        metadatav2: { __type: 'PublicationMetadataV2Input' },
    },
    VerifyRequest: { accessToken: { __type: 'Jwt!' } },
    Wallet: {
        __typename: { __type: 'String!' },
        address: { __type: 'EthereumAddress!' },
        defaultProfile: { __type: 'Profile' },
    },
    WhoCollectedPublicationRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        publicationId: { __type: 'InternalPublicationId!' },
    },
    WhoReactedPublicationRequest: {
        cursor: { __type: 'Cursor' },
        limit: { __type: 'LimitScalar' },
        publicationId: { __type: 'InternalPublicationId!' },
    },
    WhoReactedResult: {
        __typename: { __type: 'String!' },
        profile: { __type: 'Profile!' },
        reaction: { __type: 'ReactionTypes!' },
        reactionAt: { __type: 'DateTime!' },
        reactionId: { __type: 'ReactionId!' },
    },
    WorldcoinIdentity: { __typename: { __type: 'String!' }, isHuman: { __type: 'Boolean!' } },
    mutation: {
        __typename: { __type: 'String!' },
        ach: { __type: 'Void', __args: { request: 'AchRequest!' } },
        addReaction: { __type: 'Void', __args: { request: 'ReactionRequest!' } },
        authenticate: {
            __type: 'AuthenticationResult!',
            __args: { request: 'SignedAuthChallenge!' },
        },
        broadcast: { __type: 'RelayResult!', __args: { request: 'BroadcastRequest!' } },
        claim: { __type: 'RelayResult!', __args: { request: 'ClaimHandleRequest!' } },
        createBurnProfileTypedData: {
            __type: 'CreateBurnProfileBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'BurnProfileRequest!' },
        },
        createCollectTypedData: {
            __type: 'CreateCollectBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreateCollectRequest!' },
        },
        createCommentTypedData: {
            __type: 'CreateCommentBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreatePublicCommentRequest!' },
        },
        createCommentViaDispatcher: {
            __type: 'RelayResult!',
            __args: { request: 'CreatePublicCommentRequest!' },
        },
        createFollowTypedData: {
            __type: 'CreateFollowBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'FollowRequest!' },
        },
        createMirrorTypedData: {
            __type: 'CreateMirrorBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreateMirrorRequest!' },
        },
        createMirrorViaDispatcher: {
            __type: 'RelayResult!',
            __args: { request: 'CreateMirrorRequest!' },
        },
        createPostTypedData: {
            __type: 'CreatePostBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreatePublicPostRequest!' },
        },
        createPostViaDispatcher: {
            __type: 'RelayResult!',
            __args: { request: 'CreatePublicPostRequest!' },
        },
        createProfile: { __type: 'RelayResult!', __args: { request: 'CreateProfileRequest!' } },
        createSetDefaultProfileTypedData: {
            __type: 'SetDefaultProfileBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreateSetDefaultProfileRequest!' },
        },
        createSetDispatcherTypedData: {
            __type: 'CreateSetDispatcherBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'SetDispatcherRequest!' },
        },
        createSetFollowModuleTypedData: {
            __type: 'CreateSetFollowModuleBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreateSetFollowModuleRequest!' },
        },
        createSetFollowNFTUriTypedData: {
            __type: 'CreateSetFollowNFTUriBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreateSetFollowNFTUriRequest!' },
        },
        createSetProfileImageURITypedData: {
            __type: 'CreateSetProfileImageUriBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'UpdateProfileImageRequest!' },
        },
        createSetProfileImageURIViaDispatcher: {
            __type: 'RelayResult!',
            __args: { request: 'UpdateProfileImageRequest!' },
        },
        createSetProfileMetadataTypedData: {
            __type: 'CreateSetProfileMetadataURIBroadcastItemResult!',
            __args: {
                options: 'TypedDataOptions',
                request: 'CreatePublicSetProfileMetadataURIRequest!',
            },
        },
        createSetProfileMetadataViaDispatcher: {
            __type: 'RelayResult!',
            __args: { request: 'CreatePublicSetProfileMetadataURIRequest!' },
        },
        createToggleFollowTypedData: {
            __type: 'CreateToggleFollowBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'CreateToggleFollowRequest!' },
        },
        createUnfollowTypedData: {
            __type: 'CreateUnfollowBroadcastItemResult!',
            __args: { options: 'TypedDataOptions', request: 'UnfollowRequest!' },
        },
        hidePublication: { __type: 'Void', __args: { request: 'HidePublicationRequest!' } },
        proxyAction: { __type: 'ProxyActionId!', __args: { request: 'ProxyActionRequest!' } },
        refresh: { __type: 'AuthenticationResult!', __args: { request: 'RefreshRequest!' } },
        removeReaction: { __type: 'Void', __args: { request: 'ReactionRequest!' } },
        reportPublication: { __type: 'Void', __args: { request: 'ReportPublicationRequest!' } },
    },
    query: {
        __typename: { __type: 'String!' },
        allPublicationsTags: {
            __type: 'PaginatedAllPublicationsTagsResult!',
            __args: { request: 'AllPublicationsTagsRequest!' },
        },
        approvedModuleAllowanceAmount: {
            __type: '[ApprovedAllowanceAmount!]!',
            __args: { request: 'ApprovedModuleAllowanceAmountRequest!' },
        },
        challenge: { __type: 'AuthChallengeResult!', __args: { request: 'ChallengeRequest!' } },
        claimableHandles: { __type: 'ClaimableHandles!' },
        claimableStatus: { __type: 'ClaimStatus!' },
        defaultProfile: { __type: 'Profile', __args: { request: 'DefaultProfileRequest!' } },
        doesFollow: { __type: '[DoesFollowResponse!]!', __args: { request: 'DoesFollowRequest!' } },
        enabledModuleCurrencies: { __type: '[Erc20!]!' },
        enabledModules: { __type: 'EnabledModules!' },
        exploreProfiles: {
            __type: 'ExploreProfileResult!',
            __args: { request: 'ExploreProfilesRequest!' },
        },
        explorePublications: {
            __type: 'ExplorePublicationResult!',
            __args: { request: 'ExplorePublicationRequest!' },
        },
        feed: { __type: 'PaginatedFeedResult!', __args: { request: 'FeedRequest!' } },
        feedHighlights: {
            __type: 'PaginatedTimelineResult!',
            __args: { request: 'FeedHighlightsRequest!' },
        },
        followerNftOwnedTokenIds: {
            __type: 'FollowerNftOwnedTokenIds',
            __args: { request: 'FollowerNftOwnedTokenIdsRequest!' },
        },
        followers: {
            __type: 'PaginatedFollowersResult!',
            __args: { request: 'FollowersRequest!' },
        },
        following: {
            __type: 'PaginatedFollowingResult!',
            __args: { request: 'FollowingRequest!' },
        },
        generateModuleCurrencyApprovalData: {
            __type: 'GenerateModuleCurrencyApproval!',
            __args: { request: 'GenerateModuleCurrencyApprovalDataRequest!' },
        },
        globalProtocolStats: {
            __type: 'GlobalProtocolStats!',
            __args: { request: 'GlobalProtocolStatsRequest' },
        },
        hasTxHashBeenIndexed: {
            __type: 'TransactionResult!',
            __args: { request: 'HasTxHashBeenIndexedRequest!' },
        },
        internalPublicationFilter: {
            __type: 'PaginatedPublicationResult!',
            __args: { request: 'InternalPublicationsFilterRequest!' },
        },
        mutualFollowersProfiles: {
            __type: 'PaginatedProfileResult!',
            __args: { request: 'MutualFollowersProfilesQueryRequest!' },
        },
        nftOwnershipChallenge: {
            __type: 'NftOwnershipChallengeResult!',
            __args: { request: 'NftOwnershipChallengeRequest!' },
        },
        nfts: { __type: 'NFTsResult!', __args: { request: 'NFTsRequest!' } },
        notifications: {
            __type: 'PaginatedNotificationResult!',
            __args: { request: 'NotificationRequest!' },
        },
        pendingApprovalFollows: {
            __type: 'PendingApproveFollowsResult!',
            __args: { request: 'PendingApprovalFollowsRequest!' },
        },
        ping: { __type: 'String!' },
        profile: { __type: 'Profile', __args: { request: 'SingleProfileQueryRequest!' } },
        profileFollowModuleBeenRedeemed: {
            __type: 'Boolean!',
            __args: { request: 'ProfileFollowModuleBeenRedeemedRequest!' },
        },
        profileFollowRevenue: {
            __type: 'FollowRevenueResult!',
            __args: { request: 'ProfileFollowRevenueQueryRequest!' },
        },
        profileOnChainIdentity: {
            __type: '[OnChainIdentity!]!',
            __args: { request: 'ProfileOnChainIdentityRequest!' },
        },
        profilePublicationRevenue: {
            __type: 'ProfilePublicationRevenueResult!',
            __args: { request: 'ProfilePublicationRevenueQueryRequest!' },
        },
        profilePublicationsForSale: {
            __type: 'PaginatedProfilePublicationsForSaleResult!',
            __args: { request: 'ProfilePublicationsForSaleRequest!' },
        },
        profiles: {
            __type: 'PaginatedProfileResult!',
            __args: { request: 'ProfileQueryRequest!' },
        },
        proxyActionStatus: {
            __type: 'ProxyActionStatusResultUnion!',
            __args: { proxyActionId: 'ProxyActionId!' },
        },
        publication: { __type: 'Publication', __args: { request: 'PublicationQueryRequest!' } },
        publicationMetadataStatus: {
            __type: 'PublicationMetadataStatus!',
            __args: { request: 'GetPublicationMetadataStatusRequest!' },
        },
        publicationRevenue: {
            __type: 'PublicationRevenue',
            __args: { request: 'PublicationRevenueQueryRequest!' },
        },
        publications: {
            __type: 'PaginatedPublicationResult!',
            __args: { request: 'PublicationsQueryRequest!' },
        },
        recommendedProfiles: {
            __type: '[Profile!]!',
            __args: { options: 'RecommendedProfileOptions' },
        },
        rel: { __type: 'Void', __args: { request: 'RelRequest!' } },
        search: { __type: 'SearchResult!', __args: { request: 'SearchQueryRequest!' } },
        timeline: { __type: 'PaginatedTimelineResult!', __args: { request: 'TimelineRequest!' } },
        txIdToTxHash: { __type: 'TxHash!', __args: { txId: 'TxId!' } },
        unknownEnabledModules: { __type: 'EnabledModules!' },
        userSigNonces: { __type: 'UserSigNonces!' },
        validatePublicationMetadata: {
            __type: 'PublicationValidateMetadataResult!',
            __args: { request: 'ValidatePublicationMetadataRequest!' },
        },
        verify: { __type: 'Boolean!', __args: { request: 'VerifyRequest!' } },
        whoCollectedPublication: {
            __type: 'PaginatedWhoCollectedResult!',
            __args: { request: 'WhoCollectedPublicationRequest!' },
        },
        whoReactedPublication: {
            __type: 'PaginatedWhoReactedResult!',
            __args: { request: 'WhoReactedPublicationRequest!' },
        },
    },
    subscription: {},
    [SchemaUnionsKey]: {
        CollectModule: [
            'FeeCollectModuleSettings',
            'FreeCollectModuleSettings',
            'LimitedFeeCollectModuleSettings',
            'LimitedTimedFeeCollectModuleSettings',
            'RevertCollectModuleSettings',
            'TimedFeeCollectModuleSettings',
            'UnknownCollectModuleSettings',
        ],
        FeedItemRoot: ['Comment', 'Post'],
        FollowModule: [
            'FeeFollowModuleSettings',
            'ProfileFollowModuleSettings',
            'RevertFollowModuleSettings',
            'UnknownFollowModuleSettings',
        ],
        MainPostReference: ['Mirror', 'Post'],
        MentionPublication: ['Comment', 'Post'],
        MirrorablePublication: ['Comment', 'Post'],
        Notification: [
            'NewCollectNotification',
            'NewCommentNotification',
            'NewFollowerNotification',
            'NewMentionNotification',
            'NewMirrorNotification',
            'NewReactionNotification',
        ],
        ProfileMedia: ['MediaSet', 'NftImage'],
        ProxyActionStatusResultUnion: [
            'ProxyActionError',
            'ProxyActionQueued',
            'ProxyActionStatusResult',
        ],
        Publication: ['Comment', 'Mirror', 'Post'],
        PublicationForSale: ['Comment', 'Post'],
        PublicationSearchResultItem: ['Comment', 'Post'],
        ReferenceModule: [
            'DegreesOfSeparationReferenceModuleSettings',
            'FollowOnlyReferenceModuleSettings',
            'UnknownReferenceModuleSettings',
        ],
        RelayResult: ['RelayError', 'RelayerResult'],
        SearchResult: ['ProfileSearchResult', 'PublicationSearchResult'],
        TransactionResult: ['TransactionError', 'TransactionIndexedResult'],
    },
} as const;

export interface ApprovedAllowanceAmount {
    __typename?: 'ApprovedAllowanceAmount';
    allowance: ScalarsEnums['String'];
    contractAddress: ScalarsEnums['ContractAddress'];
    currency: ScalarsEnums['ContractAddress'];
    module: ScalarsEnums['String'];
}

/**
 * The Profile
 */
export interface Attribute {
    __typename?: 'Attribute';
    /**
     * The display type
     */
    displayType?: Maybe<ScalarsEnums['String']>;
    /**
     * identifier of this attribute, we will update by this id
     */
    key: ScalarsEnums['String'];
    /**
     * The trait type - can be anything its the name it will render so include spaces
     */
    traitType?: Maybe<ScalarsEnums['String']>;
    /**
     * Value attribute
     */
    value: ScalarsEnums['String'];
}

/**
 * The auth challenge result
 */
export interface AuthChallengeResult {
    __typename?: 'AuthChallengeResult';
    /**
     * The text to sign
     */
    text: ScalarsEnums['String'];
}

/**
 * The authentication result
 */
export interface AuthenticationResult {
    __typename?: 'AuthenticationResult';
    /**
     * The access token
     */
    accessToken: ScalarsEnums['Jwt'];
    /**
     * The refresh token
     */
    refreshToken: ScalarsEnums['Jwt'];
}

export interface CanCommentResponse {
    __typename?: 'CanCommentResponse';
    result: ScalarsEnums['Boolean'];
}

export interface CanMirrorResponse {
    __typename?: 'CanMirrorResponse';
    result: ScalarsEnums['Boolean'];
}

export interface ClaimableHandles {
    __typename?: 'ClaimableHandles';
    canClaimFreeTextHandle: ScalarsEnums['Boolean'];
    reservedHandles: ReservedClaimableHandle[];
}

export interface CollectModule {
    __typename?:
        | 'FeeCollectModuleSettings'
        | 'FreeCollectModuleSettings'
        | 'LimitedFeeCollectModuleSettings'
        | 'LimitedTimedFeeCollectModuleSettings'
        | 'RevertCollectModuleSettings'
        | 'TimedFeeCollectModuleSettings'
        | 'UnknownCollectModuleSettings';
    $on: $CollectModule;
}

export interface CollectedEvent {
    __typename?: 'CollectedEvent';
    profile: Profile;
    timestamp: ScalarsEnums['DateTime'];
}

/**
 * The social comment
 */
export interface Comment {
    __typename?: 'Comment';
    /**
     * ID of the source
     */
    appId?: Maybe<ScalarsEnums['Sources']>;
    canComment: (args?: { profileId?: Maybe<Scalars['ProfileId']> }) => CanCommentResponse;
    canMirror: (args?: { profileId?: Maybe<Scalars['ProfileId']> }) => CanMirrorResponse;
    /**
     * The collect module
     */
    collectModule: CollectModule;
    /**
     * The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed
     */
    collectNftAddress?: Maybe<ScalarsEnums['ContractAddress']>;
    /**
     * Who collected it, this is used for timeline results and like this for better caching for the client
     */
    collectedBy?: Maybe<Wallet>;
    /**
     * Which comment this points to if its null the pointer too deep so do another query to find it out
     */
    commentOn?: Maybe<Publication>;
    /**
     * The date the post was created on
     */
    createdAt: ScalarsEnums['DateTime'];
    /**
     * This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf`
     */
    firstComment?: Maybe<Comment>;
    hasCollectedByMe: ScalarsEnums['Boolean'];
    /**
     * If the publication has been hidden if it has then the content and media is not available
     */
    hidden: ScalarsEnums['Boolean'];
    /**
     * The internal publication id
     */
    id: ScalarsEnums['InternalPublicationId'];
    /**
     * The top level post/mirror this comment lives on
     */
    mainPost: MainPostReference;
    /**
     * The metadata for the post
     */
    metadata: MetadataOutput;
    mirrors: (args?: {
        by?: Maybe<Scalars['ProfileId']>;
    }) => Array<ScalarsEnums['InternalPublicationId']>;
    /**
     * The on chain content uri could be `ipfs://` or `https`
     */
    onChainContentURI: ScalarsEnums['String'];
    /**
     * The profile ref
     */
    profile: Profile;
    reaction: (args?: {
        request?: Maybe<ReactionFieldResolverRequest>;
    }) => Maybe<ScalarsEnums['ReactionTypes']>;
    /**
     * The reference module
     */
    referenceModule?: Maybe<ReferenceModule>;
    /**
     * The publication stats
     */
    stats: PublicationStats;
}

/**
 * The create burn eip 712 typed data
 */
export interface CreateBurnEIP712TypedData {
    __typename?: 'CreateBurnEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateBurnEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateBurnEIP712TypedDataValue;
}

/**
 * The create burn eip 712 typed data types
 */
export interface CreateBurnEIP712TypedDataTypes {
    __typename?: 'CreateBurnEIP712TypedDataTypes';
    BurnWithSig: EIP712TypedDataField[];
}

/**
 * The create burn eip 712 typed data value
 */
export interface CreateBurnEIP712TypedDataValue {
    __typename?: 'CreateBurnEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    nonce: ScalarsEnums['Nonce'];
    tokenId: ScalarsEnums['String'];
}

/**
 * The broadcast item
 */
export interface CreateBurnProfileBroadcastItemResult {
    __typename?: 'CreateBurnProfileBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateBurnEIP712TypedData;
}

/**
 * The broadcast item
 */
export interface CreateCollectBroadcastItemResult {
    __typename?: 'CreateCollectBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateCollectEIP712TypedData;
}

/**
 * The collect eip 712 typed data
 */
export interface CreateCollectEIP712TypedData {
    __typename?: 'CreateCollectEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateCollectEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateCollectEIP712TypedDataValue;
}

/**
 * The collect eip 712 typed data types
 */
export interface CreateCollectEIP712TypedDataTypes {
    __typename?: 'CreateCollectEIP712TypedDataTypes';
    CollectWithSig: EIP712TypedDataField[];
}

/**
 * The collect eip 712 typed data value
 */
export interface CreateCollectEIP712TypedDataValue {
    __typename?: 'CreateCollectEIP712TypedDataValue';
    data: ScalarsEnums['BlockchainData'];
    deadline: ScalarsEnums['UnixTimestamp'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
    pubId: ScalarsEnums['PublicationId'];
}

/**
 * The broadcast item
 */
export interface CreateCommentBroadcastItemResult {
    __typename?: 'CreateCommentBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateCommentEIP712TypedData;
}

/**
 * The create comment eip 712 typed data
 */
export interface CreateCommentEIP712TypedData {
    __typename?: 'CreateCommentEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateCommentEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateCommentEIP712TypedDataValue;
}

/**
 * The create comment eip 712 typed data types
 */
export interface CreateCommentEIP712TypedDataTypes {
    __typename?: 'CreateCommentEIP712TypedDataTypes';
    CommentWithSig: EIP712TypedDataField[];
}

/**
 * The create comment eip 712 typed data value
 */
export interface CreateCommentEIP712TypedDataValue {
    __typename?: 'CreateCommentEIP712TypedDataValue';
    collectModule: ScalarsEnums['ContractAddress'];
    collectModuleInitData: ScalarsEnums['CollectModuleData'];
    contentURI: ScalarsEnums['PublicationUrl'];
    deadline: ScalarsEnums['UnixTimestamp'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
    profileIdPointed: ScalarsEnums['ProfileId'];
    pubIdPointed: ScalarsEnums['PublicationId'];
    referenceModule: ScalarsEnums['ContractAddress'];
    referenceModuleData: ScalarsEnums['ReferenceModuleData'];
    referenceModuleInitData: ScalarsEnums['ReferenceModuleData'];
}

/**
 * The broadcast item
 */
export interface CreateFollowBroadcastItemResult {
    __typename?: 'CreateFollowBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateFollowEIP712TypedData;
}

/**
 * The create follow eip 712 typed data
 */
export interface CreateFollowEIP712TypedData {
    __typename?: 'CreateFollowEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateFollowEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateFollowEIP712TypedDataValue;
}

/**
 * The create follow eip 712 typed data types
 */
export interface CreateFollowEIP712TypedDataTypes {
    __typename?: 'CreateFollowEIP712TypedDataTypes';
    FollowWithSig: EIP712TypedDataField[];
}

/**
 * The create follow eip 712 typed data value
 */
export interface CreateFollowEIP712TypedDataValue {
    __typename?: 'CreateFollowEIP712TypedDataValue';
    datas: Array<ScalarsEnums['BlockchainData']>;
    deadline: ScalarsEnums['UnixTimestamp'];
    nonce: ScalarsEnums['Nonce'];
    profileIds: Array<ScalarsEnums['ProfileId']>;
}

/**
 * The broadcast item
 */
export interface CreateMirrorBroadcastItemResult {
    __typename?: 'CreateMirrorBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateMirrorEIP712TypedData;
}

/**
 * The mirror eip 712 typed data
 */
export interface CreateMirrorEIP712TypedData {
    __typename?: 'CreateMirrorEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateMirrorEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateMirrorEIP712TypedDataValue;
}

/**
 * The mirror eip 712 typed data types
 */
export interface CreateMirrorEIP712TypedDataTypes {
    __typename?: 'CreateMirrorEIP712TypedDataTypes';
    MirrorWithSig: EIP712TypedDataField[];
}

/**
 * The mirror eip 712 typed data value
 */
export interface CreateMirrorEIP712TypedDataValue {
    __typename?: 'CreateMirrorEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
    profileIdPointed: ScalarsEnums['ProfileId'];
    pubIdPointed: ScalarsEnums['PublicationId'];
    referenceModule: ScalarsEnums['ContractAddress'];
    referenceModuleData: ScalarsEnums['ReferenceModuleData'];
    referenceModuleInitData: ScalarsEnums['ReferenceModuleData'];
}

/**
 * The broadcast item
 */
export interface CreatePostBroadcastItemResult {
    __typename?: 'CreatePostBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreatePostEIP712TypedData;
}

/**
 * The create post eip 712 typed data
 */
export interface CreatePostEIP712TypedData {
    __typename?: 'CreatePostEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreatePostEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreatePostEIP712TypedDataValue;
}

/**
 * The create post eip 712 typed data types
 */
export interface CreatePostEIP712TypedDataTypes {
    __typename?: 'CreatePostEIP712TypedDataTypes';
    PostWithSig: EIP712TypedDataField[];
}

/**
 * The create post eip 712 typed data value
 */
export interface CreatePostEIP712TypedDataValue {
    __typename?: 'CreatePostEIP712TypedDataValue';
    collectModule: ScalarsEnums['ContractAddress'];
    collectModuleInitData: ScalarsEnums['CollectModuleData'];
    contentURI: ScalarsEnums['PublicationUrl'];
    deadline: ScalarsEnums['UnixTimestamp'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
    referenceModule: ScalarsEnums['ContractAddress'];
    referenceModuleInitData: ScalarsEnums['ReferenceModuleData'];
}

/**
 * The broadcast item
 */
export interface CreateSetDispatcherBroadcastItemResult {
    __typename?: 'CreateSetDispatcherBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateSetDispatcherEIP712TypedData;
}

/**
 * The set dispatcher eip 712 typed data
 */
export interface CreateSetDispatcherEIP712TypedData {
    __typename?: 'CreateSetDispatcherEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateSetDispatcherEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateSetDispatcherEIP712TypedDataValue;
}

/**
 * The set dispatcher eip 712 typed data types
 */
export interface CreateSetDispatcherEIP712TypedDataTypes {
    __typename?: 'CreateSetDispatcherEIP712TypedDataTypes';
    SetDispatcherWithSig: EIP712TypedDataField[];
}

/**
 * The set dispatcher eip 712 typed data value
 */
export interface CreateSetDispatcherEIP712TypedDataValue {
    __typename?: 'CreateSetDispatcherEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    dispatcher: ScalarsEnums['EthereumAddress'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
}

/**
 * The broadcast item
 */
export interface CreateSetFollowModuleBroadcastItemResult {
    __typename?: 'CreateSetFollowModuleBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateSetFollowModuleEIP712TypedData;
}

/**
 * The set follow module eip 712 typed data
 */
export interface CreateSetFollowModuleEIP712TypedData {
    __typename?: 'CreateSetFollowModuleEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateSetFollowModuleEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateSetFollowModuleEIP712TypedDataValue;
}

/**
 * The set follow module eip 712 typed data types
 */
export interface CreateSetFollowModuleEIP712TypedDataTypes {
    __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
    SetFollowModuleWithSig: EIP712TypedDataField[];
}

/**
 * The set follow module eip 712 typed data value
 */
export interface CreateSetFollowModuleEIP712TypedDataValue {
    __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    followModule: ScalarsEnums['ContractAddress'];
    followModuleInitData: ScalarsEnums['FollowModuleData'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
}

/**
 * The broadcast item
 */
export interface CreateSetFollowNFTUriBroadcastItemResult {
    __typename?: 'CreateSetFollowNFTUriBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateSetFollowNFTUriEIP712TypedData;
}

/**
 * The set follow nft uri eip 712 typed data
 */
export interface CreateSetFollowNFTUriEIP712TypedData {
    __typename?: 'CreateSetFollowNFTUriEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateSetFollowNFTUriEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateSetFollowNFTUriEIP712TypedDataValue;
}

/**
 * The set follow nft uri eip 712 typed data types
 */
export interface CreateSetFollowNFTUriEIP712TypedDataTypes {
    __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes';
    SetFollowNFTURIWithSig: EIP712TypedDataField[];
}

/**
 * The set follow nft uri eip 712 typed data value
 */
export interface CreateSetFollowNFTUriEIP712TypedDataValue {
    __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    followNFTURI: ScalarsEnums['Url'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
}

/**
 * The broadcast item
 */
export interface CreateSetProfileImageUriBroadcastItemResult {
    __typename?: 'CreateSetProfileImageUriBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateSetProfileImageUriEIP712TypedData;
}

/**
 * The set profile uri eip 712 typed data
 */
export interface CreateSetProfileImageUriEIP712TypedData {
    __typename?: 'CreateSetProfileImageUriEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateSetProfileImageUriEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateSetProfileImageUriEIP712TypedDataValue;
}

/**
 * The set profile image uri eip 712 typed data types
 */
export interface CreateSetProfileImageUriEIP712TypedDataTypes {
    __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes';
    SetProfileImageURIWithSig: EIP712TypedDataField[];
}

/**
 * The set profile uri eip 712 typed data value
 */
export interface CreateSetProfileImageUriEIP712TypedDataValue {
    __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    imageURI: ScalarsEnums['Url'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
}

/**
 * The broadcast item
 */
export interface CreateSetProfileMetadataURIBroadcastItemResult {
    __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateSetProfileMetadataURIEIP712TypedData;
}

/**
 * The set follow nft uri eip 712 typed data
 */
export interface CreateSetProfileMetadataURIEIP712TypedData {
    __typename?: 'CreateSetProfileMetadataURIEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateSetProfileMetadataURIEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateSetProfileMetadataURIEIP712TypedDataValue;
}

/**
 * The set follow nft uri eip 712 typed data types
 */
export interface CreateSetProfileMetadataURIEIP712TypedDataTypes {
    __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes';
    SetProfileMetadataURIWithSig: EIP712TypedDataField[];
}

/**
 * The set follow nft uri eip 712 typed data value
 */
export interface CreateSetProfileMetadataURIEIP712TypedDataValue {
    __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    metadata: ScalarsEnums['Url'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
}

/**
 * The broadcast item
 */
export interface CreateToggleFollowBroadcastItemResult {
    __typename?: 'CreateToggleFollowBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateToggleFollowEIP712TypedData;
}

/**
 * The create toggle follows eip 712 typed data
 */
export interface CreateToggleFollowEIP712TypedData {
    __typename?: 'CreateToggleFollowEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: CreateToggleFollowEIP712TypedDataTypes;
    /**
     * The values
     */
    value: CreateToggleFollowEIP712TypedDataValue;
}

/**
 * The create toggle follows eip 712 typed data types
 */
export interface CreateToggleFollowEIP712TypedDataTypes {
    __typename?: 'CreateToggleFollowEIP712TypedDataTypes';
    ToggleFollowWithSig: EIP712TypedDataField[];
}

/**
 * The create toggle follow eip 712 typed data value
 */
export interface CreateToggleFollowEIP712TypedDataValue {
    __typename?: 'CreateToggleFollowEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    enables: Array<ScalarsEnums['Boolean']>;
    nonce: ScalarsEnums['Nonce'];
    profileIds: Array<ScalarsEnums['ProfileId']>;
}

/**
 * The broadcast item
 */
export interface CreateUnfollowBroadcastItemResult {
    __typename?: 'CreateUnfollowBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: CreateBurnEIP712TypedData;
}

export interface DegreesOfSeparationReferenceModuleSettings {
    __typename?: 'DegreesOfSeparationReferenceModuleSettings';
    /**
     * Applied to comments
     */
    commentsRestricted: ScalarsEnums['Boolean'];
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * Degrees of separation
     */
    degreesOfSeparation: ScalarsEnums['Int'];
    /**
     * Applied to mirrors
     */
    mirrorsRestricted: ScalarsEnums['Boolean'];
    /**
     * The reference modules enum
     */
    type: ScalarsEnums['ReferenceModules'];
}

/**
 * The dispatcher
 */
export interface Dispatcher {
    __typename?: 'Dispatcher';
    /**
     * The dispatcher address
     */
    address: ScalarsEnums['EthereumAddress'];
    /**
     * If the dispatcher can use the relay
     */
    canUseRelay: ScalarsEnums['Boolean'];
}

/**
 * The does follow response
 */
export interface DoesFollowResponse {
    __typename?: 'DoesFollowResponse';
    /**
     * The follower address remember wallets follow profiles
     */
    followerAddress: ScalarsEnums['EthereumAddress'];
    /**
     * If the user does follow
     */
    follows: ScalarsEnums['Boolean'];
    /**
     * The profile id
     */
    profileId: ScalarsEnums['ProfileId'];
}

/**
 * The eip 712 typed data domain
 */
export interface EIP712TypedDataDomain {
    __typename?: 'EIP712TypedDataDomain';
    /**
     * The chainId
     */
    chainId: ScalarsEnums['ChainId'];
    /**
     * The name of the typed data domain
     */
    name: ScalarsEnums['String'];
    /**
     * The verifying contract
     */
    verifyingContract: ScalarsEnums['ContractAddress'];
    /**
     * The version
     */
    version: ScalarsEnums['String'];
}

/**
 * The eip 712 typed data field
 */
export interface EIP712TypedDataField {
    __typename?: 'EIP712TypedDataField';
    /**
     * The name of the typed data field
     */
    name: ScalarsEnums['String'];
    /**
     * The type of the typed data field
     */
    type: ScalarsEnums['String'];
}

export interface ElectedMirror {
    __typename?: 'ElectedMirror';
    mirrorId: ScalarsEnums['InternalPublicationId'];
    profile: Profile;
    timestamp: ScalarsEnums['DateTime'];
}

export interface EnabledModule {
    __typename?: 'EnabledModule';
    contractAddress: ScalarsEnums['ContractAddress'];
    inputParams: ModuleInfo[];
    moduleName: ScalarsEnums['String'];
    redeemParams: ModuleInfo[];
    returnDataParms: ModuleInfo[];
}

/**
 * The enabled modules
 */
export interface EnabledModules {
    __typename?: 'EnabledModules';
    collectModules: EnabledModule[];
    followModules: EnabledModule[];
    referenceModules: EnabledModule[];
}

export interface EnsOnChainIdentity {
    __typename?: 'EnsOnChainIdentity';
    /**
     * The default ens mapped to this address
     */
    name?: Maybe<ScalarsEnums['Ens']>;
}

/**
 * The erc20 type
 */
export interface Erc20 {
    __typename?: 'Erc20';
    /**
     * The erc20 address
     */
    address: ScalarsEnums['ContractAddress'];
    /**
     * Decimal places for the token
     */
    decimals: ScalarsEnums['Int'];
    /**
     * Name of the symbol
     */
    name: ScalarsEnums['String'];
    /**
     * Symbol for the token
     */
    symbol: ScalarsEnums['String'];
}

export interface Erc20Amount {
    __typename?: 'Erc20Amount';
    /**
     * The erc20 token info
     */
    asset: Erc20;
    /**
     * Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal.
     */
    value: ScalarsEnums['String'];
}

/**
 * The paginated publication result
 */
export interface ExploreProfileResult {
    __typename?: 'ExploreProfileResult';
    items: Profile[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated publication result
 */
export interface ExplorePublicationResult {
    __typename?: 'ExplorePublicationResult';
    items: Publication[];
    pageInfo: PaginatedResultInfo;
}

export interface FeeCollectModuleSettings {
    __typename?: 'FeeCollectModuleSettings';
    /**
     * The collect module amount info
     */
    amount: ModuleFeeAmount;
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * Follower only
     */
    followerOnly: ScalarsEnums['Boolean'];
    /**
     * The collect module recipient address
     */
    recipient: ScalarsEnums['EthereumAddress'];
    /**
     * The collect module referral fee
     */
    referralFee: ScalarsEnums['Float'];
    /**
     * The collect modules enum
     */
    type: ScalarsEnums['CollectModules'];
}

export interface FeeFollowModuleSettings {
    __typename?: 'FeeFollowModuleSettings';
    /**
     * The collect module amount info
     */
    amount: ModuleFeeAmount;
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The collect module recipient address
     */
    recipient: ScalarsEnums['EthereumAddress'];
    /**
     * The follow modules enum
     */
    type: ScalarsEnums['FollowModules'];
}

export interface FeedItem {
    __typename?: 'FeedItem';
    /**
     * Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list.
     */
    collects: CollectedEvent[];
    /**
     * Sorted by most recent first. Up to page size - 1 comments.
     */
    comments?: Maybe<Comment[]>;
    /**
     * The elected mirror will be the first Mirror publication within the page results set
     */
    electedMirror?: Maybe<ElectedMirror>;
    /**
     * Sorted by most recent first. Up to page size - 1 mirrors
     */
    mirrors: MirrorEvent[];
    /**
     * Sorted by most recent first. Up to page size - 1 reactions
     */
    reactions: ReactionEvent[];
    root: FeedItemRoot;
}

export interface FeedItemRoot {
    __typename?: 'Comment' | 'Post';
    $on: $FeedItemRoot;
}

export interface FollowModule {
    __typename?:
        | 'FeeFollowModuleSettings'
        | 'ProfileFollowModuleSettings'
        | 'RevertFollowModuleSettings'
        | 'UnknownFollowModuleSettings';
    $on: $FollowModule;
}

export interface FollowOnlyReferenceModuleSettings {
    __typename?: 'FollowOnlyReferenceModuleSettings';
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The reference modules enum
     */
    type: ScalarsEnums['ReferenceModules'];
}

export interface FollowRevenueResult {
    __typename?: 'FollowRevenueResult';
    revenues: RevenueAggregate[];
}

export interface Follower {
    __typename?: 'Follower';
    totalAmountOfTimesFollowed: ScalarsEnums['Int'];
    wallet: Wallet;
}

export interface FollowerNftOwnedTokenIds {
    __typename?: 'FollowerNftOwnedTokenIds';
    followerNftAddress: ScalarsEnums['ContractAddress'];
    tokensIds: Array<ScalarsEnums['String']>;
}

export interface Following {
    __typename?: 'Following';
    profile: Profile;
    totalAmountOfTimesFollowing: ScalarsEnums['Int'];
}

export interface FreeCollectModuleSettings {
    __typename?: 'FreeCollectModuleSettings';
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * Follower only
     */
    followerOnly: ScalarsEnums['Boolean'];
    /**
     * The collect modules enum
     */
    type: ScalarsEnums['CollectModules'];
}

export interface GenerateModuleCurrencyApproval {
    __typename?: 'GenerateModuleCurrencyApproval';
    data: ScalarsEnums['BlockchainData'];
    from: ScalarsEnums['EthereumAddress'];
    to: ScalarsEnums['ContractAddress'];
}

export interface GlobalProtocolStats {
    __typename?: 'GlobalProtocolStats';
    totalBurntProfiles: ScalarsEnums['Int'];
    totalCollects: ScalarsEnums['Int'];
    totalComments: ScalarsEnums['Int'];
    totalFollows: ScalarsEnums['Int'];
    totalMirrors: ScalarsEnums['Int'];
    totalPosts: ScalarsEnums['Int'];
    totalProfiles: ScalarsEnums['Int'];
    totalRevenue: Erc20Amount[];
}

export interface LimitedFeeCollectModuleSettings {
    __typename?: 'LimitedFeeCollectModuleSettings';
    /**
     * The collect module amount info
     */
    amount: ModuleFeeAmount;
    /**
     * The collect module limit
     */
    collectLimit: ScalarsEnums['String'];
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * Follower only
     */
    followerOnly: ScalarsEnums['Boolean'];
    /**
     * The collect module recipient address
     */
    recipient: ScalarsEnums['EthereumAddress'];
    /**
     * The collect module referral fee
     */
    referralFee: ScalarsEnums['Float'];
    /**
     * The collect modules enum
     */
    type: ScalarsEnums['CollectModules'];
}

export interface LimitedTimedFeeCollectModuleSettings {
    __typename?: 'LimitedTimedFeeCollectModuleSettings';
    /**
     * The collect module amount info
     */
    amount: ModuleFeeAmount;
    /**
     * The collect module limit
     */
    collectLimit: ScalarsEnums['String'];
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The collect module end timestamp
     */
    endTimestamp: ScalarsEnums['DateTime'];
    /**
     * Follower only
     */
    followerOnly: ScalarsEnums['Boolean'];
    /**
     * The collect module recipient address
     */
    recipient: ScalarsEnums['EthereumAddress'];
    /**
     * The collect module referral fee
     */
    referralFee: ScalarsEnums['Float'];
    /**
     * The collect modules enum
     */
    type: ScalarsEnums['CollectModules'];
}

export interface Log {
    __typename?: 'Log';
    address: ScalarsEnums['ContractAddress'];
    blockHash: ScalarsEnums['String'];
    blockNumber: ScalarsEnums['Int'];
    data: ScalarsEnums['String'];
    logIndex: ScalarsEnums['Int'];
    removed: ScalarsEnums['Boolean'];
    topics: Array<ScalarsEnums['String']>;
    transactionHash: ScalarsEnums['TxHash'];
    transactionIndex: ScalarsEnums['Int'];
}

export interface MainPostReference {
    __typename?: 'Mirror' | 'Post';
    $on: $MainPostReference;
}

/**
 * The Media url
 */
export interface Media {
    __typename?: 'Media';
    /**
     * The alt tags for accessibility
     */
    altTag?: Maybe<ScalarsEnums['String']>;
    /**
     * The cover for any video or audio you attached
     */
    cover?: Maybe<ScalarsEnums['String']>;
    /**
     * Height - will always be null on the public API
     */
    height?: Maybe<ScalarsEnums['Int']>;
    /**
     * The image/audio/video mime type for the publication
     */
    mimeType?: Maybe<ScalarsEnums['MimeType']>;
    /**
     * Size - will always be null on the public API
     */
    size?: Maybe<ScalarsEnums['Int']>;
    /**
     * The token image nft
     */
    url: ScalarsEnums['Url'];
    /**
     * Width - will always be null on the public API
     */
    width?: Maybe<ScalarsEnums['Int']>;
}

/**
 * The Media Set
 */
export interface MediaSet {
    __typename?: 'MediaSet';
    /**
     * Medium media - will always be null on the public API
     * @deprecated should not be used will always be null
     */
    medium?: Maybe<Media>;
    /**
     * Original media
     */
    original: Media;
    /**
     * Small media - will always be null on the public API
     * @deprecated should not be used will always be null
     */
    small?: Maybe<Media>;
}

export interface MentionPublication {
    __typename?: 'Comment' | 'Post';
    $on: $MentionPublication;
}

/**
 * The metadata attribute output
 */
export interface MetadataAttributeOutput {
    __typename?: 'MetadataAttributeOutput';
    /**
     * The display type
     */
    displayType?: Maybe<ScalarsEnums['PublicationMetadataDisplayTypes']>;
    /**
     * The trait type - can be anything its the name it will render so include spaces
     */
    traitType?: Maybe<ScalarsEnums['String']>;
    /**
     * The value
     */
    value?: Maybe<ScalarsEnums['String']>;
}

/**
 * The metadata output
 */
export interface MetadataOutput {
    __typename?: 'MetadataOutput';
    /**
     * The main focus of the publication
     */
    animatedUrl?: Maybe<ScalarsEnums['Url']>;
    /**
     * The attributes
     */
    attributes: MetadataAttributeOutput[];
    /**
     * This is the metadata content for the publication, should be markdown
     */
    content?: Maybe<ScalarsEnums['Markdown']>;
    /**
     * The content warning for the publication
     */
    contentWarning?: Maybe<ScalarsEnums['PublicationContentWarning']>;
    /**
     * The image cover for video/music publications
     */
    cover?: Maybe<MediaSet>;
    /**
     * This is the metadata description
     */
    description?: Maybe<ScalarsEnums['Markdown']>;
    /**
     * This is the image attached to the metadata and the property used to show the NFT!
     */
    image?: Maybe<ScalarsEnums['Url']>;
    /**
     * The locale of the publication,
     */
    locale?: Maybe<ScalarsEnums['Locale']>;
    /**
     * The main focus of the publication
     */
    mainContentFocus: ScalarsEnums['PublicationMainFocus'];
    /**
     * The images/audios/videos for the publication
     */
    media: MediaSet[];
    /**
     * The metadata name
     */
    name?: Maybe<ScalarsEnums['String']>;
    /**
     * The tags for the publication
     */
    tags: Array<ScalarsEnums['String']>;
}

/**
 * The social mirror
 */
export interface Mirror {
    __typename?: 'Mirror';
    /**
     * ID of the source
     */
    appId?: Maybe<ScalarsEnums['Sources']>;
    canComment: (args?: { profileId?: Maybe<Scalars['ProfileId']> }) => CanCommentResponse;
    canMirror: (args?: { profileId?: Maybe<Scalars['ProfileId']> }) => CanMirrorResponse;
    /**
     * The collect module
     */
    collectModule: CollectModule;
    /**
     * The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed
     */
    collectNftAddress?: Maybe<ScalarsEnums['ContractAddress']>;
    /**
     * The date the post was created on
     */
    createdAt: ScalarsEnums['DateTime'];
    hasCollectedByMe: ScalarsEnums['Boolean'];
    /**
     * If the publication has been hidden if it has then the content and media is not available
     */
    hidden: ScalarsEnums['Boolean'];
    /**
     * The internal publication id
     */
    id: ScalarsEnums['InternalPublicationId'];
    /**
     * The metadata for the post
     */
    metadata: MetadataOutput;
    /**
     * The mirror publication
     */
    mirrorOf: MirrorablePublication;
    /**
     * The on chain content uri could be `ipfs://` or `https`
     */
    onChainContentURI: ScalarsEnums['String'];
    /**
     * The profile ref
     */
    profile: Profile;
    reaction: (args?: {
        request?: Maybe<ReactionFieldResolverRequest>;
    }) => Maybe<ScalarsEnums['ReactionTypes']>;
    /**
     * The reference module
     */
    referenceModule?: Maybe<ReferenceModule>;
    /**
     * The publication stats
     */
    stats: PublicationStats;
}

export interface MirrorEvent {
    __typename?: 'MirrorEvent';
    profile: Profile;
    timestamp: ScalarsEnums['DateTime'];
}

export interface MirrorablePublication {
    __typename?: 'Comment' | 'Post';
    $on: $MirrorablePublication;
}

export interface ModuleFeeAmount {
    __typename?: 'ModuleFeeAmount';
    /**
     * The erc20 token info
     */
    asset: Erc20;
    /**
     * Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal.
     */
    value: ScalarsEnums['String'];
}

export interface ModuleInfo {
    __typename?: 'ModuleInfo';
    name: ScalarsEnums['String'];
    type: ScalarsEnums['String'];
}

/**
 * The nft type
 */
export interface NFT {
    __typename?: 'NFT';
    /**
     * aka "1"
     */
    chainId: ScalarsEnums['ChainId'];
    /**
     * aka "CryptoKitties"
     */
    collectionName: ScalarsEnums['String'];
    /**
     * aka "https://api.criptokitt..."
     */
    contentURI: ScalarsEnums['String'];
    /**
     * aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
     */
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * aka us CryptoKitties
     */
    contractName: ScalarsEnums['String'];
    /**
     * aka "Hey cutie! I m Beard Coffee. ....
     */
    description: ScalarsEnums['String'];
    /**
     * aka "ERC721"
     */
    ercType: ScalarsEnums['String'];
    /**
     * aka "Beard Coffee"
     */
    name: ScalarsEnums['String'];
    /**
     * aka "{ uri:"https://ipfs....", metaType:"image/png" }"
     */
    originalContent: NFTContent;
    /**
     * aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }
     */
    owners: Owner[];
    /**
     * aka RARI
     */
    symbol: ScalarsEnums['String'];
    /**
     * aka "13"
     */
    tokenId: ScalarsEnums['String'];
}

/**
 * The NFT content uri
 */
export interface NFTContent {
    __typename?: 'NFTContent';
    /**
     * The animated url
     */
    animatedUrl?: Maybe<ScalarsEnums['String']>;
    /**
     * The meta type content
     */
    metaType: ScalarsEnums['String'];
    /**
     * The token uri  nft
     */
    uri: ScalarsEnums['String'];
}

/**
 * Paginated nft results
 */
export interface NFTsResult {
    __typename?: 'NFTsResult';
    items: NFT[];
    pageInfo: PaginatedResultInfo;
}

export interface NewCollectNotification {
    __typename?: 'NewCollectNotification';
    collectedPublication: Publication;
    createdAt: ScalarsEnums['DateTime'];
    notificationId: ScalarsEnums['NotificationId'];
    wallet: Wallet;
}

export interface NewCommentNotification {
    __typename?: 'NewCommentNotification';
    comment: Comment;
    createdAt: ScalarsEnums['DateTime'];
    notificationId: ScalarsEnums['NotificationId'];
    /**
     * The profile
     */
    profile: Profile;
}

export interface NewFollowerNotification {
    __typename?: 'NewFollowerNotification';
    createdAt: ScalarsEnums['DateTime'];
    isFollowedByMe: ScalarsEnums['Boolean'];
    notificationId: ScalarsEnums['NotificationId'];
    wallet: Wallet;
}

export interface NewMentionNotification {
    __typename?: 'NewMentionNotification';
    createdAt: ScalarsEnums['DateTime'];
    mentionPublication: MentionPublication;
    notificationId: ScalarsEnums['NotificationId'];
}

export interface NewMirrorNotification {
    __typename?: 'NewMirrorNotification';
    createdAt: ScalarsEnums['DateTime'];
    notificationId: ScalarsEnums['NotificationId'];
    /**
     * The profile
     */
    profile: Profile;
    publication: MirrorablePublication;
}

export interface NewReactionNotification {
    __typename?: 'NewReactionNotification';
    createdAt: ScalarsEnums['DateTime'];
    notificationId: ScalarsEnums['NotificationId'];
    /**
     * The profile
     */
    profile: Profile;
    publication: Publication;
    reaction: ScalarsEnums['ReactionTypes'];
}

/**
 * The NFT image
 */
export interface NftImage {
    __typename?: 'NftImage';
    /**
     * The token image nft
     */
    chainId: ScalarsEnums['Int'];
    /**
     * The contract address
     */
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The token id of the nft
     */
    tokenId: ScalarsEnums['String'];
    /**
     * The token image nft
     */
    uri: ScalarsEnums['Url'];
    /**
     * If the NFT is verified
     */
    verified: ScalarsEnums['Boolean'];
}

/**
 * NFT ownership challenge result
 */
export interface NftOwnershipChallengeResult {
    __typename?: 'NftOwnershipChallengeResult';
    /**
     * Id of the nft ownership challenge
     */
    id: ScalarsEnums['NftOwnershipId'];
    text: ScalarsEnums['String'];
    /**
     * Timeout of the validation
     */
    timeout: ScalarsEnums['TimestampScalar'];
}

export interface Notification {
    __typename?:
        | 'NewCollectNotification'
        | 'NewCommentNotification'
        | 'NewFollowerNotification'
        | 'NewMentionNotification'
        | 'NewMirrorNotification'
        | 'NewReactionNotification';
    $on: $Notification;
}

export interface OnChainIdentity {
    __typename?: 'OnChainIdentity';
    /**
     * The ens information
     */
    ens?: Maybe<EnsOnChainIdentity>;
    /**
     * The POH status
     */
    proofOfHumanity: ScalarsEnums['Boolean'];
    /**
     * The sybil dot org information
     */
    sybilDotOrg: SybilDotOrgIdentity;
    /**
     * The worldcoin identity
     */
    worldcoin: WorldcoinIdentity;
}

/**
 * The nft type
 */
export interface Owner {
    __typename?: 'Owner';
    /**
     * aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
     */
    address: ScalarsEnums['EthereumAddress'];
    /**
     * number of tokens owner
     */
    amount: ScalarsEnums['Float'];
}

/**
 * The paginated wallet result
 */
export interface PaginatedAllPublicationsTagsResult {
    __typename?: 'PaginatedAllPublicationsTagsResult';
    items: TagResult[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated feed result
 */
export interface PaginatedFeedResult {
    __typename?: 'PaginatedFeedResult';
    items: FeedItem[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated followers result
 */
export interface PaginatedFollowersResult {
    __typename?: 'PaginatedFollowersResult';
    items: Follower[];
    pageInfo: PaginatedResultInfo;
}

export interface PaginatedFollowingResult {
    __typename?: 'PaginatedFollowingResult';
    items: Following[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated notification result
 */
export interface PaginatedNotificationResult {
    __typename?: 'PaginatedNotificationResult';
    items: Notification[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated wallet result
 */
export interface PaginatedProfilePublicationsForSaleResult {
    __typename?: 'PaginatedProfilePublicationsForSaleResult';
    items: PublicationForSale[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated profile result
 */
export interface PaginatedProfileResult {
    __typename?: 'PaginatedProfileResult';
    items: Profile[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated publication result
 */
export interface PaginatedPublicationResult {
    __typename?: 'PaginatedPublicationResult';
    items: Publication[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated result info
 */
export interface PaginatedResultInfo {
    __typename?: 'PaginatedResultInfo';
    /**
     * Cursor to query next results
     */
    next?: Maybe<ScalarsEnums['Cursor']>;
    /**
     * Cursor to query the actual results
     */
    prev?: Maybe<ScalarsEnums['Cursor']>;
    /**
     * The total number of entities the pagination iterates over. If null it means it can not work it out due to dynamic or aggregated query e.g. For a query that requests all nfts with more than 10 likes, this field gives the total amount of nfts with more than 10 likes, not the total amount of nfts
     */
    totalCount?: Maybe<ScalarsEnums['Int']>;
}

/**
 * The paginated timeline result
 */
export interface PaginatedTimelineResult {
    __typename?: 'PaginatedTimelineResult';
    items: Publication[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated wallet result
 */
export interface PaginatedWhoCollectedResult {
    __typename?: 'PaginatedWhoCollectedResult';
    items: Wallet[];
    pageInfo: PaginatedResultInfo;
}

export interface PaginatedWhoReactedResult {
    __typename?: 'PaginatedWhoReactedResult';
    items: WhoReactedResult[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The paginated follow result
 */
export interface PendingApproveFollowsResult {
    __typename?: 'PendingApproveFollowsResult';
    items: Profile[];
    pageInfo: PaginatedResultInfo;
}

/**
 * The social post
 */
export interface Post {
    __typename?: 'Post';
    /**
     * ID of the source
     */
    appId?: Maybe<ScalarsEnums['Sources']>;
    canComment: (args?: { profileId?: Maybe<Scalars['ProfileId']> }) => CanCommentResponse;
    canMirror: (args?: { profileId?: Maybe<Scalars['ProfileId']> }) => CanMirrorResponse;
    /**
     * The collect module
     */
    collectModule: CollectModule;
    /**
     * The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed
     */
    collectNftAddress?: Maybe<ScalarsEnums['ContractAddress']>;
    /**
     * Who collected it, this is used for timeline results and like this for better caching for the client
     * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
     */
    collectedBy?: Maybe<Wallet>;
    /**
     * The date the post was created on
     */
    createdAt: ScalarsEnums['DateTime'];
    hasCollectedByMe: ScalarsEnums['Boolean'];
    /**
     * If the publication has been hidden if it has then the content and media is not available
     */
    hidden: ScalarsEnums['Boolean'];
    /**
     * The internal publication id
     */
    id: ScalarsEnums['InternalPublicationId'];
    /**
     * The metadata for the post
     */
    metadata: MetadataOutput;
    mirrors: (args?: {
        by?: Maybe<Scalars['ProfileId']>;
    }) => Array<ScalarsEnums['InternalPublicationId']>;
    /**
     * The on chain content uri could be `ipfs://` or `https`
     */
    onChainContentURI: ScalarsEnums['String'];
    /**
     * The profile ref
     */
    profile: Profile;
    reaction: (args?: {
        request?: Maybe<ReactionFieldResolverRequest>;
    }) => Maybe<ScalarsEnums['ReactionTypes']>;
    /**
     * The reference module
     */
    referenceModule?: Maybe<ReferenceModule>;
    /**
     * The publication stats
     */
    stats: PublicationStats;
}

/**
 * The Profile
 */
export interface Profile {
    __typename?: 'Profile';
    /**
     * Optionals param to add extra attributes on the metadata
     */
    attributes?: Maybe<Attribute[]>;
    /**
     * Bio of the profile
     */
    bio?: Maybe<ScalarsEnums['String']>;
    /**
     * The cover picture for the profile
     */
    coverPicture?: Maybe<ProfileMedia>;
    /**
     * The dispatcher
     */
    dispatcher?: Maybe<Dispatcher>;
    /**
     * The follow module
     */
    followModule?: Maybe<FollowModule>;
    /**
     * Follow nft address
     */
    followNftAddress?: Maybe<ScalarsEnums['ContractAddress']>;
    /**
     * The profile handle
     */
    handle: ScalarsEnums['Handle'];
    /**
     * The profile id
     */
    id: ScalarsEnums['ProfileId'];
    /**
     * Is the profile default
     */
    isDefault: ScalarsEnums['Boolean'];
    isFollowedByMe: ScalarsEnums['Boolean'];
    isFollowing: (args?: { who?: Maybe<Scalars['ProfileId']> }) => ScalarsEnums['Boolean'];
    /**
     * Metadata url
     */
    metadata?: Maybe<ScalarsEnums['Url']>;
    /**
     * Name of the profile
     */
    name?: Maybe<ScalarsEnums['String']>;
    /**
     * The on chain identity
     */
    onChainIdentity: OnChainIdentity;
    /**
     * Who owns the profile
     */
    ownedBy: ScalarsEnums['EthereumAddress'];
    /**
     * The picture for the profile
     */
    picture?: Maybe<ProfileMedia>;
    /**
     * Profile stats
     */
    stats: ProfileStats;
}

export interface ProfileFollowModuleSettings {
    __typename?: 'ProfileFollowModuleSettings';
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The follow module enum
     */
    type: ScalarsEnums['FollowModules'];
}

export interface ProfileMedia {
    __typename?: 'MediaSet' | 'NftImage';
    $on: $ProfileMedia;
}

/**
 * The paginated revenue result
 */
export interface ProfilePublicationRevenueResult {
    __typename?: 'ProfilePublicationRevenueResult';
    items: PublicationRevenue[];
    pageInfo: PaginatedResultInfo;
}

/**
 * Profile search results
 */
export interface ProfileSearchResult {
    __typename?: 'ProfileSearchResult';
    items: Profile[];
    pageInfo: PaginatedResultInfo;
    type: ScalarsEnums['SearchRequestTypes'];
}

/**
 * The Profile Stats
 */
export interface ProfileStats {
    __typename?: 'ProfileStats';
    commentsTotal: (args: { forSources: Array<Scalars['Sources']> }) => ScalarsEnums['Int'];
    id: ScalarsEnums['ProfileId'];
    mirrorsTotal: (args: { forSources: Array<Scalars['Sources']> }) => ScalarsEnums['Int'];
    postsTotal: (args: { forSources: Array<Scalars['Sources']> }) => ScalarsEnums['Int'];
    publicationsTotal: (args: { forSources: Array<Scalars['Sources']> }) => ScalarsEnums['Int'];
    /**
     * Total collects count
     */
    totalCollects: ScalarsEnums['Int'];
    /**
     * Total comment count
     */
    totalComments: ScalarsEnums['Int'];
    /**
     * Total follower count
     */
    totalFollowers: ScalarsEnums['Int'];
    /**
     * Total following count (remember the wallet follows not profile so will be same for every profile they own)
     */
    totalFollowing: ScalarsEnums['Int'];
    /**
     * Total mirror count
     */
    totalMirrors: ScalarsEnums['Int'];
    /**
     * Total post count
     */
    totalPosts: ScalarsEnums['Int'];
    /**
     * Total publication count
     */
    totalPublications: ScalarsEnums['Int'];
}

export interface ProxyActionError {
    __typename?: 'ProxyActionError';
    lastKnownTxId?: Maybe<ScalarsEnums['TxId']>;
    reason: ScalarsEnums['String'];
}

export interface ProxyActionQueued {
    __typename?: 'ProxyActionQueued';
    queuedAt: ScalarsEnums['DateTime'];
}

export interface ProxyActionStatusResult {
    __typename?: 'ProxyActionStatusResult';
    status: ScalarsEnums['ProxyActionStatusTypes'];
    txHash: ScalarsEnums['TxHash'];
    txId: ScalarsEnums['TxId'];
}

export interface ProxyActionStatusResultUnion {
    __typename?: 'ProxyActionError' | 'ProxyActionQueued' | 'ProxyActionStatusResult';
    $on: $ProxyActionStatusResultUnion;
}

export interface Publication {
    __typename?: 'Comment' | 'Mirror' | 'Post';
    $on: $Publication;
}

export interface PublicationForSale {
    __typename?: 'Comment' | 'Post';
    $on: $PublicationForSale;
}

export interface PublicationMetadataStatus {
    __typename?: 'PublicationMetadataStatus';
    /**
     * If metadata validation failed it will put a reason why here
     */
    reason?: Maybe<ScalarsEnums['String']>;
    status: ScalarsEnums['PublicationMetadataStatusType'];
}

/**
 * The social comment
 */
export interface PublicationRevenue {
    __typename?: 'PublicationRevenue';
    publication: Publication;
    revenue: RevenueAggregate;
}

/**
 * Publication search results
 */
export interface PublicationSearchResult {
    __typename?: 'PublicationSearchResult';
    items: PublicationSearchResultItem[];
    pageInfo: PaginatedResultInfo;
    type: ScalarsEnums['SearchRequestTypes'];
}

export interface PublicationSearchResultItem {
    __typename?: 'Comment' | 'Post';
    $on: $PublicationSearchResultItem;
}

/**
 * The publication stats
 */
export interface PublicationStats {
    __typename?: 'PublicationStats';
    commentsTotal: (args: { forSources: Array<Scalars['Sources']> }) => ScalarsEnums['Int'];
    /**
     * The publication id
     */
    id: ScalarsEnums['InternalPublicationId'];
    /**
     * The total amount of collects
     */
    totalAmountOfCollects: ScalarsEnums['Int'];
    /**
     * The total amount of comments
     */
    totalAmountOfComments: ScalarsEnums['Int'];
    /**
     * The total amount of mirrors
     */
    totalAmountOfMirrors: ScalarsEnums['Int'];
    /**
     * The total amount of upvotes
     */
    totalDownvotes: ScalarsEnums['Int'];
    /**
     * The total amount of downvotes
     */
    totalUpvotes: ScalarsEnums['Int'];
}

export interface PublicationValidateMetadataResult {
    __typename?: 'PublicationValidateMetadataResult';
    /**
     * If `valid` is false it will put a reason why here
     */
    reason?: Maybe<ScalarsEnums['String']>;
    valid: ScalarsEnums['Boolean'];
}

export interface ReactionEvent {
    __typename?: 'ReactionEvent';
    profile: Profile;
    reaction: ScalarsEnums['ReactionTypes'];
    timestamp: ScalarsEnums['DateTime'];
}

export interface ReferenceModule {
    __typename?:
        | 'DegreesOfSeparationReferenceModuleSettings'
        | 'FollowOnlyReferenceModuleSettings'
        | 'UnknownReferenceModuleSettings';
    $on: $ReferenceModule;
}

export interface RelayError {
    __typename?: 'RelayError';
    reason: ScalarsEnums['RelayErrorReasons'];
}

export interface RelayResult {
    __typename?: 'RelayError' | 'RelayerResult';
    $on: $RelayResult;
}

/**
 * The relayer result
 */
export interface RelayerResult {
    __typename?: 'RelayerResult';
    /**
     * The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change
     */
    txHash: ScalarsEnums['TxHash'];
    /**
     * The tx id
     */
    txId: ScalarsEnums['TxId'];
}

export interface ReservedClaimableHandle {
    __typename?: 'ReservedClaimableHandle';
    expiry: ScalarsEnums['DateTime'];
    handle: ScalarsEnums['Handle'];
    id: ScalarsEnums['HandleClaimIdScalar'];
    source: ScalarsEnums['String'];
}

export interface RevenueAggregate {
    __typename?: 'RevenueAggregate';
    total: Erc20Amount;
}

export interface RevertCollectModuleSettings {
    __typename?: 'RevertCollectModuleSettings';
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The collect modules enum
     */
    type: ScalarsEnums['CollectModules'];
}

export interface RevertFollowModuleSettings {
    __typename?: 'RevertFollowModuleSettings';
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The follow module enum
     */
    type: ScalarsEnums['FollowModules'];
}

export interface SearchResult {
    __typename?: 'ProfileSearchResult' | 'PublicationSearchResult';
    $on: $SearchResult;
}

/**
 * The broadcast item
 */
export interface SetDefaultProfileBroadcastItemResult {
    __typename?: 'SetDefaultProfileBroadcastItemResult';
    /**
     * The date the broadcast item expiries
     */
    expiresAt: ScalarsEnums['DateTime'];
    /**
     * This broadcast item ID
     */
    id: ScalarsEnums['BroadcastId'];
    /**
     * The typed data
     */
    typedData: SetDefaultProfileEIP712TypedData;
}

/**
 * The default profile eip 712 typed data
 */
export interface SetDefaultProfileEIP712TypedData {
    __typename?: 'SetDefaultProfileEIP712TypedData';
    /**
     * The typed data domain
     */
    domain: EIP712TypedDataDomain;
    /**
     * The types
     */
    types: SetDefaultProfileEIP712TypedDataTypes;
    /**
     * The values
     */
    value: SetDefaultProfileEIP712TypedDataValue;
}

/**
 * The default profile eip 712 typed data types
 */
export interface SetDefaultProfileEIP712TypedDataTypes {
    __typename?: 'SetDefaultProfileEIP712TypedDataTypes';
    SetDefaultProfileWithSig: EIP712TypedDataField[];
}

/**
 * The default profile eip 712 typed data value
 */
export interface SetDefaultProfileEIP712TypedDataValue {
    __typename?: 'SetDefaultProfileEIP712TypedDataValue';
    deadline: ScalarsEnums['UnixTimestamp'];
    nonce: ScalarsEnums['Nonce'];
    profileId: ScalarsEnums['ProfileId'];
    wallet: ScalarsEnums['EthereumAddress'];
}

export interface SybilDotOrgIdentity {
    __typename?: 'SybilDotOrgIdentity';
    source: SybilDotOrgIdentitySource;
    /**
     * The sybil dot org status
     */
    verified: ScalarsEnums['Boolean'];
}

export interface SybilDotOrgIdentitySource {
    __typename?: 'SybilDotOrgIdentitySource';
    twitter: SybilDotOrgTwitterIdentity;
}

export interface SybilDotOrgTwitterIdentity {
    __typename?: 'SybilDotOrgTwitterIdentity';
    handle?: Maybe<ScalarsEnums['String']>;
}

/**
 * The social comment
 */
export interface TagResult {
    __typename?: 'TagResult';
    /**
     * The tag
     */
    tag: ScalarsEnums['PublicationTag'];
    /**
     * The total amount of publication tagged
     */
    total: ScalarsEnums['Int'];
}

export interface TimedFeeCollectModuleSettings {
    __typename?: 'TimedFeeCollectModuleSettings';
    /**
     * The collect module amount info
     */
    amount: ModuleFeeAmount;
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The collect module end timestamp
     */
    endTimestamp: ScalarsEnums['DateTime'];
    /**
     * Follower only
     */
    followerOnly: ScalarsEnums['Boolean'];
    /**
     * The collect module recipient address
     */
    recipient: ScalarsEnums['EthereumAddress'];
    /**
     * The collect module referral fee
     */
    referralFee: ScalarsEnums['Float'];
    /**
     * The collect modules enum
     */
    type: ScalarsEnums['CollectModules'];
}

export interface TransactionError {
    __typename?: 'TransactionError';
    reason: ScalarsEnums['TransactionErrorReasons'];
    txReceipt?: Maybe<TransactionReceipt>;
}

export interface TransactionIndexedResult {
    __typename?: 'TransactionIndexedResult';
    indexed: ScalarsEnums['Boolean'];
    /**
     * Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null.
     */
    metadataStatus?: Maybe<PublicationMetadataStatus>;
    txHash: ScalarsEnums['TxHash'];
    txReceipt?: Maybe<TransactionReceipt>;
}

export interface TransactionReceipt {
    __typename?: 'TransactionReceipt';
    blockHash: ScalarsEnums['String'];
    blockNumber: ScalarsEnums['Int'];
    byzantium: ScalarsEnums['Boolean'];
    confirmations: ScalarsEnums['Int'];
    contractAddress?: Maybe<ScalarsEnums['ContractAddress']>;
    cumulativeGasUsed: ScalarsEnums['String'];
    effectiveGasPrice: ScalarsEnums['String'];
    from: ScalarsEnums['EthereumAddress'];
    gasUsed: ScalarsEnums['String'];
    logs: Log[];
    logsBloom: ScalarsEnums['String'];
    root?: Maybe<ScalarsEnums['String']>;
    status?: Maybe<ScalarsEnums['Int']>;
    to?: Maybe<ScalarsEnums['EthereumAddress']>;
    transactionHash: ScalarsEnums['TxHash'];
    transactionIndex: ScalarsEnums['Int'];
    type: ScalarsEnums['Int'];
}

export interface TransactionResult {
    __typename?: 'TransactionError' | 'TransactionIndexedResult';
    $on: $TransactionResult;
}

export interface UnknownCollectModuleSettings {
    __typename?: 'UnknownCollectModuleSettings';
    /**
     * The data used to setup the module which you can decode with your known ABI
     */
    collectModuleReturnData: ScalarsEnums['CollectModuleData'];
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The collect modules enum
     */
    type: ScalarsEnums['CollectModules'];
}

export interface UnknownFollowModuleSettings {
    __typename?: 'UnknownFollowModuleSettings';
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The data used to setup the module which you can decode with your known ABI
     */
    followModuleReturnData: ScalarsEnums['FollowModuleData'];
    /**
     * The follow modules enum
     */
    type: ScalarsEnums['FollowModules'];
}

export interface UnknownReferenceModuleSettings {
    __typename?: 'UnknownReferenceModuleSettings';
    contractAddress: ScalarsEnums['ContractAddress'];
    /**
     * The data used to setup the module which you can decode with your known ABI
     */
    referenceModuleReturnData: ScalarsEnums['ReferenceModuleData'];
    /**
     * The reference modules enum
     */
    type: ScalarsEnums['ReferenceModules'];
}

export interface UserSigNonces {
    __typename?: 'UserSigNonces';
    lensHubOnChainSigNonce: ScalarsEnums['Nonce'];
    peripheryOnChainSigNonce: ScalarsEnums['Nonce'];
}

export interface Wallet {
    __typename?: 'Wallet';
    address: ScalarsEnums['EthereumAddress'];
    /**
     * The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough
     */
    defaultProfile?: Maybe<Profile>;
}

/**
 * The Profile
 */
export interface WhoReactedResult {
    __typename?: 'WhoReactedResult';
    profile: Profile;
    /**
     * The reaction
     */
    reaction: ScalarsEnums['ReactionTypes'];
    /**
     * The reaction
     */
    reactionAt: ScalarsEnums['DateTime'];
    /**
     * The reaction id
     */
    reactionId: ScalarsEnums['ReactionId'];
}

export interface WorldcoinIdentity {
    __typename?: 'WorldcoinIdentity';
    /**
     * If the profile has verified as a user
     */
    isHuman: ScalarsEnums['Boolean'];
}

export interface Mutation {
    __typename?: 'Mutation';
    ach: (args: { request: AchRequest }) => Maybe<ScalarsEnums['Void']>;
    addReaction: (args: { request: ReactionRequest }) => Maybe<ScalarsEnums['Void']>;
    authenticate: (args: { request: SignedAuthChallenge }) => AuthenticationResult;
    broadcast: (args: { request: BroadcastRequest }) => RelayResult;
    claim: (args: { request: ClaimHandleRequest }) => RelayResult;
    createBurnProfileTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: BurnProfileRequest;
    }) => CreateBurnProfileBroadcastItemResult;
    createCollectTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreateCollectRequest;
    }) => CreateCollectBroadcastItemResult;
    createCommentTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreatePublicCommentRequest;
    }) => CreateCommentBroadcastItemResult;
    createCommentViaDispatcher: (args: { request: CreatePublicCommentRequest }) => RelayResult;
    createFollowTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: FollowRequest;
    }) => CreateFollowBroadcastItemResult;
    createMirrorTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreateMirrorRequest;
    }) => CreateMirrorBroadcastItemResult;
    createMirrorViaDispatcher: (args: { request: CreateMirrorRequest }) => RelayResult;
    createPostTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreatePublicPostRequest;
    }) => CreatePostBroadcastItemResult;
    createPostViaDispatcher: (args: { request: CreatePublicPostRequest }) => RelayResult;
    createProfile: (args: { request: CreateProfileRequest }) => RelayResult;
    createSetDefaultProfileTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreateSetDefaultProfileRequest;
    }) => SetDefaultProfileBroadcastItemResult;
    createSetDispatcherTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: SetDispatcherRequest;
    }) => CreateSetDispatcherBroadcastItemResult;
    createSetFollowModuleTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreateSetFollowModuleRequest;
    }) => CreateSetFollowModuleBroadcastItemResult;
    createSetFollowNFTUriTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreateSetFollowNFTUriRequest;
    }) => CreateSetFollowNFTUriBroadcastItemResult;
    createSetProfileImageURITypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: UpdateProfileImageRequest;
    }) => CreateSetProfileImageUriBroadcastItemResult;
    createSetProfileImageURIViaDispatcher: (args: {
        request: UpdateProfileImageRequest;
    }) => RelayResult;
    createSetProfileMetadataTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreatePublicSetProfileMetadataURIRequest;
    }) => CreateSetProfileMetadataURIBroadcastItemResult;
    createSetProfileMetadataViaDispatcher: (args: {
        request: CreatePublicSetProfileMetadataURIRequest;
    }) => RelayResult;
    createToggleFollowTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: CreateToggleFollowRequest;
    }) => CreateToggleFollowBroadcastItemResult;
    createUnfollowTypedData: (args: {
        options?: Maybe<TypedDataOptions>;
        request: UnfollowRequest;
    }) => CreateUnfollowBroadcastItemResult;
    hidePublication: (args: { request: HidePublicationRequest }) => Maybe<ScalarsEnums['Void']>;
    proxyAction: (args: { request: ProxyActionRequest }) => ScalarsEnums['ProxyActionId'];
    refresh: (args: { request: RefreshRequest }) => AuthenticationResult;
    removeReaction: (args: { request: ReactionRequest }) => Maybe<ScalarsEnums['Void']>;
    reportPublication: (args: { request: ReportPublicationRequest }) => Maybe<ScalarsEnums['Void']>;
}

export interface Query {
    __typename?: 'Query';
    allPublicationsTags: (args: {
        request: AllPublicationsTagsRequest;
    }) => PaginatedAllPublicationsTagsResult;
    approvedModuleAllowanceAmount: (args: {
        request: ApprovedModuleAllowanceAmountRequest;
    }) => ApprovedAllowanceAmount[];
    challenge: (args: { request: ChallengeRequest }) => AuthChallengeResult;
    claimableHandles: ClaimableHandles;
    claimableStatus: ScalarsEnums['ClaimStatus'];
    defaultProfile: (args: { request: DefaultProfileRequest }) => Maybe<Profile>;
    doesFollow: (args: { request: DoesFollowRequest }) => DoesFollowResponse[];
    enabledModuleCurrencies: Erc20[];
    enabledModules: EnabledModules;
    exploreProfiles: (args: { request: ExploreProfilesRequest }) => ExploreProfileResult;
    explorePublications: (args: { request: ExplorePublicationRequest }) => ExplorePublicationResult;
    feed: (args: { request: FeedRequest }) => PaginatedFeedResult;
    feedHighlights: (args: { request: FeedHighlightsRequest }) => PaginatedTimelineResult;
    followerNftOwnedTokenIds: (args: {
        request: FollowerNftOwnedTokenIdsRequest;
    }) => Maybe<FollowerNftOwnedTokenIds>;
    followers: (args: { request: FollowersRequest }) => PaginatedFollowersResult;
    following: (args: { request: FollowingRequest }) => PaginatedFollowingResult;
    generateModuleCurrencyApprovalData: (args: {
        request: GenerateModuleCurrencyApprovalDataRequest;
    }) => GenerateModuleCurrencyApproval;
    globalProtocolStats: (args?: {
        request?: Maybe<GlobalProtocolStatsRequest>;
    }) => GlobalProtocolStats;
    hasTxHashBeenIndexed: (args: { request: HasTxHashBeenIndexedRequest }) => TransactionResult;
    internalPublicationFilter: (args: {
        request: InternalPublicationsFilterRequest;
    }) => PaginatedPublicationResult;
    mutualFollowersProfiles: (args: {
        request: MutualFollowersProfilesQueryRequest;
    }) => PaginatedProfileResult;
    nftOwnershipChallenge: (args: {
        request: NftOwnershipChallengeRequest;
    }) => NftOwnershipChallengeResult;
    nfts: (args: { request: NFTsRequest }) => NFTsResult;
    notifications: (args: { request: NotificationRequest }) => PaginatedNotificationResult;
    pendingApprovalFollows: (args: {
        request: PendingApprovalFollowsRequest;
    }) => PendingApproveFollowsResult;
    ping: ScalarsEnums['String'];
    profile: (args: { request: SingleProfileQueryRequest }) => Maybe<Profile>;
    profileFollowModuleBeenRedeemed: (args: {
        request: ProfileFollowModuleBeenRedeemedRequest;
    }) => ScalarsEnums['Boolean'];
    profileFollowRevenue: (args: {
        request: ProfileFollowRevenueQueryRequest;
    }) => FollowRevenueResult;
    profileOnChainIdentity: (args: { request: ProfileOnChainIdentityRequest }) => OnChainIdentity[];
    profilePublicationRevenue: (args: {
        request: ProfilePublicationRevenueQueryRequest;
    }) => ProfilePublicationRevenueResult;
    profilePublicationsForSale: (args: {
        request: ProfilePublicationsForSaleRequest;
    }) => PaginatedProfilePublicationsForSaleResult;
    profiles: (args: { request: ProfileQueryRequest }) => PaginatedProfileResult;
    proxyActionStatus: (args: {
        proxyActionId: Scalars['ProxyActionId'];
    }) => ProxyActionStatusResultUnion;
    publication: (args: { request: PublicationQueryRequest }) => Maybe<Publication>;
    publicationMetadataStatus: (args: {
        request: GetPublicationMetadataStatusRequest;
    }) => PublicationMetadataStatus;
    publicationRevenue: (args: {
        request: PublicationRevenueQueryRequest;
    }) => Maybe<PublicationRevenue>;
    publications: (args: { request: PublicationsQueryRequest }) => PaginatedPublicationResult;
    recommendedProfiles: (args?: { options?: Maybe<RecommendedProfileOptions> }) => Profile[];
    rel: (args: { request: RelRequest }) => Maybe<ScalarsEnums['Void']>;
    search: (args: { request: SearchQueryRequest }) => SearchResult;
    /**
     * @deprecated You should be using feed, this will not be supported after 15th November 2021, please migrate.
     */
    timeline: (args: { request: TimelineRequest }) => PaginatedTimelineResult;
    txIdToTxHash: (args: { txId: Scalars['TxId'] }) => ScalarsEnums['TxHash'];
    unknownEnabledModules: EnabledModules;
    userSigNonces: UserSigNonces;
    validatePublicationMetadata: (args: {
        request: ValidatePublicationMetadataRequest;
    }) => PublicationValidateMetadataResult;
    verify: (args: { request: VerifyRequest }) => ScalarsEnums['Boolean'];
    whoCollectedPublication: (args: {
        request: WhoCollectedPublicationRequest;
    }) => PaginatedWhoCollectedResult;
    whoReactedPublication: (args: {
        request: WhoReactedPublicationRequest;
    }) => PaginatedWhoReactedResult;
}

export interface Subscription {
    __typename?: 'Subscription';
}

export interface SchemaObjectTypes {
    ApprovedAllowanceAmount: ApprovedAllowanceAmount;
    Attribute: Attribute;
    AuthChallengeResult: AuthChallengeResult;
    AuthenticationResult: AuthenticationResult;
    CanCommentResponse: CanCommentResponse;
    CanMirrorResponse: CanMirrorResponse;
    ClaimableHandles: ClaimableHandles;
    CollectedEvent: CollectedEvent;
    Comment: Comment;
    CreateBurnEIP712TypedData: CreateBurnEIP712TypedData;
    CreateBurnEIP712TypedDataTypes: CreateBurnEIP712TypedDataTypes;
    CreateBurnEIP712TypedDataValue: CreateBurnEIP712TypedDataValue;
    CreateBurnProfileBroadcastItemResult: CreateBurnProfileBroadcastItemResult;
    CreateCollectBroadcastItemResult: CreateCollectBroadcastItemResult;
    CreateCollectEIP712TypedData: CreateCollectEIP712TypedData;
    CreateCollectEIP712TypedDataTypes: CreateCollectEIP712TypedDataTypes;
    CreateCollectEIP712TypedDataValue: CreateCollectEIP712TypedDataValue;
    CreateCommentBroadcastItemResult: CreateCommentBroadcastItemResult;
    CreateCommentEIP712TypedData: CreateCommentEIP712TypedData;
    CreateCommentEIP712TypedDataTypes: CreateCommentEIP712TypedDataTypes;
    CreateCommentEIP712TypedDataValue: CreateCommentEIP712TypedDataValue;
    CreateFollowBroadcastItemResult: CreateFollowBroadcastItemResult;
    CreateFollowEIP712TypedData: CreateFollowEIP712TypedData;
    CreateFollowEIP712TypedDataTypes: CreateFollowEIP712TypedDataTypes;
    CreateFollowEIP712TypedDataValue: CreateFollowEIP712TypedDataValue;
    CreateMirrorBroadcastItemResult: CreateMirrorBroadcastItemResult;
    CreateMirrorEIP712TypedData: CreateMirrorEIP712TypedData;
    CreateMirrorEIP712TypedDataTypes: CreateMirrorEIP712TypedDataTypes;
    CreateMirrorEIP712TypedDataValue: CreateMirrorEIP712TypedDataValue;
    CreatePostBroadcastItemResult: CreatePostBroadcastItemResult;
    CreatePostEIP712TypedData: CreatePostEIP712TypedData;
    CreatePostEIP712TypedDataTypes: CreatePostEIP712TypedDataTypes;
    CreatePostEIP712TypedDataValue: CreatePostEIP712TypedDataValue;
    CreateSetDispatcherBroadcastItemResult: CreateSetDispatcherBroadcastItemResult;
    CreateSetDispatcherEIP712TypedData: CreateSetDispatcherEIP712TypedData;
    CreateSetDispatcherEIP712TypedDataTypes: CreateSetDispatcherEIP712TypedDataTypes;
    CreateSetDispatcherEIP712TypedDataValue: CreateSetDispatcherEIP712TypedDataValue;
    CreateSetFollowModuleBroadcastItemResult: CreateSetFollowModuleBroadcastItemResult;
    CreateSetFollowModuleEIP712TypedData: CreateSetFollowModuleEIP712TypedData;
    CreateSetFollowModuleEIP712TypedDataTypes: CreateSetFollowModuleEIP712TypedDataTypes;
    CreateSetFollowModuleEIP712TypedDataValue: CreateSetFollowModuleEIP712TypedDataValue;
    CreateSetFollowNFTUriBroadcastItemResult: CreateSetFollowNFTUriBroadcastItemResult;
    CreateSetFollowNFTUriEIP712TypedData: CreateSetFollowNFTUriEIP712TypedData;
    CreateSetFollowNFTUriEIP712TypedDataTypes: CreateSetFollowNFTUriEIP712TypedDataTypes;
    CreateSetFollowNFTUriEIP712TypedDataValue: CreateSetFollowNFTUriEIP712TypedDataValue;
    CreateSetProfileImageUriBroadcastItemResult: CreateSetProfileImageUriBroadcastItemResult;
    CreateSetProfileImageUriEIP712TypedData: CreateSetProfileImageUriEIP712TypedData;
    CreateSetProfileImageUriEIP712TypedDataTypes: CreateSetProfileImageUriEIP712TypedDataTypes;
    CreateSetProfileImageUriEIP712TypedDataValue: CreateSetProfileImageUriEIP712TypedDataValue;
    CreateSetProfileMetadataURIBroadcastItemResult: CreateSetProfileMetadataURIBroadcastItemResult;
    CreateSetProfileMetadataURIEIP712TypedData: CreateSetProfileMetadataURIEIP712TypedData;
    CreateSetProfileMetadataURIEIP712TypedDataTypes: CreateSetProfileMetadataURIEIP712TypedDataTypes;
    CreateSetProfileMetadataURIEIP712TypedDataValue: CreateSetProfileMetadataURIEIP712TypedDataValue;
    CreateToggleFollowBroadcastItemResult: CreateToggleFollowBroadcastItemResult;
    CreateToggleFollowEIP712TypedData: CreateToggleFollowEIP712TypedData;
    CreateToggleFollowEIP712TypedDataTypes: CreateToggleFollowEIP712TypedDataTypes;
    CreateToggleFollowEIP712TypedDataValue: CreateToggleFollowEIP712TypedDataValue;
    CreateUnfollowBroadcastItemResult: CreateUnfollowBroadcastItemResult;
    DegreesOfSeparationReferenceModuleSettings: DegreesOfSeparationReferenceModuleSettings;
    Dispatcher: Dispatcher;
    DoesFollowResponse: DoesFollowResponse;
    EIP712TypedDataDomain: EIP712TypedDataDomain;
    EIP712TypedDataField: EIP712TypedDataField;
    ElectedMirror: ElectedMirror;
    EnabledModule: EnabledModule;
    EnabledModules: EnabledModules;
    EnsOnChainIdentity: EnsOnChainIdentity;
    Erc20: Erc20;
    Erc20Amount: Erc20Amount;
    ExploreProfileResult: ExploreProfileResult;
    ExplorePublicationResult: ExplorePublicationResult;
    FeeCollectModuleSettings: FeeCollectModuleSettings;
    FeeFollowModuleSettings: FeeFollowModuleSettings;
    FeedItem: FeedItem;
    FollowOnlyReferenceModuleSettings: FollowOnlyReferenceModuleSettings;
    FollowRevenueResult: FollowRevenueResult;
    Follower: Follower;
    FollowerNftOwnedTokenIds: FollowerNftOwnedTokenIds;
    Following: Following;
    FreeCollectModuleSettings: FreeCollectModuleSettings;
    GenerateModuleCurrencyApproval: GenerateModuleCurrencyApproval;
    GlobalProtocolStats: GlobalProtocolStats;
    LimitedFeeCollectModuleSettings: LimitedFeeCollectModuleSettings;
    LimitedTimedFeeCollectModuleSettings: LimitedTimedFeeCollectModuleSettings;
    Log: Log;
    Media: Media;
    MediaSet: MediaSet;
    MetadataAttributeOutput: MetadataAttributeOutput;
    MetadataOutput: MetadataOutput;
    Mirror: Mirror;
    MirrorEvent: MirrorEvent;
    ModuleFeeAmount: ModuleFeeAmount;
    ModuleInfo: ModuleInfo;
    Mutation: Mutation;
    NFT: NFT;
    NFTContent: NFTContent;
    NFTsResult: NFTsResult;
    NewCollectNotification: NewCollectNotification;
    NewCommentNotification: NewCommentNotification;
    NewFollowerNotification: NewFollowerNotification;
    NewMentionNotification: NewMentionNotification;
    NewMirrorNotification: NewMirrorNotification;
    NewReactionNotification: NewReactionNotification;
    NftImage: NftImage;
    NftOwnershipChallengeResult: NftOwnershipChallengeResult;
    OnChainIdentity: OnChainIdentity;
    Owner: Owner;
    PaginatedAllPublicationsTagsResult: PaginatedAllPublicationsTagsResult;
    PaginatedFeedResult: PaginatedFeedResult;
    PaginatedFollowersResult: PaginatedFollowersResult;
    PaginatedFollowingResult: PaginatedFollowingResult;
    PaginatedNotificationResult: PaginatedNotificationResult;
    PaginatedProfilePublicationsForSaleResult: PaginatedProfilePublicationsForSaleResult;
    PaginatedProfileResult: PaginatedProfileResult;
    PaginatedPublicationResult: PaginatedPublicationResult;
    PaginatedResultInfo: PaginatedResultInfo;
    PaginatedTimelineResult: PaginatedTimelineResult;
    PaginatedWhoCollectedResult: PaginatedWhoCollectedResult;
    PaginatedWhoReactedResult: PaginatedWhoReactedResult;
    PendingApproveFollowsResult: PendingApproveFollowsResult;
    Post: Post;
    Profile: Profile;
    ProfileFollowModuleSettings: ProfileFollowModuleSettings;
    ProfilePublicationRevenueResult: ProfilePublicationRevenueResult;
    ProfileSearchResult: ProfileSearchResult;
    ProfileStats: ProfileStats;
    ProxyActionError: ProxyActionError;
    ProxyActionQueued: ProxyActionQueued;
    ProxyActionStatusResult: ProxyActionStatusResult;
    PublicationMetadataStatus: PublicationMetadataStatus;
    PublicationRevenue: PublicationRevenue;
    PublicationSearchResult: PublicationSearchResult;
    PublicationStats: PublicationStats;
    PublicationValidateMetadataResult: PublicationValidateMetadataResult;
    Query: Query;
    ReactionEvent: ReactionEvent;
    RelayError: RelayError;
    RelayerResult: RelayerResult;
    ReservedClaimableHandle: ReservedClaimableHandle;
    RevenueAggregate: RevenueAggregate;
    RevertCollectModuleSettings: RevertCollectModuleSettings;
    RevertFollowModuleSettings: RevertFollowModuleSettings;
    SetDefaultProfileBroadcastItemResult: SetDefaultProfileBroadcastItemResult;
    SetDefaultProfileEIP712TypedData: SetDefaultProfileEIP712TypedData;
    SetDefaultProfileEIP712TypedDataTypes: SetDefaultProfileEIP712TypedDataTypes;
    SetDefaultProfileEIP712TypedDataValue: SetDefaultProfileEIP712TypedDataValue;
    Subscription: Subscription;
    SybilDotOrgIdentity: SybilDotOrgIdentity;
    SybilDotOrgIdentitySource: SybilDotOrgIdentitySource;
    SybilDotOrgTwitterIdentity: SybilDotOrgTwitterIdentity;
    TagResult: TagResult;
    TimedFeeCollectModuleSettings: TimedFeeCollectModuleSettings;
    TransactionError: TransactionError;
    TransactionIndexedResult: TransactionIndexedResult;
    TransactionReceipt: TransactionReceipt;
    UnknownCollectModuleSettings: UnknownCollectModuleSettings;
    UnknownFollowModuleSettings: UnknownFollowModuleSettings;
    UnknownReferenceModuleSettings: UnknownReferenceModuleSettings;
    UserSigNonces: UserSigNonces;
    Wallet: Wallet;
    WhoReactedResult: WhoReactedResult;
    WorldcoinIdentity: WorldcoinIdentity;
}
export type SchemaObjectTypesNames =
    | 'ApprovedAllowanceAmount'
    | 'Attribute'
    | 'AuthChallengeResult'
    | 'AuthenticationResult'
    | 'CanCommentResponse'
    | 'CanMirrorResponse'
    | 'ClaimableHandles'
    | 'CollectedEvent'
    | 'Comment'
    | 'CreateBurnEIP712TypedData'
    | 'CreateBurnEIP712TypedDataTypes'
    | 'CreateBurnEIP712TypedDataValue'
    | 'CreateBurnProfileBroadcastItemResult'
    | 'CreateCollectBroadcastItemResult'
    | 'CreateCollectEIP712TypedData'
    | 'CreateCollectEIP712TypedDataTypes'
    | 'CreateCollectEIP712TypedDataValue'
    | 'CreateCommentBroadcastItemResult'
    | 'CreateCommentEIP712TypedData'
    | 'CreateCommentEIP712TypedDataTypes'
    | 'CreateCommentEIP712TypedDataValue'
    | 'CreateFollowBroadcastItemResult'
    | 'CreateFollowEIP712TypedData'
    | 'CreateFollowEIP712TypedDataTypes'
    | 'CreateFollowEIP712TypedDataValue'
    | 'CreateMirrorBroadcastItemResult'
    | 'CreateMirrorEIP712TypedData'
    | 'CreateMirrorEIP712TypedDataTypes'
    | 'CreateMirrorEIP712TypedDataValue'
    | 'CreatePostBroadcastItemResult'
    | 'CreatePostEIP712TypedData'
    | 'CreatePostEIP712TypedDataTypes'
    | 'CreatePostEIP712TypedDataValue'
    | 'CreateSetDispatcherBroadcastItemResult'
    | 'CreateSetDispatcherEIP712TypedData'
    | 'CreateSetDispatcherEIP712TypedDataTypes'
    | 'CreateSetDispatcherEIP712TypedDataValue'
    | 'CreateSetFollowModuleBroadcastItemResult'
    | 'CreateSetFollowModuleEIP712TypedData'
    | 'CreateSetFollowModuleEIP712TypedDataTypes'
    | 'CreateSetFollowModuleEIP712TypedDataValue'
    | 'CreateSetFollowNFTUriBroadcastItemResult'
    | 'CreateSetFollowNFTUriEIP712TypedData'
    | 'CreateSetFollowNFTUriEIP712TypedDataTypes'
    | 'CreateSetFollowNFTUriEIP712TypedDataValue'
    | 'CreateSetProfileImageUriBroadcastItemResult'
    | 'CreateSetProfileImageUriEIP712TypedData'
    | 'CreateSetProfileImageUriEIP712TypedDataTypes'
    | 'CreateSetProfileImageUriEIP712TypedDataValue'
    | 'CreateSetProfileMetadataURIBroadcastItemResult'
    | 'CreateSetProfileMetadataURIEIP712TypedData'
    | 'CreateSetProfileMetadataURIEIP712TypedDataTypes'
    | 'CreateSetProfileMetadataURIEIP712TypedDataValue'
    | 'CreateToggleFollowBroadcastItemResult'
    | 'CreateToggleFollowEIP712TypedData'
    | 'CreateToggleFollowEIP712TypedDataTypes'
    | 'CreateToggleFollowEIP712TypedDataValue'
    | 'CreateUnfollowBroadcastItemResult'
    | 'DegreesOfSeparationReferenceModuleSettings'
    | 'Dispatcher'
    | 'DoesFollowResponse'
    | 'EIP712TypedDataDomain'
    | 'EIP712TypedDataField'
    | 'ElectedMirror'
    | 'EnabledModule'
    | 'EnabledModules'
    | 'EnsOnChainIdentity'
    | 'Erc20'
    | 'Erc20Amount'
    | 'ExploreProfileResult'
    | 'ExplorePublicationResult'
    | 'FeeCollectModuleSettings'
    | 'FeeFollowModuleSettings'
    | 'FeedItem'
    | 'FollowOnlyReferenceModuleSettings'
    | 'FollowRevenueResult'
    | 'Follower'
    | 'FollowerNftOwnedTokenIds'
    | 'Following'
    | 'FreeCollectModuleSettings'
    | 'GenerateModuleCurrencyApproval'
    | 'GlobalProtocolStats'
    | 'LimitedFeeCollectModuleSettings'
    | 'LimitedTimedFeeCollectModuleSettings'
    | 'Log'
    | 'Media'
    | 'MediaSet'
    | 'MetadataAttributeOutput'
    | 'MetadataOutput'
    | 'Mirror'
    | 'MirrorEvent'
    | 'ModuleFeeAmount'
    | 'ModuleInfo'
    | 'Mutation'
    | 'NFT'
    | 'NFTContent'
    | 'NFTsResult'
    | 'NewCollectNotification'
    | 'NewCommentNotification'
    | 'NewFollowerNotification'
    | 'NewMentionNotification'
    | 'NewMirrorNotification'
    | 'NewReactionNotification'
    | 'NftImage'
    | 'NftOwnershipChallengeResult'
    | 'OnChainIdentity'
    | 'Owner'
    | 'PaginatedAllPublicationsTagsResult'
    | 'PaginatedFeedResult'
    | 'PaginatedFollowersResult'
    | 'PaginatedFollowingResult'
    | 'PaginatedNotificationResult'
    | 'PaginatedProfilePublicationsForSaleResult'
    | 'PaginatedProfileResult'
    | 'PaginatedPublicationResult'
    | 'PaginatedResultInfo'
    | 'PaginatedTimelineResult'
    | 'PaginatedWhoCollectedResult'
    | 'PaginatedWhoReactedResult'
    | 'PendingApproveFollowsResult'
    | 'Post'
    | 'Profile'
    | 'ProfileFollowModuleSettings'
    | 'ProfilePublicationRevenueResult'
    | 'ProfileSearchResult'
    | 'ProfileStats'
    | 'ProxyActionError'
    | 'ProxyActionQueued'
    | 'ProxyActionStatusResult'
    | 'PublicationMetadataStatus'
    | 'PublicationRevenue'
    | 'PublicationSearchResult'
    | 'PublicationStats'
    | 'PublicationValidateMetadataResult'
    | 'Query'
    | 'ReactionEvent'
    | 'RelayError'
    | 'RelayerResult'
    | 'ReservedClaimableHandle'
    | 'RevenueAggregate'
    | 'RevertCollectModuleSettings'
    | 'RevertFollowModuleSettings'
    | 'SetDefaultProfileBroadcastItemResult'
    | 'SetDefaultProfileEIP712TypedData'
    | 'SetDefaultProfileEIP712TypedDataTypes'
    | 'SetDefaultProfileEIP712TypedDataValue'
    | 'Subscription'
    | 'SybilDotOrgIdentity'
    | 'SybilDotOrgIdentitySource'
    | 'SybilDotOrgTwitterIdentity'
    | 'TagResult'
    | 'TimedFeeCollectModuleSettings'
    | 'TransactionError'
    | 'TransactionIndexedResult'
    | 'TransactionReceipt'
    | 'UnknownCollectModuleSettings'
    | 'UnknownFollowModuleSettings'
    | 'UnknownReferenceModuleSettings'
    | 'UserSigNonces'
    | 'Wallet'
    | 'WhoReactedResult'
    | 'WorldcoinIdentity';

export interface $CollectModule {
    FeeCollectModuleSettings?: FeeCollectModuleSettings;
    FreeCollectModuleSettings?: FreeCollectModuleSettings;
    LimitedFeeCollectModuleSettings?: LimitedFeeCollectModuleSettings;
    LimitedTimedFeeCollectModuleSettings?: LimitedTimedFeeCollectModuleSettings;
    RevertCollectModuleSettings?: RevertCollectModuleSettings;
    TimedFeeCollectModuleSettings?: TimedFeeCollectModuleSettings;
    UnknownCollectModuleSettings?: UnknownCollectModuleSettings;
}

export interface $FeedItemRoot {
    Comment?: Comment;
    Post?: Post;
}

export interface $FollowModule {
    FeeFollowModuleSettings?: FeeFollowModuleSettings;
    ProfileFollowModuleSettings?: ProfileFollowModuleSettings;
    RevertFollowModuleSettings?: RevertFollowModuleSettings;
    UnknownFollowModuleSettings?: UnknownFollowModuleSettings;
}

export interface $MainPostReference {
    Mirror?: Mirror;
    Post?: Post;
}

export interface $MentionPublication {
    Comment?: Comment;
    Post?: Post;
}

export interface $MirrorablePublication {
    Comment?: Comment;
    Post?: Post;
}

export interface $Notification {
    NewCollectNotification?: NewCollectNotification;
    NewCommentNotification?: NewCommentNotification;
    NewFollowerNotification?: NewFollowerNotification;
    NewMentionNotification?: NewMentionNotification;
    NewMirrorNotification?: NewMirrorNotification;
    NewReactionNotification?: NewReactionNotification;
}

export interface $ProfileMedia {
    MediaSet?: MediaSet;
    NftImage?: NftImage;
}

export interface $ProxyActionStatusResultUnion {
    ProxyActionError?: ProxyActionError;
    ProxyActionQueued?: ProxyActionQueued;
    ProxyActionStatusResult?: ProxyActionStatusResult;
}

export interface $Publication {
    Comment?: Comment;
    Mirror?: Mirror;
    Post?: Post;
}

export interface $PublicationForSale {
    Comment?: Comment;
    Post?: Post;
}

export interface $PublicationSearchResultItem {
    Comment?: Comment;
    Post?: Post;
}

export interface $ReferenceModule {
    DegreesOfSeparationReferenceModuleSettings?: DegreesOfSeparationReferenceModuleSettings;
    FollowOnlyReferenceModuleSettings?: FollowOnlyReferenceModuleSettings;
    UnknownReferenceModuleSettings?: UnknownReferenceModuleSettings;
}

export interface $RelayResult {
    RelayError?: RelayError;
    RelayerResult?: RelayerResult;
}

export interface $SearchResult {
    ProfileSearchResult?: ProfileSearchResult;
    PublicationSearchResult?: PublicationSearchResult;
}

export interface $TransactionResult {
    TransactionError?: TransactionError;
    TransactionIndexedResult?: TransactionIndexedResult;
}

export interface GeneratedSchema {
    query: Query;
    mutation: Mutation;
    subscription: Subscription;
}

export type MakeNullable<T> = {
    [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
    ClaimStatus: ClaimStatus | undefined;
    CollectModules: CollectModules | undefined;
    CustomFiltersTypes: CustomFiltersTypes | undefined;
    FeedEventItemType: FeedEventItemType | undefined;
    FollowModules: FollowModules | undefined;
    NotificationTypes: NotificationTypes | undefined;
    ProfileSortCriteria: ProfileSortCriteria | undefined;
    ProxyActionStatusTypes: ProxyActionStatusTypes | undefined;
    PublicationContentWarning: PublicationContentWarning | undefined;
    PublicationMainFocus: PublicationMainFocus | undefined;
    PublicationMetadataDisplayTypes: PublicationMetadataDisplayTypes | undefined;
    PublicationMetadataStatusType: PublicationMetadataStatusType | undefined;
    PublicationReportingFraudSubreason: PublicationReportingFraudSubreason | undefined;
    PublicationReportingIllegalSubreason: PublicationReportingIllegalSubreason | undefined;
    PublicationReportingReason: PublicationReportingReason | undefined;
    PublicationReportingSensitiveSubreason: PublicationReportingSensitiveSubreason | undefined;
    PublicationReportingSpamSubreason: PublicationReportingSpamSubreason | undefined;
    PublicationSortCriteria: PublicationSortCriteria | undefined;
    PublicationTypes: PublicationTypes | undefined;
    ReactionTypes: ReactionTypes | undefined;
    ReferenceModules: ReferenceModules | undefined;
    RelayErrorReasons: RelayErrorReasons | undefined;
    SearchRequestTypes: SearchRequestTypes | undefined;
    TagSortCriteria: TagSortCriteria | undefined;
    TimelineType: TimelineType | undefined;
    TransactionErrorReasons: TransactionErrorReasons | undefined;
}
