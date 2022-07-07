// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class CommentAdded extends ethereum.Event {
  get params(): CommentAdded__Params {
    return new CommentAdded__Params(this);
  }
}

export class CommentAdded__Params {
  _event: CommentAdded;

  constructor(event: CommentAdded) {
    this._event = event;
  }

  get commentAdded(): CommentAddedCommentAddedStruct {
    return changetype<CommentAddedCommentAddedStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }

  get postId(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class CommentAddedCommentAddedStruct extends ethereum.Tuple {
  get content(): string {
    return this[0].toString();
  }

  get authorId(): BigInt {
    return this[1].toBigInt();
  }

  get date(): BigInt {
    return this[2].toBigInt();
  }
}

export class PostAdded extends ethereum.Event {
  get params(): PostAdded__Params {
    return new PostAdded__Params(this);
  }
}

export class PostAdded__Params {
  _event: PostAdded;

  constructor(event: PostAdded) {
    this._event = event;
  }

  get postAdded(): PostAddedPostAddedStruct {
    return changetype<PostAddedPostAddedStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class PostAddedPostAddedStruct extends ethereum.Tuple {
  get title(): string {
    return this[0].toString();
  }

  get content(): string {
    return this[1].toString();
  }

  get picture(): string {
    return this[2].toString();
  }

  get video(): string {
    return this[3].toString();
  }

  get authorId(): BigInt {
    return this[4].toBigInt();
  }

  get date(): BigInt {
    return this[5].toBigInt();
  }
}

export class ProfileFollowed extends ethereum.Event {
  get params(): ProfileFollowed__Params {
    return new ProfileFollowed__Params(this);
  }
}

export class ProfileFollowed__Params {
  _event: ProfileFollowed;

  constructor(event: ProfileFollowed) {
    this._event = event;
  }

  get follower(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get followed(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ProfileNFTMinted extends ethereum.Event {
  get params(): ProfileNFTMinted__Params {
    return new ProfileNFTMinted__Params(this);
  }
}

export class ProfileNFTMinted__Params {
  _event: ProfileNFTMinted;

  constructor(event: ProfileNFTMinted) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get profileId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get memberData(): ProfileNFTMintedMemberDataStruct {
    return changetype<ProfileNFTMintedMemberDataStruct>(
      this._event.parameters[2].value.toTuple()
    );
  }
}

export class ProfileNFTMintedMemberDataStruct extends ethereum.Tuple {
  get username(): string {
    return this[0].toString();
  }

  get profilePicture(): string {
    return this[1].toString();
  }

  get followers(): BigInt {
    return this[2].toBigInt();
  }

  get posts(): BigInt {
    return this[3].toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Root__checkProfileOwnerResultValue0Struct extends ethereum.Tuple {
  get username(): string {
    return this[0].toString();
  }

  get profilePicture(): string {
    return this[1].toString();
  }

  get followers(): BigInt {
    return this[2].toBigInt();
  }

  get posts(): BigInt {
    return this[3].toBigInt();
  }
}

export class Root__getCommentsResultValue0Struct extends ethereum.Tuple {
  get content(): string {
    return this[0].toString();
  }

  get authorId(): BigInt {
    return this[1].toBigInt();
  }

  get date(): BigInt {
    return this[2].toBigInt();
  }
}

export class Root__getPostResultValue0Struct extends ethereum.Tuple {
  get title(): string {
    return this[0].toString();
  }

  get content(): string {
    return this[1].toString();
  }

  get picture(): string {
    return this[2].toString();
  }

  get video(): string {
    return this[3].toString();
  }

  get authorId(): BigInt {
    return this[4].toBigInt();
  }

  get date(): BigInt {
    return this[5].toBigInt();
  }
}

export class Root__membersResult {
  value0: string;
  value1: string;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: string, value1: string, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getUsername(): string {
    return this.value0;
  }

  getProfilePicture(): string {
    return this.value1;
  }

  getFollowers(): BigInt {
    return this.value2;
  }

  getPosts(): BigInt {
    return this.value3;
  }
}

export class Root__postCommentsResult {
  value0: string;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: string, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getContent(): string {
    return this.value0;
  }

  getAuthorId(): BigInt {
    return this.value1;
  }

  getDate(): BigInt {
    return this.value2;
  }
}

export class Root extends ethereum.SmartContract {
  static bind(address: Address): Root {
    return new Root("Root", address);
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkProfileOwner(
    _memberProfileId: BigInt
  ): Root__checkProfileOwnerResultValue0Struct {
    let result = super.call(
      "checkProfileOwner",
      "checkProfileOwner(uint256):((string,string,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_memberProfileId)]
    );

    return changetype<Root__checkProfileOwnerResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_checkProfileOwner(
    _memberProfileId: BigInt
  ): ethereum.CallResult<Root__checkProfileOwnerResultValue0Struct> {
    let result = super.tryCall(
      "checkProfileOwner",
      "checkProfileOwner(uint256):((string,string,uint256,uint256))",
      [ethereum.Value.fromUnsignedBigInt(_memberProfileId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Root__checkProfileOwnerResultValue0Struct>(value[0].toTuple())
    );
  }

  doesPostExist(param0: string): boolean {
    let result = super.call("doesPostExist", "doesPostExist(string):(bool)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBoolean();
  }

  try_doesPostExist(param0: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "doesPostExist",
      "doesPostExist(string):(bool)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  doesProfileExist(param0: BigInt): boolean {
    let result = super.call(
      "doesProfileExist",
      "doesProfileExist(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBoolean();
  }

  try_doesProfileExist(param0: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "doesProfileExist",
      "doesProfileExist(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getComments(_postId: string): Array<Root__getCommentsResultValue0Struct> {
    let result = super.call(
      "getComments",
      "getComments(string):((string,uint256,uint256)[])",
      [ethereum.Value.fromString(_postId)]
    );

    return result[0].toTupleArray<Root__getCommentsResultValue0Struct>();
  }

  try_getComments(
    _postId: string
  ): ethereum.CallResult<Array<Root__getCommentsResultValue0Struct>> {
    let result = super.tryCall(
      "getComments",
      "getComments(string):((string,uint256,uint256)[])",
      [ethereum.Value.fromString(_postId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Root__getCommentsResultValue0Struct>()
    );
  }

  getPost(_postId: string): Root__getPostResultValue0Struct {
    let result = super.call(
      "getPost",
      "getPost(string):((string,string,string,string,uint256,uint256))",
      [ethereum.Value.fromString(_postId)]
    );

    return changetype<Root__getPostResultValue0Struct>(result[0].toTuple());
  }

  try_getPost(
    _postId: string
  ): ethereum.CallResult<Root__getPostResultValue0Struct> {
    let result = super.tryCall(
      "getPost",
      "getPost(string):((string,string,string,string,uint256,uint256))",
      [ethereum.Value.fromString(_postId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Root__getPostResultValue0Struct>(value[0].toTuple())
    );
  }

  getProfileFollowers(_followedProfileId: BigInt): Array<BigInt> {
    let result = super.call(
      "getProfileFollowers",
      "getProfileFollowers(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_followedProfileId)]
    );

    return result[0].toBigIntArray();
  }

  try_getProfileFollowers(
    _followedProfileId: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getProfileFollowers",
      "getProfileFollowers(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(_followedProfileId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getUsersPostsIds(_memberId: BigInt): Array<string> {
    let result = super.call(
      "getUsersPostsIds",
      "getUsersPostsIds(uint256):(string[])",
      [ethereum.Value.fromUnsignedBigInt(_memberId)]
    );

    return result[0].toStringArray();
  }

  try_getUsersPostsIds(_memberId: BigInt): ethereum.CallResult<Array<string>> {
    let result = super.tryCall(
      "getUsersPostsIds",
      "getUsersPostsIds(uint256):(string[])",
      [ethereum.Value.fromUnsignedBigInt(_memberId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toStringArray());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  members(param0: BigInt): Root__membersResult {
    let result = super.call(
      "members",
      "members(uint256):(string,string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Root__membersResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_members(param0: BigInt): ethereum.CallResult<Root__membersResult> {
    let result = super.tryCall(
      "members",
      "members(uint256):(string,string,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Root__membersResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  postComments(param0: string, param1: BigInt): Root__postCommentsResult {
    let result = super.call(
      "postComments",
      "postComments(string,uint256):(string,uint256,uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new Root__postCommentsResult(
      result[0].toString(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_postComments(
    param0: string,
    param1: BigInt
  ): ethereum.CallResult<Root__postCommentsResult> {
    let result = super.tryCall(
      "postComments",
      "postComments(string,uint256):(string,uint256,uint256)",
      [
        ethereum.Value.fromString(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Root__postCommentsResult(
        value[0].toString(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  profileFollowers(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "profileFollowers",
      "profileFollowers(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_profileFollowers(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "profileFollowers",
      "profileFollowers(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  profilePosts(param0: BigInt, param1: BigInt): string {
    let result = super.call(
      "profilePosts",
      "profilePosts(uint256,uint256):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toString();
  }

  try_profilePosts(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "profilePosts",
      "profilePosts(uint256,uint256):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  profilesOwners(param0: BigInt): Address {
    let result = super.call(
      "profilesOwners",
      "profilesOwners(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_profilesOwners(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "profilesOwners",
      "profilesOwners(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCommentCall extends ethereum.Call {
  get inputs(): AddCommentCall__Inputs {
    return new AddCommentCall__Inputs(this);
  }

  get outputs(): AddCommentCall__Outputs {
    return new AddCommentCall__Outputs(this);
  }
}

export class AddCommentCall__Inputs {
  _call: AddCommentCall;

  constructor(call: AddCommentCall) {
    this._call = call;
  }

  get _commentToAdd(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _postId(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _memberId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddCommentCall__Outputs {
  _call: AddCommentCall;

  constructor(call: AddCommentCall) {
    this._call = call;
  }
}

export class AddPostCall extends ethereum.Call {
  get inputs(): AddPostCall__Inputs {
    return new AddPostCall__Inputs(this);
  }

  get outputs(): AddPostCall__Outputs {
    return new AddPostCall__Outputs(this);
  }
}

export class AddPostCall__Inputs {
  _call: AddPostCall;

  constructor(call: AddPostCall) {
    this._call = call;
  }

  get _postToAdd(): AddPostCall_postToAddStruct {
    return changetype<AddPostCall_postToAddStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }

  get _memberId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AddPostCall__Outputs {
  _call: AddPostCall;

  constructor(call: AddPostCall) {
    this._call = call;
  }
}

export class AddPostCall_postToAddStruct extends ethereum.Tuple {
  get title(): string {
    return this[0].toString();
  }

  get content(): string {
    return this[1].toString();
  }

  get picture(): string {
    return this[2].toString();
  }

  get video(): string {
    return this[3].toString();
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class FollowProfileCall extends ethereum.Call {
  get inputs(): FollowProfileCall__Inputs {
    return new FollowProfileCall__Inputs(this);
  }

  get outputs(): FollowProfileCall__Outputs {
    return new FollowProfileCall__Outputs(this);
  }
}

export class FollowProfileCall__Inputs {
  _call: FollowProfileCall;

  constructor(call: FollowProfileCall) {
    this._call = call;
  }

  get _followerId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _followedId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class FollowProfileCall__Outputs {
  _call: FollowProfileCall;

  constructor(call: FollowProfileCall) {
    this._call = call;
  }
}

export class MintProfileNFTCall extends ethereum.Call {
  get inputs(): MintProfileNFTCall__Inputs {
    return new MintProfileNFTCall__Inputs(this);
  }

  get outputs(): MintProfileNFTCall__Outputs {
    return new MintProfileNFTCall__Outputs(this);
  }
}

export class MintProfileNFTCall__Inputs {
  _call: MintProfileNFTCall;

  constructor(call: MintProfileNFTCall) {
    this._call = call;
  }

  get _username(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _profilePicture(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class MintProfileNFTCall__Outputs {
  _call: MintProfileNFTCall;

  constructor(call: MintProfileNFTCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}
